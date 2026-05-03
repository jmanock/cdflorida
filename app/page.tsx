import Image from "next/image";
import {
  Anchor,
  ArrowRight,
  Bell,
  Building2,
  CircleCheck,
  Plane,
  Sailboat,
  Ship,
  Sparkles,
  Ticket,
  Waves
} from "lucide-react";
import { DealList } from "@/components/DealList";
import { EmailSignup } from "@/components/EmailSignup";
import { DealCard } from "@/components/DealCard";
import { PopularCruiseSearches } from "@/components/PopularCruiseSearches";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";
import { TrackedNavLink } from "@/components/TrackedNavLink";
import { popularCruiseSearches } from "@/data/seo-pages";
import { getLatestDeals } from "@/lib/deals";
import type { CruiseDeal } from "@/types/deal";

const navItems = [
  { label: "Flights", href: "https://flightdealsflorida.org" },
  { label: "Hotels", href: "https://hoteldealsflorida.org" },
  { label: "Cruises", href: "/" },
  { label: "Local Deals", href: "https://localdealsflorida.org" },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

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

const crossPromos = [
  {
    title: "Need flights before your sailing?",
    href: "https://flightdealsflorida.org",
    description: "Find Florida flight deals into Miami, Orlando, Tampa, Fort Lauderdale, and Jacksonville.",
    icon: Plane,
    cta: "Browse Florida flight deals"
  },
  {
    title: "Staying near the port?",
    href: "https://hoteldealsflorida.org",
    description: "Compare Florida hotel deals for pre-cruise nights, resort stays, and beach weekends.",
    icon: Building2,
    cta: "Browse Florida hotel deals"
  },
  {
    title: "Planning a weekend trip?",
    href: "https://localdealsflorida.org",
    description: "Browse local Florida deals for attractions, restaurants, and things to do around your port city.",
    icon: Ticket,
    cta: "Browse local Florida deals"
  }
];

function Header() {
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

function Hero({ deals }: { deals: CruiseDeal[] }) {
  const lowestFare = Math.min(...deals.map((deal) => deal.startingPrice));

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
      <div className="absolute inset-0 -z-10" style={{ position: "absolute" }}>
        <Image
          src="/images/cruise-hero.png"
          alt="Cruise ship leaving a sunny Florida port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/36" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.24),transparent_22rem),radial-gradient(circle_at_22%_80%,rgba(245,158,11,0.18),transparent_20rem)]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_28rem] lg:px-8">
        <div className="max-w-3xl pt-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-ocean shadow-sm backdrop-blur">
            <Waves className="h-4 w-4" aria-hidden="true" />
            Part of Florida Deals Hub
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Florida Cruise Deals from Every Major Port
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slateText sm:text-xl">
            Find cruise deals from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville with hidden drops, family sailings, and weekend escapes.
          </p>
          <p className="mt-4 text-sm font-black text-ocean">
            Updated: May 2026. Recent sailing finds, current cruise searches, and availability-aware links.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedNavLink className="btn btn-primary px-6" href="#deals" label="View Cruise Deals">
              View Cruise Deals
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedNavLink>
            <TrackedNavLink className="btn btn-secondary px-6" href="#alerts" label="Get Alerts hero">
              <Bell className="h-4 w-4" aria-hidden="true" />
              Get Alerts
            </TrackedNavLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Updated Often", "Florida Port Focused", "Free Deal Alerts"].map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-white bg-white/78 px-4 py-2 text-sm font-black text-ink shadow-sm backdrop-blur">
                <CircleCheck className="h-4 w-4 text-ocean" aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        <TrackedOutboundLink
          href="https://www.msccruisesusa.com/"
          metadata={{
            page: "homepage-hero",
            port: "Port Canaveral",
            destination: "Bahamas",
            cruiseLine: "MSC Cruises",
            nights: 4,
            outboundUrl: "https://www.msccruisesusa.com/"
          }}
          className="group relative mx-auto block w-full max-w-md cursor-pointer rounded-3xl border border-white/80 bg-white/92 p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-premium focus:outline-none focus:ring-4 focus:ring-sky-200"
          ariaLabel="View featured 4-Night Bahamas Escape sailing"
        >
          <div className="relative h-52 overflow-hidden rounded-2xl" style={{ position: "relative" }}>
            <Image
              src="/images/private-island-cruise.webp"
              alt="Bahamas cruise ship near a private island beach"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">Featured Sailing</span>
            <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-ink shadow-sm">May departures</span>
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-ocean">Port Canaveral</p>
              <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">4-Night Bahamas Escape</h2>
              <p className="mt-2 text-sm font-bold text-slateText">CocoCay / Nassau / Weekend-friendly</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-black uppercase text-slate-400">From</p>
              <p className="text-4xl font-black text-gold">$199</p>
              <p className="text-xs font-black text-slate-500">per person</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Bahamas", "4 nights", "Florida port"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-sand p-3 text-center text-xs font-black text-ink">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-black text-white transition group-hover:bg-ocean">
            View Sailing
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
        </TrackedOutboundLink>
      </div>

      <section aria-label="Cruise deal stats" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [`${deals.length}`, "Latest Sailings"],
            ["8", "Bahamas Deals"],
            ["6", "Family Cruises"],
            [`$${lowestFare}`, "Lowest Fare"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur">
              <p className="text-3xl font-black text-ink">{value}</p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-slateText">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

function FeaturedDeals({ deals }: { deals: CruiseDeal[] }) {
  const fallback = deals[0];
  const featured = [
    {
      ...(deals.find((deal) => deal.id === "mia-msc-seashore-3n-ocean-cay") ?? fallback),
      destination: "Bahamas Escape",
      badge: "Lowest fare",
      savings: "From $199",
      description: "A quick blue-water escape with Ocean Cay beach time and an easy Miami departure."
    },
    {
      ...(deals.find((deal) => deal.id === "tpa-rhapsody-6n-belize") ?? deals[1] ?? fallback),
      destination: "Western Caribbean",
      badge: "Save 30%",
      savings: "30% off select dates",
      description: "A relaxed Gulf Coast sailing with Cozumel, Belize, and warm-weather port days."
    },
    {
      ...(deals.find((deal) => deal.id === "mia-virgin-scarlet-4n-key-west") ?? deals[2] ?? fallback),
      destination: "Weekend Cruise from Miami",
      badge: "Weekend",
      savings: "From $149",
      startingPrice: 149,
      description: "A stylish long-weekend getaway from Miami with Bimini water and Key West energy."
    }
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Featured sailings
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
              The top sailings worth checking today.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-black text-ocean" href="#deals">
            Browse all cruises
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featured.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SisterSites() {
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
              <a key={site.title} href={site.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
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

function CrossPromos() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {crossPromos.map((promo) => {
          const Icon = promo.icon;

          return (
            <a key={promo.title} href={promo.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-ocean ring-1 ring-sky-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-black text-ink">{promo.title}</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-slateText">{promo.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                {promo.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
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
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold text-slateText" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.label}
                className="transition hover:text-ocean"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
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

export default async function Home() {
  const deals = await getLatestDeals();
  const siteUrl = "https://cruisedealsflorida.org";
  const publisher = {
    "@type": "Organization",
    name: "Florida Deals Hub",
    url: "https://floridadealshub.com"
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      publisher,
      {
        "@type": "WebSite",
        name: "Florida Cruise Deals",
        url: siteUrl,
        description:
          "Find Florida cruise deals from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville.",
        publisher
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Florida Cruise Deals",
            item: siteUrl
          }
        ]
      },
      {
        "@type": "ItemList",
        name: "Featured Florida cruise deal searches",
        itemListElement: deals.slice(0, 12).map((deal, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${deal.cruiseLine} ${deal.destination} from ${deal.departurePort}`,
          url: deal.bookingUrl ?? deal.dealUrl
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />
      <main>
        <Hero deals={deals} />
        <FeaturedDeals deals={deals} />
        <PopularCruiseSearches />
        <DealList initialDeals={deals} />
        <CrossPromos />
        <EmailSignup />
        <SisterSites />
      </main>
      <Footer />
    </>
  );
}
