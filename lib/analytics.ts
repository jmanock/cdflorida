import { trackClarityEvent } from "@/lib/clarity";

export type AnalyticsPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: AnalyticsPayload[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (command: "event" | "set", name: string, value?: string) => void;
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    site: "cruisedealsflorida.org",
    source_site: "cruisedealsflorida.org",
    source: "cruise",
    ...payload
  };

  window.dataLayer?.push({
    event: eventName,
    ...eventPayload
  });
  window.gtag?.("event", eventName, eventPayload);
  trackClarityEvent(eventName, eventPayload);
}
