/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloridaRightNow } from "@/components/FloridaRightNow";
import { ESimRecommendationCard } from "@/components/ESimRecommendationCard";
import { TripRetentionTools } from "@/components/TripRetentionTools";
import data from "@/data/live-intelligence.json";
export const metadata: Metadata = {
  title: "Florida Cruise Port Status: Weather, Marine Alerts & Tides",
  description:
    "Review official weather context and NOAA tide predictions for Port Canaveral, PortMiami, Port Everglades and Port Tampa Bay.",
  alternates: {
    canonical: "https://cruisedealsflorida.org/florida-cruise-port-status",
  },
};
export default function Page() {
  const ports = (data as any).cruisePorts || [];
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-sand px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase text-ocean">
              Florida Live Intelligence
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-ink sm:text-6xl">
              Florida cruise-port weather and tide status
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
              NOAA tide predictions and official travel context for four Florida
              cruise ports. This page does not claim a port or sailing is
              delayed.
            </p>
          </div>
        </section>
        <FloridaRightNow />
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {ports.map((p: any) => (
              <article
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                key={p.portId}
              >
                <p className="text-sm font-black uppercase text-ocean">
                  NOAA station {p.tideStation}
                </p>
                <h2 className="mt-2 text-2xl font-black text-ink">{p.name}</h2>
                <p className="mt-3 text-slateText">
                  {p.tidePredictions?.length
                    ? `${p.tidePredictions.length} high/low predictions available for today.`
                    : "Current tide predictions are unavailable."}
                </p>
                <p className="mt-3 text-sm text-slateText">{p.warning}</p>
                <a
                  className="mt-4 inline-flex font-black text-ocean underline"
                  href={`https://tidesandcurrents.noaa.gov/stationhome.html?id=${p.tideStation}`}
                >
                  Open official NOAA station
                </a>
              </article>
            ))}
          </div>
          <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-black text-ink">
                How to interpret port conditions
              </h2>
              <p className="mt-4 leading-7 text-slateText">
                Tides and weather may affect trip planning, but they do not
                establish terminal traffic, ship schedules or cruise-line
                decisions. Verify embarkation details with your cruise line and
                the official port.
              </p>
              <p className="mt-4 leading-7 text-slateText">
                Official coastal and tropical alerts appear only when their
                source supplies an active record. Missing operational data is
                labeled unavailable, never converted to zero delays.
              </p>
            </div>
            <ESimRecommendationCard route="/florida-cruise-port-status" />
          </section>
        </section>
        <TripRetentionTools liveDataKey="florida-cruise-ports" pageType="live_condition_page" route="/florida-cruise-port-status" site="cruisedealsflorida" title="Florida Cruise Port Status" />
      </main>
      <SiteFooter />
    </>
  );
}
