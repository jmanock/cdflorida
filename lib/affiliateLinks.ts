export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";

export type ExpediaDestinationKey =
  | "miami"
  | "portCanaveral"
  | "fortLauderdale"
  | "tampa"
  | "jacksonville";

const expediaHotelDeepLinks: Record<ExpediaDestinationKey, string> = {
  // Future Expedia Creator Hub hotel deep links go here.
  miami: "EXPEDIA_DEEP_LINK_FOR_MIAMI_HOTELS",
  portCanaveral: "EXPEDIA_DEEP_LINK_FOR_PORT_CANAVERAL_HOTELS",
  fortLauderdale: "EXPEDIA_DEEP_LINK_FOR_FORT_LAUDERDALE_HOTELS",
  tampa: "EXPEDIA_DEEP_LINK_FOR_TAMPA_HOTELS",
  jacksonville: "EXPEDIA_DEEP_LINK_FOR_JACKSONVILLE_HOTELS"
};

const expediaPortLabels: Record<ExpediaDestinationKey, string> = {
  miami: "PortMiami hotels",
  portCanaveral: "Port Canaveral hotels",
  fortLauderdale: "Port Everglades hotels",
  tampa: "Tampa cruise port hotels",
  jacksonville: "Jacksonville cruise port hotels"
};

const expediaPortCtas: Record<ExpediaDestinationKey, string> = {
  miami: "Find Hotels Near PortMiami",
  portCanaveral: "Find Hotels Near Port Canaveral",
  fortLauderdale: "Find Hotels Near Port Everglades",
  tampa: "Find Hotels Near Tampa Cruise Port",
  jacksonville: "Find Hotels Near Jacksonville Cruise Port"
};

export function getExpediaHotelLink(destination: string) {
  const links: Record<string, string> = {
    miami: normalizeExpediaLink(expediaHotelDeepLinks.miami),
    portCanaveral: normalizeExpediaLink(expediaHotelDeepLinks.portCanaveral),
    fortLauderdale: normalizeExpediaLink(expediaHotelDeepLinks.fortLauderdale),
    tampa: normalizeExpediaLink(expediaHotelDeepLinks.tampa),
    jacksonville: normalizeExpediaLink(expediaHotelDeepLinks.jacksonville)
  };

  return links[destination] ?? EXPEDIA_AFFILIATE_BASE;
}

export function getExpediaPortHotelLink(port?: string) {
  const destinationKey = getExpediaDestinationKey(port);

  return {
    destinationKey,
    label: expediaPortLabels[destinationKey],
    cta: expediaPortCtas[destinationKey],
    url: getExpediaHotelLink(destinationKey)
  };
}

export function getExpediaDestinationKey(port?: string): ExpediaDestinationKey {
  const normalized = port?.toLowerCase() ?? "";

  if (normalized.includes("canaveral")) return "portCanaveral";
  if (normalized.includes("fort lauderdale") || normalized.includes("everglades")) return "fortLauderdale";
  if (normalized.includes("tampa")) return "tampa";
  if (normalized.includes("jacksonville")) return "jacksonville";

  return "miami";
}

function normalizeExpediaLink(url: string) {
  return url.startsWith("http") ? url : EXPEDIA_AFFILIATE_BASE;
}
