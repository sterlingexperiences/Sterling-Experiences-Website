"use client";

import { useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type TurnstileWidgetProps = {
  /** Called with the verification token when Turnstile succeeds */
  onVerify: (token: string) => void;
  /** Called when Turnstile expires or errors */
  onExpire?: () => void;
  /** Widget size: "normal" (300x65) or "compact" (130x120) */
  size?: "normal" | "compact";
};

/**
 * Invisible Cloudflare Turnstile widget.
 * Renders a small badge — no checkbox, no puzzle, zero user interaction.
 * The token is passed to the parent via onVerify.
 */
export default function TurnstileWidget({
  onVerify,
  onExpire,
  size = "normal",
}: TurnstileWidgetProps) {
  const ref = useRef<TurnstileInstance>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  if (!siteKey) {
    // In dev without env var, render nothing (server will skip verification)
    return null;
  }

  return (
    <div className="flex justify-center">
      <Turnstile
        ref={ref}
        siteKey={siteKey}
        options={{
          size,
          retry: "auto",
          retryInterval: 2000,
          appearance: "interaction-only",
        }}
        onSuccess={(token) => onVerify(token)}
        onExpire={() => {
          onExpire?.();
          ref.current?.reset();
        }}
        onTimeout={() => {
          onExpire?.();
          ref.current?.reset();
        }}
        onError={() => {
          onExpire?.();
          ref.current?.reset();
        }}
      />
    </div>
  );
}

export type { TurnstileInstance };
