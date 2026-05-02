# Cruise Deal Inbox

A deploy-ready Next.js MVP for Florida cruise deals from Port Canaveral, Miami, Fort Lauderdale, Tampa, and Jacksonville.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase for `deals` and `subscribers`
- Vercel-ready

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The site works without Supabase by reading from `data/deals.ts`. Add Supabase env vars when you are ready to store live deals and email subscribers.

## Supabase Setup

1. Create a new Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Run `supabase/seed.sql` to load sample cruise deals.
4. Copy `.env.example` to `.env.local`.
5. Add:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

The service role key is used only in server-side API routes. Do not expose it in client code.

## Vercel Deploy

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add the three Supabase environment variables in Vercel Project Settings.
4. Deploy.

## Refresh Button

`components/DealList.tsx` calls `/api/deals`. Today that endpoint reads from Supabase when configured and falls back to `data/deals.ts`. In v2, connect the endpoint to a deal-checking job or replace `lib/deals.ts` with an API integration.

## Cruise API Readiness

The site does not depend on external cruise APIs to render. It uses curated static data first, with optional server-side routes ready for future enrichment:

- `/api/cruises/ports`
- `/api/cruises/destinations`
- `/api/cruises/deals`

These routes return curated fallback data with `Cache-Control: public, s-maxage=43200, stale-while-revalidate=86400`, so responses are cacheable for 12 hours and can be revalidated without breaking the page. Future provider calls should stay server-side inside these API routes or `lib/` helpers.

Add future provider and affiliate variables to `.env.local` or Vercel Project Settings:

```bash
CRUISE_API_KEY=
CRUISE_AFFILIATE_ID=
CRUISEDIRECT_AFFILIATE_ID=
EXPEDIA_AFFILIATE_ID=
CJ_AFFILIATE_ID=
IMPACT_AFFILIATE_ID=
```

Do not expose API keys with `NEXT_PUBLIC_` unless the value is intentionally public.

## Affiliate Link Readiness

Outbound cruise links are centralized in `data/cruise-links.ts`. Use:

```ts
getCruiseSearchUrl({ port, destination, cruiseLine, nights })
```

When affiliate programs are ready, update the URLs or add affiliate parameters in `data/cruise-links.ts`. Existing cards will keep working because deal data and SEO search cards read from that helper.

## Outbound Click Tracking

Cruise outbound links use `deal_click` analytics events when Google Analytics is available:

```ts
{
  site: "cruisedealsflorida.org",
  source: "cruise",
  cruise_line: "Royal Caribbean",
  departure_port: "Port Canaveral",
  destination: "Bahamas",
  outbound_url: "https://..."
}
```

The helper lives in `lib/analytics.ts`, and tracked links use `components/TrackedOutboundLink.tsx`.

## Email Subscribers

The email form posts to `/api/subscribe`, which upserts into the Supabase `subscribers` table. The UI shows success and error states.

## Legal

The footer includes affiliate disclosure language and the disclaimer: “Prices and availability can change at any time.”
