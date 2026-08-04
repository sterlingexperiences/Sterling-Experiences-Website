import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  bookingAdminEmail,
  bookingUserConfirmationEmail,
  waitlistAdminEmail,
  waitlistUserConfirmationEmail,
} from "@/lib/email-templates";
import {
  checkRateLimit,
  isDuplicateEmail,
  verifyTimingToken,
} from "@/lib/rate-limit";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

const ADMIN_EMAIL = "admin@sterlingxperiences.com";
const BOOK_FROM = "book@sterlingxperiences.com";
const WAITLIST_FROM = "waitlist@sterlingxperiences.com";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sterlingxperiences.com";

// Max request body size: 10KB
const MAX_BODY_SIZE = 10 * 1024;

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

/**
 * Extract client IP from request headers.
 * Works on Vercel, Cloudflare, and standard proxies.
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

/**
 * Verify the request came from our site.
 * Checks Origin and Referer headers against expected domains.
 */
function verifyOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // Allow requests with no origin/referer (e.g. server-to-server, curl)
  // but require it for browser requests
  const allowedHosts = [
    "www.sterlingxperiences.com",
    "sterlingxperiences.com",
    "localhost",
    "127.0.0.1",
  ];

  const checkUrl = (url: string | null): boolean => {
    if (!url) return true; // No header = allow (some browsers strip it)
    try {
      const host = new URL(url).hostname;
      return allowedHosts.some(
        (allowed) => host === allowed || host.endsWith(`.${allowed}`),
      );
    } catch {
      return false;
    }
  };

  return checkUrl(origin) && checkUrl(referer);
}

/**
 * Detect common bot signatures in request headers.
 */
function detectBot(request: NextRequest): boolean {
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();

  // Block known bot user agents (good bots that follow rules)
  const blockedPatterns = [
    "curl/",
    "wget/",
    "python-requests/",
    "python-urllib/",
    "go-http-client/",
    "java/",
    "php/",
    "scrapy/",
    "headlesschrome/",
    "phantomjs/",
    "bot/",
    "spider/",
    "crawler/",
  ];

  if (blockedPatterns.some((p) => userAgent.includes(p))) return true;

  // Block requests with no user agent at all (common for bots)
  if (!userAgent || userAgent.length < 10) return true;

  return false;
}

/**
 * Verify Turnstile token with Cloudflare's siteverify endpoint.
 * Returns true if valid, false if invalid.
 * Skips verification if no secret key is configured (dev mode).
 */
