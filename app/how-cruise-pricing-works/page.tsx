import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "How Cruise Pricing Works | Florida Cruise Deals",
  description: "Learn why Florida cruise fares change, what taxes and port fees may apply, and what to confirm before booking a cruise.",
  alternates: {
    canonical: "https://cruisedealsflorida.org/how-cruise-pricing-works"
  },
  openGraph: {
    title: "How Cruise Pricing Works | Florida Cruise Deals",
    description: "Understand cruise fares, taxes, port fees, cabin availability, and final booking checks.",
    url: "https://cruisedealsflorida.org/how-cruise-pricing-works",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "How Cruise Pricing Works | Florida Cruise Deals",
    description: "Understand cruise fares, taxes, port fees, cabin availability, and final booking checks."
  }
};

export default function HowCruisePricingWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-sand px-4 py-14 text-ink sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to Florida Cruise Deals</a>
          <h1 className="mt-6 text-4xl font-black tracking-normal">How Cruise Pricing Works</h1>
          <div className="mt-6 space-y-5 text-base font-medium leading-8 text-slateText">
            <p>
              Cruise fares can change by sailing date, ship, cabin type, occupancy, remaining inventory, promotion rules, taxes, fees, and port expenses. A fare that appears useful on one date may not be available on another date or cabin category.
            </p>
            <p>
              Base cruise fares may not include every trip cost. Travelers should review taxes, port fees, gratuities, drinks, specialty dining, Wi-Fi, excursions, travel insurance, flights, hotels, parking, and transportation before booking.
            </p>
            <p>
              Florida Cruise Deals uses current cruise search links and safe fare language. Always confirm the final fare, cabin, itinerary, cancellation terms, required documents, and availability directly with the booking source before purchasing.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
