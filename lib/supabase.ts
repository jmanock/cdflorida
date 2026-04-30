import type { CruiseDeal } from "@/types/deal";
import { createClient } from "@supabase/supabase-js";

type SubscriberRow = {
  id: string;
  email: string;
  created_at: string;
  source: string | null;
};

type DealRow = {
  id: string;
  cruise_line: string;
  ship_name: string;
  departure_port: string;
  destination: string;
  nights: number;
  starting_price: number;
  sail_date: string;
  image: string;
  image_alt?: string | null;
  deal_url: string;
  last_checked: string;
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
    sailDate: row.sail_date,
    image: row.image,
    imageAlt: row.image_alt ?? undefined,
    dealUrl: row.deal_url,
    lastChecked: row.last_checked,
    category: row.category as CruiseDeal["category"],
    badge: row.badge ?? undefined,
    description: row.description ?? undefined,
    dateLabel: row.date_label ?? undefined,
    savings: row.savings ?? undefined,
    tags: row.tags as CruiseDeal["tags"] | undefined
  };
}
