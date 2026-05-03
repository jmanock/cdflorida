import { Sailboat } from "lucide-react";
import { TrackedNavLink } from "@/components/TrackedNavLink";

const navItems = [
  { label: "Flights", href: "https://flightdealsflorida.org" },
  { label: "Hotels", href: "https://hoteldealsflorida.org" },
  { label: "Cruises", href: "/" },
  { label: "Local Deals", href: "https://localdealsflorida.org" },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <TrackedNavLink className="flex min-w-0 items-center gap-3" aria-label="Florida Cruise Deals home" href="/" label="Florida Cruise Deals home">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink text-white shadow-lg shadow-slate-900/15">
            <Sailboat className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gold ring-2 ring-white" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-normal text-ink sm:text-lg">Florida Cruise Deals</span>
            <span className="hidden text-xs font-bold text-slateText sm:block">Part of Florida Deals Hub</span>
          </span>
        </TrackedNavLink>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-sand p-1 text-sm font-bold text-slateText lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <TrackedNavLink
              key={item.label}
              href={item.href}
              label={item.label}
              aria-current={item.label === "Cruises" ? "page" : undefined}
              className={`rounded-full px-4 py-2 transition ${
                item.label === "Cruises" ? "bg-white text-ink shadow-sm" : "hover:bg-white hover:text-ocean"
              }`}
            >
              {item.label}
            </TrackedNavLink>
          ))}
        </nav>

        <TrackedNavLink href="#alerts" label="Get Alerts" className="btn btn-gold min-h-10 shrink-0 px-4 py-2">
          Get Alerts
        </TrackedNavLink>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-slate-200/70 px-4 py-2 text-xs font-black text-slateText sm:px-6 lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <TrackedNavLink
            key={item.label}
            href={item.href}
            label={item.label}
            aria-current={item.label === "Cruises" ? "page" : undefined}
            className={`whitespace-nowrap rounded-full border px-3 py-2 ${
              item.label === "Cruises" ? "border-ink bg-ink text-white" : "border-slate-200 bg-white"
            }`}
          >
            {item.label}
          </TrackedNavLink>
        ))}
      </nav>
    </header>
  );
}
