import { ArrowRight } from "lucide-react";
import { popularCruiseSearches } from "@/data/seo-pages";

export function PopularCruiseSearches() {
  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Popular cruise searches</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Browse Florida cruise pages by port, destination, and trip type.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-black text-ocean" href="/cheap-cruises-from-florida">
            View more cruise searches
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularCruiseSearches.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-black text-ink shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:text-ocean hover:shadow-soft"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
