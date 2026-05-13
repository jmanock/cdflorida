import { ArrowRight, CalendarDays, MapPin, Ship, Tag } from "lucide-react";
import { FallbackImage } from "@/components/FallbackImage";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";
import type { CruiseDeal } from "@/types/deal";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

function getValueLine(deal: CruiseDeal) {
  const destination = deal.destination.toLowerCase();

  if (deal.category === "family" || deal.tags?.includes("family")) return "Family-friendly cruise option";
  if (deal.category === "weekend" || deal.nights <= 4) return "Good pick for a short cruise escape";
  if (destination.includes("bahamas") || destination.includes("nassau") || destination.includes("bimini")) {
    return "Strong fit for a Bahamas getaway";
  }
  if (destination.includes("caribbean")) return "Popular option for island-focused dates";
  if (deal.startingPrice < 299) return "Strong option for flexible dates";

  return "Useful Florida sailing to compare with the source";
}

function getBestForTags(deal: CruiseDeal) {
  const tags = new Set<string>();
  const destination = deal.destination.toLowerCase();

  if (deal.category === "family" || deal.tags?.includes("family")) tags.add("Best for Families");
  if (deal.category === "weekend" || deal.nights <= 4) tags.add("Weekend Trip");
  if (deal.startingPrice < 299 || deal.category === "under-299") tags.add("Budget Friendly");
  if (destination.includes("bahamas") || destination.includes("nassau") || destination.includes("bimini")) tags.add("Bahamas Escape");
  if (destination.includes("caribbean") || destination.includes("cozumel")) tags.add("Caribbean Getaway");
  if (deal.category === "luxury") tags.add("Luxury Option");
  if (!tags.size) tags.add("Flexible Dates");

  return Array.from(tags).slice(0, 3);
}

function getCruiseCta(deal: CruiseDeal, priceLabel: string) {
  const line = deal.cruiseLine.toLowerCase();
  const destination = deal.destination.toLowerCase();

  if (deal.priceText || deal.startingPrice > 0) return `View Sailing From $${deal.startingPrice}`;
  if (line.includes("royal")) return "View Royal Caribbean Sailing";
  if (line.includes("carnival")) return "View Carnival Cruise";
  if (line.includes("msc")) return "View MSC Cruise";
  if (destination.includes("bahamas")) return "View Bahamas Sailing";
  if (destination.includes("caribbean")) return "View Caribbean Cruise";
  if (deal.category === "weekend" || deal.nights <= 4) return "See Weekend Cruise";

  return priceLabel.toLowerCase().includes("current") ? "See Available Dates" : "View Cruise Deal";
}

export function DealCard({ deal }: { deal: CruiseDeal }) {
  const badge = deal.badge ?? (deal.startingPrice < 299 ? "Under $299" : deal.category.replace("-", " "));
  const dateLabel = deal.dateLabel ?? `Sails ${dateFormatter.format(new Date(`${deal.sailDate}T12:00:00`))}`;
  const priceLabel = deal.priceText ?? `Fares from $${deal.startingPrice}`;
  const termsNote = deal.termsNote ?? "Fares may change. Taxes, fees, and port expenses may apply.";
  const bookingUrl = deal.bookingUrl ?? deal.dealUrl;
  const description =
    deal.description ??
    `${deal.nights}-night ${deal.destination} sailing from ${deal.departurePort}, curated for Florida travelers watching cruise fare drops.`;
  const imageAlt = deal.imageAlt ?? `${deal.shipName} cruise sailing to ${deal.destination} from ${deal.departurePort}`;
  const valueLine = getValueLine(deal);
  const bestForTags = getBestForTags(deal);
  const ctaText = getCruiseCta(deal, priceLabel);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
      <div className="relative h-56 w-full overflow-hidden bg-slate-200" style={{ position: "relative" }}>
        <FallbackImage
          src={deal.image}
          alt={imageAlt}
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          fallbackSrc="/images/fallbacks/cruise-placeholder.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
          {badge}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-ink shadow-sm">
          {priceLabel}
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

        <div className="border-t border-slate-200 pt-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-black capitalize text-ocean ring-1 ring-sky-100">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {deal.savings ?? badge}
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {bestForTags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-black text-slateText">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm font-black text-ink">
            Why this sailing: <span className="text-slateText">{valueLine}</span>
          </p>
        </div>
        <p className="rounded-2xl bg-sand px-3 py-2 text-xs font-bold leading-5 text-slateText">
          Updated regularly. Check current fares with the source before booking. Availability varies by sailing. {termsNote}
        </p>

        <TrackedOutboundLink
          href={bookingUrl}
          metadata={{
            page: "deals-feed",
            port: deal.departurePort,
            destination: deal.destination,
            cruiseLine: deal.cruiseLine,
            nights: deal.nights,
            priceText: priceLabel,
            ctaText,
            outboundUrl: bookingUrl
          }}
          className="btn btn-primary btn-card w-full"
        >
          {ctaText}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </TrackedOutboundLink>
      </div>
    </article>
  );
}
