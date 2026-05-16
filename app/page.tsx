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
import { FallbackImage } from "@/components/FallbackImage";
import { DealCard } from "@/components/DealCard";
import { PopularCruiseSearches } from "@/components/PopularCruiseSearches";
import { TrackedOutboundLink } from "@/components/TrackedOutboundLink";
import { TrackedNavLink } from "@/components/TrackedNavLink";
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

const homepageDiscoverySections = [
  {
    eyebrow: "Popular Florida Cruise Ports",
    title: "Start with the port that fits your trip.",
    description: "Compare Florida cruise ports by airport access, hotel needs, common routes, and the kind of sailing you want.",
    links: [
      { label: "Miami Cruises", href: "/cruises-from-miami", meta: "Bahamas, Caribbean, weekend trips", tag: "Port variety" },
      { label: "Port Canaveral Cruises", href: "/cruises-from-port-canaveral", meta: "Orlando-area family sailings", tag: "Family friendly" },
      { label: "Fort Lauderdale Cruises", href: "/cruises-from-fort-lauderdale", meta: "Port Everglades Caribbean routes", tag: "Premium routes" },
      { label: "Tampa Cruises", href: "/cruises-from-tampa", meta: "Gulf Coast and Western Caribbean", tag: "Gulf Coast" },
      { label: "Jacksonville Cruises", href: "/cruises-from-jacksonville", meta: "North Florida Bahamas searches", tag: "Drive-to port" }
    ]
  },
  {
    eyebrow: "Trending Cruise Searches",
    title: "Popular cruise searches from Florida travelers.",
    description: "Fresh, useful starting points without pressure tactics. Use these to compare current sailings and route ideas.",
    links: [
      { label: "Cruises From Miami", href: "/cruises-from-miami", meta: "PortMiami departures and South Florida hotels", tag: "First-Time Cruisers" },
      { label: "Bahamas Cruise Deals", href: "/bahamas-cruise-deals", meta: "Short island sailings from major Florida ports", tag: "Bahamas Trip" },
      { label: "Weekend Cruises", href: "/weekend-cruises-from-florida", meta: "Quick escapes and short cruise ideas", tag: "Weekend Escape" },
      { label: "Family Cruises", href: "/family-cruise-deals-florida", meta: "Kid-friendly ships, ports, and routes", tag: "Family Friendly" },
      { label: "Cruises Under $300", href: "/cruises-under-300", meta: "Low-fare searches when available", tag: "Budget Friendly" },
      { label: "Best Cruise Ports", href: "/best-cruise-ports-in-florida", meta: "Compare Florida port logistics", tag: "Flexible Dates" }
    ]
  },
  {
    eyebrow: "Destination Discovery",
    title: "Explore Florida cruise types and destinations.",
    description: "Move beyond a single fare card and compare the kind of cruise that fits your vacation style.",
    links: [
      { label: "Bahamas Cruises", href: "/best-bahamas-cruises-from-florida", meta: "Short island sailings and private island stops", tag: "Short Cruise" },
      { label: "Caribbean Cruises", href: "/best-caribbean-cruises-from-florida", meta: "Eastern, Western, and Southern Caribbean routes", tag: "Caribbean Vacation" },
      { label: "Mexico Cruises", href: "/mexico-cruise-deals", meta: "Cozumel, Costa Maya, and Western Caribbean ideas", tag: "Island Routes" },
      { label: "Luxury Cruises", href: "/luxury-cruises-from-florida", meta: "Premium ships and longer itineraries", tag: "Luxury Option" },
      { label: "First-Time Cruises", href: "/cruise-deals-for-first-time-cruisers", meta: "Simple routes and beginner planning tips", tag: "First-Time Cruisers" },
      { label: "Short Cruises", href: "/short-cruises-from-florida", meta: "2-5 night sailings from Florida ports", tag: "Short Cruise" }
    ]
  }
];

