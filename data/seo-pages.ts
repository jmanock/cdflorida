import { cruiseAffiliateLinks, getCruiseSearchUrl } from "@/data/cruise-links";

export type CruiseSearchCard = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  port?: string;
  destination?: string;
  cruiseLine?: string;
  nights?: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type CruiseFaq = {
  question: string;
  answer: string;
};

export type CruiseSeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  seoCopy?: string[];
  details: string[];
  lastUpdated?: string;
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
    nights: "3-4 nights",
    image: "/images/private-island-cruise.webp",
    imageAlt: "Royal Caribbean cruise ship near a bright Bahamas private island",
    href: getCruiseSearchUrl({ cruiseLine: "Royal Caribbean", port: "Port Canaveral", destination: "Bahamas", nights: 3 })
  },
  {
    id: "carnival-miami-bahamas",
    title: "Carnival Cruises From Miami",
    eyebrow: "Current fare search",
    description: "View Carnival sailings from Miami including Bahamas, Caribbean, and family-friendly cruises.",
    port: "Miami",
    destination: "Bahamas",
    cruiseLine: "Carnival",
    nights: "3-5 nights",
    image: "/images/miami-cruise-port.webp",
    imageAlt: "Carnival cruise ship departing the Miami cruise port",
    href: getCruiseSearchUrl({ cruiseLine: "Carnival", port: "Miami", destination: "Bahamas", nights: 4 })
  },
  {
    id: "disney-port-canaveral",
    title: "Disney Cruises From Port Canaveral",
    eyebrow: "Family cruise search",
    description: "Browse Disney Cruise Line sailings near Orlando with Bahamas and family vacation options.",
    port: "Port Canaveral",
    destination: "Bahamas",
    cruiseLine: "Disney Cruise Line",
    nights: "3-5 nights",
    image: "/images/family-cruise-pool-deck.webp",
    imageAlt: "Family cruise pool deck on a sunny Port Canaveral sailing",
    href: getCruiseSearchUrl({ cruiseLine: "Disney Cruise Line", port: "Port Canaveral", destination: "Bahamas", nights: 4 })
  },
  {
    id: "msc-ocean-cay",
    title: "MSC Ocean Cay Cruises",
    eyebrow: "Island escape",
    description: "Check current MSC sailings to Ocean Cay and short Bahamas cruises from Florida.",
    port: "Miami",
    destination: "Ocean Cay",
    cruiseLine: "MSC Cruises",
    nights: "3-4 nights",
    image: "/images/bahamas-cruise-beach.webp",
    imageAlt: "Bahamas cruise beach destination with turquoise water",
    href: getCruiseSearchUrl({ cruiseLine: "MSC Cruises", port: "Miami", destination: "Ocean Cay", nights: 3 })
  },
  {
    id: "princess-fort-lauderdale",
    title: "Princess Cruises From Fort Lauderdale",
    eyebrow: "Port Everglades search",
    description: "View Princess Cruises sailings from Fort Lauderdale to the Caribbean and island ports.",
    port: "Fort Lauderdale",
    destination: "Caribbean",
    cruiseLine: "Princess Cruises",
    nights: "7 nights",
    image: "/images/fort-lauderdale-cruise-port.webp",
    imageAlt: "Princess cruise ship departing Fort Lauderdale at golden hour",
    href: getCruiseSearchUrl({ cruiseLine: "Princess Cruises", port: "Fort Lauderdale", destination: "Caribbean", nights: 7 })
  },
  {
    id: "celebrity-luxury-caribbean",
    title: "Celebrity Caribbean Sailings",
    eyebrow: "Premium cruise search",
    description: "Check Celebrity Cruises for Eastern and Western Caribbean sailings from Florida.",
    port: "Fort Lauderdale",
    destination: "Caribbean",
    cruiseLine: "Celebrity Cruises",
    nights: "6-8 nights",
    image: "/images/luxury-cruise-deck.webp",
    imageAlt: "Celebrity cruise deck lounge on an Eastern Caribbean sailing",
    href: getCruiseSearchUrl({ cruiseLine: "Celebrity Cruises", port: "Fort Lauderdale", destination: "Caribbean", nights: 7 })
  },
  {
    id: "tampa-western-caribbean",
    title: "Western Caribbean From Tampa",
    eyebrow: "Gulf Coast search",
    description: "Browse cruise searches from Tampa toward Cozumel, Costa Maya, Belize, and Gulf Coast routes.",
    port: "Tampa",
    destination: "Western Caribbean",
    cruiseLine: "Multiple cruise lines",
    nights: "4-7 nights",
    image: "/images/cruise-sunset-sea.webp",
    imageAlt: "Cruise ship sailing at sunset on a Western Caribbean route",
    href: cruiseAffiliateLinks.cruiseDirect
  },
  {
    id: "jacksonville-bahamas",
    title: "Bahamas Cruises From Jacksonville",
    eyebrow: "North Florida search",
    description: "Check current Bahamas cruise searches from Jacksonville and nearby North Florida ports.",
    port: "Jacksonville",
    destination: "Bahamas",
    cruiseLine: "Multiple cruise lines",
    nights: "4-5 nights",
    image: "/images/cruise-bow-horizon.webp",
    imageAlt: "Cruise ship bow facing a clear ocean horizon from Jacksonville",
    href: cruiseAffiliateLinks.cruiseCritic
  },
  {
    id: "cheap-cruise-search",
    title: "Cheap Cruise Fare Searches",
    eyebrow: "Compare fares",
    description: "Compare current cruise fares from Florida ports. Taxes, fees, and port expenses may apply.",
    destination: "Florida departures",
    cruiseLine: "Multiple cruise lines",
    nights: "2-7 nights",
    image: "/images/cruise-port-departure.webp",
    imageAlt: "MSC cruise ship leaving Port Canaveral for the Caribbean",
    href: cruiseAffiliateLinks.expediaCruises
  },
  {
    id: "vacations-to-go-last-minute",
    title: "Last-Minute Cruise Searches",
    eyebrow: "Flexible dates",
    description: "Browse last-minute cruise search tools for close-in sailings and changing availability.",
    destination: "Last-minute sailings",
    cruiseLine: "Multiple cruise lines",
    nights: "2-8 nights",
    image: "/images/caribbean-cruise-harbor.webp",
    imageAlt: "Cruise ship near a Caribbean harbor with clear water",
    href: cruiseAffiliateLinks.vacationsToGo
  },
  {
    id: "ncl-short-bahamas",
    title: "Norwegian Short Cruises",
    eyebrow: "Short cruise search",
    description: "Check Norwegian Cruise Line for short Bahamas and Caribbean sailings from Florida.",
    port: "Miami",
    destination: "Bahamas",
    cruiseLine: "Norwegian Cruise Line",
    nights: "3-4 nights",
    image: "/images/cruise-deck-ocean.webp",
    imageAlt: "Cruise ship deck view facing bright blue ocean water",
    href: getCruiseSearchUrl({ cruiseLine: "Norwegian Cruise Line", port: "Miami", destination: "Bahamas", nights: 3 })
  },
  {
    id: "caribbean-island-search",
    title: "Caribbean Island Cruise Searches",
    eyebrow: "Island itineraries",
    description: "Explore current Caribbean cruise searches with island routes from major Florida ports.",
    destination: "Caribbean",
    cruiseLine: "Multiple cruise lines",
    nights: "5-8 nights",
    image: "/images/caribbean-island-beach.webp",
    imageAlt: "Western Caribbean island beach with a cruise ship offshore",
    href: cruiseAffiliateLinks.cruiseDirectCaribbean
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
    seoCopy: [
      "Miami is one of Florida's most useful cruise departure cities because travelers can compare short Bahamas cruises, longer Caribbean itineraries, premium ships, and quick weekend sailings from the same port area. If you are flying in, it is worth comparing arrival times, PortMiami hotel options, transportation, and sailing check-in windows before choosing a fare.",
      "Use this page as a starting point for current cruise searches from Miami, then verify the sailing details with the cruise line or booking source. Fares can move by date, cabin, ship, taxes, port expenses, and availability, so the best Miami cruise option is usually the one that matches both your trip dates and total travel cost."
    ],
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
    seoCopy: [
      "Port Canaveral is a strong cruise search for travelers combining a sailing with Orlando, Cocoa Beach, or a Central Florida vacation. Many sailings focus on Bahamas, private island, Caribbean, and family-friendly routes, which makes this port especially useful for first-time cruisers and families comparing easy Florida departures.",
      "Before booking, compare the total trip plan around the cruise fare. Port Canaveral hotel rates, ground transportation, airport timing, taxes, fees, and port expenses can all affect the final cost. Use the current sailing links below to verify dates, ships, cabins, and availability with the source."
    ],
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
    seoCopy: [
      "Bahamas cruise deals from Florida are popular because they can fit short vacations, long weekends, family trips, and first-time cruise plans. Common searches include Nassau, Bimini, CocoCay, Ocean Cay, Princess Cays, and other island stops from Miami, Port Canaveral, Fort Lauderdale, and Jacksonville.",
      "Short Bahamas cruises can look simple, but final pricing still depends on sailing date, cabin type, taxes, fees, port expenses, and availability. Compare the route, ship, departure port, and hotel or flight needs before booking, especially if you plan to arrive in Florida the night before departure."
    ],
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
    seoCopy: [
      "Weekend cruises from Florida are useful for travelers who want a quick getaway without planning a full week away. Miami, Port Canaveral, Fort Lauderdale, and Jacksonville can all be worth checking for short cruises, Bahamas sailings, and flexible weekend-friendly dates when ships are scheduled that way.",
      "Because short sailings can be popular around holidays and school breaks, it helps to verify dates and total trip costs with the source. Compare cruise fare, port timing, hotel needs, parking, taxes, fees, and port expenses before booking a weekend cruise from Florida."
    ],
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
    seoCopy: [
      "Family cruise deals from Florida often start with ports that are easy to reach, ships with strong onboard activities, and itineraries that keep logistics manageable. Port Canaveral, Miami, and Fort Lauderdale are common searches for families comparing Bahamas cruises, Caribbean vacations, private island stops, and school-break sailings.",
      "When comparing a family cruise, look beyond the headline fare. Cabin capacity, dining, kids clubs, gratuities, taxes, fees, port expenses, hotel nights, and transportation can change the real trip cost. Use the current sailing links to confirm availability and the full price before booking."
    ],
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
    seoCopy: [
      "Cheap cruises from Florida are usually easiest to compare when you can be flexible by date, cabin type, departure port, and sailing length. Short Bahamas cruises, inside cabins, close-in dates, repositioning-style windows, and shoulder-season sailings can all be worth checking when you want a lower base fare.",
      "A low cruise fare is only one part of the trip cost. Always review taxes, fees, port expenses, gratuities, hotels, flights, parking, and transportation before booking. The links below point to current cruise searches so you can verify available dates and total pricing with the source."
    ],
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
  { label: "Cheap Cruises From Florida", href: "/cheap-cruises-from-florida" }
];

