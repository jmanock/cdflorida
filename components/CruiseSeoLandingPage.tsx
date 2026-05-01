import Image from "next/image";
import { ArrowRight, CircleCheck, Waves } from "lucide-react";
import { CruiseSearchCard } from "@/components/CruiseSearchCard";
import { EmailSignup } from "@/components/EmailSignup";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getCruiseSearchCards, getCruiseSeoPage, type CruiseSeoPage } from "@/data/seo-pages";

function RelatedPages({ page }: { page: CruiseSeoPage }) {
  const relatedPages = page.relatedSlugs
    .map((slug) => getCruiseSeoPage(slug))
    .filter((related): related is CruiseSeoPage => Boolean(related));

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Related cruise pages</p>
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

export function CruiseSeoLandingPage({ page }: { page: CruiseSeoPage }) {
  const cards = getCruiseSearchCards(page.cardIds);

  return (
    <>
      <SiteHeader />
      <main>
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

        <RelatedPages page={page} />
        <EmailSignup />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
