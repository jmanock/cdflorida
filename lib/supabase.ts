import type { CruiseDeal } from "@/types/deal";
import { createClient } from "@supabase/supabase-js";

type DealRow = {
  id: string;
  cruise_line: string;
  ship_name: string;
  departure_port: string;
  destination: string;
  nights: number;
  starting_price: number;
  price_text?: string | null;
  sail_date: string;
  dates?: string | null;
  image: string;
  image_alt?: string | null;
  deal_url: string;
  booking_url?: string | null;
  last_checked: string;
  last_updated?: string | null;
  source?: string | null;
  terms_note?: string | null;
  category: string;
  badge?: string | null;
  description?: string | null;
  date_label?: string | null;
  savings?: string | null;
  tags?: string[] | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const hasSupabaseConfig = Boolean(supabaseUrl && anonKey);
export const hasSupabaseAdminConfig = Boolean(supabaseUrl && serviceRoleKey);

export function getSupabaseBrowserClient() {
  if (!supabaseUrl || !anonKey) return null;
  return createClient(supabaseUrl, anonKey);
}

export function getSupabaseAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false
    }
  });
}

export function mapDealRow(row: DealRow): CruiseDeal {
  return {
    id: row.id,
    cruiseLine: row.cruise_line,
    shipName: row.ship_name,
    departurePort: row.departure_port as CruiseDeal["departurePort"],
    destination: row.destination,
    nights: row.nights,
    startingPrice: row.starting_price,
    priceText: row.price_text ?? undefined,
    sailDate: row.sail_date,
    dates: row.dates ?? undefined,
    image: row.image,
    imageAlt: row.image_alt ?? undefined,
    dealUrl: row.deal_url,
    bookingUrl: row.booking_url ?? undefined,
    lastChecked: row.last_checked,
    lastUpdated: row.last_updated ?? undefined,
    source: row.source ?? undefined,
    termsNote: row.terms_note ?? undefined,
    category: row.category as CruiseDeal["category"],
    badge: row.badge ?? undefined,
    description: row.description ?? undefined,
    dateLabel: row.date_label ?? undefined,
    savings: row.savings ?? undefined,
    tags: row.tags as CruiseDeal["tags"] | undefined
  };
}
