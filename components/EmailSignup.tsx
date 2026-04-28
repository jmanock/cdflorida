"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState, useTransition } from "react";

type Status = "idle" | "success" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    startTransition(async () => {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You are on the list. We will send the best Florida cruise deals as they drop.");
      setEmail("");
    });
  }

  return (
    <section id="alerts" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-lg bg-navy p-6 text-white shadow-deal sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Deal alerts</p>
          <h2 className="mt-2 text-3xl font-bold">Get Florida cruise deals in your inbox</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200">
            Join the early list for price drops, last-minute sailings, and family-friendly cruise offers from Florida ports.
          </p>
        </div>
        <form onSubmit={submit} className="self-center">
          <label htmlFor="email" className="sr-only">Email address</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-12 w-full rounded-md border border-white/20 bg-white pl-10 pr-3 text-navy outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="min-h-12 rounded-md bg-teal px-5 text-sm font-bold text-navy transition hover:bg-[#2dd4bf] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Get Deal Alerts
            </button>
          </div>
          {message ? (
            <p className={`mt-3 text-sm font-semibold ${status === "success" ? "text-teal" : "text-red-200"}`}>
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
