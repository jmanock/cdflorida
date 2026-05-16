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
  },
  {
    id: "mexico-cruise-search",
    title: "Mexico Cruises From Florida",
    eyebrow: "Mexico sailings",
    description: "Compare Mexico and Western Caribbean cruise searches from Florida ports including Tampa and Miami.",
    port: "Tampa",
    destination: "Mexico",
    cruiseLine: "Multiple cruise lines",
    nights: "4-7 nights",
    image: "/images/cruise-sunset-sea.webp",
    imageAlt: "Cruise ship sailing toward a sunset on a Mexico cruise route",
    href: cruiseAffiliateLinks.cruiseDirectCaribbean
  },
  {
    id: "luxury-florida-sailings",
    title: "Luxury Cruises From Florida",
    eyebrow: "Luxury cruise search",
    description: "Compare premium and luxury-style cruise searches from Florida ports with Caribbean and island routes.",
    port: "Fort Lauderdale",
    destination: "Luxury Caribbean",
    cruiseLine: "Celebrity Cruises",
    nights: "6-10 nights",
    image: "/images/luxury-cruise-deck.webp",
    imageAlt: "Upscale cruise deck lounge for a luxury sailing from Florida",
    href: getCruiseSearchUrl({ cruiseLine: "Celebrity Cruises", port: "Fort Lauderdale", destination: "Caribbean", nights: 7 })
  },
  {
    id: "couples-cruise-search",
    title: "Cruises For Couples From Florida",
    eyebrow: "Couples cruise search",
    description: "Explore cruise searches for couples, anniversary trips, island getaways, and relaxed sailings from Florida.",
    port: "Miami",
    destination: "Bahamas and Caribbean",
    cruiseLine: "Multiple cruise lines",
    nights: "3-7 nights",
    image: "/images/cruise-deck-ocean.webp",
    imageAlt: "Ocean deck view on a relaxed cruise for couples from Florida",
    href: cruiseAffiliateLinks.expediaCruises
  },
  {
    id: "first-time-cruise-search",
    title: "First-Time Cruiser Searches",
    eyebrow: "Beginner-friendly cruises",
    description: "Compare short, simple Florida cruise searches for first-time cruisers and flexible travelers.",
    port: "Port Canaveral",
    destination: "Bahamas",
    cruiseLine: "Multiple cruise lines",
    nights: "3-5 nights",
    image: "/images/private-island-cruise.webp",
    imageAlt: "Cruise ship near a private island for first-time cruisers",
    href: cruiseAffiliateLinks.vacationsToGo
  },
  {
    id: "florida-port-guide-search",
    title: "Florida Cruise Port Comparisons",
    eyebrow: "Port planning",
    description: "Compare Florida cruise ports by location, common routes, hotels, airports, and sailing styles.",
    destination: "Florida cruise ports",
    cruiseLine: "Multiple cruise lines",
    nights: "Varies by port",
    image: "/images/cruise-port-departure.webp",
    imageAlt: "Large cruise ship departing a Florida cruise port",
    href: cruiseAffiliateLinks.expediaCruises
  }
];

