"use client";

import { getTransferAffiliateUrl, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";
import { trackEvent } from "@/lib/analyticsContract";

type Resource = {
  partner: string;
  creativeId: string;
  category: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
};

function trackAffiliateClick(resource: Resource, slug: string, placement: string) {
  const payload = {
    partner: resource.partner,
    creative_id: resource.creativeId,
    category: resource.category,
    site: "cruisedealsflorida",
    route: `/${slug}`,
    placement,
    cta_text: resource.cta
  };

  trackEvent("affiliate_click", payload);
}

export function V22AffiliateResources({ slug }: { slug: string }) {
  const resources: Resource[] = [
    {
      partner: "Airport Transfer Portal",
      creativeId: "airport-transfer-portal-default",
      category: "airport_transfers",
      title: "Compare port transfer timing",
      copy: "For fixed sailing times, compare airport, hotel, and cruise-terminal transfer options before the trip plan is final.",
      cta: "Compare port transfers",
      href: getTransferAffiliateUrl("cruisedealsflorida", slug)
    },
    {
      partner: "Zen Hotels",
      creativeId: "zenhotels-homepage",
      category: "hotels",
      title: "Check pre-cruise hotel options",
      copy: "A nearby overnight stay can make early boarding or long-distance arrivals easier to plan.",
      cta: "Check hotel options",
      href: ZENHOTELS_AFFILIATE_URL
    }
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="v22-cruise-affiliate-title">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-sand p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise travel resources</p>
        <h2 id="v22-cruise-affiliate-title" className="mt-2 text-2xl font-black tracking-normal text-ink">
          Add the hotel and transfer plan before sailing.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-ocean"
              href={resource.href}
              key={resource.creativeId}
              onClick={() => trackAffiliateClick(resource, slug, "v22_cruise_travel_resources")}
              rel="sponsored noopener noreferrer"
              target="_blank"
            >
              <h3 className="text-lg font-black text-ink">{resource.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{resource.copy}</p>
              <span className="mt-4 inline-flex text-sm font-black text-ocean">{resource.cta}</span>
            </a>
          ))}
        </div>
        <p className="mt-5 text-xs font-bold leading-5 text-slateText">
          Affiliate disclosure: some cruise-planning links may earn Florida Cruise Deals a commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
