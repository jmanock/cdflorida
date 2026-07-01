export type TravelEssentialItem = {
  title: string;
  description: string;
  cta: string;
  affiliateUrl: string;
  advertiser: "nomatic" | "outfitr" | "bedsure" | "esimshop" | "esimania" | "airport_transfer";
  category: string;
};

export const NOMATIC_METHOD_LUGGAGE_URL =
  "https://www.awin1.com/awclick.php?gid=532276&mid=90033&awinaffid=2881665&linkid=4060932";
export const NOMATIC_TRAVEL_BAGS_SALE_URL =
  "https://www.awin1.com/awclick.php?gid=532276&mid=90033&awinaffid=2881665&linkid=4060937";
export const OUTFITR_MAIN_URL =
  "https://www.awin1.com/awclick.php?gid=582217&mid=117613&awinaffid=2881665&linkid=4523197";
export const BEDSURE_URL =
  "https://www.awin1.com/awclick.php?gid=532727&mid=40882&awinaffid=2881665&linkid=4064760";
export const ESIMSHOP_URL =
  "https://www.awin1.com/awclick.php?gid=600694&mid=124780&awinaffid=2881665&linkid=4730960&clickref=";

export const cruiseTravelEssentials: TravelEssentialItem[] = [
  {
    title: "Cruise carry-on luggage",
    description: "Weekend cruises move fast. A compact carry-on helps keep embarkation day simple while checked bags catch up.",
    cta: "Compare Carry-On Luggage",
    affiliateUrl: NOMATIC_METHOD_LUGGAGE_URL,
    advertiser: "nomatic",
    category: "luggage"
  },
  {
    title: "Day bag for port days",
    description: "You’ll want a comfortable day bag for sunscreen, water, documents, and whatever you pick up in port.",
    cta: "View Travel Gear",
    affiliateUrl: OUTFITR_MAIN_URL,
    advertiser: "outfitr",
    category: "travel_gear"
  },
  {
    title: "Cruise eSIM reminder",
    description: "Going to the Bahamas, Mexico, or the Caribbean? Set up an eSIM before you leave so you are not hunting for Wi-Fi in port.",
    cta: "Compare eSIM Options",
    affiliateUrl: ESIMSHOP_URL,
    advertiser: "esimshop",
    category: "esim"
  }
];
