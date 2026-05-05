"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedHotelLink({
  href,
  destinationKey,
  className,
  children,
  ariaLabel
}: {
  href: string;
  destinationKey: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  function trackClick() {
    trackEvent("hotel_booking_click", {
      provider: "expedia",
      destination_key: destinationKey,
      page_path: window.location.pathname,
      outbound_url: href
    });
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
