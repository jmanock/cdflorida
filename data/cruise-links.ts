type CruiseSearchUrlInput = {
  port?: string;
  destination?: string;
  cruiseLine?: string;
  nights?: number;
};

const officialCruiseLineUrls: Record<string, string> = {
  "Royal Caribbean": "https://www.royalcaribbean.com/cruise-search",
  Carnival: "https://www.carnival.com/cruise-search",
  "Disney Cruise Line": "https://disneycruise.disney.go.com/cruises-destinations/list/",
  "MSC Cruises": "https://www.msccruisesusa.com/cruise-deals",
  "Norwegian Cruise Line": "https://www.ncl.com/cruise-deals",
  "Princess Cruises": "https://www.princess.com/cruise-search/",
  "Celebrity Cruises": "https://www.celebritycruises.com/cruise-search",
  "Holland America": "https://www.hollandamerica.com/en/us/find-a-cruise"
};

export const cruiseAffiliateLinks = {
  cruiseDirect: "https://www.cruisedirect.com/",
  cruiseDirectCaribbean: "https://www.cruisedirect.com/destination/caribbean-cruises",
  cruiseCritic: "https://www.cruisecritic.com/",
  expediaCruises: "https://www.expedia.com/Cruises",
  vacationsToGo: "https://www.vacationstogo.com/",
  officialCruiseLineUrls
};

export function getCruiseSearchUrl({ cruiseLine, destination, nights }: CruiseSearchUrlInput) {
  if (cruiseLine && officialCruiseLineUrls[cruiseLine]) {
    return officialCruiseLineUrls[cruiseLine];
  }

  if (destination?.toLowerCase().includes("caribbean")) {
    return cruiseAffiliateLinks.cruiseDirectCaribbean;
  }

  if (nights && nights <= 4) {
    return cruiseAffiliateLinks.vacationsToGo;
  }

  return cruiseAffiliateLinks.expediaCruises;
}
