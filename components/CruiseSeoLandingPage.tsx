import Image from "next/image";
import { ArrowRight, BedDouble, Building2, CircleCheck, Plane, Ticket, Waves } from "lucide-react";
import { CruiseSearchCard } from "@/components/CruiseSearchCard";
import { EmailSignup } from "@/components/EmailSignup";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedHotelLink } from "@/components/TrackedHotelLink";
import { getPortHotelBookingLink } from "@/data/booking-links";
import {
  getCruiseSearchCards,
  getCruiseSeoFaqs,
  getCruiseSeoPage,
  popularCruiseSearches,
  type CruiseSeoPage
} from "@/data/seo-pages";

function RelatedPages({ page }: { page: CruiseSeoPage }) {
  const prioritySlugs = popularCruiseSearches
    .map((link) => link.href.replace("/", ""))
    .filter((slug) => slug !== page.slug);
  const relatedSlugs = Array.from(new Set([...page.relatedSlugs, ...prioritySlugs])).slice(0, 6);
  const relatedPages = relatedSlugs
    .map((slug) => getCruiseSeoPage(slug))
    .filter((related): related is CruiseSeoPage => Boolean(related));

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Related Cruise Searches</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Keep comparing Florida cruise options.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-black text-ocean" href="/">
            Florida Cruise Deals home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedPages.map((related) => (
            <a
              key={related.slug}
              href={`/${related.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-ocean">Florida cruise guide</p>
              <h3 className="mt-3 text-lg font-black text-ink">{related.h1}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slateText">{related.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                View page
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          ))}
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
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
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

function getPrimaryPort(page: CruiseSeoPage, cards: ReturnType<typeof getCruiseSearchCards>) {
  const pagePort = ["Miami", "Port Canaveral", "Fort Lauderdale", "Tampa", "Jacksonville"].find((port) =>
    page.h1.includes(port)
  );

  return pagePort ?? cards.find((card) => card.port)?.port ?? "Miami";
}

function CompleteCruiseTrip({ page, cards }: { page: CruiseSeoPage; cards: ReturnType<typeof getCruiseSearchCards> }) {
  const primaryPort = getPrimaryPort(page, cards);
  const portHotel = getPortHotelBookingLink(primaryPort);
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
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Complete Your Cruise Trip</p>
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
            port={portHotel.port}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
            ariaLabel={`Find hotels near ${primaryPort} before your cruise`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-ocean ring-1 ring-sky-100">
              <BedDouble className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-black text-ink">Find hotels near the port</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slateText">
              Search {portHotel.label} for a pre-cruise stay. Hotel rates may change and availability varies.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
              Book Pre-Cruise Stay
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

export function CruiseSeoLandingPage({ page }: { page: CruiseSeoPage }) {
  const cards = getCruiseSearchCards(page.cardIds);
  const faqs = getCruiseSeoFaqs(page);
  const lastUpdated = page.lastUpdated ?? "May 2026";
  const siteUrl = "https://cruisedealsflorida.org";
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
      }
    ]
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
          <div className="absolute inset-0 -z-10">
            <Image
              src={page.heroImage}
              alt={page.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
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
                Updated: {lastUpdated}. Updated regularly with curated cruise finds and current cruise search links.
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

        <CompleteCruiseTrip page={page} cards={cards} />
        <RelatedPages page={page} />
        <FaqSection page={page} />
        <EmailSignup />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
