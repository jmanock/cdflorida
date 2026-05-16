import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Florida Cruise Deals",
  description: "Contact Florida Cruise Deals for cruise deal tips, corrections, partnerships, or subscriber help.",
  alternates: {
    canonical: "https://cruisedealsflorida.org/contact"
  },
  openGraph: {
    title: "Contact Florida Cruise Deals",
    description: "Contact Florida Cruise Deals for cruise deal tips, corrections, partnerships, or subscriber help.",
    url: "https://cruisedealsflorida.org/contact",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Florida Cruise Deals",
    description: "Contact Florida Cruise Deals for cruise deal tips, corrections, partnerships, or subscriber help."
  }
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-sand px-4 py-12 text-ink sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to cruise deals</a>
          <h1 className="mt-6 text-4xl font-black tracking-normal">Contact</h1>
          <p className="mt-6 leading-7 text-slateText">
            For cruise deal tips, partnerships, corrections, or subscriber help, email us at{" "}
            <a className="font-black text-ocean hover:text-ink" href="mailto:hello@cruisedealsflorida.org">
              hello@cruisedealsflorida.org
            </a>.
          </p>
          <p className="mt-4 leading-7 text-slateText">
            Please include the cruise port, destination, cruise line, or page URL when sending corrections so we can review the source clearly.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
