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
    trackEvent("navigation_click", {
      label,
      href,
      page_path: window.location.pathname
    });
  }

  return (
    <a href={href} onClick={trackClick} {...props}>
      {children}
    </a>
  );
}
