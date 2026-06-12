"use client";

import { ArrowRight, BedDouble } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { EXPEDIA_GENERAL_AFFILIATE_URL } from "@/lib/revenuePartners";

export function TravelBookingCard() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <BedDouble className="h-7 w-7 text-ocean" aria-hidden="true" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">Pre-cruise travel</p>
      <h3 className="mt-2 text-2xl font-black text-ink">Compare A Complete Pre-Cruise Stay</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-slateText">
        Search hotels and other trip options before committing to the full cruise vacation.
      </p>
      <a
        className="btn btn-secondary mt-6 px-5"
        href={EXPEDIA_GENERAL_AFFILIATE_URL}
        rel="sponsored"
        onClick={() => trackEvent("expedia_click", { affiliate: "expedia", category: "travel_booking", page_path: window.location.pathname, outbound_url: EXPEDIA_GENERAL_AFFILIATE_URL })}
      >
        Compare Travel Options <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <p className="mt-3 text-xs font-bold leading-5 text-slateText">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
    </article>
  );
}