const coreCruiseSeoPages: CruiseSeoPage[] = [
  {
    slug: "cruises-from-miami",
    title: "Cruises From Miami | Bahamas & Caribbean Cruise Deals",
    description:
      "Explore cruises from Miami including Bahamas sailings, Caribbean cruises, weekend trips, and family cruise options from PortMiami.",
    h1: "Cruises From Miami",
    eyebrow: "Florida port guide",
    intro:
      "Browse cruise deals and sailing searches from Miami, one of Florida's busiest cruise ports. Find Bahamas getaways, Caribbean sailings, short weekend cruises, and family-friendly cruise options.",
    seoCopy: [
      "Miami is one of Florida's most useful cruise departure cities because travelers can compare short Bahamas cruises, longer Caribbean itineraries, premium ships, and quick weekend sailings from the same port area. If you are flying in, it is worth comparing arrival times, PortMiami hotel options, transportation, and sailing check-in windows before choosing a fare.",
      "Use this page as a starting point for current cruise searches from Miami, then verify the sailing details with the cruise line or booking source. Fares can move by date, cabin, ship, taxes, port expenses, and availability, so the best Miami cruise option is usually the one that matches both your trip dates and total travel cost.",
      "Miami cruise searches can help couples, families, first-time cruisers, and flexible travelers compare departures without bouncing between every cruise line site. Review the route, number of nights, port timing, onboard style, and nearby hotel options before booking so the cruise fare fits the full trip."
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
      "Before booking, compare the total trip plan around the cruise fare. Port Canaveral hotel rates, ground transportation, airport timing, taxes, fees, and port expenses can all affect the final cost. Use the current sailing links below to verify dates, ships, cabins, and availability with the source.",
      "This page is useful for travelers looking at family cruises, short Bahamas escapes, Disney-style vacation planning, or longer Caribbean sailings near Orlando. Cruise lengths and destinations vary by line and season, so flexible dates can make it easier to compare stronger options."
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
    seoCopy: [
      "Cruises from Fort Lauderdale are especially useful for travelers comparing Caribbean routes, premium ships, and longer island-focused itineraries from South Florida. Port Everglades is close to Fort Lauderdale-Hollywood International Airport, beach hotels, and pre-cruise stays, which can make the departure logistics easier for travelers flying in before sailing.",
      "This page helps you compare current cruise searches from Fort Lauderdale, including Eastern Caribbean, Western Caribbean, Southern Caribbean, Bahamas, and premium cruise options when available. Fares may change by ship, cabin, season, taxes, fees, port expenses, and remaining availability, so confirm the full price and itinerary with the source before booking.",
      "Fort Lauderdale cruise pages are helpful for travelers who want a quieter South Florida departure than Miami while still comparing major cruise lines and tropical routes. Check the sailing length, port arrival time, nearby hotels, and transportation needs before choosing a fare."
    ],
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
    seoCopy: [
      "Cruises from Tampa can be a strong fit for Gulf Coast travelers, Central Florida visitors, and anyone who wants a Florida cruise departure outside the busiest South Florida ports. Tampa sailings often focus on Western Caribbean, Mexico, Cozumel, Costa Maya, Belize, and relaxed warm-weather routes, depending on the ship schedule.",
      "Use this page to compare current Tampa cruise searches by sailing length, destination, and cruise line. Because Tampa routes can vary by season and ship deployment, always confirm dates, port timing, cabin options, taxes, fees, port expenses, and hotel needs before booking a cruise fare.",
      "Tampa is useful for travelers driving from the Gulf Coast, Orlando area, Sarasota, St. Petersburg, or nearby Florida cities. Compare shorter and weeklong options, then confirm the source details because available ships, routes, and fares may shift through the year."
    ],
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
    title: "Bahamas Cruise Deals | Short Cruises From Florida",
    description:
      "Compare Bahamas cruise deals from Miami, Port Canaveral, Tampa, and Fort Lauderdale with fare examples and travel tips.",
    h1: "Bahamas Cruise Deals From Florida",
    eyebrow: "Island cruise searches",
    intro:
      "Bahamas cruises are among the easiest Florida sailings to compare, with short escapes, private island stops, and family-friendly options from multiple ports.",
    seoCopy: [
      "Bahamas cruise deals from Florida are popular because they can fit short vacations, long weekends, family trips, and first-time cruise plans. Common searches include Nassau, Bimini, CocoCay, Ocean Cay, Princess Cays, and other island stops from Miami, Port Canaveral, Fort Lauderdale, and Jacksonville.",
      "Short Bahamas cruises can look simple, but final pricing still depends on sailing date, cabin type, taxes, fees, port expenses, and availability. Compare the route, ship, departure port, and hotel or flight needs before booking, especially if you plan to arrive in Florida the night before departure.",
      "This page is useful for travelers comparing two-night, three-night, four-night, and family-friendly Bahamas sailings. Flexible dates, weekday departures, and different Florida ports can change what is available, so check current fares with the source before deciding."
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
    seoCopy: [
      "Caribbean cruise deals from Florida can include Eastern Caribbean, Western Caribbean, Southern Caribbean, Mexico, Belize, private island, and longer island itineraries. Miami, Fort Lauderdale, Port Canaveral, and Tampa are all useful ports to compare because routes, ships, and sailing lengths can vary significantly by departure city.",
      "This page is useful for travelers who want to compare current Caribbean sailings without starting from scratch on every cruise line site. Review the destination mix, number of nights, ship, departure port, taxes, fees, port expenses, and cabin availability before booking, since cruise fares can change quickly as sailings fill.",
      "Caribbean cruise searches often work best when you compare ports and trip length together. A seven-night sailing from Fort Lauderdale may feel different from a shorter itinerary from Miami or Tampa, even when the base fare looks similar, so confirm the full itinerary and total price."
    ],
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
      "Because short sailings can be popular around holidays and school breaks, it helps to verify dates and total trip costs with the source. Compare cruise fare, port timing, hotel needs, parking, taxes, fees, and port expenses before booking a weekend cruise from Florida.",
      "This page is helpful for couples, families, first-time cruisers, and Florida residents who want to compare short sailings quickly. Look at departure day, return time, ship, destination, and whether you need a hotel before or after the cruise."
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
    title: "Family Cruise Deals From Florida | Bahamas & Caribbean Trips",
    description:
      "Explore family cruise ideas from Florida including Bahamas sailings, Caribbean trips, and short cruises for families.",
    h1: "Family Cruise Deals From Florida",
    eyebrow: "Family vacation searches",
    intro:
      "Family cruise searches from Florida can include kids clubs, private islands, pool decks, entertainment, and easy sailings from major ports.",
    seoCopy: [
      "Family cruise deals from Florida often start with ports that are easy to reach, ships with strong onboard activities, and itineraries that keep logistics manageable. Port Canaveral, Miami, and Fort Lauderdale are common searches for families comparing Bahamas cruises, Caribbean vacations, private island stops, and school-break sailings.",
      "When comparing a family cruise, look beyond the headline fare. Cabin capacity, dining, kids clubs, gratuities, taxes, fees, port expenses, hotel nights, and transportation can change the real trip cost. Use the current sailing links to confirm availability and the full price before booking.",
      "This page is useful for families comparing short Bahamas sailings, Caribbean vacations, school-break dates, and ships with kid-friendly activities. Availability can change quickly on popular ships, so flexible dates and alternate Florida ports may help."
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
      "A low cruise fare is only one part of the trip cost. Always review taxes, fees, port expenses, gratuities, hotels, flights, parking, and transportation before booking. The links below point to current cruise searches so you can verify available dates and total pricing with the source.",
      "This page is useful for travelers comparing value across Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville. Flexible dates, shorter cruises, and alternate departure ports can reveal different options, but availability varies by sailing."
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
    seoCopy: [
      "Cruises under $300 from Florida are usually tied to select dates, shorter itineraries, inside cabins, close-in availability, or flexible travel windows. Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville can all be worth comparing because the lowest visible fare may shift by port and sailing length.",
      "Use this page to compare current low-fare cruise searches without assuming the base fare is the full trip cost. Taxes, fees, port expenses, gratuities, hotels, flights, parking, and transportation can change the total, so confirm the current fare and final checkout details with the source.",
      "This page is most useful for flexible travelers, first-time cruisers, and Florida residents looking for short Bahamas or Caribbean-style options. Availability varies by sailing, and low fares can change quickly as cabins sell."
    ],
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

const authorityCruiseSeoPages: CruiseSeoPage[] = [
  {
    slug: "mexico-cruise-deals",
    title: "Mexico Cruise Deals From Florida | Cozumel & Western Caribbean",
    description: "Compare Mexico cruise deals from Florida including Cozumel, Costa Maya, Western Caribbean routes, and current sailing searches.",
    h1: "Mexico Cruise Deals From Florida",
    eyebrow: "Mexico cruise searches",
    intro: "Compare Mexico cruise searches from Florida ports, especially Western Caribbean routes that may include Cozumel, Costa Maya, or nearby island stops.",
    seoCopy: [
      "Mexico cruises from Florida are often tied to Western Caribbean itineraries, especially from Tampa, Miami, Fort Lauderdale, and Port Canaveral. These sailings can work for travelers who want warm-weather ports, beach time, snorkeling, ruins excursions, or a route that feels different from a short Bahamas escape.",
      "This page helps travelers compare Mexico cruise searches by departure port, sailing length, and cruise line style. Shorter routes may focus on one or two ports, while weeklong sailings can combine Mexico with Belize, Honduras, or other Western Caribbean stops. Fares may change by cabin, date, ship, taxes, fees, and availability.",
      "Before booking, confirm the full itinerary, port times, passport requirements, taxes, port expenses, and transportation plans with the booking source. If you are flying in before the cruise, compare Florida hotel and flight options around the departure port."
    ],
    details: [
      "Mexico cruises from Florida commonly overlap with Western Caribbean searches.",
      "Tampa and Miami are useful starting points, but routes vary by ship and season.",
      "Confirm port times, taxes, fees, and availability with the source before booking."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset on a Mexico and Western Caribbean route",
    cardIds: ["mexico-cruise-search", "tampa-western-caribbean", "cheap-cruise-search", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-tampa", "caribbean-cruise-deals", "cheap-cruises-from-florida", "weekend-cruises-from-florida"]
  },
  {
    slug: "luxury-cruises-from-florida",
    title: "Luxury Cruises From Florida | Premium Caribbean Sailings",
    description: "Explore luxury cruises from Florida including premium Caribbean sailings, upscale ships, longer routes, and current fare searches.",
    h1: "Luxury Cruises From Florida",
    eyebrow: "Premium sailings",
    intro: "Explore premium and luxury-style cruise searches from Florida ports with upscale ships, longer Caribbean itineraries, and refined onboard experiences.",
    seoCopy: [
      "Luxury cruises from Florida can include premium cruise lines, suite-focused ships, longer Caribbean routes, elevated dining, quieter onboard spaces, and itineraries built around more time in port. Fort Lauderdale and Miami are especially useful starting points for premium Caribbean cruise searches.",
      "This page helps travelers compare upscale cruise options without assuming every premium sailing is the same. Look at cabin category, ship age, dining style, included amenities, itinerary length, port mix, taxes, fees, and port expenses before comparing the total value of a fare.",
      "Luxury cruise fares may change by season, cabin inventory, promotions, and final payment windows. Always confirm current pricing, cabin availability, and fare rules with the booking source before booking flights or hotels around the sailing."
    ],
    details: [
      "Fort Lauderdale and Miami are useful ports for premium Caribbean cruise searches.",
      "Compare cabin type, dining, included amenities, and itinerary length before booking.",
      "Luxury fares and suite availability can change quickly by sailing date."
    ],
    heroImage: "/images/luxury-cruise-deck.webp",
    heroAlt: "Luxury cruise deck lounge on a premium Florida sailing",
    cardIds: ["luxury-florida-sailings", "celebrity-luxury-caribbean", "princess-fort-lauderdale", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-fort-lauderdale", "caribbean-cruise-deals", "best-cruises-for-couples", "cheap-cruises-from-florida"]
  },
  {
    slug: "best-bahamas-cruises",
    title: "Best Bahamas Cruises From Florida | Ports, Lengths & Tips",
    description: "Compare the best Bahamas cruises from Florida by port, cruise length, island stops, family fit, and current sailing searches.",
    h1: "Best Bahamas Cruises From Florida",
    eyebrow: "Bahamas cruise guide",
    intro: "Compare Bahamas cruise options from Florida by departure port, sailing length, island stops, family fit, and current fare searches.",
    seoCopy: [
      "The best Bahamas cruise depends on how much time you have, which Florida port is easiest, and what kind of island experience you want. Miami and Port Canaveral are common starting points, while Fort Lauderdale and Jacksonville can also be worth comparing when dates line up.",
      "Short Bahamas cruises are useful for weekends, first-time cruisers, couples, and families who want a simpler trip. Longer options may add private islands, more ship time, or extra stops. Compare ship, cabin, port timing, taxes, fees, port expenses, and hotel needs before booking.",
      "Use this page to move from broad Bahamas research to current sailing searches. Fares may change by date and cabin, so always confirm availability with the source before making flight or hotel plans."
    ],
    details: [
      "Compare Miami, Port Canaveral, Fort Lauderdale, and Jacksonville Bahamas options.",
      "Short Bahamas cruises can work well for weekends and first-time cruisers.",
      "Confirm taxes, fees, port expenses, and current availability before booking."
    ],
    heroImage: "/images/bahamas-cruise-beach.webp",
    heroAlt: "Bahamas beach and turquoise water for a Florida cruise",
    cardIds: ["royal-caribbean-bahamas", "msc-ocean-cay", "carnival-miami-bahamas", "ncl-short-bahamas"],
    relatedSlugs: ["bahamas-cruise-deals", "weekend-cruises-from-florida", "cruises-from-miami", "cruises-from-port-canaveral"]
  },
  {
    slug: "best-caribbean-cruises-from-florida",
    title: "Best Caribbean Cruises From Florida | Ports, Routes & Tips",
    description: "Compare the best Caribbean cruises from Florida including Eastern, Western, and Southern Caribbean routes from major ports.",
    h1: "Best Caribbean Cruises From Florida",
    eyebrow: "Caribbean cruise guide",
    intro: "Compare Caribbean cruise options from Florida by route type, departure port, sailing length, ship style, and current fare searches.",
    seoCopy: [
      "The best Caribbean cruise from Florida depends on whether you want Eastern Caribbean beaches, Western Caribbean adventure, Southern Caribbean islands, or a simple island mix with strong ship time. Miami, Fort Lauderdale, Port Canaveral, and Tampa all serve different route patterns.",
      "This page is helpful for travelers comparing weeklong sailings, premium cruise options, family trips, and flexible dates. Look at port mix, number of sea days, ship amenities, cabin type, taxes, port expenses, and flight or hotel needs around the departure city.",
      "Caribbean cruise fares may change as cabins sell or promotions shift. Use the current sailing links to compare options, then confirm the full itinerary and final price with the source before booking."
    ],
    details: [
      "Compare Eastern, Western, and Southern Caribbean routes from Florida.",
      "Miami, Fort Lauderdale, Port Canaveral, and Tampa can all be useful departure ports.",
      "Check route, ship, cabin, taxes, and fees with the source before booking."
    ],
    heroImage: "/images/caribbean-island-beach.webp",
    heroAlt: "Caribbean island beach with cruise ship offshore",
    cardIds: ["caribbean-island-search", "princess-fort-lauderdale", "celebrity-luxury-caribbean", "tampa-western-caribbean"],
    relatedSlugs: ["caribbean-cruise-deals", "cruises-from-fort-lauderdale", "cruises-from-tampa", "luxury-cruises-from-florida"]
  },
  {
    slug: "best-weekend-cruises",
    title: "Best Weekend Cruises From Florida | Short Cruise Guide",
    description: "Compare the best weekend cruises from Florida including short Bahamas sailings, quick getaways, and current cruise searches.",
    h1: "Best Weekend Cruises From Florida",
    eyebrow: "Weekend cruise guide",
    intro: "Compare short weekend cruise options from Florida for quick getaways, first-time cruisers, couples, and flexible travelers.",
    seoCopy: [
      "Weekend cruises from Florida are usually short sailings that fit a quick escape, often with Bahamas or nearby island routes. Miami and Port Canaveral are strong starting points, while Fort Lauderdale and Jacksonville can also be useful depending on ship schedules.",
      "The best weekend cruise is not always the lowest base fare. Check departure time, return time, ship, cabin, taxes, fees, port expenses, parking, hotel needs, and whether the sailing actually fits your weekend schedule.",
      "Use this guide to compare current weekend cruise searches and related short cruise pages. Availability varies by date, and popular holiday weekends may price differently than flexible off-peak dates."
    ],
    details: [
      "Weekend cruises are often 2-4 night sailings from Florida.",
      "Bahamas routes are common, but availability varies by port and ship.",
      "Confirm departure and return timing before booking hotels or flights."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sea during a weekend getaway from Florida",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "royal-caribbean-bahamas", "vacations-to-go-last-minute"],
    relatedSlugs: ["weekend-cruises-from-florida", "short-cruises-from-florida", "bahamas-cruise-deals", "cruises-under-300"]
  },
  {
    slug: "best-family-cruises",
    title: "Best Family Cruises From Florida | Kid-Friendly Cruise Guide",
    description: "Compare the best family cruises from Florida including Bahamas trips, Caribbean routes, kid-friendly ships, and port tips.",
    h1: "Best Family Cruises From Florida",
    eyebrow: "Family cruise guide",
    intro: "Compare family-friendly cruise options from Florida by port, ship style, sailing length, destination, and trip logistics.",
    seoCopy: [
      "The best family cruises from Florida usually balance easy ports, kid-friendly ships, manageable sailing lengths, and destinations that work for different ages. Port Canaveral, Miami, and Fort Lauderdale are especially useful for family cruise searches.",
      "Families should compare more than the fare. Cabin capacity, kids clubs, dining, pool decks, entertainment, gratuities, taxes, port expenses, hotel nights, and transportation can change the total trip experience and cost.",
      "Use this page to compare family cruise searches, then confirm current dates and availability with the source. School breaks and holidays can fill quickly, so flexible dates and alternate Florida ports may help."
    ],
    details: [
      "Port Canaveral, Miami, and Fort Lauderdale are useful for family cruise searches.",
      "Compare kids clubs, cabin capacity, dining, and total trip cost.",
      "School break sailings may change price and availability quickly."
    ],
    heroImage: "/images/family-cruise-pool-deck.webp",
    heroAlt: "Family cruise pool deck on a Florida sailing",
    cardIds: ["disney-port-canaveral", "royal-caribbean-bahamas", "carnival-miami-bahamas", "cheap-cruise-search"],
    relatedSlugs: ["family-cruise-deals-florida", "disney-cruise-deals-florida", "cruises-from-port-canaveral", "bahamas-cruise-deals"]
  },
  {
    slug: "best-cruises-for-couples",
    title: "Best Cruises For Couples From Florida | Romantic Getaways",
    description: "Compare cruises for couples from Florida including Bahamas getaways, Caribbean sailings, premium ships, and weekend escapes.",
    h1: "Best Cruises For Couples From Florida",
    eyebrow: "Couples cruise guide",
    intro: "Compare Florida cruise options for couples, anniversary trips, quick escapes, and relaxed Caribbean or Bahamas sailings.",
    seoCopy: [
      "Cruises for couples from Florida can range from quick Bahamas weekends to longer Caribbean routes with more sea days, premium dining, and quieter ship spaces. Miami and Fort Lauderdale are strong starting points, while Port Canaveral and Tampa can also work for easy departures.",
      "Couples should compare itinerary style, ship atmosphere, dining, cabin type, port mix, total cost, and whether a pre-cruise hotel makes the trip smoother. A lower fare may not be the best fit if the port timing or ship style does not match the trip.",
      "Use this page to compare current couples-friendly cruise searches and related Florida cruise guides. Fares may change by date, cabin, and availability, so confirm current pricing with the source."
    ],
    details: [
      "Compare quick Bahamas escapes, premium sailings, and longer Caribbean routes.",
      "Miami and Fort Lauderdale are useful ports for couples cruise searches.",
      "Review ship style, cabin type, dining, and total cost before booking."
    ],
    heroImage: "/images/cruise-deck-ocean.webp",
    heroAlt: "Ocean deck view for couples cruise planning from Florida",
    cardIds: ["couples-cruise-search", "celebrity-luxury-caribbean", "msc-ocean-cay", "caribbean-island-search"],
    relatedSlugs: ["luxury-cruises-from-florida", "weekend-cruises-from-florida", "bahamas-cruise-deals", "caribbean-cruise-deals"]
  },
  {
    slug: "best-budget-cruises",
    title: "Best Budget Cruises From Florida | Low-Fare Cruise Guide",
    description: "Compare budget cruises from Florida including short sailings, Bahamas routes, flexible dates, and low-fare cruise searches.",
    h1: "Best Budget Cruises From Florida",
    eyebrow: "Budget cruise guide",
    intro: "Compare budget-friendly cruise searches from Florida ports with safe fare guidance, flexible date tips, and current sailing links.",
    seoCopy: [
      "Budget cruises from Florida are often easier to find when travelers can compare multiple ports, flexible dates, shorter sailings, and inside cabins. Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville may each show different fare patterns.",
      "A budget cruise should still be checked against the full trip cost. Taxes, port fees, gratuities, hotels, parking, flights, transportation, drinks, and excursions can change the total. The lowest base fare may not be the lowest final trip.",
      "Use this page to compare budget cruise searches and related under-$300 or cheap cruise pages. Fares and availability can change quickly, so confirm details with the booking source."
    ],
    details: [
      "Flexible dates and shorter sailings can help budget cruise searches.",
      "Compare total trip cost, not just the base fare.",
      "Check taxes, fees, port expenses, and cabin availability with the source."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing a Florida port for a budget cruise search",
    cardIds: ["cheap-cruise-search", "vacations-to-go-last-minute", "ncl-short-bahamas", "carnival-miami-bahamas"],
    relatedSlugs: ["cheap-cruises-from-florida", "cruises-under-300", "last-minute-cruise-deals-florida", "weekend-cruises-from-florida"]
  },
  {
    slug: "cruise-deals-for-first-time-cruisers",
    title: "Cruise Deals For First-Time Cruisers | Florida Beginner Guide",
    description: "Compare beginner-friendly cruise deals from Florida including short Bahamas sailings, easy ports, and first-time cruise tips.",
    h1: "Cruise Deals For First-Time Cruisers",
    eyebrow: "First cruise guide",
    intro: "Find beginner-friendly cruise searches from Florida with simple routes, shorter sailings, and practical planning tips.",
    seoCopy: [
      "First-time cruisers often do best with a simple Florida departure, a manageable sailing length, and a route that makes the logistics easy. Short Bahamas cruises from Miami or Port Canaveral are popular because they let travelers test the cruise experience without committing to a full week.",
      "This page helps first-time cruisers compare ports, ship styles, destinations, and fare expectations. Look at what is included, what costs extra, when to arrive at the port, whether you need a hotel, and how taxes, port fees, gratuities, drinks, and excursions affect the total.",
      "Use the current search links as a starting point, then verify cabin availability, documentation requirements, itinerary details, and final pricing with the booking source before booking."
    ],
    details: [
      "Short Bahamas sailings can be useful for first-time cruisers.",
      "Compare what is included, what costs extra, and when to arrive at the port.",
      "Confirm current fare, cabin, taxes, fees, and documents with the source."
    ],
    heroImage: "/images/private-island-cruise.webp",
    heroAlt: "Cruise ship near a private island for first-time cruisers from Florida",
    cardIds: ["first-time-cruise-search", "ncl-short-bahamas", "royal-caribbean-bahamas", "msc-ocean-cay"],
    relatedSlugs: ["short-cruises-from-florida", "best-bahamas-cruises", "weekend-cruises-from-florida", "cruises-from-port-canaveral"]
  },
  {
    slug: "best-cruise-lines-from-florida",
    title: "Best Cruise Lines From Florida | Compare Major Cruise Options",
    description: "Compare cruise lines from Florida including Royal Caribbean, Carnival, Disney, MSC, Norwegian, Celebrity, and Princess searches.",
    h1: "Best Cruise Lines From Florida",
    eyebrow: "Cruise line guide",
    intro: "Compare major cruise lines sailing from Florida by port, destination, ship style, family fit, and current search options.",
    seoCopy: [
      "The best cruise line from Florida depends on the traveler. Families may compare Disney, Royal Caribbean, Carnival, MSC, and Norwegian, while couples or premium travelers may compare Celebrity, Princess, Holland America, and longer Caribbean itineraries.",
      "Florida cruise lines also vary by port. Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville can each have different ships, route types, and sailing lengths. The right choice may depend as much on the departure port as the cruise line brand.",
      "Use this page to compare cruise line search paths, then confirm ship, itinerary, cabin type, taxes, fees, and availability with the source before booking."
    ],
    details: [
      "Compare cruise lines by port, ship style, and destination.",
      "Family, budget, premium, and short-cruise options vary by line.",
      "Confirm current dates, cabins, and fare rules with the source."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Florida cruise ship departure for cruise line comparison",
    cardIds: ["royal-caribbean-bahamas", "carnival-miami-bahamas", "disney-port-canaveral", "celebrity-luxury-caribbean"],
    relatedSlugs: ["royal-caribbean-deals-florida", "carnival-cruise-deals-florida", "disney-cruise-deals-florida", "family-cruise-deals-florida"]
  },
  {
    slug: "best-cruise-ports-in-florida",
    title: "Best Cruise Ports In Florida | Compare Miami, Port Canaveral & More",
    description: "Compare the best cruise ports in Florida including Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville.",
    h1: "Best Cruise Ports In Florida",
    eyebrow: "Florida port guide",
    intro: "Compare Florida cruise ports by location, airport access, hotel needs, common routes, and traveler fit.",
    seoCopy: [
      "Florida has several major cruise ports, and the best one depends on where you are coming from and what kind of sailing you want. Miami is strong for Bahamas and Caribbean variety, Port Canaveral is useful for Orlando and family trips, and Fort Lauderdale is a major Caribbean gateway.",
      "Tampa can be convenient for Gulf Coast and Western Caribbean searches, while Jacksonville may work for North Florida travelers comparing Bahamas-style sailings. Each port can affect transportation, hotel timing, flight choice, parking, and total trip cost.",
      "Use this page to compare Florida ports before choosing a cruise fare. Confirm current ships, route availability, taxes, fees, and port expenses with the source."
    ],
    details: [
      "Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville each serve different cruise needs.",
      "Compare airport access, hotels, parking, and route options before booking.",
      "Available ships and destinations vary by season and cruise line."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Florida cruise port skyline with cruise ship departure",
    cardIds: ["florida-port-guide-search", "carnival-miami-bahamas", "royal-caribbean-bahamas", "princess-fort-lauderdale"],
    relatedSlugs: ["cruises-from-miami", "cruises-from-port-canaveral", "cruises-from-fort-lauderdale", "cruises-from-tampa"]
  },
  {
    slug: "how-to-find-cheap-cruises-from-florida",
    title: "How To Find Cheap Cruises From Florida | Practical Fare Tips",
    description: "Learn how to find cheap cruises from Florida with flexible dates, port comparisons, fare checks, and total-cost planning tips.",
    h1: "How To Find Cheap Cruises From Florida",
    eyebrow: "Cheap cruise guide",
    intro: "Use practical tips to compare cheap cruise searches from Florida without overlooking fees, dates, cabins, and total trip cost.",
    seoCopy: [
      "Finding cheap cruises from Florida usually starts with flexibility. Compare multiple ports, including Miami, Port Canaveral, Fort Lauderdale, Tampa, and Jacksonville. Short Bahamas sailings, inside cabins, shoulder-season dates, close-in inventory, and weekday departures can all change what you see.",
      "The advertised fare is not always the final cost. Taxes, fees, port expenses, gratuities, drinks, excursions, hotels, flights, parking, and transportation can change the trip total. A fare that looks higher may be better if the port is easier or hotel costs are lower.",
      "Use current cruise search pages to compare availability, but avoid assuming a fare is still live until the source confirms it. If dates are flexible, check nearby ports and related weekend, short, and under-$300 cruise pages."
    ],
    details: [
      "Compare multiple Florida ports and flexible dates.",
      "Review total trip cost beyond the base cruise fare.",
      "Use source pages to confirm current fares and availability."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship leaving Florida port for cheap cruise planning",
    cardIds: ["cheap-cruise-search", "vacations-to-go-last-minute", "ncl-short-bahamas", "msc-ocean-cay"],
    relatedSlugs: ["cheap-cruises-from-florida", "best-budget-cruises", "cruises-under-300", "weekend-cruises-from-florida"]
  },
  {
    slug: "best-time-to-book-a-cruise",
    title: "Best Time To Book A Cruise From Florida | Timing & Fare Tips",
    description: "Learn when to book a Florida cruise, how fare timing works, and what to compare before choosing a sailing.",
    h1: "Best Time To Book A Cruise From Florida",
    eyebrow: "Booking timing guide",
    intro: "Understand cruise booking timing, fare changes, flexible dates, and what to confirm before booking a Florida sailing.",
    seoCopy: [
      "The best time to book a cruise from Florida depends on the route, ship, cabin type, and how flexible you are. Families often compare early for school breaks, while flexible travelers may watch closer-in dates or shoulder seasons for lower base fares.",
      "Cruise fares can change as cabins sell, promotions open or close, and final payment windows approach. Bahamas, Caribbean, weekend, and family cruises can each behave differently, so it helps to compare several ports and dates before deciding.",
      "Before booking, confirm the current fare, taxes, fees, port expenses, cabin rules, cancellation terms, and travel logistics with the source. A good booking window is the one that fits both your budget and your real trip plan."
    ],
    details: [
      "Families may need to compare earlier for school breaks.",
      "Flexible travelers can compare shoulder seasons and close-in dates.",
      "Confirm fare rules, taxes, fees, and cabin availability before booking."
    ],
    heroImage: "/images/cruise-bow-horizon.webp",
    heroAlt: "Cruise ship bow facing the horizon for booking timing guide",
    cardIds: ["cheap-cruise-search", "vacations-to-go-last-minute", "caribbean-island-search", "royal-caribbean-bahamas"],
    relatedSlugs: ["cheap-cruises-from-florida", "last-minute-cruise-deals-florida", "family-cruise-deals-florida", "weekend-cruises-from-florida"]
  },
  {
    slug: "miami-vs-port-canaveral-cruises",
    title: "Miami vs Port Canaveral Cruises | Which Florida Port Fits?",
    description: "Compare Miami and Port Canaveral cruises by routes, airports, hotels, family fit, Bahamas sailings, and trip logistics.",
    h1: "Miami vs Port Canaveral Cruises",
    eyebrow: "Port comparison",
    intro: "Compare Miami and Port Canaveral cruise departures by route variety, airport access, hotel needs, family fit, and total trip planning.",
    seoCopy: [
      "Miami and Port Canaveral are two of Florida's most searched cruise ports, but they serve different trip styles. Miami is strong for route variety, South Florida hotels, Bahamas, Caribbean, and premium options. Port Canaveral is useful for Orlando, Cocoa Beach, family cruises, and Bahamas sailings.",
      "Travel logistics can matter as much as the cruise fare. Compare airport timing, hotel rates, ground transportation, parking, ship options, and whether you want to pair the cruise with theme parks or a South Florida stay.",
      "Use this page to decide which port fits your trip before comparing current fares. Confirm the exact sailing, taxes, fees, port expenses, and cabin availability with the source."
    ],
    details: [
      "Miami is strong for route variety and South Florida cruise options.",
      "Port Canaveral is useful for Orlando, Cocoa Beach, and family sailings.",
      "Compare total trip logistics before choosing a port."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Miami cruise port skyline for Florida port comparison",
    cardIds: ["carnival-miami-bahamas", "royal-caribbean-bahamas", "disney-port-canaveral", "msc-ocean-cay"],
    relatedSlugs: ["cruises-from-miami", "cruises-from-port-canaveral", "family-cruise-deals-florida", "bahamas-cruise-deals"]
  },
  {
    slug: "bahamas-vs-caribbean-cruises",
    title: "Bahamas vs Caribbean Cruises | Which Florida Cruise Fits?",
    description: "Compare Bahamas and Caribbean cruises from Florida by trip length, ports, family fit, price expectations, and travel style.",
    h1: "Bahamas vs Caribbean Cruises",
    eyebrow: "Cruise comparison",
    intro: "Compare Bahamas and Caribbean cruises from Florida by sailing length, destinations, port options, budget, and traveler fit.",
    seoCopy: [
      "Bahamas cruises from Florida are often shorter and easier to fit into a weekend, while Caribbean cruises are usually better for travelers who want more ports, longer routes, and a fuller vacation. Miami, Port Canaveral, Fort Lauderdale, and Tampa can all matter depending on the itinerary.",
      "Bahamas sailings can be useful for first-time cruisers, families, and quick escapes. Caribbean cruises may be better for travelers who want seven-night options, Mexico routes, Eastern or Western Caribbean ports, or premium ships with more sea days.",
      "Compare the fare, number of nights, port mix, taxes, fees, hotel needs, and flight timing before booking. Availability and prices may change by sailing date and cabin."
    ],
    details: [
      "Bahamas cruises are often shorter and simpler.",
      "Caribbean cruises usually offer more route variety and longer sailings.",
      "Compare total trip cost and itinerary style before booking."
    ],
    heroImage: "/images/caribbean-island-beach.webp",
    heroAlt: "Caribbean beach and cruise ship for Bahamas versus Caribbean cruise comparison",
    cardIds: ["royal-caribbean-bahamas", "msc-ocean-cay", "caribbean-island-search", "tampa-western-caribbean"],
    relatedSlugs: ["bahamas-cruise-deals", "caribbean-cruise-deals", "best-bahamas-cruises", "best-caribbean-cruises-from-florida"]
  },
  {
    slug: "weekend-vs-weeklong-cruises",
    title: "Weekend vs Weeklong Cruises From Florida | Compare Trip Lengths",
    description: "Compare weekend and weeklong cruises from Florida by price, ports, itinerary style, family fit, and travel planning needs.",
    h1: "Weekend vs Weeklong Cruises From Florida",
    eyebrow: "Cruise length comparison",
    intro: "Compare short weekend cruises and weeklong Florida sailings by cost, destinations, schedule, and who each option fits best.",
    seoCopy: [
      "Weekend cruises from Florida can work well for quick escapes, first-time cruisers, and travelers with limited vacation time. They often focus on Bahamas or nearby island routes and can be easier to plan around a short hotel stay or drive-to-port schedule.",
      "Weeklong cruises usually offer more destination variety, more sea days, and a fuller onboard experience. Caribbean, Mexico, and longer Bahamas itineraries may give travelers more time to settle into the ship and compare a wider range of ports.",
      "Compare total price, taxes, fees, port expenses, hotel needs, flight timing, and how much time you want onboard before choosing a weekend or weeklong cruise."
    ],
    details: [
      "Weekend cruises are useful for short getaways and first-time cruisers.",
      "Weeklong cruises usually offer more ports and ship time.",
      "Confirm total cost, timing, and availability with the source."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset for weekend versus weeklong cruise comparison",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "caribbean-island-search", "celebrity-luxury-caribbean"],
    relatedSlugs: ["weekend-cruises-from-florida", "short-cruises-from-florida", "caribbean-cruise-deals", "cheap-cruises-from-florida"]
  },
  {
    slug: "carnival-vs-royal-caribbean-from-florida",
    title: "Carnival vs Royal Caribbean From Florida | Cruise Line Comparison",
    description: "Compare Carnival and Royal Caribbean cruises from Florida by ports, destinations, family fit, ship style, and fare searches.",
    h1: "Carnival vs Royal Caribbean From Florida",
    eyebrow: "Cruise line comparison",
    intro: "Compare Carnival and Royal Caribbean cruises from Florida by departure port, ship style, destinations, family fit, and current searches.",
    seoCopy: [
      "Carnival and Royal Caribbean are two of the most searched cruise lines from Florida, but they can feel different depending on ship, itinerary, port, and traveler style. Carnival is often compared for budget-friendly short cruises, casual family trips, and drive-to-port options.",
      "Royal Caribbean is often compared for larger ships, private island experiences, family activities, and Bahamas or Caribbean routes from ports like Miami and Port Canaveral. The better choice depends on ship, cabin, date, and destination rather than brand alone.",
      "Compare current fares, taxes, fees, ship amenities, cabin availability, port timing, and total trip cost before booking either line from Florida."
    ],
    details: [
      "Carnival can be useful for casual, short, and budget-friendly searches.",
      "Royal Caribbean can be useful for family activities and private island routes.",
      "Compare ship, date, cabin, and itinerary before choosing."
    ],
    heroImage: "/images/private-island-cruise.webp",
    heroAlt: "Cruise ship near private island for Carnival versus Royal Caribbean comparison",
    cardIds: ["carnival-miami-bahamas", "royal-caribbean-bahamas", "cheap-cruise-search", "disney-port-canaveral"],
    relatedSlugs: ["carnival-cruise-deals-florida", "royal-caribbean-deals-florida", "family-cruise-deals-florida", "bahamas-cruise-deals"]
  },
  {
    slug: "miami-vs-tampa-cruises",
    title: "Miami vs Tampa Cruises | Compare Florida Cruise Ports",
    description: "Compare Miami and Tampa cruises by routes, airports, hotels, Western Caribbean sailings, Bahamas options, and trip logistics.",
    h1: "Miami vs Tampa Cruises",
    eyebrow: "Port comparison",
    intro: "Compare Miami and Tampa cruise departures by route variety, Gulf Coast convenience, hotels, airports, and traveler fit.",
    seoCopy: [
      "Miami and Tampa can serve very different cruise plans. Miami is usually stronger for Bahamas, Caribbean variety, premium sailings, and South Florida hotel options. Tampa can be better for Gulf Coast travelers and Western Caribbean or Mexico-style routes when ships are scheduled.",
      "Choosing between Miami and Tampa should include more than fare. Compare airport timing, hotel rates, drive distance, parking, ground transportation, itinerary length, port mix, and whether the route matches your vacation style.",
      "Use this page to compare current Miami and Tampa cruise searches, then confirm ship, cabin, taxes, fees, port expenses, and availability with the source."
    ],
    details: [
      "Miami usually offers broader Bahamas and Caribbean variety.",
      "Tampa can be convenient for Gulf Coast and Western Caribbean searches.",
      "Compare flights, hotels, parking, and total trip logistics."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset for Miami versus Tampa cruise comparison",
    cardIds: ["carnival-miami-bahamas", "tampa-western-caribbean", "mexico-cruise-search", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-miami", "cruises-from-tampa", "mexico-cruise-deals", "caribbean-cruise-deals"]
  },
  {
    slug: "what-is-included-on-a-cruise",
    title: "What Is Included On A Cruise? Florida Cruise Cost Guide",
    description: "Learn what is usually included on a cruise, what costs extra, and what Florida cruise travelers should confirm before booking.",
    h1: "What Is Included On A Cruise?",
    eyebrow: "Cruise cost guide",
    intro: "Learn what cruise fares may include, what often costs extra, and what to verify before booking a Florida cruise.",
    seoCopy: [
      "Cruise fares usually include your cabin, many meals, basic onboard entertainment, pools, and transportation between scheduled ports. What is included can vary by cruise line, ship, cabin type, and fare rules, so it is important to check the source before booking.",
      "Common extra costs can include taxes, fees, port expenses, gratuities, drinks, specialty dining, Wi-Fi, shore excursions, spa services, photos, travel insurance, hotels, flights, parking, and transportation to the port. These extras can change the total cost of a Bahamas or Caribbean cruise.",
      "Use this guide before comparing cruise deals so you understand what the fare does and does not cover. Then check current sailings and booking terms directly with the cruise line or travel source."
    ],
    details: [
      "Cruise fares often include cabin, many meals, and basic entertainment.",
      "Taxes, fees, gratuities, drinks, excursions, and hotels may cost extra.",
      "Confirm included items and final price with the booking source."
    ],
    heroImage: "/images/luxury-cruise-deck.webp",
    heroAlt: "Cruise deck and onboard area for what is included on a cruise guide",
    cardIds: ["first-time-cruise-search", "cheap-cruise-search", "royal-caribbean-bahamas", "caribbean-island-search"],
    relatedSlugs: ["cruise-deals-for-first-time-cruisers", "cheap-cruises-from-florida", "family-cruise-deals-florida", "best-time-to-book-a-cruise"]
  },
  {
    slug: "cruise-port-guide-miami",
    title: "Miami Cruise Port Guide | PortMiami Sailings & Trip Tips",
    description: "Plan cruises from Miami with PortMiami tips, common Bahamas and Caribbean routes, hotels, airports, and current cruise searches.",
    h1: "Miami Cruise Port Guide",
    eyebrow: "PortMiami guide",
    intro: "Use this Miami cruise port guide to compare PortMiami sailings, nearby hotels, airport timing, and popular cruise routes.",
    seoCopy: [
      "PortMiami is one of the busiest cruise gateways in Florida, with frequent searches for Bahamas, Caribbean, weekend, family, and premium sailings. It can be a strong choice for travelers who want route variety and access to South Florida hotels before or after a cruise.",
      "Before booking a Miami cruise, compare airport arrival times, hotel location, transfer options, traffic, terminal timing, and whether the sailing fits your full travel plan. Cruise fares may change by date, ship, cabin, taxes, fees, and port expenses.",
      "Use this guide with the current Miami cruise searches below, then confirm sailing dates and final pricing with the source."
    ],
    details: [
      "PortMiami is strong for Bahamas, Caribbean, weekend, and premium cruise searches.",
      "Compare airport timing, hotels, transportation, and terminal arrival plans.",
      "Confirm current fare and sailing details with the booking source."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Cruise ship at PortMiami with Miami skyline",
    cardIds: ["carnival-miami-bahamas", "msc-ocean-cay", "ncl-short-bahamas", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-miami", "bahamas-cruise-deals", "weekend-cruises-from-florida", "miami-vs-port-canaveral-cruises"]
  },
  {
    slug: "cruise-port-guide-port-canaveral",
    title: "Port Canaveral Cruise Guide | Orlando Area Sailings",
    description: "Plan cruises from Port Canaveral with tips for Bahamas sailings, family cruises, Orlando hotels, transportation, and current searches.",
    h1: "Port Canaveral Cruise Guide",
    eyebrow: "Central Florida port guide",
    intro: "Use this Port Canaveral cruise guide to compare Orlando-area sailings, family cruises, Bahamas routes, and trip logistics.",
    seoCopy: [
      "Port Canaveral is a major Florida cruise port for travelers pairing a sailing with Orlando, Cocoa Beach, or a family vacation. Bahamas, private island, Caribbean, Disney, Royal Caribbean, Carnival, and MSC-style searches are common depending on the current ship schedule.",
      "The port can be convenient, but travelers should compare hotel timing, airport transfers, rental cars, parking, and whether they want to stay near Orlando or the coast before departure. Fares may change by sailing date, cabin, fees, taxes, and port expenses.",
      "Use this guide to compare current Port Canaveral options, then confirm ship, route, cabin, and final price with the source."
    ],
    details: [
      "Port Canaveral is useful for Orlando-area and family cruise planning.",
      "Compare Bahamas, private island, and Caribbean sailing searches.",
      "Review hotels, transfers, parking, taxes, fees, and cabin availability."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing Port Canaveral",
    cardIds: ["royal-caribbean-bahamas", "disney-port-canaveral", "first-time-cruise-search", "cheap-cruise-search"],
    relatedSlugs: ["cruises-from-port-canaveral", "family-cruise-deals-florida", "disney-cruise-deals-florida", "miami-vs-port-canaveral-cruises"]
  },
  {
    slug: "cruise-port-guide-fort-lauderdale",
    title: "Fort Lauderdale Cruise Port Guide | Port Everglades Sailings",
    description: "Plan cruises from Fort Lauderdale with Port Everglades tips, Caribbean routes, hotels, airport access, and current cruise searches.",
    h1: "Fort Lauderdale Cruise Port Guide",
    eyebrow: "Port Everglades guide",
    intro: "Use this Fort Lauderdale cruise port guide to compare Port Everglades sailings, Caribbean routes, hotels, and airport timing.",
    seoCopy: [
      "Fort Lauderdale's Port Everglades is a major South Florida cruise gateway, especially for Caribbean, premium, and longer island itineraries. It can be a practical departure for travelers who want airport access, beach hotels, and a less hectic alternative to some Miami departures.",
      "Before booking, compare Fort Lauderdale hotel options, airport arrival timing, ground transportation, sailing length, ship style, cabin type, taxes, fees, and port expenses. Premium and Caribbean-focused fares can change by date and remaining inventory.",
      "Use this guide with current Fort Lauderdale cruise searches, then verify the full itinerary and price with the booking source."
    ],
    details: [
      "Port Everglades is useful for Caribbean and premium cruise searches.",
      "Compare beach hotels, airport timing, ships, and route length.",
      "Confirm current fare, cabin, taxes, fees, and availability."
    ],
    heroImage: "/images/fort-lauderdale-cruise-port.webp",
    heroAlt: "Cruise ship departing Fort Lauderdale near Port Everglades",
    cardIds: ["princess-fort-lauderdale", "celebrity-luxury-caribbean", "luxury-florida-sailings", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-fort-lauderdale", "caribbean-cruise-deals", "luxury-cruises-from-florida", "best-caribbean-cruises-from-florida"]
  },
  {
    slug: "bahamas-cruise-guide",
    title: "Bahamas Cruise Guide From Florida | Ports, Lengths & Tips",
    description: "Plan a Bahamas cruise from Florida with tips for ports, cruise lengths, island stops, family trips, weekend sailings, and fares.",
    h1: "Bahamas Cruise Guide From Florida",
    eyebrow: "Bahamas planning guide",
    intro: "Use this Bahamas cruise guide to compare Florida departure ports, short cruise lengths, island stops, and current sailing searches.",
    seoCopy: [
      "Bahamas cruises from Florida are popular because they can fit quick weekends, first-time cruise plans, family vacations, and simple island getaways. Common departure ports include Miami, Port Canaveral, Fort Lauderdale, and Jacksonville depending on ship schedules.",
      "Common Bahamas cruise lengths include two, three, four, and five nights, with stops such as Nassau, Bimini, CocoCay, Ocean Cay, and other private island destinations. Always compare ship, port timing, cabin, taxes, fees, port expenses, and hotel needs before booking.",
      "Use this guide to understand Bahamas cruise options, then check current sailings and final fares with the booking source."
    ],
    details: [
      "Bahamas cruises can be useful for weekends, families, and first-time cruisers.",
      "Compare Miami, Port Canaveral, Fort Lauderdale, and Jacksonville departures.",
      "Confirm island stops, taxes, fees, and current cabin availability."
    ],
    heroImage: "/images/bahamas-cruise-beach.webp",
    heroAlt: "Bahamas beach destination with turquoise water",
    cardIds: ["royal-caribbean-bahamas", "msc-ocean-cay", "carnival-miami-bahamas", "jacksonville-bahamas"],
    relatedSlugs: ["bahamas-cruise-deals", "best-bahamas-cruises", "weekend-cruises-from-florida", "short-cruises-from-florida"]
  },
  {
    slug: "caribbean-cruise-guide",
    title: "Caribbean Cruise Guide From Florida | Routes, Ports & Tips",
    description: "Plan a Caribbean cruise from Florida with tips for Eastern, Western, and Southern Caribbean routes, ports, fares, and ships.",
    h1: "Caribbean Cruise Guide From Florida",
    eyebrow: "Caribbean planning guide",
    intro: "Use this Caribbean cruise guide to compare Florida ports, route types, sailing lengths, and current Caribbean cruise searches.",
    seoCopy: [
      "Caribbean cruises from Florida can include Eastern Caribbean beaches, Western Caribbean adventure ports, Southern Caribbean islands, Mexico routes, private islands, and longer sailings with more sea days. Miami, Fort Lauderdale, Port Canaveral, and Tampa are all useful ports to compare.",
      "A Caribbean cruise can vary widely by ship, number of nights, port mix, cabin category, taxes, fees, and port expenses. Travelers should compare route style, flight or hotel needs, sea days, excursion interests, and total cost before choosing a fare.",
      "Use this guide to understand Caribbean cruise options from Florida, then confirm current sailing dates and availability with the source."
    ],
    details: [
      "Compare Eastern, Western, Southern Caribbean, Mexico, and private island routes.",
      "Miami, Fort Lauderdale, Port Canaveral, and Tampa can all be useful.",
      "Confirm ship, itinerary, taxes, fees, and cabin availability before booking."
    ],
    heroImage: "/images/caribbean-island-beach.webp",
    heroAlt: "Caribbean beach with cruise ship offshore",
    cardIds: ["caribbean-island-search", "tampa-western-caribbean", "princess-fort-lauderdale", "celebrity-luxury-caribbean"],
    relatedSlugs: ["caribbean-cruise-deals", "best-caribbean-cruises-from-florida", "mexico-cruise-deals", "luxury-cruises-from-florida"]
  },
  {
    slug: "first-time-cruise-guide",
    title: "First-Time Cruise Guide From Florida | What To Know Before Sailing",
    description: "Plan your first Florida cruise with tips for ports, short sailings, what is included, fees, hotels, and beginner-friendly routes.",
    h1: "First-Time Cruise Guide From Florida",
    eyebrow: "First cruise planning",
    intro: "Use this first-time cruise guide to compare beginner-friendly Florida sailings and understand what to confirm before booking.",
    seoCopy: [
      "A first cruise from Florida is often easiest when the port is convenient, the sailing is short enough to feel manageable, and the itinerary is simple. Bahamas cruises from Miami or Port Canaveral are common starting points, though Fort Lauderdale, Tampa, and Jacksonville can also be useful.",
      "First-time cruisers should compare what is included, what costs extra, when to arrive, what documents are needed, whether to book a hotel, and how cabin type affects the fare. Taxes, fees, port expenses, gratuities, drinks, and excursions can change the total trip cost.",
      "Use this guide with beginner-friendly cruise searches, then confirm current fare, itinerary, cabin, and rules with the booking source before purchasing."
    ],
    details: [
      "Short Bahamas cruises are common first-cruise options from Florida.",
      "Compare documents, arrival timing, cabins, fees, and included items.",
      "Confirm current details with the booking source before buying."
    ],
    heroImage: "/images/cruise-bow-horizon.webp",
    heroAlt: "Cruise ship bow facing the ocean for first-time cruise planning",
    cardIds: ["first-time-cruise-search", "ncl-short-bahamas", "royal-caribbean-bahamas", "cheap-cruise-search"],
    relatedSlugs: ["cruise-deals-for-first-time-cruisers", "what-is-included-on-a-cruise", "short-cruises-from-florida", "best-time-to-book-a-cruise"]
  }
];

const v2CruiseSeoPages: CruiseSeoPage[] = [
  {
    slug: "best-cruises-from-florida",
    title: "Best Cruises From Florida | Ports, Destinations & Planning Tips",
    description: "Compare the best cruises from Florida by port, destination, cruise length, traveler style, and current sailing searches.",
    h1: "Best Cruises From Florida",
    eyebrow: "Florida cruise authority",
    intro: "Use this guide to compare Florida cruise options by port, destination, cruise length, traveler style, and trip logistics.",
    seoCopy: [
      "The best cruise from Florida depends on what you want the trip to do. Miami is useful for route variety and South Florida hotels, Port Canaveral is strong for Orlando-area and family trips, Fort Lauderdale is useful for Caribbean and premium sailings, Tampa can work well for Gulf Coast and Western Caribbean routes, and Jacksonville can be convenient for North Florida travelers.",
      "Compare more than the headline fare. A strong Florida cruise search should account for airport access, hotel needs, parking, transfer time, cabin category, ship style, number of nights, taxes, fees, port expenses, and whether the itinerary fits your vacation pace. Short Bahamas cruises can be useful for first-time cruisers, while longer Caribbean sailings may be better for travelers who want more ports and ship time.",
      "Use the featured cruise searches below as starting points, then confirm current fares and availability with the booking source. Cruise prices may change by date, ship, cabin, and remaining inventory, so the best option is usually the sailing that matches your full trip plan rather than the lowest base fare alone."
    ],
    details: [
      "Compare Florida ports before choosing a sailing.",
      "Match destination, cruise length, and traveler style to the trip.",
      "Confirm taxes, fees, port expenses, and availability with the source."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing a Florida port for a best cruises guide",
    cardIds: ["royal-caribbean-bahamas", "carnival-miami-bahamas", "caribbean-island-search", "disney-port-canaveral"],
    relatedSlugs: ["best-cruise-ports-in-florida", "best-bahamas-cruises-from-florida", "best-caribbean-cruises-from-florida", "best-family-cruises-from-florida"]
  },
  {
    slug: "best-cruises-from-miami",
    title: "Best Cruises From Miami | Bahamas, Caribbean & Weekend Ideas",
    description: "Compare the best cruises from Miami including Bahamas sailings, Caribbean routes, weekend trips, and PortMiami planning tips.",
    h1: "Best Cruises From Miami",
    eyebrow: "PortMiami planning",
    intro: "Compare Miami cruise ideas by destination, ship style, sailing length, and travel logistics around PortMiami.",
    seoCopy: [
      "Miami is one of the strongest cruise departure cities in Florida because it gives travelers many ways to compare Bahamas, Caribbean, weekend, premium, and short cruise options from the same general port area. PortMiami can be especially useful for travelers who want route variety, South Florida hotels, and easy access to Miami International Airport.",
      "The best Miami cruise depends on whether you want a quick Bahamas escape, a longer Caribbean route, a premium ship, a family sailing, or a couples getaway. Compare departure time, return time, cabin type, ship, port stops, hotel needs, taxes, fees, and port expenses before deciding that one fare is better than another.",
      "Use this guide to move from broad Miami cruise research to current sailing searches. Availability varies by ship and season, so confirm live dates, cabins, and final pricing directly with the cruise line or trusted booking source before booking."
    ],
    details: [
      "Miami is useful for Bahamas, Caribbean, weekend, and premium cruise searches.",
      "Compare PortMiami hotels, airport timing, and sailing check-in windows.",
      "Confirm current fares and cabin availability before booking."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "Cruise ship at PortMiami for best cruises from Miami",
    cardIds: ["carnival-miami-bahamas", "msc-ocean-cay", "ncl-short-bahamas", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-miami", "miami-cruise-port-guide", "bahamas-cruise-deals", "miami-vs-tampa-cruises"]
  },
  {
    slug: "best-cruises-from-port-canaveral",
    title: "Best Cruises From Port Canaveral | Orlando Area Cruise Guide",
    description: "Compare the best cruises from Port Canaveral including Bahamas sailings, family cruises, Disney searches, and Orlando-area planning tips.",
    h1: "Best Cruises From Port Canaveral",
    eyebrow: "Orlando area cruises",
    intro: "Compare Port Canaveral cruise ideas for Bahamas escapes, family vacations, private islands, and Orlando-area trip planning.",
    seoCopy: [
      "Port Canaveral is one of Florida's most useful cruise ports for families, Orlando visitors, and travelers who want Bahamas or Caribbean routes near Central Florida. The port can pair well with a beach stay, theme park trip, or a simple drive-to-port vacation.",
      "The best Port Canaveral cruise may depend on ship, itinerary, and who is traveling. Families often compare Disney, Royal Caribbean, Carnival, MSC, and other major cruise searches, while flexible travelers may compare short Bahamas sailings or longer Caribbean routes.",
      "Before booking, compare airport timing, hotels near the coast or Orlando, parking, transfers, cabin type, taxes, fees, port expenses, and final checkout pricing. Current sailings can change by season and ship deployment, so verify details with the source."
    ],
    details: [
      "Port Canaveral is strong for family cruises and Orlando-area trips.",
      "Compare Bahamas, private island, and Caribbean routes.",
      "Review hotels, transfers, parking, taxes, fees, and cabin availability."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing Port Canaveral for an Orlando area cruise",
    cardIds: ["royal-caribbean-bahamas", "disney-port-canaveral", "first-time-cruise-search", "cheap-cruise-search"],
    relatedSlugs: ["cruises-from-port-canaveral", "port-canaveral-cruise-port-guide", "family-cruise-deals-florida", "disney-cruise-deals-florida"]
  },
  {
    slug: "best-bahamas-cruises-from-florida",
    title: "Best Bahamas Cruises From Florida | Short Island Sailings",
    description: "Compare the best Bahamas cruises from Florida by port, length, island stops, family fit, and current sailing searches.",
    h1: "Best Bahamas Cruises From Florida",
    eyebrow: "Bahamas cruise planning",
    intro: "Compare Bahamas cruises from Florida by departure port, number of nights, island stop, ship style, and traveler fit.",
    seoCopy: [
      "Bahamas cruises are among the easiest Florida sailings to understand because many routes are short, island-focused, and available from multiple Florida ports. Miami, Port Canaveral, Fort Lauderdale, and Jacksonville are all worth comparing depending on your dates and travel plans.",
      "The best Bahamas cruise may be a quick two- or three-night sailing for a weekend escape, a four- or five-night route for more time onboard, or a family-friendly ship with private island time. Compare Nassau, Bimini, CocoCay, Ocean Cay, Princess Cays, cabin type, taxes, fees, and port expenses.",
      "Use this page to compare Bahamas cruise ideas, then check current sailings with the source. Fares and availability may change quickly around holidays, school breaks, and popular weekend dates."
    ],
    details: [
      "Compare Miami, Port Canaveral, Fort Lauderdale, and Jacksonville departures.",
      "Short Bahamas cruises can work for weekends and first-time cruisers.",
      "Confirm island stops, taxes, fees, and cabin availability."
    ],
    heroImage: "/images/bahamas-cruise-beach.webp",
    heroAlt: "Turquoise Bahamas beach for best Bahamas cruises from Florida",
    cardIds: ["royal-caribbean-bahamas", "msc-ocean-cay", "carnival-miami-bahamas", "jacksonville-bahamas"],
    relatedSlugs: ["bahamas-cruise-deals", "bahamas-cruise-guide", "weekend-cruises-from-florida", "short-cruises-from-florida"]
  },
  {
    slug: "best-family-cruises-from-florida",
    title: "Best Family Cruises From Florida | Kid-Friendly Ships & Ports",
    description: "Compare the best family cruises from Florida including Port Canaveral, Miami, Bahamas sailings, Caribbean trips, and kid-friendly planning tips.",
    h1: "Best Family Cruises From Florida",
    eyebrow: "Family cruise planning",
    intro: "Compare family cruise options from Florida by port, ship, cabin setup, sailing length, and destination.",
    seoCopy: [
      "Family cruises from Florida are easiest to compare when you start with port logistics and ship fit. Port Canaveral is popular for Orlando-area trips, Miami gives families many Bahamas and Caribbean options, and Fort Lauderdale can be useful for longer island routes.",
      "The best family cruise is not always the lowest base fare. Compare cabin capacity, kids clubs, dining style, onboard activities, pool areas, entertainment, gratuities, taxes, port fees, pre-cruise hotels, and transportation before booking.",
      "Use this guide to compare family-friendly cruise searches and related Florida port pages. School breaks and holiday sailings can change availability and pricing, so confirm current fares and cabins with the source."
    ],
    details: [
      "Port Canaveral, Miami, and Fort Lauderdale are useful family cruise ports.",
      "Compare cabin capacity, kids clubs, dining, and total trip cost.",
      "School break pricing and availability can change quickly."
    ],
    heroImage: "/images/family-cruise-pool-deck.webp",
    heroAlt: "Family cruise pool deck for best family cruises from Florida",
    cardIds: ["disney-port-canaveral", "royal-caribbean-bahamas", "carnival-miami-bahamas", "cheap-cruise-search"],
    relatedSlugs: ["family-cruise-deals-florida", "best-cruises-from-port-canaveral", "disney-cruise-deals-florida", "bahamas-cruise-deals"]
  },
  {
    slug: "best-weekend-cruises-from-florida",
    title: "Best Weekend Cruises From Florida | Short Cruise Ideas",
    description: "Compare the best weekend cruises from Florida including short Bahamas sailings, quick getaways, and current search links.",
    h1: "Best Weekend Cruises From Florida",
    eyebrow: "Weekend cruise ideas",
    intro: "Compare weekend cruise ideas from Florida for quick escapes, first-time cruises, couples trips, and flexible dates.",
    seoCopy: [
      "Weekend cruises from Florida are typically short sailings that work for travelers who want a quick getaway without using a full week of vacation. Miami and Port Canaveral are strong starting points, while Fort Lauderdale and Jacksonville can also be useful when ship schedules line up.",
      "A good weekend cruise should fit the full schedule, not just the fare. Compare departure day, return time, port arrival plan, hotel needs, parking, cabin type, taxes, fees, and whether the itinerary gives you enough time to enjoy the ship and destination.",
      "Use this guide to compare weekend-friendly searches and related short cruise pages. Availability can vary by season, holiday, and ship deployment, so confirm current dates and final pricing with the booking source."
    ],
    details: [
      "Weekend cruises often focus on 2-4 night Bahamas or island sailings.",
      "Miami and Port Canaveral are strong starting points.",
      "Check departure and return timing before booking flights or hotels."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset for best weekend cruises from Florida",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "royal-caribbean-bahamas", "vacations-to-go-last-minute"],
    relatedSlugs: ["weekend-cruises-from-florida", "short-cruises-from-florida", "cruises-under-300", "bahamas-cruise-deals"]
  },
  {
    slug: "miami-cruise-port-guide",
    title: "Miami Cruise Port Guide | PortMiami Hotels, Airports & Sailings",
    description: "Plan a PortMiami cruise with tips for airports, hotels, transportation, Bahamas and Caribbean routes, and current Miami cruise searches.",
    h1: "Miami Cruise Port Guide",
    eyebrow: "PortMiami guide",
    intro: "Plan a cruise from PortMiami with airport, hotel, transportation, route, and current sailing guidance.",
    seoCopy: [
      "PortMiami is a major Florida cruise gateway for Bahamas, Caribbean, weekend, family, and premium sailings. It can be a strong fit for travelers who want South Florida route variety and access to Miami hotels before or after the cruise.",
      "Travelers should compare Miami International Airport timing, Fort Lauderdale airport alternatives, downtown or port-area hotels, transfers, traffic, terminal arrival windows, parking, and whether a pre-cruise hotel makes the departure smoother.",
      "Use this guide with Miami cruise search pages to compare current sailings. Cruise fares may change by ship, cabin, taxes, fees, and availability, so confirm final details with the booking source before purchasing."
    ],
    details: [
      "PortMiami is useful for Bahamas, Caribbean, weekend, and premium sailings.",
      "Compare airports, hotels, traffic, transfer time, and terminal arrival windows.",
      "Confirm live fare and cabin details with the source."
    ],
    heroImage: "/images/miami-cruise-port.webp",
    heroAlt: "PortMiami cruise ship and skyline for Miami cruise port guide",
    cardIds: ["carnival-miami-bahamas", "msc-ocean-cay", "ncl-short-bahamas", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-miami", "best-cruises-from-miami", "bahamas-cruise-deals", "miami-vs-port-canaveral-cruises"]
  },
  {
    slug: "port-canaveral-cruise-port-guide",
    title: "Port Canaveral Cruise Port Guide | Orlando Area Planning Tips",
    description: "Plan a Port Canaveral cruise with Orlando airport, hotel, parking, family cruise, Bahamas sailing, and current search tips.",
    h1: "Port Canaveral Cruise Port Guide",
    eyebrow: "Central Florida port guide",
    intro: "Plan a Port Canaveral cruise with Orlando-area hotel, airport, parking, family cruise, and sailing guidance.",
    seoCopy: [
      "Port Canaveral is a major Central Florida cruise port for Bahamas sailings, private island trips, family cruises, and Orlando-area vacations. It can work well for travelers combining a cruise with Cocoa Beach, Orlando, or theme park plans.",
      "Compare Orlando airport timing, coastal hotels, Orlando hotels, rental cars, shuttles, parking, port arrival windows, and whether your family needs extra time before or after sailing. Port Canaveral logistics can be simple, but they still affect the total trip cost.",
      "Use this guide with current Port Canaveral cruise searches and family cruise pages. Fares, cabins, taxes, port expenses, and ship schedules can change, so verify everything with the booking source before buying."
    ],
    details: [
      "Port Canaveral is useful for Orlando-area family cruise planning.",
      "Compare nearby hotels, airport transfers, parking, and arrival timing.",
      "Confirm current ship, route, cabin, and final fare with the source."
    ],
    heroImage: "/images/cruise-port-departure.webp",
    heroAlt: "Cruise ship departing Port Canaveral for a port guide",
    cardIds: ["royal-caribbean-bahamas", "disney-port-canaveral", "first-time-cruise-search", "cheap-cruise-search"],
    relatedSlugs: ["cruises-from-port-canaveral", "best-cruises-from-port-canaveral", "family-cruise-deals-florida", "disney-cruise-deals-florida"]
  },
  {
    slug: "fort-lauderdale-cruise-port-guide",
    title: "Fort Lauderdale Cruise Port Guide | Port Everglades Tips",
    description: "Plan a Fort Lauderdale cruise with Port Everglades tips, airport access, hotels, Caribbean routes, and current sailing searches.",
    h1: "Fort Lauderdale Cruise Port Guide",
    eyebrow: "Port Everglades planning",
    intro: "Plan a Port Everglades cruise with Fort Lauderdale airport, hotel, Caribbean route, and sailing guidance.",
    seoCopy: [
      "Fort Lauderdale's Port Everglades is a strong South Florida cruise gateway for Caribbean sailings, premium ships, longer routes, and travelers who want easy airport access. It can feel more convenient than some larger port plans when the airport, hotel, and terminal timing line up.",
      "Compare Fort Lauderdale-Hollywood airport timing, beach hotels, port-area hotels, ground transportation, parking, departure times, and whether a Miami-area airport or hotel changes the trip economics. Caribbean and premium sailings can vary widely by ship and date.",
      "Use this guide with Fort Lauderdale cruise searches, then verify current fares, cabin availability, taxes, fees, and port expenses with the source before booking."
    ],
    details: [
      "Port Everglades is useful for Caribbean and premium cruise searches.",
      "Compare airport access, hotels, ship style, and sailing length.",
      "Confirm current itinerary, fare, taxes, and cabin availability."
    ],
    heroImage: "/images/fort-lauderdale-cruise-port.webp",
    heroAlt: "Cruise ship departing Port Everglades for Fort Lauderdale cruise guide",
    cardIds: ["princess-fort-lauderdale", "celebrity-luxury-caribbean", "luxury-florida-sailings", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-fort-lauderdale", "caribbean-cruise-deals", "luxury-cruises-from-florida", "best-caribbean-cruises-from-florida"]
  },
  {
    slug: "tampa-cruise-port-guide",
    title: "Tampa Cruise Port Guide | Gulf Coast Sailings & Trip Tips",
    description: "Plan a Tampa cruise with Gulf Coast hotel, airport, Western Caribbean, Mexico route, parking, and current sailing tips.",
    h1: "Tampa Cruise Port Guide",
    eyebrow: "Gulf Coast port guide",
    intro: "Plan a cruise from Tampa with Gulf Coast logistics, Western Caribbean route ideas, hotels, parking, and current search links.",
    seoCopy: [
      "Tampa can be a practical Florida cruise port for Gulf Coast travelers, Central Florida visitors, and anyone comparing Western Caribbean or Mexico-style sailings. Routes and ships can vary by season, so it helps to check current schedules before building the full trip.",
      "Compare Tampa airport timing, downtown or port-area hotels, parking, bridge and bay logistics, transportation, cruise length, and whether a Gulf Coast stay fits before or after sailing. A Tampa cruise can be convenient, but the best value depends on total trip cost.",
      "Use this guide with Tampa cruise searches and Caribbean pages. Confirm ship, cabin, route, taxes, fees, port expenses, and final fare with the booking source."
    ],
    details: [
      "Tampa is useful for Gulf Coast and Western Caribbean cruise searches.",
      "Compare hotels, parking, airport timing, and route availability.",
      "Confirm current ship schedule and final fare details with the source."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset for Tampa cruise port guide",
    cardIds: ["tampa-western-caribbean", "mexico-cruise-search", "cheap-cruise-search", "caribbean-island-search"],
    relatedSlugs: ["cruises-from-tampa", "miami-vs-tampa-cruises", "mexico-cruise-deals", "caribbean-cruise-deals"]
  },
  {
    slug: "jacksonville-cruise-port-guide",
    title: "Jacksonville Cruise Port Guide | North Florida Cruise Tips",
    description: "Plan a Jacksonville cruise with North Florida port tips, Bahamas routes, hotels, parking, and current sailing searches.",
    h1: "Jacksonville Cruise Port Guide",
    eyebrow: "North Florida port guide",
    intro: "Plan a Jacksonville cruise with North Florida logistics, Bahamas route ideas, port-area hotels, and current search links.",
    seoCopy: [
      "Jacksonville can be useful for North Florida, South Georgia, and drive-to-port travelers comparing simple Bahamas or short cruise options. Available sailings may vary, so Jacksonville is best checked alongside other Florida ports when dates are flexible.",
      "Compare driving distance, parking, hotel needs, port arrival timing, ship schedule, route, cabin type, taxes, fees, and port expenses before booking. The convenience of a nearby port can matter as much as the base cruise fare.",
      "Use this guide with Jacksonville cruise searches and Bahamas pages, then confirm current sailings and final prices with the source before purchasing."
    ],
    details: [
      "Jacksonville can be convenient for North Florida and South Georgia travelers.",
      "Compare Bahamas route options, parking, hotels, and arrival timing.",
      "Confirm current availability and final fare with the source."
    ],
    heroImage: "/images/cruise-bow-horizon.webp",
    heroAlt: "Cruise ship bow facing ocean for Jacksonville cruise port guide",
    cardIds: ["jacksonville-bahamas", "cheap-cruise-search", "vacations-to-go-last-minute", "royal-caribbean-bahamas"],
    relatedSlugs: ["cruises-from-jacksonville", "bahamas-cruise-deals", "short-cruises-from-florida", "family-cruise-deals-florida"]
  },
  {
    slug: "weekend-cruise-vs-weeklong-cruise",
    title: "Weekend Cruise vs Weeklong Cruise | Which Trip Fits Better?",
    description: "Compare weekend cruises and weeklong cruises from Florida by cost, schedule, ports, ship time, family fit, and planning needs.",
    h1: "Weekend Cruise vs Weeklong Cruise",
    eyebrow: "Cruise length comparison",
    intro: "Compare short weekend cruises and weeklong sailings by schedule, destination depth, total cost, and traveler fit.",
    seoCopy: [
      "A weekend cruise from Florida can be a smart search for first-time cruisers, couples, Florida residents, and travelers who want a quick reset. These sailings often focus on Bahamas or nearby island routes and can reduce time away from work or school.",
      "A weeklong cruise usually gives travelers more port variety, more ship time, and a fuller vacation rhythm. Caribbean, Mexico, and longer island routes may be better for travelers who want more sea days, excursions, and time to settle into the ship.",
      "Compare base fare, taxes, fees, port expenses, hotel needs, flight timing, port access, and how much vacation time you actually want onboard. The better choice is the one that fits your schedule and full trip cost."
    ],
    details: [
      "Weekend cruises are better for quick escapes and first cruise tests.",
      "Weeklong cruises are better for more ports and ship time.",
      "Compare total cost and timing before choosing."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise at sunset for weekend cruise versus weeklong cruise comparison",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "caribbean-island-search", "celebrity-luxury-caribbean"],
    relatedSlugs: ["weekend-cruises-from-florida", "weekend-vs-weeklong-cruises", "short-cruises-from-florida", "caribbean-cruise-deals"]
  },
  {
    slug: "cruise-vs-resort-vacation",
    title: "Cruise vs Resort Vacation | Florida Trip Planning Comparison",
    description: "Compare cruises and resort vacations for Florida travelers by cost, food, activities, destinations, planning effort, and trip style.",
    h1: "Cruise vs Resort Vacation",
    eyebrow: "Vacation comparison",
    intro: "Compare cruise vacations and resort stays by trip style, total cost, destinations, activities, and planning effort.",
    seoCopy: [
      "A cruise can be useful when you want one cabin, multiple ports, included meals, onboard entertainment, and a clear itinerary. Florida cruises can make Bahamas and Caribbean trips easier to compare because the ship becomes part transportation, part hotel, and part entertainment venue.",
      "A resort vacation can be better when you want one destination, more control over your schedule, beach or pool time without port timing, and a simpler land-based plan. Resorts may work well for travelers who do not want ship schedules or port fees involved in the vacation.",
      "Compare the full cost either way. Cruise travelers should review taxes, fees, gratuities, drinks, excursions, hotels, flights, and port transportation. Resort travelers should compare resort fees, meals, parking, transportation, and activities."
    ],
    details: [
      "Cruises can simplify multi-destination trips.",
      "Resorts can offer more control in one place.",
      "Compare total trip cost, not just the visible base price."
    ],
    heroImage: "/images/luxury-cruise-terrace.webp",
    heroAlt: "Cruise terrace overlooking ocean for cruise versus resort comparison",
    cardIds: ["couples-cruise-search", "luxury-florida-sailings", "caribbean-island-search", "cheap-cruise-search"],
    relatedSlugs: ["what-is-included-on-a-cruise", "best-cruises-for-couples", "luxury-cruises-from-florida", "best-budget-cruises"]
  },
  {
    slug: "inside-cabin-vs-balcony-cabin",
    title: "Inside Cabin vs Balcony Cabin | Cruise Cabin Comparison",
    description: "Compare inside cabins and balcony cabins by cost, comfort, views, itinerary style, and who each cruise cabin type fits best.",
    h1: "Inside Cabin vs Balcony Cabin",
    eyebrow: "Cabin comparison",
    intro: "Compare inside cabins and balcony cabins before choosing a Florida cruise fare.",
    seoCopy: [
      "Inside cabins are often useful for budget-focused cruisers, short sailings, and travelers who expect to spend most of their time around the ship or in port. They can help keep the base fare lower, but final cost still depends on taxes, fees, port expenses, gratuities, and availability.",
      "Balcony cabins can be worth comparing for longer Caribbean sailings, couples trips, scenic routes, or travelers who value private outdoor space. A balcony may improve comfort, but it can also raise the total price significantly depending on ship and date.",
      "Before choosing a cabin, compare cruise length, sea days, destination, party size, motion sensitivity, sleeping preferences, and total trip cost. Always verify cabin location, restrictions, and fare rules with the booking source."
    ],
    details: [
      "Inside cabins can work for budget and short cruise searches.",
      "Balcony cabins may be better for longer or scenic sailings.",
      "Confirm cabin location, fare rules, taxes, and availability."
    ],
    heroImage: "/images/cruise-deck-ocean.webp",
    heroAlt: "Cruise deck ocean view for inside cabin versus balcony cabin comparison",
    cardIds: ["cheap-cruise-search", "couples-cruise-search", "caribbean-island-search", "luxury-florida-sailings"],
    relatedSlugs: ["cheap-cruises-from-florida", "cruises-under-300", "what-is-included-on-a-cruise", "best-budget-cruises"]
  },
  {
    slug: "summer-cruises-from-florida",
    title: "Summer Cruises From Florida | Bahamas, Caribbean & Family Trips",
    description: "Compare summer cruises from Florida including Bahamas sailings, Caribbean routes, family trips, school break planning, and current searches.",
    h1: "Summer Cruises From Florida",
    eyebrow: "Seasonal cruise ideas",
    intro: "Compare summer cruise ideas from Florida for families, school breaks, Bahamas trips, and Caribbean vacations.",
    seoCopy: [
      "Summer cruises from Florida can be popular for families, school breaks, and warm-weather island vacations. Miami, Port Canaveral, Fort Lauderdale, and Tampa are all worth comparing because routes and ship schedules can differ through the season.",
      "Summer planning should account for demand, hurricane-season awareness, travel insurance decisions, hotel needs, flights, taxes, fees, port expenses, and cabin availability. Family cabins and popular ships can change price quickly.",
      "Use this page to compare summer cruise searches, then confirm live sailing dates, final fare, and itinerary details with the booking source before booking."
    ],
    details: [
      "Summer is popular for families and school breaks.",
      "Compare Bahamas, Caribbean, and short cruise options.",
      "Confirm weather policies, fare rules, taxes, and availability."
    ],
    heroImage: "/images/bahamas-cruise-beach.webp",
    heroAlt: "Sunny Bahamas beach for summer cruises from Florida",
    cardIds: ["disney-port-canaveral", "royal-caribbean-bahamas", "caribbean-island-search", "cheap-cruise-search"],
    relatedSlugs: ["family-cruise-deals-florida", "bahamas-cruise-deals", "caribbean-cruise-deals", "cheap-summer-cruises"]
  },
  {
    slug: "winter-cruises-from-florida",
    title: "Winter Cruises From Florida | Warm Bahamas & Caribbean Ideas",
    description: "Compare winter cruises from Florida including warm Bahamas sailings, Caribbean routes, holiday travel, and current cruise searches.",
    h1: "Winter Cruises From Florida",
    eyebrow: "Warm-weather cruise ideas",
    intro: "Compare winter cruise ideas from Florida for warm-weather escapes, Bahamas sailings, Caribbean routes, and holiday travel planning.",
    seoCopy: [
      "Winter cruises from Florida can be appealing for travelers who want warm-weather escapes without leaving from a cold-weather port. Florida departures can include Bahamas, Caribbean, Mexico, private island, family, and premium sailings depending on ship schedules.",
      "Winter demand can rise around holidays, school breaks, and peak travel periods. Compare flight costs, pre-cruise hotels, cabin availability, taxes, port expenses, and final fare before deciding that a sailing is a good value.",
      "Use this page to compare winter cruise searches and related Florida cruise guides, then verify current pricing and availability with the booking source."
    ],
    details: [
      "Winter cruises can be useful for warm-weather escapes.",
      "Holiday periods may affect fare and cabin availability.",
      "Confirm current pricing, hotels, flights, and itinerary details."
    ],
    heroImage: "/images/caribbean-island-beach.webp",
    heroAlt: "Caribbean beach for winter cruises from Florida",
    cardIds: ["caribbean-island-search", "celebrity-luxury-caribbean", "msc-ocean-cay", "tampa-western-caribbean"],
    relatedSlugs: ["caribbean-cruise-deals", "bahamas-cruise-deals", "holiday-cruises-from-florida", "luxury-cruises-from-florida"]
  },
  {
    slug: "spring-break-cruises",
    title: "Spring Break Cruises From Florida | Family & Short Cruise Ideas",
    description: "Compare spring break cruises from Florida including family sailings, short Bahamas cruises, Caribbean routes, and planning tips.",
    h1: "Spring Break Cruises From Florida",
    eyebrow: "School break cruise ideas",
    intro: "Compare spring break cruise ideas from Florida for families, students, and travelers watching school-break dates.",
    seoCopy: [
      "Spring break cruises from Florida can be popular because families and flexible travelers are often looking for simple warm-weather trips. Bahamas, Caribbean, and short cruise options from Miami and Port Canaveral are common starting points.",
      "Spring break pricing and availability can change quickly because many travelers are searching the same windows. Compare cabin capacity, ship style, taxes, fees, port expenses, hotel rates, flight costs, and final booking terms before committing.",
      "Use this page to compare spring break cruise searches, then check the source for current dates, cabins, and total cost."
    ],
    details: [
      "Spring break can be busy for family cruise searches.",
      "Compare short Bahamas and Caribbean options from multiple ports.",
      "Confirm cabin capacity, taxes, fees, and final fare."
    ],
    heroImage: "/images/family-cruise-pool-deck.webp",
    heroAlt: "Family cruise pool deck for spring break cruises from Florida",
    cardIds: ["disney-port-canaveral", "carnival-miami-bahamas", "royal-caribbean-bahamas", "ncl-short-bahamas"],
    relatedSlugs: ["family-cruise-deals-florida", "best-family-cruises-from-florida", "weekend-cruises-from-florida", "bahamas-cruise-deals"]
  },
  {
    slug: "holiday-cruises-from-florida",
    title: "Holiday Cruises From Florida | Bahamas & Caribbean Planning",
    description: "Compare holiday cruises from Florida including Bahamas sailings, Caribbean trips, family cruise ideas, and current seasonal searches.",
    h1: "Holiday Cruises From Florida",
    eyebrow: "Holiday cruise planning",
    intro: "Compare holiday cruise ideas from Florida for families, couples, and warm-weather seasonal trips.",
    seoCopy: [
      "Holiday cruises from Florida can be useful for travelers who want a built-in itinerary, warm-weather ports, and a festive trip without planning every meal and activity separately. Miami, Port Canaveral, Fort Lauderdale, and Tampa can all be worth comparing.",
      "Holiday sailings may price differently because demand, family cabins, school breaks, and flights can all affect the total trip cost. Compare the cruise fare, taxes, port expenses, gratuities, hotels, flights, transfers, and cancellation rules.",
      "Use this page to compare holiday cruise searches and related seasonal pages. Confirm current fares, cabin availability, and itinerary details with the booking source."
    ],
    details: [
      "Holiday cruises can be popular for families and warm-weather trips.",
      "Compare flights, hotels, cabins, taxes, fees, and cancellation rules.",
      "Confirm current availability before booking."
    ],
    heroImage: "/images/private-island-cruise.webp",
    heroAlt: "Private island cruise for holiday cruises from Florida",
    cardIds: ["royal-caribbean-bahamas", "disney-port-canaveral", "caribbean-island-search", "celebrity-luxury-caribbean"],
    relatedSlugs: ["winter-cruises-from-florida", "family-cruise-deals-florida", "bahamas-cruise-deals", "caribbean-cruise-deals"]
  },
  {
    slug: "memorial-day-cruises",
    title: "Memorial Day Cruises From Florida | Weekend Cruise Ideas",
    description: "Compare Memorial Day cruises from Florida including weekend sailings, Bahamas escapes, family trips, and current cruise searches.",
    h1: "Memorial Day Cruises From Florida",
    eyebrow: "Long weekend cruise ideas",
    intro: "Compare Memorial Day cruise ideas from Florida for long-weekend sailings, Bahamas escapes, and family trips.",
    seoCopy: [
      "Memorial Day cruise searches often focus on short sailings, Bahamas routes, and long-weekend travel windows from Florida ports. Miami and Port Canaveral are common starting points, but Fort Lauderdale and Jacksonville can also be useful to compare.",
      "Long-weekend sailings can be convenient, but demand may affect pricing and cabin availability. Compare departure and return timing, hotel needs, parking, taxes, fees, port expenses, and whether the cruise fits your actual weekend schedule.",
      "Use this page to compare Memorial Day cruise ideas, then confirm current sailings and final prices with the booking source."
    ],
    details: [
      "Memorial Day searches often focus on short and Bahamas cruises.",
      "Compare timing, hotels, parking, taxes, fees, and cabin availability.",
      "Confirm current fares directly with the source."
    ],
    heroImage: "/images/cruise-sunset-sea.webp",
    heroAlt: "Cruise ship at sunset for Memorial Day cruises from Florida",
    cardIds: ["ncl-short-bahamas", "msc-ocean-cay", "royal-caribbean-bahamas", "vacations-to-go-last-minute"],
    relatedSlugs: ["weekend-cruises-from-florida", "best-weekend-cruises-from-florida", "bahamas-cruise-deals", "cruises-under-300"]
  },
  {
    slug: "cheap-summer-cruises",
    title: "Cheap Summer Cruises From Florida | Budget Cruise Searches",
    description: "Compare cheap summer cruises from Florida with flexible dates, short Bahamas sailings, family trip tips, and current fare searches.",
    h1: "Cheap Summer Cruises From Florida",
    eyebrow: "Summer value searches",
    intro: "Compare budget-focused summer cruise searches from Florida with flexible date, cabin, and port guidance.",
    seoCopy: [
      "Cheap summer cruises from Florida are usually easiest to compare when travelers can be flexible by date, cabin category, sailing length, and departure port. Short Bahamas routes, inside cabins, and alternate ports can be worth checking when available.",
      "Summer demand can be high for family travel, so the lowest base fare may not reflect the full trip cost. Compare taxes, fees, port expenses, gratuities, flights, hotels, parking, and transportation before booking.",
      "Use this page to compare current summer value searches and related budget cruise guides. Fares may change quickly, so verify final pricing with the booking source."
    ],
    details: [
      "Flexible dates and cabins can help summer budget searches.",
      "Compare multiple Florida ports and short cruise options.",
      "Confirm taxes, fees, hotels, flights, and total trip cost."
    ],
    heroImage: "/images/cruise-deck-ocean.webp",
    heroAlt: "Cruise deck ocean view for cheap summer cruises from Florida",
    cardIds: ["cheap-cruise-search", "ncl-short-bahamas", "carnival-miami-bahamas", "vacations-to-go-last-minute"],
    relatedSlugs: ["summer-cruises-from-florida", "cheap-cruises-from-florida", "cruises-under-300", "best-budget-cruises"]
  }
];

export const cruiseSeoPages = [...coreCruiseSeoPages, ...authorityCruiseSeoPages, ...v2CruiseSeoPages];

export const popularCruiseSearches = [
  { label: "Cruises From Miami", href: "/cruises-from-miami" },
  { label: "Cruises From Port Canaveral", href: "/cruises-from-port-canaveral" },
  { label: "Cruises From Fort Lauderdale", href: "/cruises-from-fort-lauderdale" },
  { label: "Best Cruises From Florida", href: "/best-cruises-from-florida" },
  { label: "Bahamas Cruise Deals", href: "/bahamas-cruise-deals" },
  { label: "Caribbean Cruise Deals", href: "/caribbean-cruise-deals" },
  { label: "Weekend Cruises From Florida", href: "/weekend-cruises-from-florida" },
  { label: "Family Cruise Deals", href: "/family-cruise-deals-florida" },
  { label: "Cruises Under $300", href: "/cruises-under-300" },
  { label: "Miami Cruise Port Guide", href: "/miami-cruise-port-guide" },
  { label: "Port Canaveral Cruise Port Guide", href: "/port-canaveral-cruise-port-guide" }
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
    },
    {
      question: "Which Caribbean routes can I compare from Florida?",
      answer:
        "Current searches may include Eastern Caribbean, Western Caribbean, Southern Caribbean, Mexico, Belize, private island, and longer island itineraries depending on ship schedules."
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
        question: `Who is ${page.h1} best for?`,
        answer:
          `${page.h1} is useful for travelers comparing Florida cruise options by port, destination, sailing length, budget, and trip style before checking current fares with the source.`
      },
      {
        question: `What should I compare before booking ${page.h1.toLowerCase()}?`,
        answer:
          "Compare departure port, cruise line, ship, destination, number of nights, cabin type, taxes, fees, port expenses, hotel needs, and transportation before booking."
      },
      {
        question: "How often can cruise fares change?",
        answer:
          "Cruise fares may change at any time based on ship, date, cabin, demand, and availability."
      },
      {
        question: "Are these fixed cruise prices or guaranteed availability?",
        answer:
          "No. These are curated cruise searches and featured sailing links. Always check current fares directly before booking."
      }
    ]
  );
}
