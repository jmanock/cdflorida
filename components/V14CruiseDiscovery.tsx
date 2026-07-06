"use client";

import { ArrowRight, BedDouble, Car, Luggage, Ship, Smartphone, Waves } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type DiscoveryItem = {
  title: string;
  copy: string;
  href: string;
  cta: string;
};

function track(item: DiscoveryItem, placement: string) {
  const payload = {
    source_page: window.location.pathname,
    target_page: item.href,
    destination: item.title,
    placement_name: placement,
    placement_type: "v14_cruise_discovery",
    cta_text: item.cta
  };

  trackEvent("internal_related_click", payload);
  trackEvent("related_guide_click", payload);
  trackEvent("cta_click", payload);
}

export function V14CruiseDiscovery({ slug }: { slug: string }) {
  const isBahamas = slug.includes("bahamas");
  const isMexico = slug.includes("mexico");
  const destinationGuide = isMexico
    ? { title: "Mexico cruises from Florida", href: "/mexico-cruise-deals" }
    : isBahamas
      ? { title: "Bahamas cruises from Florida", href: "/bahamas-cruise-deals" }
      : { title: "Weekend cruises from Florida", href: "/weekend-cruises-from-florida" };
  const steps: DiscoveryItem[] = [
    {
      title: "Port hotel before sailing",
      copy: "Avoid same-day stress by comparing hotels near Miami, Port Canaveral, Tampa, Fort Lauderdale, or Jacksonville.",
      href: "https://hoteldealsflorida.org/best-hotels-near-florida-cruise-ports",
      cta: "Compare port hotels"
    },
    {
      title: "Airport and port transfer plan",
      copy: "Cruise check-in windows are fixed. Build the airport, hotel, and terminal transfer before you book the sailing.",
      href: "/best-cruise-ports-in-florida",
      cta: "Plan transfers"
    },
    {
      title: "Cruise packing and eSIM checklist",
      copy: "Handle luggage, documents, beach bags, and international connectivity before embarkation day.",
      href: "/florida-cruise-packing-essentials",
      cta: "View packing guide"
    },
    {
      title: destinationGuide.title,
      copy: "Compare the route, port timing, family fit, and trip length before picking a ship.",
      href: destinationGuide.href,
      cta: "Compare cruises"
    }
  ];
  const trending: DiscoveryItem[] = [
    { title: "3-day cruises from Florida", copy: "Short sailings for quick island trips.", href: "/best-3-day-cruises-from-florida", cta: "Compare 3-day cruises" },
    { title: "Cruises from Jacksonville", copy: "North Florida drive-to cruise planning.", href: "/cruises-from-jacksonville", cta: "View Jacksonville cruises" },
    { title: "Bahamas cruises from Port Canaveral", copy: "Orlando-area cruise add-ons and short island sailings.", href: "/bahamas-cruises-from-port-canaveral", cta: "View Port Canaveral cruises" },
    { title: "Summer cruises from Florida", copy: "Family timing, weather, and seasonal cruise planning.", href: "/summer-cruises-from-florida", cta: "See summer cruises" }
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="v14-cruise-discovery-title">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Plan the rest of your cruise</p>
            <h2 id="v14-cruise-discovery-title" className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Cruise booked? Now handle the hotel, transfer, eSIM, and bags.
            </h2>
          </div>
          <p className="text-sm font-semibold leading-7 text-slateText">
            These are the things cruise travelers often remember late. Compare them early so the port day, arrival day, and return day are easier.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = index === 0 ? BedDouble : index === 1 ? Car : index === 2 ? Luggage : Ship;
            return (
              <a className="group rounded-3xl border border-slate-200 bg-sand p-5 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-skyline" href={item.href} key={item.href} onClick={() => track(item, "cruise_plan_rest_of_trip")}>
                <Icon className="h-6 w-6 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{item.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">{item.cta}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </a>
            );
          })}
        </div>
        <div className="mt-7 rounded-3xl bg-ink p-5 text-white">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-aqua">Trending cruise guides</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((item, index) => {
              const Icon = index === 0 ? Ship : index === 1 ? Waves : index === 2 ? Smartphone : Car;
              return (
                <a className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/15 transition hover:bg-white/18" href={item.href} key={item.href} onClick={() => track(item, "cruise_trending_guides")}>
                  <Icon className="mr-2 inline h-4 w-4 text-aqua" aria-hidden="true" />
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
