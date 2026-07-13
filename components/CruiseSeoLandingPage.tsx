import { ArrowRight, BedDouble, BookOpenCheck, Building2, Car, CircleCheck, Clock3, Compass, MapPin, Plane, Sailboat, ShieldCheck, Ticket, Waves } from "lucide-react";
import { CruiseSearchCard } from "@/components/CruiseSearchCard";
import { EmailSignup } from "@/components/EmailSignup";
import { FallbackImage } from "@/components/FallbackImage";
import { FloridaIntelligenceEngine } from "@/components/FloridaIntelligenceEngine";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedHotelLink } from "@/components/TrackedHotelLink";
import { TrackedNavLink } from "@/components/TrackedNavLink";
import { AffiliateGearLink } from "@/components/AffiliateGearLink";
import { RevenueCtaCard } from "@/components/RevenueCtaCard";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { TransferBookingCard } from "@/components/TransferBookingCard";
import { TravelEssentialsBlock } from "@/components/TravelEssentialsBlock";
import { TravelBookingCard } from "@/components/TravelBookingCard";
import { V22AffiliateResources } from "@/components/V22AffiliateResources";
import { V14CruiseDiscovery } from "@/components/V14CruiseDiscovery";
import { ConversionScrollAnalytics, QuickDealCard, RecommendedPartnerCard } from "@/components/ConversionCards";
import { CruiseAffiliatePlanningStack, CruiseContinuePlanningGuides, ExitNewsletterCapture } from "@/components/CruiseConversionBoosters";
import { cruisePackingGearPicks } from "@/lib/affiliate/piscifunLinks";
import { getExpediaPortHotelLink } from "@/lib/affiliateLinks";
import { conversionSlugs, transferAndTravelSlugs } from "@/lib/revenuePartners";
import {
  getCruiseSearchCards,
  getCruiseSeoFaqs,
  getCruiseSeoPage,
  popularCruiseSearches,
  type CruiseSeoPage
} from "@/data/seo-pages";

const priorityCruiseCluster = [
  "weekend-cruises-from-florida",
  "best-weekend-cruises-from-florida",
  "best-bahamas-cruises-from-florida",
  "bahamas-cruises-from-port-canaveral",
  "cruises-from-jacksonville",
  "summer-cruises-from-florida",
  "mexico-cruise-deals",
  "luxury-cruises-from-florida"
];

