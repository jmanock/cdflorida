const updated = "April 29, 2026";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-sand px-4 py-12 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to cruise deals</a>
        <h1 className="mt-6 text-4xl font-black tracking-normal">Privacy Policy</h1>
        <p className="mt-2 text-sm font-bold text-slateText">Updated {updated}</p>
        <p className="mt-6 leading-7 text-slateText">
          Florida Cruise Deals collects email addresses only when visitors request free deal alerts. We use those emails to send cruise deal updates, network updates, and service messages related to the subscription.
        </p>
        <p className="mt-4 leading-7 text-slateText">
          We do not sell subscriber information. You can request removal by contacting hello@cruisedealsflorida.org.
        </p>
      </div>
    </main>
  );
}
