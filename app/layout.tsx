import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cruise Deal Inbox | Florida Cruise Deals",
  description: "Daily cruise deals from Port Canaveral, Miami, Fort Lauderdale, Tampa, and Jacksonville.",
  metadataBase: new URL("https://cruisedealinbox.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
