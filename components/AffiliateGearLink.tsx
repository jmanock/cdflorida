"use client";

import type { PiscifunAffiliateItem } from "@/lib/affiliate/piscifunLinks";
import { trackEvent } from "@/lib/analytics";
import { FallbackImage } from "@/components/FallbackImage";

export function AffiliateGearLink({ item, ctaText = "Browse Piscifun Products" }: { item: PiscifunAffiliateItem; ctaText?: string }) {
  function handleClick() {
    trackEvent("affiliate_click", {
      source_site: "cruisedealsflorida.org",
      affiliate_program: "awin",
      advertiser: "piscifun",
      item_title: item.title,
      category: item.category,
      cta_text: ctaText,
      outbound_url: item.affiliateUrl,
      page_path: window.location.pathname
    });
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="relative h-40 bg-sand">
        <FallbackImage src={item.imageUrl} alt={item.imageAlt} fill className="object-cover" fallbackSrc="/images/fallbacks/cruise-placeholder.png" />
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-ocean">{item.destinationOrUseCase}</p>
        <h3 className="mt-2 text-lg font-black text-ink">{item.title}</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-slateText">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.bestForTags.map((tag) => (
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-black text-slateText" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a className="btn btn-secondary mt-5 min-h-11 px-4" href={item.affiliateUrl} onClick={handleClick} rel="nofollow sponsored noopener noreferrer" target="_blank">
          {ctaText}
        </a>
        <p className="mt-3 text-xs font-semibold leading-5 text-slateText">
          Some links on this site may earn us a commission at no extra cost to you.
        </p>
      </div>
    </article>
  );
}
