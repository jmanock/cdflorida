/* eslint-disable @typescript-eslint/no-explicit-any */
import { Anchor, ArrowRight, Waves } from "lucide-react";
import liveData from "@/data/live-intelligence.json";

function formatUpdate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short" }).format(new Date(value));
}

export function FloridaRightNow() {
  const data = liveData as any;
  const ports = data.cruisePorts || [];
  const activeSystems = data.tropicalWeather?.activeSystems?.length || 0;
  const marineAlerts = (data.locations || []).reduce((total: number, location: any) => total + (location.marine?.officialAlerts?.length || 0), 0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8" aria-labelledby="cruise-ports-preview-title">
      <div className="overflow-hidden rounded-3xl border border-cyan-200 bg-white shadow-card">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-cyan-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-800"><Anchor className="h-4 w-4" /> Florida Cruise Ports Right Now</p><h2 id="cruise-ports-preview-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">Tides, marine alerts, and tropical context by port</h2><p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slateText">Planning context only. Tide predictions do not confirm port operations or sailing status.</p></div>
          <a className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-5 text-sm font-black text-white" href="/florida-cruise-port-status">View Florida cruise port status <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {ports.map((port: any) => (
            <article className="min-w-0 bg-white p-5" key={port.portId}><div className="flex items-center justify-between gap-3"><h3 className="text-lg font-black text-ink">{port.name}</h3><Waves className="h-5 w-5 text-cyan-700" /></div><p className="mt-3 text-sm font-black text-ink">{port.tidePredictions?.length ? `${port.tidePredictions.length} tide predictions available` : "Tide data unavailable"}</p><p className="mt-1 text-xs font-semibold leading-5 text-slateText">Operational status: verify with port and cruise line</p></article>
          ))}
        </div>
        <div className="flex flex-col gap-2 px-5 py-4 text-xs font-bold text-slateText sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>{marineAlerts ? `${marineAlerts} official marine alert record${marineAlerts === 1 ? "" : "s"}` : "No active marine alerts found"} · {activeSystems ? `${activeSystems} tropical system record${activeSystems === 1 ? "" : "s"}` : "No active tropical systems in the latest official feed"}</span><span>Conditions updated <time dateTime={data.generatedAt}>{formatUpdate(data.generatedAt)}</time> · Sources: NOAA, NHC</span></div>
      </div>
    </section>
  );
}
