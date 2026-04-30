export default function TermsPage() {
  return (
    <main className="min-h-screen bg-sand px-4 py-12 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <a href="/" className="text-sm font-black text-ocean hover:text-ink">Back to cruise deals</a>
        <h1 className="mt-6 text-4xl font-black tracking-normal">Terms</h1>
        <p className="mt-6 leading-7 text-slateText">
          Florida Cruise Deals provides curated cruise deal information for general planning purposes. We do not operate cruise ships, process bookings, or guarantee third-party prices.
        </p>
        <p className="mt-4 leading-7 text-slateText">
          Prices, itineraries, taxes, fees, cabin availability, and promotions can change at any time. Always verify final booking details with the cruise line or travel partner before purchasing.
        </p>
      </div>
    </main>
  );
}
