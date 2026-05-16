"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type DealClickMetadata = {
  page: string;
  port?: string;
  destination?: string;
  cruiseLine?: string;
  nights?: number | string;
  priceText?: string;
  ctaText?: string;
  outboundUrl: string;
};

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
      page: metadata.page,
      departure_port: metadata.port,
      cruise_port: metadata.port,
      route: metadata.destination,
      destination: metadata.destination,
      cruise_line: metadata.cruiseLine,
      nights: metadata.nights,
      price_text: metadata.priceText,
      cta_text: metadata.ctaText,
      outbound_url: metadata.outboundUrl,
      page_path: window.location.pathname
    };

    trackEvent("deal_click", payload);
    trackEvent("cruise_card_click", payload);
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
