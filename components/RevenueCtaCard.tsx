import type { ReactNode } from "react";

export function RevenueCtaCard({ eyebrow, headline, benefits, href, cta, icon }: { eyebrow: string; headline: string; benefits: string[]; href: string; cta: string; icon: ReactNode }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-ocean">{icon}</div>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-ocean">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-black text-ink">{headline}</h3>
      <ul className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-slateText">{benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}</ul>
      <a className="btn btn-secondary mt-6 px-5" href={href}>{cta}</a>
      <p className="mt-3 text-xs font-bold leading-5 text-slateText">Use this planning guide, then confirm current provider terms before booking.</p>
    </article>
  );
}
