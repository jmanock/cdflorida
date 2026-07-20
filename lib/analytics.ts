export * from "./analyticsContract";
import { trackEvent as sharedTrackEvent } from "./analyticsContract";
export const trackEvent = sharedTrackEvent;
export type AnalyticsPayload = Record<string, string | number | boolean | undefined | null>;
