import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
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
  const source = "cruisedealsflorida.org";

  if (!supabase) {
    const createdAt = new Date().toISOString();
    const csvPath = process.env.VERCEL
      ? "/tmp/cruise-deal-subscribers.csv"
      : path.join(process.cwd(), "data", "subscribers.csv");

    await mkdir(path.dirname(csvPath), { recursive: true });
    await appendFile(csvPath, `"${email}","${source}","${createdAt}"\n`, "utf8");

    return NextResponse.json({ ok: true, storage: "csv" });
  }

  const { error } = await supabase
    .from("subscribers")
    .upsert({ email, source }, { onConflict: "email" });

  if (error) {
    return NextResponse.json({ error: "We could not save your email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
