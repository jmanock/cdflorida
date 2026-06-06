export const CLARITY_ID = "x2rqxjxm7z";

declare global {
  interface Window {
    clarity?: (command: "event" | "set", name: string, value?: string) => void;
  }
}

export function trackClarityEvent(eventName: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.clarity !== "function") return;

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) window.clarity?.("set", key, String(value));
  });
  window.clarity("event", eventName);
}
