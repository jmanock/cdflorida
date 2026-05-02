import { NextResponse } from "next/server";
import { cruiseDestinations } from "@/data/cruise-enrichment";

export const runtime = "nodejs";
export const revalidate = 43200;

export async function GET() {
  return NextResponse.json(
    {
      source: "static_fallback",
      cachedFor: "12 hours",
      destinations: cruiseDestinations
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400"
      }
    }
  );
}