function RelatedPages({ page }: { page: CruiseSeoPage }) {
  const prioritySlugs = popularCruiseSearches
    .map((link) => link.href.replace("/", ""))
    .filter((slug) => slug !== page.slug);
  const relatedSlugs = Array.from(
    new Set([...priorityCruiseCluster, ...page.relatedSlugs, ...prioritySlugs].filter((slug) => slug !== page.slug))
  ).slice(0, 10);
  const relatedPages = relatedSlugs
    .map((slug) => getCruiseSeoPage(slug))
    .filter((related): related is CruiseSeoPage => Boolean(related));
  const readersAlsoPlanned = [
    { label: "Hotels near cruise ports", href: "https://hoteldealsflorida.org/hotels-near-florida-cruise-ports" },
    { label: "Florida cruise packing essentials", href: "/florida-cruise-packing-essentials" },
    { label: "Airport transfer planning", href: "/best-cruise-ports-in-florida" },
    { label: "Bahamas cruise guide", href: "/best-bahamas-cruises-from-florida" },
    { label: "Florida vacation packages", href: "https://floridadealshub.com/vacation-packages" }
  ];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Related Cruises</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Keep comparing Florida cruise options.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-black text-ocean" href="/">
            Florida Cruise Deals home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {relatedPages.map((related) => (
            <TrackedNavLink
              key={related.slug}
              href={`/${related.slug}`}
              label={related.h1}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-ocean">Florida cruise guide</p>
              <h3 className="mt-3 text-lg font-black text-ink">{related.h1}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slateText">{related.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                View page
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </TrackedNavLink>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Readers also planned</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {readersAlsoPlanned.map((item) => (
              <TrackedNavLink className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href={item.href} label={item.label} key={item.href}>
                {item.label}
              </TrackedNavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CruisePlanningComparisons() {
  const portRows = [
    ["Port Canaveral", "Orlando trips, families, Bahamas", "MCO or drive-to", "Cocoa Beach hotel and transfer buffer"],
    ["Miami", "Route variety and short cruises", "MIA or FLL", "Traffic, terminal, and downtown hotel timing"],
    ["Fort Lauderdale", "South Florida and Caribbean", "FLL", "Port Everglades hotel and transfer plan"],
    ["Tampa", "Gulf Coast and western routes", "TPA or drive-to", "Bridge traffic, downtown hotel, and parking"],
    ["Jacksonville", "North Florida drive-to trips", "JAX or drive-to", "Limited schedule means dates matter more"]
  ];
  const lengthRows = [
    ["2-4 nights", "Weekend trips and first cruises", "Bahamas and private islands", "Compressed schedule and fewer full port days"],
    ["5-6 nights", "Families and mixed sea/port time", "Bahamas, Mexico, Western Caribbean", "More vacation time and onboard spending"],
    ["7 nights", "Classic destination-focused vacations", "Eastern or Western Caribbean", "Higher total trip cost and more planning"],
    ["8+ nights", "Travelers prioritizing itinerary depth", "Southern Caribbean and extended routes", "More time away and fewer departure dates"]
  ];
  const fitRows = [
    ["Weekend cruise", "Quick getaway with minimal time off", "Short schedule can feel rushed", "/weekend-cruises-from-florida"],
    ["Bahamas cruise", "Beaches, private islands, first cruises", "Weather and port-day timing matter", "/bahamas-cruise-deals"],
    ["Caribbean cruise", "More islands and itinerary variety", "Usually needs more nights", "/caribbean-cruise-deals"],
    ["Mexico cruise", "Western routes and Gulf departures", "Port mix varies by ship and season", "/mexico-cruise-deals"]
  ];

  return (
    <>
      <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise comparison table</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Choose a cruise style by trip fit, not headline fare.</h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[48rem] border-collapse text-left">
              <thead className="bg-ink text-sm font-black text-white">
                <tr><th className="p-4">Cruise type</th><th className="p-4">Best for</th><th className="p-4">Main tradeoff</th><th className="p-4">Explore</th></tr>
              </thead>
              <tbody className="text-sm font-semibold leading-6 text-slateText">
                {fitRows.map(([type, bestFor, tradeoff, href]) => (
                  <tr className="border-t border-slate-200" key={type}>
                    <th className="bg-sand p-4 font-black text-ink">{type}</th>
                    <td className="p-4">{bestFor}</td>
                    <td className="p-4">{tradeoff}</td>
                    <td className="p-4"><a className="font-black text-ocean" href={href}>View guide</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Departure-port comparison</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Compare Florida cruise ports before choosing a sailing.</h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[58rem] border-collapse text-left">
              <thead className="bg-sky-50 text-sm font-black text-ink">
                <tr><th className="p-4">Port</th><th className="p-4">Best for</th><th className="p-4">Airport plan</th><th className="p-4">Key planning issue</th></tr>
              </thead>
              <tbody className="text-sm font-semibold leading-6 text-slateText">
                {portRows.map((row) => (
                  <tr className="border-t border-slate-200" key={row[0]}>
                    {row.map((cell, index) => <td className={`p-4 ${index === 0 ? "font-black text-ink" : ""}`} key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise-length comparison</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Match the number of nights to the vacation you want.</h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[54rem] border-collapse text-left">
              <thead className="bg-white text-sm font-black text-ink">
                <tr><th className="p-4">Length</th><th className="p-4">Best for</th><th className="p-4">Common itinerary</th><th className="p-4">Watch for</th></tr>
              </thead>
              <tbody className="text-sm font-semibold leading-6 text-slateText">
                {lengthRows.map((row) => (
                  <tr className="border-t border-slate-200" key={row[0]}>
                    {row.map((cell, index) => <td className={`p-4 ${index === 0 ? "font-black text-ink" : ""}`} key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function CruiseDestinationCards() {
  const destinations = [
    { title: "Bahamas Cruises", description: "Compare short island sailings, Nassau, and private-island routes.", href: "/bahamas-cruise-deals", icon: Waves },
    { title: "Caribbean Cruises", description: "Explore Eastern, Western, and longer island itineraries.", href: "/caribbean-cruise-deals", icon: Compass },
    { title: "Mexico Cruises", description: "Compare Cozumel, Costa Maya, and Gulf Coast route ideas.", href: "/mexico-cruise-deals", icon: MapPin },
    { title: "Weekend Cruises", description: "Find 2-4 night Florida departures for a faster getaway.", href: "/weekend-cruises-from-florida", icon: Clock3 }
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise destinations</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Explore Florida cruises by destination and trip length.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => {
            const Icon = destination.icon;
            return (
              <a className="group rounded-3xl border border-slate-200 bg-sand p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50" href={destination.href} key={destination.href}>
                <Icon className="h-7 w-7 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-ink">{destination.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slateText">{destination.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Compare cruises <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InlineNewsletterCta() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl bg-ink p-6 text-white shadow-soft sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-aqua">Florida cruise alerts</p>
          <h2 className="mt-2 text-2xl font-black">Get weekend cruise ideas and port-planning updates.</h2>
          <p className="mt-2 text-sm font-semibold text-slate-300">Free alerts. No fake urgency. Fares and availability can change.</p>
        </div>
        <a className="btn btn-gold min-h-12 shrink-0 px-6" href="#alerts">Get Free Cruise Alerts</a>
      </div>
    </section>
  );
}

function EditorialTrustSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-sand p-6 shadow-card sm:p-8">
        <div className="flex items-start gap-4">
          <BookOpenCheck className="mt-1 h-7 w-7 shrink-0 text-ocean" aria-hidden="true" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">How this guide is maintained</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-ink">Editorial review, pricing context, and transparent updates.</h2>
            <p className="mt-4 max-w-4xl text-sm font-semibold leading-7 text-slateText">
              Florida Cruise Deals organizes cruise searches by port, destination, trip length, and traveler intent. Editors review route context, planning guidance, internal links, and booking caveats. Fares, schedules, cabins, taxes, and availability must always be confirmed with the booking source.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-secondary px-5" href="/editorial-policy">Editorial Process</a>
              <a className="btn btn-secondary px-5" href="/how-cruise-pricing-works">Cruise Pricing Policy</a>
              <a className="btn btn-secondary px-5" href="/about">About Florida Cruise Deals</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs({ page }: { page: CruiseSeoPage }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-slateText">
      <a className="transition hover:text-ocean" href="/">
        Home
      </a>
      <span aria-hidden="true">/</span>
      <a className="transition hover:text-ocean" href="/">
        Florida Cruise Deals
      </a>
      <span aria-hidden="true">/</span>
      <span className="text-ink">{page.h1}</span>
    </nav>
  );
}

function FaqSection({ page }: { page: CruiseSeoPage }) {
  const faqs = getCruiseSeoFaqs(page);

  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise Questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
            Helpful answers before you compare fares.
          </h2>
        </div>
        <div className="mt-8 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-base font-black text-ink marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm font-medium leading-6 text-slateText">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoIntroSection({ page }: { page: CruiseSeoPage }) {
  if (!page.seoCopy?.length) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise planning guide</p>
        <div className="mt-5 space-y-5 text-base font-medium leading-8 text-slateText">
          {page.seoCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable({ page }: { page: CruiseSeoPage }) {
  const isComparison = page.slug.includes("-vs-") || page.slug.includes("-versus-");

  if (!isComparison) {
    return null;
  }

  const [leftRaw, rightRaw] = page.h1.split(/\s+vs\s+/i);
  const left = leftRaw || "Option A";
  const right = rightRaw || "Option B";
  const rows = [
    ["Best for", `${left} travelers who want the strengths described in this guide.`, `${right} travelers who want a different cruise style or trip plan.`],
    ["Planning focus", "Compare port access, fare rules, cabin type, hotels, and transportation.", "Compare total trip cost, itinerary style, timing, and availability."],
    ["What can change", "Fares, taxes, fees, port expenses, cabin inventory, and schedules.", "Fares, taxes, fees, port expenses, cabin inventory, and schedules."],
    ["Before booking", "Confirm current details with the booking source.", "Confirm current details with the booking source."]
  ];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Comparison table</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Quick comparison before you choose.</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
          <div className="grid grid-cols-3 bg-ink text-sm font-black text-white">
            <div className="p-4">Factor</div>
            <div className="p-4">{left}</div>
            <div className="p-4">{right}</div>
          </div>
          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-t border-slate-200 text-sm font-medium leading-6 text-slateText">
              <div className="bg-sand p-4 font-black text-ink">{row[0]}</div>
              <div className="p-4">{row[1]}</div>
              <div className="p-4">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortClusterSection() {
  const clusters = [
    {
      title: "Miami Cruise Cluster",
      links: [
        { label: "Cruises From Miami", href: "/cruises-from-miami" },
        { label: "Bahamas Cruises From Miami", href: "/bahamas-cruise-deals" },
        { label: "Caribbean Cruises From Miami", href: "/caribbean-cruise-deals" },
        { label: "Miami Cruise Port Guide", href: "/miami-cruise-port-guide" },
        { label: "Miami Flight Deals", href: "https://flightdealsflorida.org" },
        { label: "Miami Local Deals", href: "https://localdealsflorida.org" }
      ]
    },
    {
      title: "Port Canaveral Cluster",
      links: [
        { label: "Cruises From Port Canaveral", href: "/cruises-from-port-canaveral" },
        { label: "Bahamas Cruises From Port Canaveral", href: "/bahamas-cruises-from-port-canaveral" },
        { label: "Family Cruises From Port Canaveral", href: "/family-cruise-deals-florida" },
        { label: "Port Canaveral Cruise Port Guide", href: "/port-canaveral-cruise-port-guide" },
        { label: "Orlando Flight Deals", href: "https://flightdealsflorida.org" },
        { label: "Orlando Hotel Deals", href: "https://hoteldealsflorida.org" }
      ]
    },
    {
      title: "Tampa Cruise Cluster",
      links: [
        { label: "Cruises From Tampa", href: "/cruises-from-tampa" },
        { label: "Caribbean Cruise Deals", href: "/caribbean-cruise-deals" },
        { label: "Mexico Cruise Deals", href: "/mexico-cruise-deals" },
        { label: "Tampa Cruise Port Guide", href: "/tampa-cruise-port-guide" },
        { label: "Tampa Local Deals", href: "https://localdealsflorida.org" },
        { label: "Tampa Hotel Deals", href: "https://hoteldealsflorida.org" }
      ]
    }
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Florida cruise clusters</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
          Explore ports, destinations, hotels, flights, and local plans together.
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {clusters.map((cluster) => (
            <div key={cluster.title} className="rounded-3xl border border-slate-200 bg-sand p-5 shadow-card">
              <h3 className="text-lg font-black text-ink">{cluster.title}</h3>
              <div className="mt-4 grid gap-2">
                {cluster.links.map((link) => (
                  <TrackedNavLink key={link.href + link.label} href={link.href} label={link.label} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slateText transition hover:border-sky-200 hover:text-ocean">
                    {link.label}
                  </TrackedNavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getPrimaryPort(page: CruiseSeoPage, cards: ReturnType<typeof getCruiseSearchCards>) {
  const pagePort = ["Miami", "Port Canaveral", "Fort Lauderdale", "Tampa", "Jacksonville"].find((port) =>
    page.h1.includes(port)
  );

  return pagePort ?? cards.find((card) => card.port)?.port ?? "Miami";
}

function CompleteCruiseTrip({ page, cards }: { page: CruiseSeoPage; cards: ReturnType<typeof getCruiseSearchCards> }) {
  const primaryPort = getPrimaryPort(page, cards);
  const portHotel = getExpediaPortHotelLink(primaryPort);
  const networkCards = [
    {
      title: "Find flights to Florida",
      description: "Compare Florida flight deal alerts before you choose a cruise departure city.",
      href: "https://flightdealsflorida.org",
      icon: Plane
    },
    {
      title: "Explore local deals before sailing",
      description: "Find attractions, restaurants, and things to do near Florida port cities.",
      href: "https://localdealsflorida.org",
      icon: Ticket
    },
    {
      title: "Browse Florida hotel deals",
      description: "Compare Florida resort, beach, and city hotel deals across the network.",
      href: "https://hoteldealsflorida.org",
      icon: Building2
    }
  ];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Start Planning Your Cruise Trip</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
            Hotels, flights, and local plans around your sailing.
          </h2>
          <p className="mt-3 text-base font-medium leading-7 text-slateText">
            Many Florida cruise travelers book a pre-cruise hotel near the port, then compare flights and local plans before sailing. Hotel rates may change, so check current availability before booking.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <TrackedHotelLink
            href={portHotel.url}
            destinationKey={portHotel.destinationKey}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
            ariaLabel={`Find hotels near ${primaryPort} before your cruise`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-ocean ring-1 ring-sky-100">
              <BedDouble className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-black text-ink">Check port hotels</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slateText">
              Search {portHotel.label} for a pre-cruise stay. Hotel rates may change and availability varies.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
              Check Port Hotels
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </TrackedHotelLink>
          {networkCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand text-ink ring-1 ring-slate-200 transition group-hover:bg-sky-50 group-hover:text-ocean">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-black text-ink">{card.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slateText">{card.description}</p>
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

function PreCruiseHotelSection({ page, cards }: { page: CruiseSeoPage; cards: ReturnType<typeof getCruiseSearchCards> }) {
  const primaryPort = getPrimaryPort(page, cards);
  const portHotel = getExpediaPortHotelLink(primaryPort);

  return (
    <section className="bg-white px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-sand p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Pre-cruise hotels</p>
            <h2 className="mt-2 text-2xl font-black tracking-normal text-ink sm:text-3xl">
              Need a hotel before your cruise?
            </h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">
              Flying in the night before? Compare {portHotel.label} before your sailing. Hotel rates may change, so check current rates and availability before booking.
            </p>
          </div>
          <TrackedHotelLink
            href={portHotel.url}
            destinationKey={portHotel.destinationKey}
            className="btn btn-secondary min-h-12 shrink-0 px-5"
            ariaLabel={portHotel.cta}
          >
            {portHotel.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </TrackedHotelLink>
        </div>
      </div>
    </section>
  );
}

function CruisePackingGearSection({ page }: { page: CruiseSeoPage }) {
  const shouldShowGear = /packing|beach|bahamas|family|weekend|first-time|water|port/.test(page.slug);

  if (!shouldShowGear) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise packing essentials</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Outdoor gear for beach ports and Florida add-ons.</h2>
          <p className="mt-3 text-base font-medium leading-7 text-slateText">
            Useful gear sources for cruise travelers planning beach days, fishing-friendly excursions, pre-cruise weekends, and Florida water activities. Product availability and prices may change.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cruisePackingGearPicks.map((item) => (
            <AffiliateGearLink ctaText={item.category === "fishing_gear" ? "Florida Fishing Essentials" : "Travel Gear Recommendations"} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CruiseRevenuePlanning({ page, cards }: { page: CruiseSeoPage; cards: ReturnType<typeof getCruiseSearchCards> }) {
  const priorityRevenueSlugs = new Set(["cheap-cruises-from-florida", "best-bahamas-cruises-from-florida", "cruise-hotel-packages", "cruise-and-hotel-packages", "last-minute-cruise-deals-florida", "last-minute-cruises-from-florida-guide"]);
  const primaryPort = getPrimaryPort(page, cards);
  const portHotel = getExpediaPortHotelLink(primaryPort);
  const showCompletePackage = priorityRevenueSlugs.has(page.slug);

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">{showCompletePackage ? "Complete Cruise Package" : "Cruise planning checklist"}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Cruise + hotel + transportation + parking + insurance.</h2>
          <p className="mt-3 text-base font-medium leading-7 text-slateText">Compare every fixed part of the sailing before booking. Hotel search is active; transportation, parking, and insurance cards remain internal until approved partner links are available.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <RevenueCtaCard eyebrow="Cruise" headline="Compare current sailings" benefits={["Review ship, itinerary, cabin, and fees", "Confirm live dates with the booking source"]} href="#current-searches" cta="Compare Cruise Options" icon={<Sailboat className="h-5 w-5" />} />
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-ocean"><BedDouble className="h-5 w-5" /></div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-ocean">Hotel</p>
            <h3 className="mt-2 text-xl font-black text-ink">Stay near {primaryPort}</h3>
            <ul className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-slateText"><li>• Reduce same-day travel risk</li><li>• Compare current rates and cancellation terms</li></ul>
            <TrackedHotelLink href={portHotel.url} destinationKey={portHotel.destinationKey} className="btn btn-secondary mt-6 px-5" ariaLabel={`Check hotels near ${primaryPort}`}>Check Port Hotels</TrackedHotelLink>
            <p className="mt-3 text-xs font-bold leading-5 text-slateText">Hotel links may earn a commission. Confirm current provider terms before booking.</p>
          </article>
          <RevenueCtaCard eyebrow="Cruise parking" headline="Compare the full drive-to-port plan" benefits={["Check official port parking and arrival windows", "Compare hotel parking packages when available"]} href="/cruise-port-parking-guide" cta="Plan Cruise Parking" icon={<Car className="h-5 w-5" />} />
          <RevenueCtaCard eyebrow="Transportation" headline="Plan airport and port transfers" benefits={["Allow buffer before fixed sailing times", "Compare airport, hotel, and terminal locations"]} href="/best-cruise-ports-in-florida" cta="Plan Port Transportation" icon={<Plane className="h-5 w-5" />} />
          <RevenueCtaCard eyebrow="Trip protection" headline="Review cruise insurance needs" benefits={["Understand cancellation and medical coverage", "Confirm policy exclusions with the provider"]} href="/first-time-cruise-guide" cta="Read First-Time Cruise Guide" icon={<ShieldCheck className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  );
}

function CruiseQuickAnswer({ page }: { page: CruiseSeoPage }) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="quick-answer-title">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-sky-200 bg-skyline p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Quick answer</p>
          <h2 id="quick-answer-title" className="mt-3 text-3xl font-black tracking-normal text-ink">Compare the cruise, then protect the trip around it.</h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-slateText">
            {page.h1} searches work best when you compare the sailing with the full trip around it. Many Florida cruises are 2-5 nights and leave from Miami, Port Canaveral, Tampa, Fort Lauderdale, or Jacksonville. Compare ports, parking, nearby hotels, and transfers before choosing.
          </p>
          <p className="mt-4 text-sm font-black text-ink">Best for: short getaways, Bahamas trips, first-time cruisers, families, and travelers comparing total trip cost.</p>
          <a className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-ocean px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5" href="#current-searches">
            Check current cruise searches <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Jump to planning</p>
          <div className="mt-5 grid gap-3">
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="#current-searches">Current cruise searches</a>
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="#alerts">Free cruise alerts</a>
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="#faq">Cruise FAQ</a>
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="/florida-cruise-packing-essentials">Cruise packing essentials</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CruiseSeoLandingPage({ page }: { page: CruiseSeoPage }) {
  const cards = getCruiseSearchCards(page.cardIds);
  const faqs = getCruiseSeoFaqs(page);
  const siteUrl = "https://cruisedealsflorida.org";
  const isGuidePage = /guide|best-|vs-|how-to|what-is|included|time-to-book|time-to-cruise|summer|winter|spring|holiday|memorial|cabin|packing|parking|calculator|tips|nassau|freeport|itineraries|2-day|3-day/.test(page.slug);
  const showTransferAndTravel = transferAndTravelSlugs.has(page.slug);
  const showConversionCards = conversionSlugs.has(page.slug);
  const isPriorityCruisePage = priorityCruiseCluster.includes(page.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Florida Deals Hub",
        url: "https://floridadealshub.com"
      },
      {
        "@type": "WebSite",
        name: "Florida Cruise Deals",
        url: siteUrl
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Florida Cruise Deals",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.h1,
            item: `${siteUrl}/${page.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "ItemList",
        name: `Featured cruise searches for ${page.h1}`,
        itemListElement: cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: card.href
        }))
      },
      ...(isGuidePage
        ? [
            {
              "@type": "Article",
              headline: page.title,
              description: page.description,
              image: `${siteUrl}${page.heroImage}`,
              author: {
                "@type": "Organization",
                name: "Florida Deals Hub",
                url: "https://floridadealshub.com"
              },
              publisher: {
                "@type": "Organization",
                name: "Florida Deals Hub",
                url: "https://floridadealshub.com"
              },
              mainEntityOfPage: `${siteUrl}/${page.slug}`
            }
          ]
        : [])
    ]
  };

  return (
    <>
      <ReadingProgressBar />
      <SiteHeader />
      <main>
        {showConversionCards ? <ConversionScrollAnalytics /> : null}
        <ExitNewsletterCapture />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
          <div className="absolute inset-0 -z-10">
            <FallbackImage
              src={page.heroImage}
              alt={page.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              fallbackSrc="/images/fallbacks/florida-deals-placeholder.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/38" />
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_25rem] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <Breadcrumbs page={page} />
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-ocean shadow-sm backdrop-blur">
                <Waves className="h-4 w-4" aria-hidden="true" />
                {page.eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-normal text-ink sm:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slateText sm:text-xl">
                {page.intro}
              </p>
              <p className="mt-4 text-sm font-black text-ocean">
                Current cruise searches and planning context. Verify fares, schedules, and availability with the source.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-slateText">
                Planning around a sailing? Compare pre-cruise hotels near the port, Florida flight options, and local deals before you finalize the trip.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary px-6" href="#current-searches">
                  View Current Searches
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className="btn btn-secondary px-6" href="#alerts">
                  Get Free Alerts
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/92 p-5 shadow-soft backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">What to know</p>
              <div className="mt-5 space-y-4">
                {page.details.map((detail) => (
                  <div key={detail} className="flex gap-3">
                    <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
                    <p className="text-sm font-semibold leading-6 text-slateText">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-sand p-4 text-xs font-bold leading-5 text-slateText">
                Cruise fares may change. Available sailings vary. Taxes, fees, and port expenses may apply.
              </p>
            </div>
          </div>
        </section>

        <CruiseQuickAnswer page={page} />
        <V14CruiseDiscovery slug={page.slug} />
        <FloridaIntelligenceEngine slug={page.slug} />
        <SeoIntroSection page={page} />
        <ComparisonTable page={page} />
        <CruisePlanningComparisons />
        <CruiseDestinationCards />
        <InlineNewsletterCta />
        <PortClusterSection />
        <section id="current-searches" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Featured cruise searches</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
                Check current fares and available sailings.
              </h2>
              <p className="mt-3 text-base font-medium leading-7 text-slateText">
                These links point to cruise lines or trusted cruise search sites so you can verify live dates, cabins, fare rules, and availability.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {cards.map((card) => (
                <CruiseSearchCard key={card.id} card={card} page={page.slug} />
              ))}
            </div>
          </div>
        </section>

        <PreCruiseHotelSection page={page} cards={cards} />
        {isPriorityCruisePage ? <CruiseAffiliatePlanningStack slug={page.slug} /> : null}
        {showConversionCards ? <section className="bg-white px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2"><QuickDealCard /><RecommendedPartnerCard /></div></section> : null}
        {showTransferAndTravel ? (
          <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
              <TransferBookingCard slug={page.slug} />
              <TravelBookingCard />
            </div>
          </section>
        ) : null}
        {showTransferAndTravel ? <V22AffiliateResources slug={page.slug} /> : null}
        <TravelEssentialsBlock slug={page.slug} />
        <CruisePackingGearSection page={page} />
        <CompleteCruiseTrip page={page} cards={cards} />
        <CruiseRevenuePlanning page={page} cards={cards} />
        <CruiseContinuePlanningGuides />
        <RelatedPages page={page} />
        <InlineNewsletterCta />
        <EditorialTrustSection />
        <FaqSection page={page} />
        <EmailSignup />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
