export type DealCategory = "last-minute" | "family" | "standard";

export type CruiseDeal = {
  id: string;
  cruiseLine: string;
  shipName: string;
  departurePort: "Port Canaveral" | "Miami" | "Fort Lauderdale" | "Tampa" | "Jacksonville";
  destination: string;
  nights: number;
  startingPrice: number;
  sailDate: string;
  image: string;
  dealUrl: string;
  lastChecked: string;
  category: DealCategory;
};

export type DealFilter =
  | "All"
  | "Port Canaveral"
  | "Miami"
  | "Fort Lauderdale"
  | "Tampa"
  | "Under $300"
  | "Last Minute"
  | "Family Deals";