async function verifyTurnstile(
  token: string,
  ip: string,
): Promise<boolean> {
  // Skip in dev if no secret key configured
  if (!TURNSTILE_SECRET) return true;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET,
          response: token,
          remoteip: ip,
        }).toString(),
      },
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // ── Layer 1: Bot detection ──
    if (detectBot(request)) {
      return NextResponse.json(
        { error: "Request not allowed." },
        { status: 403 },
      );
    }

    // ── Layer 2: Origin verification ──
    if (!verifyOrigin(request)) {
      return NextResponse.json(
        { error: "Request not allowed." },
        { status: 403 },
      );
    }

    // ── Layer 3: IP rate limiting ──
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, {
      prefix: "send-email",
      maxRequests: 5, // 5 requests per minute per IP
      windowMs: 60_000,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfterMs: rateLimit.retryAfterMs,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimit.retryAfterMs / 1000)),
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": "0",
          },
        },
      );
    }

    // ── Layer 4: Body size check ──
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Request too large." },
        { status: 413 },
      );
    }

    const body = await request.json();
    const { type } = body;

    if (!type || !["booking", "waitlist"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid request type." },
        { status: 400 },
      );
    }

    // ── Layer 5: Honeypot check ──
    // Bots auto-fill hidden fields; humans never see them
    if (body._hp && body._hp.length > 0) {
      // Silently pretend success so bots don't adapt
      return NextResponse.json({ success: true });
    }

    // ── Layer 6: Timing token verification ──
    // Form must take at least 3 seconds to submit (human behavior)
    if (!body._t || !verifyTimingToken(body._t, 3)) {
      return NextResponse.json(
        { error: "Please wait a moment and try again." },
        { status: 429 },
      );
    }

    // ── Layer 7: Cloudflare Turnstile verification ──
    const turnstileToken = body["cf-turnstile-response"];
    if (TURNSTILE_SECRET && !turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the verification." },
        { status: 400 },
      );
    }

    if (turnstileToken) {
      const turnstileValid = await verifyTurnstile(turnstileToken, clientIp);
      if (!turnstileValid) {
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 403 },
        );
      }
    }

    if (type === "booking") {
      const {
        name,
        organisation,
        eventType,
        date,
        guestCount,
        servicesRequired,
        budgetRange,
        additionalNotes,
        userEmail,
      } = body;

      if (!name?.trim()) {
        return NextResponse.json(
          { error: "Name is required." },
          { status: 400 },
        );
      }

      // ── Layer 8: Duplicate email check ──
      if (userEmail && isDuplicateEmail(userEmail, "booking")) {
        return NextResponse.json(
          { error: "A booking request with this email was recently submitted." },
          { status: 409 },
        );
      }

      const clean = {
        name: sanitize(name),
        organisation: sanitize(organisation || ""),
        eventType: sanitize(eventType || ""),
        date: sanitize(date || ""),
        guestCount: sanitize(guestCount || ""),
        servicesRequired: sanitize(servicesRequired || ""),
        budgetRange: sanitize(budgetRange || ""),
        additionalNotes: sanitize(additionalNotes || ""),
        userEmail: userEmail?.trim() ? sanitize(userEmail) : "",
      };

      // Send admin notification
      const adminHtml = bookingAdminEmail(clean);

      await resend.emails.send({
        from: `Sterling Experiences <${BOOK_FROM}>`,
        to: [ADMIN_EMAIL],
        subject: `Booking Consultation Request from ${clean.name}`,
        html: adminHtml,
      });

      // Send user confirmation if email provided
      if (clean.userEmail && validateEmail(clean.userEmail)) {
        const userHtml = bookingUserConfirmationEmail({
          name: clean.name,
          date: clean.date,
        });

        await resend.emails.send({
          from: `Sterling Experiences <${BOOK_FROM}>`,
          to: [clean.userEmail],
          subject: "We received your consultation request",
          html: userHtml,
        });
      }

      return NextResponse.json({ success: true });
    }

    if (type === "waitlist") {
      const { name, email, phone } = body;

      if (!name?.trim() || !email?.trim()) {
        return NextResponse.json(
          { error: "Name and email are required." },
          { status: 400 },
        );
      }

      if (!validateEmail(email)) {
        return NextResponse.json(
          { error: "Invalid email address." },
          { status: 400 },
        );
      }

      // ── Layer 8: Duplicate email check ──
      if (isDuplicateEmail(email, "waitlist")) {
        return NextResponse.json(
          {
            error:
              "This email is already on the waitlist. Check your inbox for confirmation.",
          },
          { status: 409 },
        );
      }

      const clean = {
        name: sanitize(name),
        email: sanitize(email),
        phone: sanitize(phone || ""),
      };

      // Send admin notification
      const adminHtml = waitlistAdminEmail(clean);

      await resend.emails.send({
        from: `Sterling Experiences <${WAITLIST_FROM}>`,
        to: [ADMIN_EMAIL],
        subject: `Waitlist Signup - ${clean.name}`,
        html: adminHtml,
      });

      // Send user confirmation
      if (validateEmail(clean.email)) {
        const userHtml = waitlistUserConfirmationEmail({
          name: clean.name,
        });

        await resend.emails.send({
          from: `Sterling Experiences <${WAITLIST_FROM}>`,
          to: [clean.email],
          subject: "You are on the waitlist",
          html: userHtml,
        });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: "Unable to send your request. Please try again later." },
      { status: 500 },
    );
  }
}
