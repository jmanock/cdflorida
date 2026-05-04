export function getBookingLink(url: string) {
  return url;
}

const portHotelSearchUrls: Record<string, string> = {
  Miami: "https://www.booking.com/searchresults.html?ss=Miami",
  "Port Canaveral": "https://www.booking.com/searchresults.html?ss=Port+Canaveral",
  "Fort Lauderdale": "https://www.booking.com/searchresults.html?ss=Fort+Lauderdale",
  Tampa: "https://www.booking.com/searchresults.html?ss=Tampa",
  Jacksonville: "https://www.booking.com/searchresults.html?ss=Jacksonville+Florida"
};

const portHotelLabels: Record<string, string> = {
  Miami: "PortMiami hotels",
  "Port Canaveral": "Port Canaveral hotels",
  "Fort Lauderdale": "Fort Lauderdale pre-cruise hotels",
  Tampa: "Tampa cruise port hotels",
  Jacksonville: "Jacksonville cruise hotels"
};

export function getPortHotelBookingLink(port?: string) {
  const normalizedPort = port && portHotelSearchUrls[port] ? port : "Miami";

  return {
    port: normalizedPort,
    label: portHotelLabels[normalizedPort],
    url: getBookingLink(portHotelSearchUrls[normalizedPort])
  };
}
