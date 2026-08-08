import { Anchor, BedDouble, CircleCheck, CircleX, FileCheck2, Luggage, ReceiptText, Ship, Smartphone, Ticket } from "lucide-react";
import { TrackedNavLink } from "@/components/TrackedNavLink";

const supported = new Set([
  "cruises-under-300",
  "cheap-bahamas-cruises-from-florida",
  "weekend-cruises-from-florida",
  "mexico-cruise-deals",
  "best-bahamas-cruises-from-florida"
]);

const decisions = [
  [ReceiptText, "What the price means", "Treat any visible fare as a starting point. Confirm occupancy, cabin, taxes, port fees, gratuities, and the final checkout total."],
  [CircleCheck, "Best for", "Travelers who can match a Florida departure port, sailing length, and itinerary to the time and transport they actually have."],
  [CircleX, "Skip if", "The port journey, hotel night, documents, or onboard extras make the complete trip a poor fit for the budget or schedule."],
  [Anchor, "Departure port", "Compare drive or flight time, terminal access, parking, return timing, and available itineraries before choosing the ship."],
  [FileCheck2, "Documents", "Verify passport and identification requirements for the traveler and itinerary with the cruise line and official government sources."],
  [BedDouble, "Hotel before sailing", "Use an overnight buffer when same-day travel would leave too little margin for a fixed departure time."],
  [Smartphone, "Wi-Fi or eSIM", "Ship Wi-Fi and cellular service in port solve different problems. An eSIM does not replace connectivity at sea."],
  [Ticket, "Excursions", "Compare port time, transport, cancellation terms, and a realistic return buffer before reserving an activity."],
  [Luggage, "Packing mistakes", "Keep travel documents and essentials in a carry-on, and check prohibited items and dress expectations before leaving."],
  [Ship, "Costs travelers forget", "Include parking, transfers, hotels, gratuities, drinks, dining, Wi-Fi, excursions, insurance, and travel to the port."]
] as const;

export function CruiseDecisionGuide({ slug }: { slug: string }) {
  if (!supported.has(slug)) return null;
  return (
    <section className="bg-white px-4 pb-12 sm:px-6 lg:px-8" aria-labelledby="cruise-decision-title">
      <div className="mx-auto max-w-7xl border-y border-slate-200 py-10">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Before you choose a sailing</p>
        <h2 id="cruise-decision-title" className="mt-2 max-w-3xl text-3xl font-black text-ink">Decide on the complete trip, not an unverified fare.</h2>
        <p className="mt-3 max-w-3xl font-semibold leading-7 text-slateText">No current fare is claimed here. Use these checks before opening a live cruise search or affiliate resource.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {decisions.map(([Icon, title, copy]) => (
            <article className="rounded-lg border border-slate-200 bg-sand p-4" key={title}>
              <Icon className="h-5 w-5 text-ocean" aria-hidden="true" />
              <h3 className="mt-3 font-black text-ink">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <TrackedNavLink className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-ocean" href="/florida-cruise-port-status" label="Cruise-port status">Cruise-port status</TrackedNavLink>
          <TrackedNavLink className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-ocean" href="/cruise-port-parking-guide" label="Port and parking guide">Port and parking guide</TrackedNavLink>
          <TrackedNavLink className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-ocean" href="/trip-reality/cruise-wifi-vs-esim" label="Cruise Wi-Fi vs eSIM">Cruise Wi-Fi vs eSIM</TrackedNavLink>
          <TrackedNavLink className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-ocean" href="/florida-cruise-packing-essentials" label="Packing essentials">Packing essentials</TrackedNavLink>
        </div>
      </div>
    </section>
  );
}
