import { Anchor, ArrowRight, Building2, Plane, Ticket } from "lucide-react";

const sisterSites = [
  {
    title: "Florida Flight Deals",
    href: "https://flightdealsflorida.org",
    description: "Cheap airfare alerts for Florida airports and warm-weather routes.",
    icon: Plane
  },
  {
    title: "Florida Hotel Deals",
    href: "https://hoteldealsflorida.org",
    description: "Beach resorts, family stays, luxury escapes, and Florida staycation rates.",
    icon: Building2
  },
  {
    title: "Local Florida Deals",
    href: "https://localdealsflorida.org",
    description: "Restaurants, attractions, weekend plans, and local Florida finds.",
    icon: Ticket
  },
  {
    title: "Florida Deals Hub",
    href: "https://floridadealshub.com",
    description: "The parent network for Florida flights, hotels, cruises, and local savings.",
    icon: Building2
  }
];

export function SisterSitesSection() {
  return (
    <section className="border-y border-slate-200 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
            <Anchor className="h-4 w-4" aria-hidden="true" />
            Explore More Florida Deals
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">One trusted network for Florida travel and local savings.</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sisterSites.map((site) => {
            const Icon = site.icon;
            return (
              <a key={site.title} href={site.href} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-ink ring-1 ring-slate-200 transition group-hover:bg-sky-50 group-hover:text-ocean">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black text-ink">{site.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slateText">{site.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
