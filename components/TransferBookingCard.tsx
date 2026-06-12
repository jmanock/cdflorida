"use client";

import { ArrowRight, Car } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getTransferAffiliateUrl } from "@/lib/revenuePartners";

export function TransferBookingCard({ slug, title = "Need Transportation To The Port?" }: { slug: string; title?: string }) {
  const href = getTransferAffiliateUrl("cruisedealsflorida.org", slug);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <Car className="h-7 w-7 text-ocean" aria-hidden="true" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">Airport and port transfers</p>
      <h3 className="mt-2 text-2xl font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-slateText">
        Compare airport, hotel, and cruise-port transfer options, then confirm pickup details and timing before sailing.
      </p>
      <a
        className="btn btn-secondary mt-6 px-5"
        href={href}
        rel="sponsored"
        onClick={() => trackEvent("transfer_click", { affiliate: "airport_transfer_portal", category: "airport_transfer", page_path: window.location.pathname, outbound_url: href })}
      >
        Compare Airport Transfers <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <p className="mt-3 text-xs font-bold leading-5 text-slateText">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
    </article>
  );
}
