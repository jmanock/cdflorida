export type PiscifunAffiliateItem = {
  title: string;
  description: string;
  category: string;
  destinationOrUseCase: string;
  affiliateUrl: string;
  imageUrl: string;
  imageAlt: string;
  bestForTags: string[];
};

export const piscifunHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=89509&awinaffid=2881665";

export const cruisePackingGearPicks: PiscifunAffiliateItem[] = [
  {
    title: "Travel Gear Recommendations",
    description: "Browse practical outdoor gear ideas for cruise add-ons, beach port days, fishing excursions, and Florida pre-cruise weekends.",
    category: "travel_gear",
    destinationOrUseCase: "Cruise packing and beach port days",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-ocean-placeholder.png",
    imageAlt: "Outdoor travel gear placeholder for Florida cruise packing",
    bestForTags: ["Cruise packing", "Beach ports", "Pre-cruise weekends"]
  },
  {
    title: "Florida Fishing Essentials",
    description: "A broad gear source for travelers planning fishing-friendly port stops, beach days, or water-focused Florida trip add-ons.",
    category: "fishing_gear",
    destinationOrUseCase: "Fishing and water activity add-ons",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/cruise-placeholder.png",
    imageAlt: "Fishing and outdoor gear placeholder for cruise port activity planning",
    bestForTags: ["Fishing trips", "Water activities", "Outdoor gear"]
  }
];
