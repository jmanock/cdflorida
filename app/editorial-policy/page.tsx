import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Editorial Policy | Florida Cruise Deals",
  description: "Learn how Florida Cruise Deals organizes cruise searches, port guides, planning content, and trust language for Florida travelers.",
  alternates: {
    canonical: "https://cruisedealsflorida.org/editorial-policy"
  },
  openGraph: {
    title: "Editorial Policy | Florida Cruise Deals",
    description: "How Florida Cruise Deals publishes cruise planning content and curated Florida cruise searches.",
    url: "https://cruisedealsflorida.org/editorial-policy",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | Florida Cruise Deals",
    description: "How Florida Cruise Deals publishes cruise planning content and curated Florida cruise searches."
  }
};

export default function EditorialPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-sand px-4 py-14 text-ink sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to Florida Cruise Deals</a>
          <h1 className="mt-6 text-4xl font-black tracking-normal">Editorial Policy</h1>
          <div className="mt-6 space-y-5 text-base font-medium leading-8 text-slateText">
            <p>
              Cruise Deals Florida is part of the Florida Deals Hub travel network. We organize Florida cruise ports, cruise destinations, sailing ideas, port guides, and cruise planning content to help travelers compare options faster.
            </p>
            <p>
              Our pages use safe travel language because cruise fares may change, taxes and port fees may apply, cabin availability varies by sailing, and travelers should confirm details directly with booking or source sites before purchasing.
            </p>
            <p>
              We prioritize useful Florida cruise planning context: departure ports, nearby airports, hotel needs, common destinations, cruise lengths, traveler fit, and current cruise search links. Partner links may earn a commission, which helps keep the site free to use.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
