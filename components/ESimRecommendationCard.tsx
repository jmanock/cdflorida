"use client";
import { ESIMSHOP_URL } from "@/lib/travelEssentials";
import { trackEvent } from "@/lib/analytics";
export function ESimRecommendationCard({ route }: { route: string }) {
  const cta = "Compare international eSIM options";
  const click = () =>
    trackEvent("affiliate_click", {
      network: "AWIN",
      partner: "eSimShop",
      merchant_id: "124780",
      creative_id: "esimshop-homepage",
      category: "travel_esim",
      site: "cruisedealsflorida",
      route,
      placement: "foreign_port_connectivity",
      cta_text: cta,
      component_type: "ESimRecommendationCard",
    });
  return (
    <aside
      className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm"
      aria-labelledby="esim-heading"
    >
      <p className="text-sm font-black uppercase text-ocean">
        Optional connectivity planning
      </p>
      <h2 id="esim-heading" className="mt-2 text-2xl font-black text-ink">
        Staying connected in Caribbean ports
      </h2>
      <p className="mt-3 leading-7 text-slateText">
        Cruise Wi-Fi and cellular coverage vary by ship, port and plan. An
        international eSIM may help with mobile data while ashore when your
        device and destination are supported.
      </p>
      <a
        className="mt-5 inline-flex rounded-xl bg-ocean px-5 py-3 font-black text-white"
        href={ESIMSHOP_URL}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={click}
      >
        {cta}
      </a>
      <p className="mt-3 text-xs leading-5 text-slateText">
        Affiliate link. We may earn a commission. Coverage, device
        compatibility, pricing and activation requirements vary by provider and
        destination.
      </p>
    </aside>
  );
}
