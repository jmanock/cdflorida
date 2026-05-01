export type CruiseSearchCard = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  port?: string;
  destination?: string;
  cruiseLine?: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type CruiseSeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  details: string[];
  heroImage: string;
  heroAlt: string;
  cardIds: string[];
  relatedSlugs: string[];
};

export const cruiseSearchCards: CruiseSearchCard[] = [
  {
    id: "royal-caribbean-bahamas",
    title: "Royal Caribbean Bahamas Sailings",
    eyebrow: "Featured cruise search",
    description: "Check current Bahamas sailings, CocoCay itineraries, and short Florida departures.",
    port: "Port Canaveral",
    destination: "Bahamas",
    cruiseLine: "Royal Caribbean",
    image: "/images/private-island-cruise.webp",
    imageAlt: "Royal Caribbean cruise ship near a bright Bahamas private island",
    href: "https://www.royalcaribbean.com/cruise-search"
  },
  {
    id: "carnival-miami-bahamas",
    title: "Carnival Cruises From Miami",
    eyebrow: "Current fare search",
    description: "View Carnival sailings from Miami including Bahamas, Caribbean, and family-friendly cruises.",
    port: "Miami",
    destination: "Bahamas",
    cruiseLine: "Carnival",
    image: "/images/miami-cruise-port.webp",
    imageAlt: "Carnival cruise ship departing the Miami cruise port",
    href: "https://www.carnival.com/cruise-search"
  },
  {
    id: "disney-port-canaveral",
    title: "Disney Cruises From Port Canaveral",
    eyebrow: "Family cruise search",
    description: "Browse Disney Cruise Line sailings near Orlando with Bahamas and family vacation options.",
    port: "Port Canaveral",
    destination: "Bahamas",
    cruiseLine: "Disney Cruise Line",
    image: "/images/family-cruise-pool-deck.webp",
    imageAlt: "Family cruise pool deck on a sunny Port Canaveral sailing",
    href: "https://disneycruise.disney.go.com/cruises-destinations/list/"
  },
  {
    id: "msc-ocean-cay",
    title: "MSC Ocean Cay Cruises",
    eyebrow: "Island escape",
    description: "Check current MSC sailings to Ocean Cay and short Bahamas cruises from Florida.",
    port: "Miami",
    destination: "Ocean Cay",
    cruiseLine: "MSC Cruises",
    image: "/images/bahamas-cruise-beach.webp",
    imageAlt: "Bahamas cruise beach destination with turquoise water",
    href: "https://www.msccruisesusa.com/cruise-deals"
  },
  {
    id: "princess-fort-lauderdale",
    title: "Princess Cruises From Fort Lauderdale",
    eyebrow: "Port Everglades search",
    description: "View Princess Cruises sailings from Fort Lauderdale to the Caribbean and island ports.",
    port: "Fort Lauderdale",
    destination: "Caribbean",
    cruiseLine: "Princess Cruises",
    image: "/images/fort-lauderdale-cruise-port.webp",
    imageAlt: "Princess cruise ship departing Fort Lauderdale at golden hour",
    href: "https://www.princess.com/cruise-search/"
  },
  {
    id: "celebrity-luxury-caribbean",
    title: "Celebrity Caribbean Sailings",
    eyebrow: "Premium cruise search",
    description: "Check Celebrity Cruises for Eastern and Western Caribbean sailings from Florida.",
    port: "Fort Lauderdale",
    destination: "Caribbean",
    cruiseLine: "Celebrity Cruises",
    image: "/images/luxury-cruise-deck.webp",
    imageAlt: "Celebrity cruise deck lounge on an Eastern Caribbean sailing",
    href: "https://www.celebritycruises.com/cruise-search"
  },
  {
    id: "tampa-western-caribbean",
    title: "Western Caribbean From Tampa",
    eyebrow: "Gulf Coast search",
    description: "Browse cruise searches from Tampa toward Cozumel, Costa Maya, Belize, and Gulf Coast routes.",
    port: "Tampa",
    destination: "Western Caribbean",
    cruiseLine: "Multiple cruise lines",
    image: "/images/cruise-sunset-sea.webp",
    imageAlt: "Cruise ship sailing at sunset on a Western Caribbean route",
    href: "https://www.cruisedirect.com/"
  },
  {
    id: "jacksonville-bahamas",
    title: "Bahamas Cruises From Jacksonville",
    eyebrow: "North Florida search",
    description: "Check current Bahamas cruise searches from Jacksonville and nearby North Florida ports.",
    port: "Jacksonville",
    destination: "Bahamas",
    cruiseLine: "Multiple cruise lines",
    image: "/images/cruise-bow-horizon.webp",
    imageAlt: "Cruise ship bow facing a clear ocean horizon from Jacksonville",
    href: "https://www.cruisecritic.com/"
  },
  {
    id: "cheap-cruise-search",
    title: "Cheap Cruise Fare Searches",
    eyebrow: "Compare fares",
    description: "Compare current cruise fares from Florida ports. Taxes, fees, and port expenses may apply.",
    destination: "Florida departures",
    cruiseLine: "Multiple cruise lines",
    image: "/images/cruise-port-departure.webp",
    imageAlt: "MSC cruise ship leaving Port Canaveral for the Caribbean",
    href: "https://www.expedia.com/Cruises"
  },
  {
    id: "vacations-to-go-last-minute",
    title: "Last-Minute Cruise Searches",
    eyebrow: "Flexible dates",
    description: "Browse last-minute cruise search tools for close-in sailings and changing availability.",
    destination: "Last-minute sailings",
    cruiseLine: "Multiple cruise lines",
    image: "/images/caribbean-cruise-harbor.webp",
    imageAlt: "Cruise ship near a Caribbean harbor with clear water",
    href: "https://www.vacationstogo.com/"
  },
  {
    id: "ncl-short-bahamas",
    title: "Norwegian Short Cruises",
    eyebrow: "Short cruise search",
    description: "Check Norwegian Cruise Line for short Bahamas and Caribbean sailings from Florida.",
    port: "Miami",
    destination: "Bahamas",
    cruiseLine: "Norwegian Cruise Line",
    image: "/images/cruise-deck-ocean.webp",
    imageAlt: "Cruise ship deck view facing bright blue ocean water",
    href: "https://www.ncl.com/cruise-deals"
  },
  {
    id: "caribbean-island-search",
    title: "Caribbean Island Cruise Searches",
    eyebrow: "Island itineraries",
    description: "Explore current Caribbean cruise searches with island routes from major Florida ports.",
    destination: "Caribbean",
    cruiseLine: "Multiple cruise lines",
    image: "/images/caribbean-island-beach.webp",
    imageAlt: "Western Caribbean island beach with a cruise ship offshore",
    href: "https://www.cruisedirect.com/destination/caribbean-cruises"
  }
];

