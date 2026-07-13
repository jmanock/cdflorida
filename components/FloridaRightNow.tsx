/* eslint-disable @typescript-eslint/no-explicit-any */
import liveData from "@/data/live-intelligence.json";
export function FloridaRightNow() {
  const data = liveData as any;
  const unavailable = data.status !== "current";
  const marine =
    data.locations?.reduce(
      (n: number, x: any) => n + (x.marine?.officialAlerts?.length || 0),
      0,
    ) || 0;
  return (
    <section
      aria-labelledby="cruise-live-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase text-ocean">
          Florida travel intelligence
        </p>
        <h2
          id="cruise-live-heading"
          className="mt-2 text-2xl font-black text-ink"
        >
          Port weather and marine advisories
        </h2>
        <p className="mt-3 text-slateText">
        {unavailable
          ? "Current marine alert data is temporarily unavailable."
          : marine
            ? `${marine} official coastal or marine alert records found.`
            : "No active official marine alert was found in the latest successful update."}
        </p>
        <p className="mt-4 text-sm text-slateText">
          Conditions updated{" "}
          <time dateTime={data.generatedAt}>
            {new Date(data.generatedAt).toLocaleString("en-US", {
              timeZone: "America/New_York",
            })}{" "}
            ET
          </time>
          .
        </p>
        <a
          className="mt-5 inline-flex font-black text-ocean underline"
          href="/florida-cruise-port-status"
        >
          Check Florida cruise-port conditions
        </a>
      </div>
    </section>
  );
}
