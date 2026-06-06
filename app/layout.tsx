import type { Metadata } from "next";
import Script from "next/script";
import { CLARITY_ID } from "@/lib/clarity";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SZMZM0JGKP";
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
      <body suppressHydrationWarning>
        {children}

        <Script
          id="global-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData)
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
