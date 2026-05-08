import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Florida Cruise Deals | Florida Deals Hub",
  description: "Learn how Florida Cruise Deals curates cruise searches from major Florida ports as part of the Florida Deals Hub network.",
  alternates: {
    canonical: "https://cruisedealsflorida.org/about"
  },
  openGraph: {
    title: "About Florida Cruise Deals",
    description: "Florida Cruise Deals helps travelers compare curated cruise searches from Florida ports.",
    url: "https://cruisedealsflorida.org/about",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Florida Cruise Deals",
    description: "Florida Cruise Deals helps travelers compare curated cruise searches from Florida ports."
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sand px-4 py-12 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to cruise deals</a>
        <h1 className="mt-6 text-4xl font-black tracking-normal">About Florida Cruise Deals</h1>
        <p className="mt-6 leading-7 text-slateText">
          Florida Cruise Deals curates cruise offers from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville. The site is part of Florida Deals Hub, a family of Florida-focused travel and local savings brands.
        </p>
        <p className="mt-4 leading-7 text-slateText">
          Our focus is simple: make Florida port sailings easier to scan, compare, and revisit when new Bahamas, Caribbean, family, weekend, and luxury cruise offers appear.
        </p>
      </div>
    </main>
  );
}
