import Image from "next/image";
import { ArrowRight, MapPin, Sailboat, Ship } from "lucide-react";
import type { CruiseSearchCard as CruiseSearchCardType } from "@/data/seo-pages";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";

export function CruiseSearchCard({ card, page }: { card: CruiseSearchCardType; page: string }) {
  const destination = card.destination?.toLowerCase() ?? "";
  const cruiseLine = card.cruiseLine?.toLowerCase() ?? "";
  const ctaText = cruiseLine.includes("royal")
    ? "View Royal Caribbean Sailing"
    : cruiseLine.includes("carnival")
      ? "View Carnival Cruise"
      : cruiseLine.includes("msc")
        ? "View MSC Cruise"
        : destination.includes("bahamas") || destination.includes("ocean cay")
          ? "View Bahamas Sailing"
          : destination.includes("caribbean")
            ? "View Caribbean Cruise"
            : card.nights?.includes("3") || card.nights?.includes("4")
              ? "See Weekend Cruise"
              : "Check Available Sailings";

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
      <div className="relative h-56 overflow-hidden bg-slate-200">
        <Image
          src={card.image}
          alt={card.imageAlt}
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
          {card.eyebrow}
        </span>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-sm font-black text-ocean">{card.cruiseLine ?? "Florida cruise search"}</p>
          <h3 className="mt-1 text-xl font-black text-ink">{card.title}</h3>
          <p className="mt-2 text-sm font-medium leading-6 text-slateText">{card.description}</p>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-slateText">
          {card.port ? (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ocean" aria-hidden="true" />
              <span>{card.port}</span>
            </div>
          ) : null}
          {card.destination ? (
            <div className="flex items-center gap-2">
              <Sailboat className="h-4 w-4 text-ocean" aria-hidden="true" />
              <span>{card.destination}</span>
            </div>
          ) : null}
          <div className="flex items-center gap-2">
            <Ship className="h-4 w-4 text-ocean" aria-hidden="true" />
            <span>{card.nights ? `${card.nights} / availability varies` : "Available sailings vary"}</span>
          </div>
        </div>
        <p className="rounded-2xl bg-sand px-3 py-2 text-xs font-bold leading-5 text-slateText">
          Recent sailing find. Fares may change and availability varies by sailing.
        </p>

        <TrackedOutboundLink
          href={card.href}
          metadata={{
            page,
            port: card.port,
            destination: card.destination,
            cruiseLine: card.cruiseLine,
            nights: card.nights,
            priceText: "See current fares",
            ctaText,
            outboundUrl: card.href
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
