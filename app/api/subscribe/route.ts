import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string } | null;
  const email = body?.email?.trim().toLowerCase();

  if (!email || !isEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured yet. Add your environment variables to enable subscriptions." },
      { status: 503 }
    );
  }

  const { error } = await supabase
    .from("subscribers")
    .upsert({ email, source: "home-page" }, { onConflict: "email" });

  if (error) {
    return NextResponse.json({ error: "We could not save your email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
