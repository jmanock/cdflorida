import { Ship } from "lucide-react";

const footerSections = [
  {
    title: "Florida Cruise Ports",
    links: [
      { label: "Cruises From Miami", href: "/cruises-from-miami" },
      { label: "Cruises From Port Canaveral", href: "/cruises-from-port-canaveral" },
      { label: "Cruises From Fort Lauderdale", href: "/cruises-from-fort-lauderdale" },
      { label: "Cruises From Tampa", href: "/cruises-from-tampa" },
      { label: "Cruises From Jacksonville", href: "/cruises-from-jacksonville" }
    ]
  },
  {
    title: "Cruise Types",
    links: [
      { label: "Bahamas Cruise Deals", href: "/bahamas-cruise-deals" },
      { label: "Caribbean Cruise Deals", href: "/caribbean-cruise-deals" },
      { label: "Weekend Cruises", href: "/weekend-cruises-from-florida" },
      { label: "Family Cruises", href: "/family-cruise-deals-florida" },
      { label: "Cheap Cruises", href: "/cheap-cruises-from-florida" },
      { label: "Cruises Under $300", href: "/cruises-under-300" }
    ]
  },
  {
    title: "Florida Deals Network",
    links: [
      { label: "Florida Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Local Deals Florida", href: "https://localdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "How Cruise Pricing Works", href: "/how-cruise-pricing-works" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" }
    ]
  }
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
            Affiliate disclosure: Some links on this site may earn us a commission at no extra cost to you. Prices and availability can change at any time.
          </p>
          <p className="mt-3 font-medium leading-6">
            Florida Deals Hub may earn a commission when you book through some links. This helps keep our deal alerts free.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerSections.map((section) => (
            <nav key={section.title} className="grid gap-3 text-sm font-bold text-slateText" aria-label={section.title}>
              <p className="font-black uppercase tracking-[0.14em] text-ocean">{section.title}</p>
              {section.links.map((link) => (
                <a key={link.href} className="transition hover:text-ocean" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
