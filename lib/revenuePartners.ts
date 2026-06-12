export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";

export const EXPEDIA_GENERAL_AFFILIATE_URL =
  "https://expedia.com/affiliates/expedia-home.DHcy34V";

export const transferAndTravelSlugs = new Set([
  "weekend-cruises-from-florida",
  "best-bahamas-cruises-from-florida",
  "bahamas-cruises-from-port-canaveral",
  "summer-cruises-from-florida",
  "cruises-from-jacksonville",
  "luxury-cruises-from-florida",
  "florida-cruise-packing-essentials"
]);

export function getTransferAffiliateUrl(site: string, slug: string) {
  return `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
}
