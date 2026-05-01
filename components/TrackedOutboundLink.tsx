"use client";

import type { ReactNode } from "react";

type DealClickMetadata = {
  page: string;
  port?: string;
  destination?: string;
  cruiseLine?: string;
  outboundUrl: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (event: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export function TrackedOutboundLink({
  href,
  className,
  children,
  metadata,
  ariaLabel
}: {
  href: string;
  className?: string;
  children: ReactNode;
  metadata: DealClickMetadata;
  ariaLabel?: string;
}) {
  function trackClick() {
    const payload = {
      event: "deal_click",
      page: metadata.page,
      port: metadata.port,
      destination: metadata.destination,
      cruise_line: metadata.cruiseLine,
      outbound_url: metadata.outboundUrl
    };

    window.dataLayer?.push(payload);
    window.gtag?.("event", "deal_click", payload);
  }

  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={trackClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
