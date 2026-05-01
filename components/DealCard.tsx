import Image from "next/image";
import { ArrowRight, CalendarDays, Clock3, MapPin, Ship, Tag } from "lucide-react";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";
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
  const badge = deal.badge ?? (deal.startingPrice < 299 ? "Under $299" : deal.category.replace("-", " "));
  const dateLabel = deal.dateLabel ?? `Sails ${dateFormatter.format(new Date(`${deal.sailDate}T12:00:00`))}`;
  const description =
    deal.description ??
    `${deal.nights}-night ${deal.destination} sailing from ${deal.departurePort}, curated for Florida travelers watching cruise fare drops.`;
  const imageAlt = deal.imageAlt ?? `${deal.shipName} cruise sailing to ${deal.destination} from ${deal.departurePort}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
      <div className="relative h-56 w-full overflow-hidden bg-slate-200" style={{ position: "relative" }}>
        <Image
          src={deal.image}
          alt={imageAlt}
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
          {badge}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-ink shadow-sm">
          From ${deal.startingPrice}
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-sm font-black text-ocean">{deal.cruiseLine}</p>
          <h3 className="mt-1 text-xl font-black text-ink">{deal.destination}</h3>
          <p className="mt-2 text-sm font-medium leading-6 text-slateText">{description}</p>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-slateText">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-ocean" aria-hidden="true" />
            <span>{deal.departurePort}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ship className="h-4 w-4 text-ocean" aria-hidden="true" />
            <span>{deal.shipName} / {deal.nights} nights</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-ocean" aria-hidden="true" />
            <span>{dateLabel}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            <span>Last checked {timeFormatter.format(new Date(deal.lastChecked))}</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-black capitalize text-ocean ring-1 ring-sky-100">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {deal.savings ?? badge}
          </span>
        </div>

        <TrackedOutboundLink
          href={deal.dealUrl}
          metadata={{
            page: "deals-feed",
            port: deal.departurePort,
            destination: deal.destination,
            cruiseLine: deal.cruiseLine,
            outboundUrl: deal.dealUrl
          }}
          className="btn btn-primary btn-card w-full"
        >
          View Sailing
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </TrackedOutboundLink>
      </div>
    </article>
  );
}
