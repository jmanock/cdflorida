export type AnalyticsPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: AnalyticsPayload[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    site: "cruisedealsflorida.org",
    source: "cruise",
    ...payload
  };

  window.dataLayer?.push({
    event: eventName,
    ...eventPayload
  });
  window.gtag?.("event", eventName, eventPayload);
}
