import { NextResponse } from "next/server";
import { getLatestDeals } from "@/lib/deals";

export async function GET() {
  const deals = await getLatestDeals();
  return NextResponse.json({ deals, refreshedAt: new Date().toISOString() });
}
