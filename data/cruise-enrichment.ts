export const cruisePorts = [
  {
    name: "Miami",
    slug: "miami",
    region: "South Florida",
    portName: "PortMiami",
    commonDestinations: ["Bahamas", "Eastern Caribbean", "Western Caribbean", "Bimini"],
    usefulFor: ["weekend cruises", "Bahamas escapes", "Caribbean sailings"],
    trustNote: "Availability varies by cruise line, ship, and sailing date."
  },
  {
    name: "Port Canaveral",
    slug: "port-canaveral",
    region: "Central Florida",
    portName: "Port Canaveral",
    commonDestinations: ["Bahamas", "CocoCay", "Caribbean", "Castaway Cay"],
    usefulFor: ["family cruises", "Orlando-area sailings", "short Bahamas trips"],
    trustNote: "Fares may change around school breaks, holidays, and close-in dates."
  },
  {
    name: "Fort Lauderdale",
    slug: "fort-lauderdale",
    region: "South Florida",
    portName: "Port Everglades",
    commonDestinations: ["Eastern Caribbean", "Southern Caribbean", "Bahamas", "Grand Cayman"],
    usefulFor: ["premium cruises", "longer Caribbean routes", "winter sailings"],
    trustNote: "Check current fare rules, taxes, fees, and port expenses before booking."
  },
  {
    name: "Tampa",
    slug: "tampa",
    region: "Gulf Coast",
    portName: "Port Tampa Bay",
    commonDestinations: ["Western Caribbean", "Cozumel", "Costa Maya", "Belize"],
    usefulFor: ["Gulf Coast departures", "Mexico routes", "Western Caribbean trips"],
    trustNote: "Available sailings vary by season and ship deployment."
  },
  {
    name: "Jacksonville",
    slug: "jacksonville",
    region: "North Florida",
    portName: "JAXPORT Cruise Terminal",
    commonDestinations: ["Bahamas", "Nassau", "Princess Cays", "Freeport"],
    usefulFor: ["North Florida departures", "Bahamas cruises", "drive-to-port trips"],
    trustNote: "Check current sailings because route options can be limited by schedule."
  }
];

export const cruiseDestinations = [
  {
    name: "Bahamas",
    slug: "bahamas",
    commonPorts: ["Miami", "Port Canaveral", "Fort Lauderdale", "Jacksonville"],
    sailingLengths: ["3 nights", "4 nights", "5 nights"],
    termsNote: "Taxes, fees, and port expenses may apply."
  },
  {
    name: "Caribbean",
    slug: "caribbean",
    commonPorts: ["Miami", "Fort Lauderdale", "Port Canaveral", "Tampa"],
    sailingLengths: ["5 nights", "6 nights", "7 nights", "8+ nights"],
    termsNote: "Availability varies by sailing and cruise line."
  },
  {
    name: "Weekend Cruises",
    slug: "weekend",
    commonPorts: ["Miami", "Port Canaveral", "Fort Lauderdale"],
    sailingLengths: ["2 nights", "3 nights", "4 nights"],
    termsNote: "Weekend-friendly dates can sell quickly."
  },
  {
    name: "Family Cruises",
    slug: "family",
    commonPorts: ["Port Canaveral", "Miami", "Fort Lauderdale"],
    sailingLengths: ["3 nights", "4 nights", "7 nights"],
    termsNote: "Family cabin availability varies by ship and date."
  }
];

export const cruiseLineOptions = [
  "Royal Caribbean",
  "Carnival",
  "Disney Cruise Line",
  "MSC Cruises",
  "Norwegian Cruise Line",
  "Princess Cruises",
  "Celebrity Cruises",
  "Holland America"
];

export const sailingLengthOptions = ["2-4 nights", "5-6 nights", "7 nights", "8+ nights"];
export const dealCategoryOptions = ["Bahamas", "Caribbean", "Family", "Weekend", "Under $299", "Last Minute", "Luxury"];