const cruiseIdeaSections = [
  {
    title: "Bahamas Cruise Ideas",
    description: "Short Bahamas cruises are useful for first-time cruisers, weekend escapes, and quick island trips from Florida.",
    href: "/bahamas-cruise-guide",
    cta: "Explore Bahamas Cruise Ideas",
    items: ["Nassau and Bimini searches", "Private island stops", "2-5 night Florida sailings"]
  },
  {
    title: "Caribbean Cruise Ideas",
    description: "Compare Eastern, Western, and Southern Caribbean routes by port, cruise length, ship style, and total trip logistics.",
    href: "/caribbean-cruise-guide",
    cta: "Explore Caribbean Cruise Ideas",
    items: ["Western Caribbean from Tampa", "Premium Fort Lauderdale routes", "Longer island itineraries"]
  },
  {
    title: "Weekend Cruise Picks",
    description: "Weekend cruise searches can work well for flexible travelers who want a short getaway without a full week away.",
    href: "/best-weekend-cruises-from-florida",
    cta: "Search Weekend Cruises",
    items: ["2-4 night sailings", "Miami and Port Canaveral starts", "Quick Bahamas escapes"]
  },
  {
    title: "Family Cruise Picks",
    description: "Family cruise planning should compare cabin setup, kid-friendly ships, departure port, school breaks, and total trip costs.",
    href: "/best-family-cruises-from-florida",
    cta: "Compare Family Cruise Options",
    items: ["Port Canaveral family sailings", "Bahamas and Caribbean routes", "Kid-friendly ship searches"]
  }
];

const planningGuides = [
  { label: "Best Cruises From Florida", href: "/best-cruises-from-florida" },
  { label: "Best Cruises From Miami", href: "/best-cruises-from-miami" },
  { label: "Best Cruises From Port Canaveral", href: "/best-cruises-from-port-canaveral" },
  { label: "How To Find Cheap Cruises", href: "/how-to-find-cheap-cruises-from-florida" },
  { label: "First-Time Cruise Guide", href: "/first-time-cruise-guide" },
  { label: "Best Time To Book A Cruise", href: "/best-time-to-book-a-cruise" }
];

const seasonalIdeas = [
  { label: "Summer Cruises From Florida", href: "/summer-cruises-from-florida" },
  { label: "Winter Cruises From Florida", href: "/winter-cruises-from-florida" },
  { label: "Spring Break Cruises", href: "/spring-break-cruises" },
  { label: "Holiday Cruises From Florida", href: "/holiday-cruises-from-florida" },
  { label: "Memorial Day Cruises", href: "/memorial-day-cruises" },
  { label: "Cheap Summer Cruises", href: "/cheap-summer-cruises" }
];

const homeFaqs = [
  {
    question: "Which Florida cruise port is best?",
    answer: "The best Florida cruise port depends on your route, airport, hotel needs, and traveler style. Miami is strong for variety, Port Canaveral is useful for Orlando and family trips, Fort Lauderdale is strong for Caribbean routes, Tampa works well for Gulf Coast travelers, and Jacksonville can be convenient for North Florida."
  },
  {
    question: "What is the cheapest month to cruise from Florida?",
    answer: "There is no guaranteed cheapest month, but flexible dates outside major holidays and school breaks can be easier to compare. Always check current fares, taxes, fees, and cabin availability with the booking source."
  },
  {
    question: "Are Bahamas cruises good for first-time cruisers?",
    answer: "Bahamas cruises from Florida can be a good first-cruise search because many sailings are short, simple, and easy to compare from Miami, Port Canaveral, Fort Lauderdale, or Jacksonville."
  },
  {
    question: "Should I fly in the day before my cruise?",
    answer: "Many travelers prefer arriving the day before a cruise to reduce travel risk. Compare flight timing, port hotels, transfers, and cruise check-in windows before deciding."
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
        <FallbackImage
          src="/images/cruise-hero.png"
          alt="Cruise ship leaving a sunny Florida port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          fallbackSrc="/images/fallbacks/florida-deals-placeholder.png"
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
            priceText: "From $199",
            ctaText: "View Sailing",
            outboundUrl: "https://www.msccruisesusa.com/"
          }}
          className="group relative mx-auto block w-full max-w-md cursor-pointer rounded-3xl border border-white/80 bg-white/92 p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-premium focus:outline-none focus:ring-4 focus:ring-sky-200"
          ariaLabel="View featured 4-Night Bahamas Escape sailing"
        >
          <div className="relative h-52 overflow-hidden rounded-2xl" style={{ position: "relative" }}>
            <FallbackImage
              src="/images/private-island-cruise.webp"
              alt="Bahamas cruise ship near a private island beach"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              fallbackSrc="/images/fallbacks/cruise-placeholder.png"
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

