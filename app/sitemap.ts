import type { MetadataRoute } from "next";
import { cruiseSeoPages } from "@/data/seo-pages";
import { tripRealityGuides } from "@/data/tripRealityGuides";

const baseUrl = "https://cruisedealsflorida.org";
const verifiedModified = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: verifiedModified,
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${baseUrl}/florida-cruise-port-status`,
      lastModified: verifiedModified,
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${baseUrl}/about`,
      lastModified: verifiedModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: verifiedModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: verifiedModified,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${baseUrl}/how-cruise-pricing-works`,
      lastModified: verifiedModified,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: verifiedModified,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: verifiedModified,
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];

  const seoPages: MetadataRoute.Sitemap = cruiseSeoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: verifiedModified,
    changeFrequency: "weekly",
    priority: page.slug.startsWith("cruises-from") ? 0.85 : 0.8
  }));
  const realityGuidePages: MetadataRoute.Sitemap = tripRealityGuides.map((guide) => ({
    url: `${baseUrl}/trip-reality/${guide.slug}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: "monthly",
    priority: 0.86
  }));

  return [...corePages, ...realityGuidePages, ...seoPages];
}
