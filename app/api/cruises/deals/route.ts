import { NextResponse } from "next/server";
import { cruiseDeals } from "@/data/deals";
import { getLatestDeals } from "@/lib/deals";

export const runtime = "nodejs";
export const revalidate = 43200;

function toApiDeal(deal: (typeof cruiseDeals)[number]) {
  return {
    cruiseLine: deal.cruiseLine,
    shipName: deal.shipName,
    destination: deal.destination,
    departurePort: deal.departurePort,
    nights: deal.nights,
    priceText: deal.priceText ?? `fares from $${deal.startingPrice}`,
    dates: deal.dates ?? deal.dateLabel ?? `Sails ${deal.sailDate}`,
    badge: deal.badge ?? (deal.startingPrice < 299 ? "Under $299" : deal.category),
    image: deal.image,
    bookingUrl: deal.bookingUrl ?? deal.dealUrl,
    source: deal.source ?? "curated_static",
    lastUpdated: deal.lastUpdated ?? deal.lastChecked,
    termsNote: deal.termsNote ?? "Cruise fares may change. Taxes, fees, and port expenses may apply."
  };
}

export async function GET() {
  try {
    const deals = await getLatestDeals();

    return NextResponse.json(
      {
        source: "curated_static_or_supabase",
        cachedFor: "12 hours",
        deals: deals.map(toApiDeal)
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400"
        }
      }
    );
  } catch {
    return NextResponse.json(
      {
        source: "static_fallback",
        cachedFor: "12 hours",
        deals: cruiseDeals.map(toApiDeal)
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400"
        }
      }
    );
  }
}
