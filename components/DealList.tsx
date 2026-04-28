"use client";

import { RefreshCw } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { DealCard } from "@/components/DealCard";
import type { CruiseDeal, DealFilter } from "@/types/deal";

const filters: DealFilter[] = [
  "All",
  "Port Canaveral",
  "Miami",
  "Fort Lauderdale",
  "Tampa",
  "Under $300",
  "Last Minute",
  "Family Deals"
];

export function DealList({ initialDeals }: { initialDeals: CruiseDeal[] }) {
  const [deals, setDeals] = useState(initialDeals);
  const [activeFilter, setActiveFilter] = useState<DealFilter>("All");
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Under $300") return deal.startingPrice < 300;
      if (activeFilter === "Last Minute") return deal.category === "last-minute";
      if (activeFilter === "Family Deals") return deal.category === "family";
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
        setError("Could not refresh deals right now. Please try again.");
      }
    });
  }

  return (
    <section id="deals" className="bg-[#f6fbfc] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ocean">Today&apos;s shortlist</p>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Florida cruise deals worth checking first</h2>
          </div>
          <button
            type="button"
            onClick={refreshDeals}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal px-4 py-3 text-sm font-bold text-navy shadow-sm transition hover:bg-[#2dd4bf] focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-navy bg-navy text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-ocean hover:text-ocean"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-4 min-h-6 text-sm text-slate-600">
          {lastRefresh ? <span>Refreshed {new Date(lastRefresh).toLocaleString()}</span> : <span>{filteredDeals.length} deals available</span>}
          {error ? <span className="ml-3 font-semibold text-red-700">{error}</span> : null}
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
