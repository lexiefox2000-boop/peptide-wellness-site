export default function RefundsPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Refunds</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Refund policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page explains how order issues, damaged shipments, missing items,
          cancellations, and refund or replacement requests are reviewed.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Sales and order status</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              All orders are generally treated as final unless a different
              resolution is approved in writing. Submission of an order does not
              automatically create a right to cancellation, return, refund, or
              replacement.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Damaged or incomplete orders</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If an order arrives damaged, incomplete, or with an item issue,
              the customer should contact support within 48 hours of marked
              delivery and provide the order details requested for review.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Information required for review</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              To review a request, support may ask for the order number,
              shipping name, delivery details, photos of the package or items,
              and any other information reasonably needed to evaluate the issue.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Resolution options</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If a request is approved, the business may choose an appropriate
              resolution based on the situation, including replacement, store
              credit, partial credit, refund, or another corrective option at
              its discretion.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Refund timing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If a refund is approved, processing time may vary depending on the
              payment method, payment provider, and financial institution
              involved in the transaction.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Order cancellations</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Orders may only be canceled before fulfillment or shipping
              preparation has started. Once an order has entered processing,
              packing, fulfillment review, or shipment preparation, cancellation
              may no longer be available.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Non-approved requests</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Requests that are incomplete, submitted outside the stated review
              window, unsupported by available order information, or inconsistent
              with delivery and fulfillment records may be declined.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Support contact</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers should contact support as soon as possible when an order
              issue is discovered so the matter can be reviewed while shipping,
              delivery, and order records are still current and available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
