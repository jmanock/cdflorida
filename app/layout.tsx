import type { Metadata } from "next";
import Script from "next/script";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import { ANALYTICS_CONFIG } from "@/lib/analyticsConfig";
import "./globals.css";
import { NetworkNavigation } from "@/components/NetworkNavigation";

const siteUrl = "https://cruisedealsflorida.org";
const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Florida Deals Hub",
      url: "https://floridadealshub.com",
      sameAs: [
        "https://flightdealsflorida.org",
        "https://hoteldealsflorida.org",
        "https://cruisedealsflorida.org",
        "https://localdealsflorida.org"
      ]
    },
    {
      "@type": "WebSite",
      name: "Florida Cruise Deals",
      url: siteUrl,
      publisher: {
        "@type": "Organization",
        name: "Florida Deals Hub",
        url: "https://floridadealshub.com"
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Florida Cruise Deals: Miami, Port Canaveral & Bahamas Cruise Ideas",
  description:
    "Compare Florida cruise ideas from Miami, Port Canaveral, Tampa, and Fort Lauderdale with Bahamas sailings, weekend trips, and cruise port guides.",
  metadataBase: new URL("https://cruisedealsflorida.org"),
  alternates: {
    canonical: "https://cruisedealsflorida.org/"
  },
  openGraph: {
    title: "Florida Cruise Deals: Miami, Port Canaveral & Bahamas Cruise Ideas",
    description:
      "Compare Florida cruise ideas from Miami, Port Canaveral, Tampa, and Fort Lauderdale with Bahamas sailings and cruise port guides.",
    url: "https://cruisedealsflorida.org",
    siteName: "Florida Cruise Deals",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/cruise-hero.png",
        width: 1600,
        height: 900,
        alt: "Cruise ship leaving a sunny Florida port"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Cruise Deals | Bahamas, Caribbean & Weekend Cruises",
    description: "Discover Florida cruise deals, cruise port guides, destination ideas, and planning resources.",
    images: ["/images/cruise-hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="fdn-ga-library"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.measurementId}`}
        />
      </head>
      <body className="fdn-site" suppressHydrationWarning>
        <NetworkNavigation />
        {children}

        <Script
          id="global-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData)
          }}
        />
        <AnalyticsBootstrap />
      </body>
    </html>
  );
}
