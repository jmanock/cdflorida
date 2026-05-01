"use client";

import { RefreshCw } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { DealCard } from "@/components/DealCard";
import { trackEvent } from "@/lib/analytics";
import type { CruiseDeal, DealFilter } from "@/types/deal";

const filters: DealFilter[] = [
  "All Cruises",
  "Miami",
  "Port Canaveral",
  "Tampa",
  "Fort Lauderdale",
  "Jacksonville",
  "Bahamas",
  "Caribbean",
  "Family",
  "Weekend",
  "Under $299"
];

const filterSlugs: Record<DealFilter, string> = {
  "All Cruises": "all-cruises",
  Miami: "miami",
  "Port Canaveral": "port-canaveral",
  Tampa: "tampa",
  "Fort Lauderdale": "fort-lauderdale",
  Jacksonville: "jacksonville",
  Bahamas: "bahamas",
  Caribbean: "caribbean",
  Family: "family-cruises",
  Weekend: "weekend-cruises",
  "Under $299": "under-299"
};

export function DealList({ initialDeals }: { initialDeals: CruiseDeal[] }) {
  const [deals, setDeals] = useState(initialDeals);
  const [activeFilter, setActiveFilter] = useState<DealFilter>("All Cruises");
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      if (activeFilter === "All Cruises") return true;
      if (activeFilter === "Under $299") return deal.startingPrice < 299;
      if (activeFilter === "Bahamas") return deal.destination.toLowerCase().includes("bahamas") || deal.destination.toLowerCase().includes("nassau") || deal.destination.toLowerCase().includes("cococay") || deal.destination.toLowerCase().includes("bimini");
      if (activeFilter === "Caribbean") return deal.destination.toLowerCase().includes("caribbean") || deal.destination.toLowerCase().includes("cozumel") || deal.destination.toLowerCase().includes("aruba") || deal.destination.toLowerCase().includes("belize");
      if (activeFilter === "Family") return deal.category === "family" || deal.tags?.includes("family");
      if (activeFilter === "Weekend") return deal.category === "weekend" || deal.tags?.includes("weekend") || deal.nights <= 4;
      return deal.departurePort === activeFilter;
    });
  }, [activeFilter, deals]);

  function refreshDeals() {
    setError("");
    startTransition(async () => {
      try {
        const response = await fetch("/api/deals", { cache: "no-store" });
        if (!response.ok) throw new Error("Refresh failed");
        const payload = (await response.json()) as { deals: CruiseDeal[]; refreshedAt: string };
        setDeals(payload.deals);
        setLastRefresh(payload.refreshedAt);
      } catch {
        setError("Deals update regularly.");
      }
    });
  }

  function updateFilter(filter: DealFilter) {
    setActiveFilter(filter);
    trackEvent("filter_click", { filter });

    const slug = filterSlugs[filter];
    const url = slug === "all-cruises" ? "/#deals" : `/?category=${slug}#deals`;
    window.history.replaceState(null, "", url);
  }

  return (
    <section id="deals" className="bg-sand px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-ocean">Latest cruise feed</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Cruise-focused fare cards from Florida ports.
            </h2>
          </div>
          <button
            type="button"
            onClick={refreshDeals}
            className="btn btn-secondary disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isPending}
          >
            <RefreshCw className={`h-4 w-4 ${isPending ? "animate-spin" : ""}`} aria-hidden="true" />
            Refresh Deals
          </button>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => updateFilter(filter)}
              className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-sm font-black transition ${
                activeFilter === filter
                  ? "border-ink bg-ink text-white shadow-sm"
                  : "border-slate-200 bg-white text-slateText hover:border-sky-200 hover:text-ocean"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-4 min-h-6 text-sm font-semibold text-slateText">
          {lastRefresh ? <span>Refreshed {new Date(lastRefresh).toLocaleString()}</span> : <span>{filteredDeals.length} curated sailings showing</span>}
          {error ? <span className="ml-3 font-semibold text-ocean">{error}</span> : null}
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
