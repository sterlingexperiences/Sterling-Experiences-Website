/**
 * In-memory rate limiter for API routes.
 *
 * Works within a single Vercel serverless function instance.
 * Resets on cold start — acceptable for spam mitigation (bots give up
 * when they hit the limit; legitimate users rarely notice).
 *
 * For true distributed rate limiting, use Upstash Redis or Vercel KV.
 */

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 5 minutes to prevent memory leaks
let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 5 * 60 * 1000;

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }
}

export type RateLimitConfig = {
  /** Unique key prefix (e.g. "waitlist", "booking") */
  prefix: string;
  /** Max requests allowed in the window */
  maxRequests: number;
  /** Window duration in milliseconds (default: 60 seconds) */
  windowMs?: number;
};

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
};

/**
 * Check rate limit for a given key (usually IP address).
 * Returns whether the request is allowed and metadata.
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig,
): RateLimitResult {
  cleanup();

  const { prefix, maxRequests, windowMs = 60_000 } = config;
  const fullKey = `${prefix}:${key}`;
  const now = Date.now();

  const existing = store.get(fullKey);

  if (!existing || existing.resetAt <= now) {
    // New window
    store.set(fullKey, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, retryAfterMs: 0 };
  }

  if (existing.count >= maxRequests) {
    // Rate limited
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: existing.resetAt - now,
    };
  }

  // Within limit
  existing.count++;
  return {
    allowed: true,
    remaining: maxRequests - existing.count,
    retryAfterMs: 0,
  };
}

/**
 * Simple in-memory store for duplicate email detection.
 * Keys auto-expire after the TTL.
 */

const emailStore = new Map<string, number>();
const EMAIL_TTL = 24 * 60 * 60 * 1000; // 24 hours

export function isDuplicateEmail(email: string, prefix: string): boolean {
  const key = `${prefix}:${email.toLowerCase().trim()}`;
  const now = Date.now();

  // Cleanup expired entries
  if (emailStore.size > 10_000) {
    for (const [k, v] of emailStore) {
      if (v <= now) emailStore.delete(k);
    }
  }

  if (emailStore.has(key)) return true;
  emailStore.set(key, now + EMAIL_TTL);
  return false;
}

/**
 * Timing token verification.
 * The client generates a timestamp when the page loads.
 * If the form is submitted faster than minSeconds, it's a bot.
 */
export function verifyTimingToken(
  token: string,
  minSeconds: number = 3,
): boolean {
  try {
    const timestamp = parseInt(
      Buffer.from(token, "base64").toString("utf-8"),
      10,
    );
    if (isNaN(timestamp)) return false;

    const elapsed = (Date.now() - timestamp) / 1000;
    return elapsed >= minSeconds;
  } catch {
    return false;
  }
}

/**
 * Create a timing token (base64-encoded timestamp).
 * Called client-side on page load.
 */
export function createTimingToken(): string {
  return Buffer.from(String(Date.now())).toString("base64");
}
