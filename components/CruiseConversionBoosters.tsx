"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Car, Hotel, Mail, Ship, Umbrella } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { AIRPORT_TRANSFER_AFFILIATE_URL, SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";

const rel = "sponsored nofollow noopener noreferrer";

function trackAffiliate(eventName: string, advertiser: string, url: string, ctaText: string, placement: string) {
  const payload = { affiliate_program: "awin", advertiser, cta_text: ctaText, outbound_url: url, placement, page_path: window.location.pathname };
  trackEvent(eventName, payload);
  trackEvent("affiliate_click", payload);
  trackEvent("cruise_cta_click", payload);
}

export function CruisePortComparisonWidget() {
  const ports = [
    ["Port Canaveral", "Best with Orlando trips", "MCO, Cocoa Beach hotels, family ships"],
    ["Miami", "Best for Bahamas variety", "MIA, Brickell hotels, short cruises"],
    ["Fort Lauderdale", "Best South Florida alternative", "FLL, Port Everglades, beach hotels"],
    ["Tampa", "Best Gulf Coast drive trips", "TPA, downtown hotels, western routes"]
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
        <div className="border-b border-slate-200 bg-sand p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Cruise port comparison</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Port Canaveral vs Miami cruise departures.</h2>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">Compare the port around airport timing, hotel needs, parking, and pre-cruise activities before choosing a short sailing.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[48rem] border-collapse text-left">
            <thead className="bg-white text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <tr><th className="border-b border-slate-200 px-5 py-4">Port</th><th className="border-b border-slate-200 px-5 py-4">Best for</th><th className="border-b border-slate-200 px-5 py-4">Planning notes</th></tr>
            </thead>
            <tbody className="text-sm font-semibold leading-6 text-slateText">
              {ports.map(([port, bestFor, notes]) => (
                <tr key={port} className="odd:bg-sand/50" onClick={() => trackEvent("comparison_table_interaction", { table: "cruise_port_comparison", selected_port: port, page_path: window.location.pathname })}>
                  <th className="border-b border-slate-200 px-5 py-4 font-black text-ink">{port}</th>
                  <td className="border-b border-slate-200 px-5 py-4">{bestFor}</td>
                  <td className="border-b border-slate-200 px-5 py-4">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function CruiseAffiliatePlanningStack({ slug }: { slug: string }) {
  const transferUrl = `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`cruisedealsflorida:${slug}`)}`;
  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Complete cruise planning</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Book the pieces around the sailing.</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Short cruises work best when the hotel, transfer, parking, and backup plan are settled before final payment.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" href={ZENHOTELS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_zenhotels", "zenhotels", ZENHOTELS_AFFILIATE_URL, "Find Pre-Cruise Hotels", "cruise_planning_stack")}>
            <Hotel className="h-7 w-7 text-ocean" />
            <h3 className="mt-4 text-xl font-black text-ink">Hotel before cruise</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare port-area hotels for the night before sailing.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Find Pre-Cruise Hotels <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-slate-200 bg-ink p-6 text-white shadow-soft transition hover:-translate-y-1" href={SKYLARK_HOME_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark", "skylark", SKYLARK_HOME_AFFILIATE_URL, "Compare Luxury Pre-Cruise Hotels", "cruise_planning_stack")}>
            <Umbrella className="h-7 w-7 text-gold" />
            <h3 className="mt-4 text-xl font-black">Luxury pre-cruise hotel</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/75">Look at premium stays before a Miami or Port Canaveral sailing.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">Compare Luxury Hotels <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" href={transferUrl} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click", "airport_transfer_portal", transferUrl, "Compare Airport Transfers", "cruise_planning_stack")}>
            <Car className="h-7 w-7 text-ocean" />
            <h3 className="mt-4 text-xl font-black text-ink">Airport transfer planning</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare airport-to-port transportation before cruise day.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Compare Airport Transfers <ArrowRight className="h-4 w-4" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function CruiseContinuePlanningGuides() {
  const guides = [
    ["Hotels Near Cruise Ports", "https://hoteldealsflorida.org/best-hotels-near-florida-cruise-ports", Hotel],
    ["Cruise Parking", "/cruise-port-parking-guide", Car],
    ["Airport Transfers", "#alerts", Car],
    ["Bahamas Cruise Guides", "/bahamas-cruise-guide", Ship]
  ] as const;
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Continue planning your Florida trip</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Next steps after choosing a cruise.</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {guides.map(([label, href, Icon]) => (
            <a key={label} href={href} className="group rounded-3xl border border-slate-200 bg-sand p-5 transition hover:border-sky-200 hover:bg-skyline" onClick={() => {
              const payload = { item_title: label, outbound_url: href, page_path: window.location.pathname };
              trackEvent("related_guide_click", payload);
              trackEvent("continue_planning_click", payload);
              if (href.startsWith("https://")) trackEvent("cross_site_click", payload);
            }}>
              <Icon className="h-6 w-6 text-ocean" />
              <h3 className="mt-4 text-lg font-black text-ink">{label}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">Plan this step <ArrowRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExitNewsletterCapture() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progress >= 0.7 && !dismissed && !visible) {
        setVisible(true);
        trackEvent("newsletter_signup", { trigger: "scroll_70", page_path: window.location.pathname });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, visible]);
  if (!visible || dismissed) return null;
  return <aside className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-3xl border border-sky-200 bg-white p-5 shadow-soft"><button className="absolute right-4 top-3 text-sm font-black text-slateText" type="button" onClick={() => setDismissed(true)}>Close</button><p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Get New Florida Deals Every Week</p><h2 className="mt-2 pr-12 text-xl font-black text-ink">Cruise alerts, hotel ideas, and weekend Florida planning.</h2><a className="mt-4 inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-black text-white" href="#alerts" onClick={() => setDismissed(true)}><Mail className="h-4 w-4" />Join free alerts</a></aside>;
}
