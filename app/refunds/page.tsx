export default function RefundsPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Refunds</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Refund policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page explains how order issues, damaged shipments, and refund or
          replacement requests are handled.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">All sales policy</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              All sales are considered final unless otherwise stated in writing
              by the business.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Damaged or incomplete orders</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If an order arrives damaged or incomplete, the customer should
              contact support within 48 hours of delivery with their order
              details and any supporting photos if requested.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Review process</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              To review a request, the business may ask for the order number,
              shipping information, photos, or other details needed to evaluate
              the issue.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Approved resolutions</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If a request is approved, the business may offer a replacement,
              store credit, or another resolution at its discretion.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Order cancellations</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Orders cannot be canceled once fulfillment or shipping preparation
              has already begun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
