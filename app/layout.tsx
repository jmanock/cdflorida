import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SZMZM0JGKP";

export const metadata: Metadata = {
  title: "Florida Cruise Deals | Bahamas, Caribbean & Florida Port Sailings",
  description:
    "Find Florida cruise deals from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville with Bahamas escapes, Caribbean sailings, weekend cruises, and family-friendly deals.",
  metadataBase: new URL("https://cruisedealsflorida.org"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Florida Cruise Deals | Bahamas, Caribbean & Florida Port Sailings",
    description:
      "Find Florida cruise deals from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville with Bahamas escapes, Caribbean sailings, weekend cruises, and family-friendly deals.",
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
    title: "Florida Cruise Deals | Bahamas, Caribbean & Florida Port Sailings",
    description: "Find Bahamas, Caribbean, weekend, and family-friendly cruise deals from major Florida ports.",
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
      </body>
    </html>
  );
}
