"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedNavLink({
  href,
  label,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label: string;
  children: ReactNode;
}) {
  function trackClick() {
    const payload = {
      label,
      href,
      page_path: window.location.pathname
    };

    trackEvent("navigation_click", payload);

    if (href.includes("flightdealsflorida.org") || href.includes("hoteldealsflorida.org") || href.includes("localdealsflorida.org") || href.includes("floridadealshub.com")) {
      trackEvent("network_site_click", payload);
    } else if (href.includes("port-guide") || href.includes("cruise-port-guide")) {
      trackEvent("port_guide_click", payload);
    } else if (href.includes("guide") || href.includes("best-") || href.includes("-vs-")) {
      trackEvent("guide_click", payload);
    } else if (href.includes("bahamas") || href.includes("caribbean") || href.includes("mexico")) {
      trackEvent("destination_click", payload);
    }
  }

  return (
    <a href={href} onClick={trackClick} {...props}>
      {children}
    </a>
  );
}
