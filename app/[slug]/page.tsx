import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CruiseSeoLandingPage } from "@/components/CruiseSeoLandingPage";
import { cruiseSeoPages, getCruiseSeoPage } from "@/data/seo-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cruiseSeoPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCruiseSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://cruisedealsflorida.org/${page.slug}`,
      siteName: "Florida Cruise Deals",
      type: "website",
      images: [
        {
          url: page.heroImage,
          width: 1200,
          height: 900,
          alt: page.heroAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.heroImage]
    }
  };
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCruiseSeoPage(slug);

  if (!page) {
    notFound();
  }

  return <CruiseSeoLandingPage page={page} />;
}
