import Image from "next/image";
import { Anchor, Bell, ShieldCheck } from "lucide-react";
import { DealList } from "@/components/DealList";
import { EmailSignup } from "@/components/EmailSignup";
import { getLatestDeals } from "@/lib/deals";

export default async function Home() {
  const deals = await getLatestDeals();

  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden bg-navy text-white">
        <Image
          src="/images/cruise-hero.png"
          alt="Cruise ship leaving a sunny Florida port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between px-4 py-6 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-lg font-black tracking-tight">
              <Anchor className="h-6 w-6 text-teal" aria-hidden="true" />
              Cruise Deal Inbox
            </a>
            <a href="#alerts" className="hidden rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-navy sm:inline-flex">
              Get Alerts
            </a>
          </header>

          <div className="max-w-3xl py-16 sm:py-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-sm font-semibold text-slate-100 ring-1 ring-white/20 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              Curated Florida cruise offers
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
              Florida Cruise Deals Updated Daily
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Find cheap cruises from Port Canaveral, Miami, Fort Lauderdale, Tampa, and Jacksonville.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#deals" className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal px-6 text-sm font-black text-navy shadow-lg shadow-teal/20 transition hover:bg-[#2dd4bf]">
                View Today&apos;s Deals
              </a>
              <a href="#alerts" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-black text-navy transition hover:bg-slate-100">
                <Bell className="h-4 w-4" aria-hidden="true" />
                Get Deal Alerts
              </a>
            </div>
          </div>

          <div className="grid gap-3 pb-3 text-sm text-slate-100 sm:grid-cols-3">
            <div className="rounded-md bg-white/12 p-4 ring-1 ring-white/15 backdrop-blur">
              <strong className="block text-xl text-white">{deals.length}</strong>
              Active sample deals
            </div>
            <div className="rounded-md bg-white/12 p-4 ring-1 ring-white/15 backdrop-blur">
              <strong className="block text-xl text-white">5</strong>
              Florida departure ports
            </div>
            <div className="rounded-md bg-white/12 p-4 ring-1 ring-white/15 backdrop-blur">
              <strong className="block text-xl text-white">Daily</strong>
              Refresh-ready structure
            </div>
          </div>
        </div>
      </section>

      <DealList initialDeals={deals} />
      <EmailSignup />

      <footer className="bg-[#061a30] px-4 py-8 text-sm text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="font-semibold text-white">Affiliate disclosure</p>
            <p className="mt-1">
              Cruise Deal Inbox may earn a commission when you book through affiliate links. Prices and availability can change at any time.
            </p>
          </div>
          <nav className="flex gap-5 font-semibold">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="mailto:hello@cruisedealinbox.com" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
