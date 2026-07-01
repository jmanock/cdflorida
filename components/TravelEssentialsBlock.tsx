"use client";

import { useEffect } from "react";
import { ArrowRight, Car, Luggage, Shirt, Waves } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getTransferAffiliateUrl } from "@/lib/revenuePartners";
import { cruiseTravelEssentials, type TravelEssentialItem } from "@/lib/travelEssentials";

const rel = "sponsored nofollow noopener noreferrer";

function clickEvent(advertiser: TravelEssentialItem["advertiser"]) {
  if (advertiser === "nomatic") return "affiliate_click_nomatic";
  if (advertiser === "outfitr") return "affiliate_click_outfitr";
  if (advertiser === "bedsure") return "affiliate_click_bedsure";
  if (advertiser === "esimshop" || advertiser === "esimania") return "affiliate_click_esim";
  if (advertiser === "airport_transfer") return "affiliate_click_transfer";
  return "travel_essentials_click";
}

export function TravelEssentialsBlock({ slug }: { slug: string }) {
  const isInternationalCruise = /bahamas|caribbean|mexico|nassau|freeport|cozumel|cruise/.test(slug);
  const toolkitItems = cruiseTravelEssentials.filter((item) => item.category !== "esim" || isInternationalCruise);
  const items: TravelEssentialItem[] = [
    ...toolkitItems,
    {
      title: "Port transfer plan",
      description: "Reserve your airport or port transfer before sailing day so the fixed cruise check-in window stays protected.",
      cta: "Compare Airport Transfers",
      affiliateUrl: getTransferAffiliateUrl("cruisedealsflorida", slug),
      advertiser: "airport_transfer",
      category: "airport_transfer"
    }
  ];

  useEffect(() => {
    trackEvent("travel_essentials_view", { page_type: "cruise", page_path: window.location.pathname, item_count: items.length });
  }, [items.length]);

  function trackClick(item: TravelEssentialItem) {
    const payload = {
      affiliate_program: "awin",
      advertiser: item.advertiser,
      category: item.category,
      cta_text: item.cta,
      affiliate_partner: item.advertiser,
      item_title: item.title,
      outbound_url: item.affiliateUrl,
      page_topic: slug,
      page_type: "cruise",
      page_path: window.location.pathname,
      placement_type: "travel_toolkit",
      tool_type: item.category
    };
    trackEvent("travel_essentials_click", payload);
    trackEvent("toolkit_click", payload);
    trackEvent("affiliate_click", payload);
    trackEvent(clickEvent(item.advertiser), payload);
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="travel-essentials-title">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-sand p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Travel Toolkit</p>
        <h2 id="travel-essentials-title" className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Before you sail, check the pieces around the cruise.</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">A good carry-on, day bag, comfort item, and transfer plan can make embarkation day much easier.</p>
        <div className="mt-6 grid gap-3 text-sm font-black text-ink sm:grid-cols-2 lg:grid-cols-4">
          {["Hotel before cruise?", "Airport or port transfer?", "Cruise carry-on ready?", "Port-day bag packed?"].map((item) => (
            <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3" key={item}>✓ {item}</span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.advertiser === "airport_transfer" ? Car : item.advertiser === "bedsure" ? Waves : item.advertiser === "outfitr" ? Shirt : Luggage;
            return (
              <a key={`${item.advertiser}-${item.title}`} href={item.affiliateUrl} target="_blank" rel={rel} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" onClick={() => trackClick(item)}>
                <Icon className="h-7 w-7 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slateText">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">{item.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-xs font-bold text-slateText">Some links may be sponsored. We may earn a commission if you book or buy through them.</p>
      </div>
    </section>
  );
}
