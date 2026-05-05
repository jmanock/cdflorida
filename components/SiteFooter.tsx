import { Ship } from "lucide-react";
import { popularCruiseSearches } from "@/data/seo-pages";

const links = [
  { label: "Flight Deals", href: "https://flightdealsflorida.org" },
  { label: "Hotel Deals", href: "https://hoteldealsflorida.org" },
  { label: "Cruise Deals", href: "https://cruisedealsflorida.org" },
  { label: "Local Deals", href: "https://localdealsflorida.org" },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 py-10 text-sm text-slateText sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-200 pt-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white shadow-lg shadow-slate-900/15">
              <Ship className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gold ring-2 ring-white" />
            </span>
            <div>
              <p className="font-black text-ink">Florida Cruise Deals</p>
              <p className="mt-1 font-medium">Part of Florida Deals Hub.</p>
            </div>
          </div>
          <p className="mt-4 font-medium leading-6">
            Affiliate disclosure: Florida Cruise Deals may earn a commission when you book through partner links. Prices and availability can change at any time.
          </p>
          <p className="mt-3 font-medium leading-6">
            Florida Deals Hub may earn a commission when you book through some links. This helps keep our deal alerts free.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold text-slateText" aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link.label} className="transition hover:text-ocean" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="grid gap-3 text-sm font-bold text-slateText" aria-label="Top cruise searches">
            <p className="font-black uppercase tracking-[0.14em] text-ocean">Top Cruise Searches</p>
            {popularCruiseSearches.map((link) => (
              <a key={link.href} className="transition hover:text-ocean" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
