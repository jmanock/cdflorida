export type DealCategory =
  | "bahamas"
  | "caribbean"
  | "family"
  | "weekend"
  | "luxury"
  | "under-299"
  | "last-minute"
  | "standard";

export type CruiseDeal = {
  id: string;
  cruiseLine: string;
  shipName: string;
  departurePort: "Port Canaveral" | "Miami" | "Fort Lauderdale" | "Tampa" | "Jacksonville";
  destination: string;
  nights: number;
  startingPrice: number;
  priceText?: string;
  sailDate: string;
  dates?: string;
  image: string;
  imageAlt?: string;
  dealUrl: string;
  bookingUrl?: string;
  lastChecked: string;
  lastUpdated?: string;
  source?: string;
  termsNote?: string;
  category: DealCategory;
  badge?: string;
  description?: string;
  dateLabel?: string;
  savings?: string;
  tags?: DealCategory[];
};

export type DealFilter =
  | "All Cruises"
  | "Port Canaveral"
  | "Miami"
  | "Fort Lauderdale"
  | "Jacksonville"
  | "Tampa"
  | "Bahamas"
  | "Caribbean"
  | "Family"
  | "Weekend"
  | "Under $299";
