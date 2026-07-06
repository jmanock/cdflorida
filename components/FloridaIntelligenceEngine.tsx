"use client";

import { useMemo, useState } from "react";
import { Anchor, ArrowRight, CheckCircle2, Hotel, Luggage, Search, Wifi } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cruiseTravelEssentials } from "@/lib/travelEssentials";
import { SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL, getTransferAffiliateUrl } from "@/lib/revenuePartners";

const rel = "sponsored noopener noreferrer";

function track(event: string, payload: Record<string, string | number>) {
  trackEvent(event, {
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...payload
  });
}

function portFromSlug(slug: string) {
  if (slug.includes("port-canaveral")) return "Port Canaveral";
  if (slug.includes("miami")) return "Miami";
  if (slug.includes("tampa")) return "Tampa";
  if (slug.includes("jacksonville")) return "Jacksonville";
  if (slug.includes("fort-lauderdale")) return "Fort Lauderdale";
  return "Florida";
}

export function FloridaIntelligenceEngine({ slug }: { slug: string }) {
  const [stage, setStage] = useState("Comparing");
  const port = portFromSlug(slug);
  const essentials = useMemo(() => cruiseTravelEssentials.slice(0, 3), []);
  const progress = [
    ["Departure port chosen", port !== "Florida"],
    ["Cruise length compared", slug.includes("weekend") || slug.includes("day")],
    ["Pre-cruise hotel planned", false],
    ["Transfer or parking planned", false],
    ["eSIM and luggage checked", false],
    ["Port activities picked", false]
  ] as const;
  const percent = Math.round((progress.filter(([, done]) => done).length / progress.length) * 100);
  const recommendations = [
    ["Port hotel before sailing", "Add a hotel buffer near the port so embarkation morning is easier.", ZENHOTELS_AFFILIATE_URL, "Compare port hotels", "hotel", true],
    ["Luxury pre-cruise stay", "Useful for anniversary, family milestone, or premium cruise weekends.", SKYLARK_HOME_AFFILIATE_URL, "Explore luxury hotels", "luxury_hotel", true],
    ["Airport transfer plan", "Reserve airport-to-port transportation before the arrival-day scramble.", getTransferAffiliateUrl("cruisedealsflorida", slug), "Plan transfers", "transportation", true],
    ["Bahamas cruise guide", "Compare Bahamas routes, private islands, and short-cruise timing.", "/best-bahamas-cruises-from-florida", "Read guide", "cruise_guide", false],
    ["Cruise packing essentials", "Handle luggage, eSIM, documents, and port-day gear before sailing.", "/florida-cruise-packing-essentials", "Open checklist", "packing", false],
    ["Florida vacation packages", "Connect the cruise with flights, hotels, and attractions.", "https://floridadealshub.com/vacation-packages", "Build package", "package", false]
  ] as const;
  const searches = ["Weekend cruises from Florida", "Bahamas cruises from Florida", "Port Canaveral cruises", "Cruises from Miami", "Cruise packing essentials"];
  const seasonal = [
    ["Summer", "Watch hurricane-season flexibility, indoor port-day backups, and family schedules."],
    ["Fall", "Shoulder-season cruises can pair well with lower hotel demand."],
    ["Winter", "Holiday sailings and snowbird travel make port hotels important."],
    ["Spring", "Spring break cruises need earlier hotel, transfer, and parking planning."]
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="cruise-intelligence-title">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Florida Intelligence Engine</p>
            <h2 id="cruise-intelligence-title" className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Continue planning around your {port} cruise.
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">
              Cruise planning is more than the sailing: hotel buffer, transfers, parking, packing, eSIM, and port activities all affect the real trip.
            </p>
          </div>
          <div className="rounded-2xl bg-sky-50 px-5 py-4 text-sm font-black text-ink">Trip planning: {percent}% complete</div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-sand p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Trip Planning Progress</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-ocean" style={{ width: `${percent}%` }} /></div>
            <div className="mt-5 grid gap-3">
              {progress.map(([item, done]) => (
                <div className="flex items-center gap-3 text-sm font-bold text-ink" key={item}>
                  <CheckCircle2 className={`h-5 w-5 ${done ? "text-ocean" : "text-slate-300"}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-black text-white" href="https://floridadealshub.com/cruise-packages" onClick={() => track("trip_progress_click", { cta_text: "Finish Cruise Plan", destination: port })}>
              Finish Cruise Plan <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map(([title, description, href, label, category, affiliate]) => (
              <a className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50" href={href} target={affiliate ? "_blank" : undefined} rel={affiliate ? rel : undefined} key={title} onClick={() => track(affiliate ? "affiliate_click" : "recommendation_click", { cta_text: label, category, destination: port, outbound_url: href })}>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-ocean">{category}</p>
                <h3 className="mt-3 text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">{label}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Where are you in planning?</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Dreaming", "Comparing", "Booking", "Preparing", "Traveling"].map((item) => (
                <button className={`rounded-full px-4 py-2 text-sm font-black transition ${stage === item ? "bg-ink text-white" : "bg-sand text-ink hover:bg-sky-50"}`} key={item} type="button" onClick={() => { setStage(item); track("planning_stage_change", { destination: port, category: item.toLowerCase() }); }}>
                  {item}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-slateText">
              {stage === "Booking" ? "Check taxes, cabin rules, port hotel timing, transportation, and parking before the fare gets too distracting." : stage === "Preparing" ? "Now handle documents, eSIM, luggage, transfer confirmations, and port-day backups." : "Compare ports, nights, destinations, and pre-cruise hotel needs before choosing a sailing."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-sand p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Travel essentials</p>
            <div className="mt-4 grid gap-3">
              {essentials.map((item) => (
                <a className="rounded-2xl bg-white p-4 text-sm font-bold text-ink transition hover:text-ocean" href={item.affiliateUrl} target="_blank" rel={rel} key={item.title} onClick={() => track("travel_essential_click", { advertiser: item.advertiser, category: item.category, cta_text: item.cta, outbound_url: item.affiliateUrl })}>
                  {item.title}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold leading-5 text-slateText">Some links may be sponsored. We may earn a commission at no extra cost to you.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Search this topic</p>
            <div className="mt-4 grid gap-2">
              {searches.map((item) => (
                <a className="inline-flex items-center gap-2 rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink hover:bg-sky-50 hover:text-ocean" href={`/search?q=${encodeURIComponent(item)}`} key={item} onClick={() => track("search_suggestion_click", { cta_text: item, destination: port })}>
                  <Search className="h-4 w-4" /> {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Seasonal intelligence</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {seasonal.map(([title, copy]) => (
                <div className="rounded-2xl bg-white p-4" key={title}>
                  <p className="font-black text-ink">{title}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise travel feed</p>
            <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slateText">
              <p className="flex gap-2"><Anchor className="h-5 w-5 text-ocean" /> Watch port timing, terminal updates, and hotel buffers.</p>
              <p className="flex gap-2"><Hotel className="h-5 w-5 text-ocean" /> Pre-cruise hotel inventory matters on holiday weekends.</p>
              <p className="flex gap-2"><Wifi className="h-5 w-5 text-ocean" /> Bahamas, Mexico, and Caribbean trips may need eSIM planning.</p>
              <p className="flex gap-2"><Luggage className="h-5 w-5 text-ocean" /> Weekend cruises reward compact luggage and a port-day bag.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