export const cruiseSeoPages: CruiseSeoPage[] = [
  {
    slug: "cruises-from-miami",
    title: "Cruises From Miami | Bahamas, Caribbean & Weekend Sailings",
    description:
      "Find cruises from Miami including Bahamas escapes, Caribbean sailings, weekend cruises, family cruises, and current cruise fare searches from PortMiami.",
    h1: "Cruises From Miami",
    eyebrow: "Florida port guide",
    intro:
      "Browse cruise deals and sailing searches from Miami, one of Florida's busiest cruise ports. Find Bahamas getaways, Caribbean sailings, short weekend cruises, and family-friendly cruise options.",
    details: [
      "PortMiami is a strong starting point for Bahamas, Caribbean, weekend, and premium cruise searches.",
      "Available sailings vary by cruise line, season, ship, and booking window.",
      "Use the links below to check current fares directly with cruise lines and trusted cruise search sites."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Cruise ship at PortMiami with the Miami skyline",
    cardIds: ["carnival-miami-bahamas", "msc-ocean-cay", "ncl-short-bahamas", "caribbean-island-search"],
    relatedSlugs: ["bahamas-cruise-deals", "weekend-cruises-from-florida", "caribbean-cruise-deals", "cheap-cruises-from-florida"]
  },
  {
    slug: "cruises-from-port-canaveral",
    title: "Cruises From Port Canaveral | Bahamas, Caribbean & Family Cruises",
    description:
      "Find cruises from Port Canaveral including Bahamas cruises, Caribbean sailings, family cruise options, and current cruise fare searches near Orlando.",
    h1: "Cruises From Port Canaveral",
    eyebrow: "Near Orlando cruise searches",
    intro:
      "Port Canaveral is one of Florida's top cruise departure ports for Bahamas escapes, Caribbean sailings, and family vacations near Orlando.",
    details: [
      "This port is popular for family-focused cruises, short island getaways, and major cruise line departures.",
      "Cruise fares may change quickly, especially around holidays, school breaks, and close-in dates.",
      "Check current sailings with cruise lines before booking flights, hotels, or theme park plans."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing Port Canaveral for a Florida sailing",
    cardIds: ["royal-caribbean-bahamas", "disney-port-canaveral", "cheap-cruise-search", "caribbean-island-search"],
    relatedSlugs: ["bahamas-cruise-deals", "disney-cruise-deals-florida", "family-cruise-deals-florida", "cruises-under-300"]
  },
  {
    slug: "cruises-from-fort-lauderdale",
    title: "Cruises From Fort Lauderdale | Port Everglades Caribbean Sailings",
    description:
      "Find cruises from Fort Lauderdale including Port Everglades Caribbean sailings, Bahamas cruises, premium cruise searches, and current fares.",
    h1: "Cruises From Fort Lauderdale",
    eyebrow: "Port Everglades cruise guide",
    intro:
      "Fort Lauderdale's Port Everglades is a major gateway for Caribbean cruises, premium sailings, and longer island itineraries from South Florida.",
    details: [
      "Fort Lauderdale is especially useful for Eastern, Western, and Southern Caribbean cruise searches.",
      "Available sailings vary by ship, season, and cruise line deployment.",
      "Compare current fares and watch taxes, fees, and port expenses before booking."
    ],
    heroImage: "/images/fort-lauderdale-cruise-port.webp",
    heroAlt: "Cruise ship departing Fort Lauderdale near Port Everglades",
    cardIds: ["princess-fort-lauderdale", "celebrity-luxury-caribbean", "caribbean-island-search", "cheap-cruise-search"],
    relatedSlugs: ["caribbean-cruise-deals", "family-cruise-deals-florida", "cheap-cruises-from-florida", "last-minute-cruise-deals-florida"]
  },
  {
    slug: "cruises-from-tampa",
    title: "Cruises From Tampa | Gulf Coast & Western Caribbean Sailings",
    description:
      "Find cruises from Tampa including Gulf Coast cruise searches, Western Caribbean sailings, Mexico itineraries, and current Florida cruise fares.",
    h1: "Cruises From Tampa",
    eyebrow: "Gulf Coast sailings",
    intro:
      "Tampa cruise searches are useful for Gulf Coast travelers looking at Western Caribbean, Mexico, and relaxed Florida departure options.",
    details: [
      "Tampa can be a convenient port for West Florida, Central Florida, and Gulf Coast travelers.",
      "Routes often focus on Western Caribbean and Mexico-style itineraries, depending on the season.",
      "Check current sailings before making hotel or transportation plans near the port."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset on a Gulf Coast sailing from Tampa",
    cardIds: ["tampa-western-caribbean", "cheap-cruise-search", "vacations-to-go-last-minute", "caribbean-island-search"],
    relatedSlugs: ["caribbean-cruise-deals", "last-minute-cruise-deals-florida", "short-cruises-from-florida", "cheap-cruises-from-florida"]
  },
  {
    slug: "cruises-from-jacksonville",
    title: "Cruises From Jacksonville | Bahamas & North Florida Sailings",
    description:
      "Find cruises from Jacksonville including Bahamas sailings, North Florida cruise searches, family options, and current cruise fare links.",
    h1: "Cruises From Jacksonville",
    eyebrow: "North Florida cruise searches",
    intro:
      "Jacksonville cruise searches can be helpful for North Florida travelers looking for simple Bahamas sailings and convenient drive-to-port options.",
    details: [
      "Jacksonville is often a practical choice for North Florida and South Georgia cruise travelers.",
      "Available sailings vary, so it helps to compare current dates and route options before planning.",
      "Use the links below to check current fare searches and cruise line availability."
    ],
    heroImage: "/images/cruise-bow-horizon.webp",
    heroAlt: "Cruise ship bow looking toward the ocean horizon from Jacksonville",
    cardIds: ["jacksonville-bahamas", "cheap-cruise-search", "vacations-to-go-last-minute", "royal-caribbean-bahamas"],
    relatedSlugs: ["bahamas-cruise-deals", "family-cruise-deals-florida", "short-cruises-from-florida", "last-minute-cruise-deals-florida"]
  },
  {
    slug: "bahamas-cruise-deals",
    title: "Bahamas Cruise Deals From Florida | Short Escapes & Island Sailings",
    description:
      "Find Bahamas cruise deals from Florida ports including Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville.",
    h1: "Bahamas Cruise Deals From Florida",
    eyebrow: "Island cruise searches",
    intro:
      "Bahamas cruises are among the easiest Florida sailings to compare, with short escapes, private island stops, and family-friendly options from multiple ports.",
    details: [
      "Look for Nassau, Bimini, CocoCay, Ocean Cay, Princess Cays, and other island-focused sailings.",
      "Shorter Bahamas cruises can sell quickly around weekends, holidays, and school breaks.",
      "Fares may change and taxes, fees, and port expenses may apply."
    ],
    heroImage: "/images/bahamas-cruise-beach.webp",
    heroAlt: "Bahamas beach destination with clear turquoise water for a cruise",
    cardIds: ["royal-caribbean-bahamas", "msc-ocean-cay", "carnival-miami-bahamas", "jacksonville-bahamas"],
    relatedSlugs: ["cruises-from-miami", "cruises-from-port-canaveral", "weekend-cruises-from-florida", "cruises-under-300"]
  },
  {
    slug: "caribbean-cruise-deals",
    title: "Caribbean Cruise Deals From Florida | Island Sailings & Current Fares",
    description:
      "Find Caribbean cruise deals from Florida ports including Eastern, Western, and Southern Caribbean sailing searches.",
    h1: "Caribbean Cruise Deals From Florida",
    eyebrow: "Caribbean cruise searches",
    intro:
      "Florida is one of the best starting points for Caribbean cruise searches, with routes to island ports, Mexico, Belize, Aruba, and more.",
    details: [
      "Caribbean itineraries vary by departure port, ship, season, and sailing length.",
      "Compare multiple cruise lines when looking for family, premium, luxury, or budget-friendly sailings.",
      "Always check current fares and availability before making travel plans."
    ],
    heroImage: "/images/caribbean-island-beach.webp",
    heroAlt: "Caribbean island beach with a cruise ship offshore",
    cardIds: ["caribbean-island-search", "princess-fort-lauderdale", "celebrity-luxury-caribbean", "tampa-western-caribbean"],
    relatedSlugs: ["cruises-from-fort-lauderdale", "cruises-from-tampa", "cheap-cruises-from-florida", "family-cruise-deals-florida"]
  },
  {
    slug: "weekend-cruises-from-florida",
    title: "Weekend Cruises From Florida | Short Bahamas & Caribbean Sailings",
    description:
      "Find weekend cruises from Florida including short Bahamas escapes, quick Caribbean sailings, and 2–4 night cruise options from major Florida ports.",
    h1: "Weekend Cruises From Florida",
    eyebrow: "Short getaway searches",
    intro:
      "Weekend cruise searches are ideal for quick Florida getaways, short Bahamas sailings, and 2-4 night options when available.",
    details: [
      "Weekend availability varies by ship schedule and date, so flexible travelers usually have more choices.",
      "Short sailings can be useful for first-time cruisers, couples, and quick family trips.",
      "Check current fares and sailing times before booking hotels or flights."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset during a short weekend sailing",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "royal-caribbean-bahamas", "vacations-to-go-last-minute"],
    relatedSlugs: ["bahamas-cruise-deals", "short-cruises-from-florida", "cruises-from-miami", "cruises-under-300"]
  },
  {
    slug: "family-cruise-deals-florida",
    title: "Family Cruise Deals From Florida | Kid-Friendly Sailings & Vacation Cruises",
    description:
      "Find family cruise deals from Florida including kid-friendly sailings, Bahamas cruises, Caribbean vacations, and family-focused cruise searches.",
    h1: "Family Cruise Deals From Florida",
    eyebrow: "Family vacation searches",
    intro:
      "Family cruise searches from Florida can include kids clubs, private islands, pool decks, entertainment, and easy sailings from major ports.",
    details: [
      "Port Canaveral, Miami, and Fort Lauderdale are especially useful for family cruise searches.",
      "Family cabins, school break dates, and popular ships can change pricing quickly.",
      "Check current sailings directly before comparing hotels, flights, or theme park plans."
    ],
    heroImage: "/images/family-cruise-pool-deck.webp",
    heroAlt: "Family cruise pool deck on a sunny Florida sailing",
    cardIds: ["disney-port-canaveral", "royal-caribbean-bahamas", "carnival-miami-bahamas", "cheap-cruise-search"],
    relatedSlugs: ["disney-cruise-deals-florida", "cruises-from-port-canaveral", "bahamas-cruise-deals", "cheap-cruises-from-florida"]
  },
  {
    slug: "cheap-cruises-from-florida",
    title: "Cheap Cruises From Florida | Current Fare Searches & Sailings",
    description:
      "Find cheap cruises from Florida with current fare searches from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville.",
    h1: "Cheap Cruises From Florida",
    eyebrow: "Budget-friendly searches",
    intro:
      "Use this page to compare current cruise fare searches from Florida ports. Fares may change and the lowest displayed rates often depend on date, cabin, taxes, and fees.",
    details: [
      "Flexible dates, inside cabins, repositioning dates, and shorter sailings may reveal stronger prices.",
      "Cruise fares may change quickly and available sailings vary by line and port.",
      "Use official cruise line pages and trusted cruise search tools to check current fares."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing a Florida port for a cheap cruise search",
    cardIds: ["cheap-cruise-search", "carnival-miami-bahamas", "msc-ocean-cay", "vacations-to-go-last-minute"],
    relatedSlugs: ["cruises-under-300", "last-minute-cruise-deals-florida", "weekend-cruises-from-florida", "bahamas-cruise-deals"]
  },
  {
    slug: "last-minute-cruise-deals-florida",
    title: "Last-Minute Cruise Deals From Florida | Close-In Sailing Searches",
    description:
      "Find last-minute cruise deals from Florida including close-in Bahamas, Caribbean, and short cruise fare searches from major ports.",
    h1: "Last-Minute Cruise Deals From Florida",
    eyebrow: "Close-in cruise searches",
    intro:
      "Last-minute cruise searches can be useful when ships still have cabin availability close to departure, but options vary by port, line, date, and cabin type.",
    details: [
      "Flexible travelers may have more options across Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville.",
      "Always check current fares because close-in pricing can move in either direction.",
      "Taxes, fees, gratuities, parking, and transportation should be compared before booking."
    ],
    heroImage: "/images/caribbean-cruise-harbor.webp",
    heroAlt: "Cruise ship near a Caribbean harbor for last-minute cruise searches",
    cardIds: ["vacations-to-go-last-minute", "cheap-cruise-search", "ncl-short-bahamas", "msc-ocean-cay"],
    relatedSlugs: ["cheap-cruises-from-florida", "cruises-under-300", "short-cruises-from-florida", "weekend-cruises-from-florida"]
  },
  {
    slug: "short-cruises-from-florida",
    title: "Short Cruises From Florida | 2–5 Night Bahamas & Caribbean Sailings",
    description:
      "Find short cruises from Florida including 2-night, 3-night, 4-night, and 5-night Bahamas and Caribbean cruise searches.",
    h1: "Short Cruises From Florida",
    eyebrow: "Quick cruise searches",
    intro:
      "Short cruises from Florida are useful for first-time cruisers, quick getaways, and travelers who want a simple Bahamas or Caribbean sailing.",
    details: [
      "Look for 2-5 night sailings from Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville.",
      "Short cruise availability varies by ship schedule and port rotation.",
      "Check current fares and departure times before booking transportation."
    ],
    heroImage: "/images/cruise-deck-ocean.webp",
    heroAlt: "Cruise deck view over the ocean during a short Florida cruise",
    cardIds: ["ncl-short-bahamas", "royal-caribbean-bahamas", "msc-ocean-cay", "jacksonville-bahamas"],
    relatedSlugs: ["weekend-cruises-from-florida", "bahamas-cruise-deals", "cruises-from-miami", "last-minute-cruise-deals-florida"]
  },
  {
    slug: "cruises-under-300",
    title: "Cruises Under $300 From Florida | Current Fare Searches",
    description:
      "Find cruise searches for Florida sailings with fares from under $300 when available, including Bahamas and short cruise options.",
    h1: "Cruises Under $300 From Florida",
    eyebrow: "Low-fare cruise searches",
    intro:
      "Cruises under $300 can appear on select dates, cabins, and short itineraries, but fares may change and taxes, fees, and port expenses may apply.",
    details: [
      "Check current fares carefully because advertised rates can vary by occupancy, cabin, and date.",
      "Short Bahamas cruises and flexible travel windows are often worth comparing first.",
      "Use trusted cruise search links below to view current sailings."
    ],
    heroImage: "/images/private-island-cruise.webp",
    heroAlt: "Cruise ship near a private island for under 300 fare searches",
    cardIds: ["cheap-cruise-search", "msc-ocean-cay", "ncl-short-bahamas", "carnival-miami-bahamas"],
    relatedSlugs: ["cheap-cruises-from-florida", "bahamas-cruise-deals", "weekend-cruises-from-florida", "last-minute-cruise-deals-florida"]
  },
  {
    slug: "royal-caribbean-deals-florida",
    title: "Royal Caribbean Deals From Florida | Bahamas & Caribbean Sailings",
    description:
      "Find Royal Caribbean cruise searches from Florida including Bahamas, CocoCay, Caribbean, short cruises, and current fare links.",
    h1: "Royal Caribbean Deals From Florida",
    eyebrow: "Cruise line search",
    intro:
      "Royal Caribbean is a popular cruise search for Florida travelers, especially for Bahamas, CocoCay, Caribbean, and family-friendly sailings.",
    details: [
      "Departure options can include Miami, Port Canaveral, Fort Lauderdale, and Tampa depending on the schedule.",
      "Ship deployments and fares change, so check current sailings directly with Royal Caribbean.",
      "Look closely at taxes, fees, port expenses, cabin type, and travel dates."
    ],
    heroImage: "/images/private-island-cruise.webp",
    heroAlt: "Royal Caribbean style cruise ship near a bright Bahamas island",
    cardIds: ["royal-caribbean-bahamas", "cheap-cruise-search", "caribbean-island-search", "vacations-to-go-last-minute"],
    relatedSlugs: ["bahamas-cruise-deals", "cruises-from-port-canaveral", "family-cruise-deals-florida", "caribbean-cruise-deals"]
  },
  {
    slug: "carnival-cruise-deals-florida",
    title: "Carnival Cruise Deals From Florida | Bahamas & Caribbean Searches",
    description:
      "Find Carnival cruise deals from Florida including Miami, Port Canaveral, Tampa, Jacksonville, Bahamas, Caribbean, and current fare searches.",
    h1: "Carnival Cruise Deals From Florida",
    eyebrow: "Cruise line search",
    intro:
      "Carnival cruise searches from Florida can include short Bahamas sailings, Caribbean routes, family trips, and drive-to-port options.",
    details: [
      "Carnival often has multiple Florida departure options, but routes vary by season and ship.",
      "Flexible dates can help when comparing fares from Miami, Tampa, Port Canaveral, or Jacksonville.",
      "Check current sailings directly before booking travel around your cruise."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Carnival cruise ship departing Miami for a Florida cruise deal search",
    cardIds: ["carnival-miami-bahamas", "jacksonville-bahamas", "tampa-western-caribbean", "cheap-cruise-search"],
    relatedSlugs: ["cruises-from-miami", "cruises-from-tampa", "cruises-from-jacksonville", "cheap-cruises-from-florida"]
  },
  {
    slug: "disney-cruise-deals-florida",
    title: "Disney Cruise Deals From Florida | Family Sailings & Bahamas Cruises",
    description:
      "Find Disney Cruise Line searches from Florida including Port Canaveral family sailings, Bahamas cruises, and current fare links.",
    h1: "Disney Cruise Deals From Florida",
    eyebrow: "Family cruise line search",
    intro:
      "Disney Cruise Line is a major family cruise search from Florida, especially for Port Canaveral sailings near Orlando and Bahamas vacation routes.",
    details: [
      "Family cabins, school breaks, and popular ships can affect price and availability.",
      "Disney cruise fares may change, and available sailings vary by ship and itinerary.",
      "Check current sailings before coordinating flights, hotels, or theme park plans."
    ],
    heroImage: "/images/family-cruise-pool-deck.webp",
    heroAlt: "Family cruise pool deck for Disney cruise searches from Florida",
    cardIds: ["disney-port-canaveral", "royal-caribbean-bahamas", "cheap-cruise-search", "msc-ocean-cay"],
    relatedSlugs: ["cruises-from-port-canaveral", "family-cruise-deals-florida", "bahamas-cruise-deals", "short-cruises-from-florida"]
  }
];

export const popularCruiseSearches = [
  { label: "Cruises From Miami", href: "/cruises-from-miami" },
  { label: "Cruises From Port Canaveral", href: "/cruises-from-port-canaveral" },
  { label: "Bahamas Cruise Deals", href: "/bahamas-cruise-deals" },
  { label: "Weekend Cruises From Florida", href: "/weekend-cruises-from-florida" },
  { label: "Family Cruise Deals", href: "/family-cruise-deals-florida" },
  { label: "Last-Minute Cruise Deals", href: "/last-minute-cruise-deals-florida" }
];

export function getCruiseSeoPage(slug: string) {
  return cruiseSeoPages.find((page) => page.slug === slug);
}

export function getCruiseSearchCards(ids: string[]) {
  return ids
    .map((id) => cruiseSearchCards.find((card) => card.id === id))
    .filter((card): card is CruiseSearchCard => Boolean(card));
}
