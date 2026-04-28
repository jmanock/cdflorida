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

## Email Subscribers

The email form posts to `/api/subscribe`, which upserts into the Supabase `subscribers` table. The UI shows success and error states.

## Legal

The footer includes affiliate disclosure language and the disclaimer: “Prices and availability can change at any time.”