function CrossPromos() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {crossPromos.map((promo) => {
          const Icon = promo.icon;

          return (
            <a key={promo.title} href={promo.href} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
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

function DiscoveryGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        {homepageDiscoverySections.map((section) => (
          <div key={section.eyebrow}>
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">{section.title}</h2>
              <p className="mt-3 text-base font-medium leading-7 text-slateText">{section.description}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.links.map((link) => (
                <TrackedNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="group rounded-2xl border border-slate-200 bg-sand p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-ocean ring-1 ring-sky-100">{link.tag}</span>
                  <h3 className="mt-4 text-lg font-black text-ink">{link.label}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slateText">{link.meta}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                    Compare cruise options
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </TrackedNavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CruiseIdeas() {
  return (
    <section className="bg-sand px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise planning ideas</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
            Browse by destination, trip length, and traveler style.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cruiseIdeaSections.map((idea) => (
            <TrackedNavLink key={idea.href} href={idea.href} label={idea.title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
              <h3 className="text-2xl font-black text-ink">{idea.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slateText">{idea.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {idea.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-sand px-3 py-1.5 text-xs font-black text-slateText">
                    {item}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ocean">
                {idea.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </TrackedNavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanningGuideLinks() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise Planning Guides</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Learn before you compare sailings.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {planningGuides.map((guide) => (
              <TrackedNavLink key={guide.href} href={guide.href} label={guide.label} className="rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-sky-50 hover:text-ocean">
                {guide.label}
              </TrackedNavLink>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-sand p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Seasonal Cruise Ideas</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Plan around school breaks, holidays, and weather.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {seasonalIdeas.map((idea) => (
              <TrackedNavLink key={idea.href} href={idea.href} label={idea.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:text-ocean">
                {idea.label}
              </TrackedNavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialPicks() {
  const picks = [
    { label: "Best for a quick escape", value: "Bahamas weekend cruises", href: "/best-weekend-cruises" },
    { label: "Best for families", value: "Port Canaveral family sailings", href: "/best-family-cruises" },
    { label: "Best for first-time cruisers", value: "Short cruises from Miami", href: "/first-time-cruise-guide" },
    { label: "Best value search", value: "Cruises under $300", href: "/cruises-under-300" }
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Editor Picks</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
          Useful starting points for comparing Florida cruises.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {picks.map((pick) => (
            <a key={pick.label} href={pick.href} className="group rounded-2xl border border-slate-200 bg-sand p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-ocean">{pick.label}</p>
              <h3 className="mt-3 text-lg font-black text-ink">{pick.value}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                Compare options
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTrust() {
  const notes = ["Updated regularly", "Fares may change", "Taxes and port fees may apply", "Confirm details with the booking source"];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Why Trust This Site?</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Part of the Florida Deals Hub network.</h2>
        <p className="mt-4 max-w-4xl text-base font-medium leading-7 text-slateText">
          Florida Cruise Deals organizes cruise searches by Florida ports, destinations, cruise types, and travel intent so visitors can compare options faster without treating every fare as final.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {notes.map((note) => (
            <span key={note} className="rounded-full border border-slate-200 bg-sand px-3 py-2 text-xs font-black text-ink">
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise FAQs</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Useful answers before you start comparing.</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-card">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-base font-black text-ink marker:hidden">{faq.question}</summary>
              <p className="mt-3 text-sm font-medium leading-6 text-slateText">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
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
        <DiscoveryGrid />
        <FeaturedDeals deals={deals} />
        <PopularCruiseSearches />
        <CruiseIdeas />
        <PlanningGuideLinks />
        <EditorialPicks />
        <WhyTrust />
        <DealList initialDeals={deals} />
        <CrossPromos />
        <HomeFaq />
        <EmailSignup />
        <SisterSites />
      </main>
      <Footer />
    </>
  );
}
