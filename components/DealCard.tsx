import Image from "next/image";
import { CalendarDays, Clock3, MapPin, Ship, Tag } from "lucide-react";
import type { CruiseDeal } from "@/types/deal";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
});

export function DealCard({ deal }: { deal: CruiseDeal }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-deal ring-1 ring-slate-200/80">
      <div className="relative h-48 w-full bg-slate-200">
        <Image src={deal.image} alt={`${deal.shipName} cruise deal`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-sm font-semibold text-navy shadow-sm">
          From ${deal.startingPrice}
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ocean">{deal.cruiseLine}</p>
          <h3 className="mt-1 text-xl font-bold text-navy">{deal.shipName}</h3>
        </div>

        <div className="grid gap-3 text-sm text-slate-650">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
            <span>{deal.departurePort} to {deal.destination}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Ship className="h-4 w-4 text-teal" aria-hidden="true" />
            <span>{deal.nights} nights</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CalendarDays className="h-4 w-4 text-teal" aria-hidden="true" />
            <span>Sails {dateFormatter.format(new Date(`${deal.sailDate}T12:00:00`))}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            <span>Last checked {timeFormatter.format(new Date(deal.lastChecked))}</span>
          </div>
          {deal.category !== "standard" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold capitalize text-ocean">
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {deal.category.replace("-", " ")}
            </span>
          ) : null}
        </div>

        <a
          href={deal.dealUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
        >
          View Deal
        </a>
      </div>
    </article>
  );
}
