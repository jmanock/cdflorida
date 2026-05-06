"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState, useTransition } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "success" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);
  const [isPending, startTransition] = useTransition();

  function trackSignupStarted() {
    if (hasTrackedStart) {
      return;
    }

    trackEvent("newsletter_signup_started");
    setHasTrackedStart(true);
  }

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
      const payload = (await response.json().catch(() => ({}))) as { error?: string; storage?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      trackEvent("newsletter_signup_success");
      setMessage("You're in! Cruise deals are on the way.");
      setEmail("");
    });
  }

  return (
    <section id="alerts" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-3xl bg-ink p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-aqua">Free cruise alerts</p>
          <h2 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">Get Florida Cruise Deals Delivered</h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-slate-200">
            Join free alerts for Bahamas cruises, weekend sailings, family vacations, and hidden cruise drops from Florida ports.
          </p>
          <p className="mt-4 text-sm font-bold text-slate-300">Free alerts. No spam. Cruise fares can change quickly.</p>
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
                onFocus={trackSignupStarted}
                onChange={(event) => {
                  trackSignupStarted();
                  setEmail(event.target.value);
                }}
                placeholder="you@example.com"
                className="min-h-12 w-full rounded-xl border border-white/20 bg-white pl-10 pr-3 font-semibold text-ink outline-none focus:ring-4 focus:ring-sky-200"
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="btn btn-gold min-h-12 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Send Me Deals
            </button>
          </div>
          {message ? (
            <p className={`mt-3 text-sm font-bold ${status === "success" ? "text-aqua" : "text-red-200"}`}>
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