const cruiseSeoFaqs: Record<string, CruiseFaq[]> = {
  "cruises-from-miami": [
    {
      question: "What cruise lines sail from Miami?",
      answer:
        "Miami cruise searches often include Carnival, Royal Caribbean, MSC Cruises, Norwegian Cruise Line, Virgin Voyages, and other lines depending on the season and ship schedule."
    },
    {
      question: "What are the cheapest cruises from Miami?",
      answer:
        "Short Bahamas sailings, flexible dates, and inside cabins are often worth checking first. Cruise fares may change, and taxes, fees, and port expenses may apply."
    },
    {
      question: "Are weekend cruises from Miami worth it?",
      answer:
        "Weekend cruises from Miami can be a useful quick getaway when dates line up, especially for Bahamas, Bimini, and short island itineraries."
    },
    {
      question: "Do cruise fares from Miami include taxes and port fees?",
      answer:
        "Base cruise fares may not include taxes, fees, port expenses, gratuities, drinks, excursions, or other extras. Always review the full price with the source before booking."
    }
  ],
  "cruises-from-port-canaveral": [
    {
      question: "Which cruise lines sail from Port Canaveral?",
      answer:
        "Port Canaveral cruise searches commonly include Royal Caribbean, Disney Cruise Line, Carnival, MSC Cruises, and Norwegian Cruise Line depending on current deployments."
    },
    {
      question: "Is Port Canaveral good for family cruises?",
      answer:
        "Yes. Port Canaveral is especially popular for family cruise searches because of Disney Cruise Line, short Bahamas routes, and its proximity to Orlando."
    },
    {
      question: "What destinations can I cruise to from Port Canaveral?",
      answer:
        "Common searches include Bahamas, private island stops, and Eastern or Western Caribbean sailings. Available routes vary by ship and season."
    },
    {
      question: "Should I stay near Port Canaveral before a cruise?",
      answer:
        "Many travelers compare Port Canaveral or Cocoa Beach hotels when arriving early. Hotel rates may change, so check current availability before booking."
    }
  ],
  "cruises-from-fort-lauderdale": [
    {
      question: "What port do Fort Lauderdale cruises use?",
      answer:
        "Fort Lauderdale cruises generally depart from Port Everglades, a major South Florida cruise port near beaches, hotels, and Fort Lauderdale-Hollywood International Airport."
    },
    {
      question: "Are Fort Lauderdale cruises good for Caribbean trips?",
      answer:
        "Fort Lauderdale is one of Florida's strongest ports for Caribbean cruise searches, including Eastern, Western, Southern, premium, and longer island itineraries."
    },
    {
      question: "How should I compare Fort Lauderdale cruise fares?",
      answer:
        "Compare cabin type, sailing date, taxes, fees, port expenses, and itinerary length before booking. Availability varies by sailing."
    }
  ],
  "cruises-from-tampa": [
    {
      question: "Where do cruises from Tampa usually go?",
      answer:
        "Tampa cruise searches often focus on Western Caribbean and Mexico-style itineraries, including ports such as Cozumel, Costa Maya, and Belize when available."
    },
    {
      question: "Is Tampa a convenient cruise port?",
      answer:
        "Tampa can be convenient for West Florida, Central Florida, and Gulf Coast travelers who want a drive-to-port cruise option."
    },
    {
      question: "Do Tampa cruise fares change often?",
      answer:
        "Yes. Tampa cruise fares can change by date, cabin, ship, and demand, so it helps to check current fares before making travel plans."
    }
  ],
  "cruises-from-jacksonville": [
    {
      question: "What cruises leave from Jacksonville?",
      answer:
        "Jacksonville cruise searches are often useful for Bahamas sailings and North Florida drive-to-port options. Available ships and routes can vary."
    },
    {
      question: "Is Jacksonville good for short cruises?",
      answer:
        "Jacksonville can be a practical choice for shorter Bahamas-style cruise searches, especially for travelers in North Florida or nearby states."
    },
    {
      question: "Should I compare other Florida ports too?",
      answer:
        "Yes. If dates are flexible, compare Jacksonville with Port Canaveral, Miami, Tampa, and Fort Lauderdale to see current routes and fares."
    }
  ],
  "bahamas-cruise-deals": [
    {
      question: "How long are Bahamas cruises from Florida?",
      answer:
        "Bahamas cruises from Florida are often 2-5 nights, though longer itineraries can appear. Available sailings vary by port, ship, and season."
    },
    {
      question: "Which Florida ports offer Bahamas cruise searches?",
      answer:
        "Miami, Port Canaveral, Fort Lauderdale, Jacksonville, and sometimes Tampa can be useful for Bahamas cruise searches, depending on current schedules."
    },
    {
      question: "What is included in a Bahamas cruise fare?",
      answer:
        "Base cruise fares usually include the cabin, many meals, and onboard activities, but taxes, fees, port expenses, gratuities, drinks, excursions, and extras may cost more."
    },
    {
      question: "Are short Bahamas cruises good for weekends?",
      answer:
        "Short Bahamas cruises can work well for weekends when sailing dates and port timing fit your schedule, but availability varies by ship and departure port."
    }
  ],
  "caribbean-cruise-deals": [
    {
      question: "Which Florida ports are best for Caribbean cruises?",
      answer:
        "Miami, Fort Lauderdale, Port Canaveral, and Tampa are especially useful for Caribbean cruise searches, depending on the route and cruise line."
    },
    {
      question: "How long are Caribbean cruises from Florida?",
      answer:
        "Many Caribbean sailings run 5-8 nights, while some short or extended options may appear. Available sailings vary by ship and season."
    },
    {
      question: "How can I find better Caribbean cruise fares?",
      answer:
        "Compare multiple ports, flexible dates, cabin types, and cruise lines. Cruise fares may change, and taxes, fees, and port expenses may apply."
    }
  ],
  "weekend-cruises-from-florida": [
    {
      question: "How many nights are weekend cruises from Florida?",
      answer:
        "Weekend cruise searches usually focus on 2-4 night sailings, often to Bahamas or nearby island destinations when available."
    },
    {
      question: "Which ports are best for weekend cruises?",
      answer:
        "Miami and Port Canaveral are especially useful for weekend cruise searches, though Fort Lauderdale and Jacksonville can also be worth checking."
    },
    {
      question: "Are weekend cruise fares always cheaper?",
      answer:
        "Not always. Short sailings can be lower in total cost, but fares depend on date, ship, cabin, demand, and fees."
    },
    {
      question: "What should I confirm before booking a weekend cruise?",
      answer:
        "Confirm sailing times, cabin type, taxes, fees, port expenses, hotel needs, transportation, and cancellation rules with the source before booking."
    }
  ],
  "family-cruise-deals-florida": [
    {
      question: "Which Florida cruise lines are popular for families?",
      answer:
        "Disney Cruise Line, Royal Caribbean, Carnival, MSC Cruises, and Norwegian Cruise Line are common family cruise searches from Florida."
    },
    {
      question: "When should families book Florida cruises?",
      answer:
        "Families often compare early for school breaks and holidays because cabin availability and pricing can change quickly on popular sailings."
    },
    {
      question: "What should families compare before booking?",
      answer:
        "Compare cabin capacity, kids clubs, dining, port timing, taxes, fees, gratuities, and total trip costs before booking."
    },
    {
      question: "Are Bahamas cruises good for families?",
      answer:
        "Bahamas cruises can be a practical family option because many are short, easy to compare from Florida ports, and focused on beaches or private island stops."
    }
  ],
  "cheap-cruises-from-florida": [
    {
      question: "How do I find cheap cruises from Florida?",
      answer:
        "Compare multiple ports, flexible dates, shorter sailings, inside cabins, and current cruise line search pages. Fares may change at any time."
    },
    {
      question: "Are cruises under $300 realistic?",
      answer:
        "They can appear on select short sailings or dates, but taxes, fees, port expenses, and cabin availability affect the final price."
    },
    {
      question: "Which Florida ports are best for cheap cruise searches?",
      answer:
        "Miami and Port Canaveral are strong starting points, but Fort Lauderdale, Tampa, and Jacksonville can also show useful fare searches."
    },
    {
      question: "What costs should I compare beyond the cruise fare?",
      answer:
        "Compare taxes, fees, port expenses, gratuities, hotels, flights, parking, and transportation so the low fare does not hide a higher total trip cost."
    }
  ],
  "last-minute-cruise-deals-florida": [
    {
      question: "Are last-minute cruises from Florida cheaper?",
      answer:
        "Sometimes, but not always. Close-in fares depend on remaining cabins, demand, ship schedule, and itinerary."
    },
    {
      question: "Who should consider last-minute cruises?",
      answer:
        "Flexible travelers who can drive to a port or book travel quickly may have more options for close-in sailings."
    },
    {
      question: "What should I check before booking last minute?",
      answer:
        "Check passport needs, cabin type, port arrival time, taxes, fees, parking, flights, hotels, and cancellation rules."
    }
  ],
  "short-cruises-from-florida": [
    {
      question: "How short can cruises from Florida be?",
      answer:
        "Short cruise searches often include 2-5 night sailings, especially Bahamas and quick Caribbean-style options."
    },
    {
      question: "Are short cruises good for first-time cruisers?",
      answer:
        "Short cruises can be a practical way to try cruising without committing to a full week at sea."
    },
    {
      question: "Which ports offer short cruises?",
      answer:
        "Miami, Port Canaveral, Fort Lauderdale, and Jacksonville are useful ports to compare for short cruise searches."
    }
  ],
  "cruises-under-300": [
    {
      question: "What does cruises under $300 mean?",
      answer:
        "It refers to fare searches where base fares may appear under $300 on select dates or cabins. Taxes, fees, and port expenses may apply."
    },
    {
      question: "Which sailings are most likely to be under $300?",
      answer:
        "Short Bahamas cruises, inside cabins, flexible dates, and close-in sailings are often the first places to compare."
    },
    {
      question: "Can cruise fares under $300 disappear?",
      answer:
        "Yes. Cruise fares and availability can change quickly, so always check current fares directly before booking."
    }
  ],
  "royal-caribbean-deals-florida": [
    {
      question: "Where does Royal Caribbean sail from in Florida?",
      answer:
        "Royal Caribbean commonly appears in searches from Port Canaveral, Miami, Fort Lauderdale, and sometimes Tampa depending on current deployments."
    },
    {
      question: "What Royal Caribbean destinations are popular from Florida?",
      answer:
        "Bahamas, CocoCay, Eastern Caribbean, Western Caribbean, and family-friendly island routes are common searches."
    },
    {
      question: "How should I check Royal Caribbean fares?",
      answer:
        "Use current cruise line search pages, compare dates and cabins, and review taxes, fees, port expenses, and fare rules."
    }
  ],
  "carnival-cruise-deals-florida": [
    {
      question: "Which Florida ports does Carnival use?",
      answer:
        "Carnival cruise searches can include Miami, Port Canaveral, Tampa, Jacksonville, and other Florida options depending on the schedule."
    },
    {
      question: "Is Carnival good for short Florida cruises?",
      answer:
        "Carnival is a common search for short Bahamas and Caribbean-style sailings from Florida, especially for flexible travelers."
    },
    {
      question: "Do Carnival cruise prices include all fees?",
      answer:
        "Base fares may not include taxes, fees, port expenses, gratuities, drinks, excursions, or other extras, so check the full trip price."
    }
  ],
  "disney-cruise-deals-florida": [
    {
      question: "Where do Disney cruises leave from in Florida?",
      answer:
        "Disney Cruise Line is strongly associated with Port Canaveral near Orlando, though Florida sailings can vary by ship and schedule."
    },
    {
      question: "Are Disney cruises from Florida family-friendly?",
      answer:
        "Yes. Disney Cruise Line is built around family travel, kids clubs, entertainment, dining, and Bahamas or Caribbean-style vacation routes."
    },
    {
      question: "How can I compare Disney cruise fares?",
      answer:
        "Compare sailing dates, cabin types, party size, taxes, fees, gratuities, and pre- or post-cruise hotel needs before booking."
    }
  ]
};

export function getCruiseSeoPage(slug: string) {
  return cruiseSeoPages.find((page) => page.slug === slug);
}

export function getCruiseSearchCards(ids: string[]) {
  return ids
    .map((id) => cruiseSearchCards.find((card) => card.id === id))
    .filter((card): card is CruiseSearchCard => Boolean(card));
}

export function getCruiseSeoFaqs(page: CruiseSeoPage) {
  return (
    cruiseSeoFaqs[page.slug] ?? [
      {
        question: `How do I check current fares for ${page.h1}?`,
        answer:
          "Use the current cruise search links on this page to compare live sailing dates, cabin options, taxes, fees, and port expenses."
      },
      {
        question: "How often can cruise fares change?",
        answer:
          "Cruise fares may change at any time based on ship, date, cabin, demand, and availability."
      },
      {
        question: "Are these fixed cruise prices?",
        answer:
          "No. These are curated cruise searches and featured sailing links. Always check current fares directly before booking."
      }
    ]
  );
}
