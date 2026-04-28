import { cruiseDeals } from "@/data/deals";
import { getSupabaseAdminClient, mapDealRow } from "@/lib/supabase";
import type { CruiseDeal } from "@/types/deal";

export async function getLatestDeals(): Promise<CruiseDeal[]> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return cruiseDeals;
  }

  const { data, error } = await supabase
    .from("deals")
    .select("*")
    .order("last_checked", { ascending: false });

  if (error || !data?.length) {
    return cruiseDeals;
  }

  return data.map(mapDealRow);
}
