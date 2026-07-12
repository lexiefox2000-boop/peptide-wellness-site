export default function ShippingPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Shipping</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Shipping policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page explains how order processing, shipping updates, delivery
          timing, and shipping-related support are handled for submitted orders.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Order processing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Orders are generally processed within 1 to 3 business days unless
              a different timeframe is posted on the site, shown during
              checkout, or affected by higher-than-normal order volume.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Shipping confirmation</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Once an order has been packed and prepared for shipment, a shipping
              confirmation email may be sent with tracking information if
              tracking is available for the selected shipment.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Transit and delivery timing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Delivery timing can vary based on destination, carrier operations,
              weekends, holidays, weather conditions, and other shipping network
              delays outside normal processing control.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Address accuracy</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers are responsible for entering a complete and accurate
              shipping address, email address, and contact information at
              checkout. Delays, returned packages, or failed delivery attempts
              caused by incorrect customer-submitted information may affect
              reshipment or replacement options.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Address changes after ordering</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If an order has not yet entered fulfillment, customers may contact
              support to request a shipping-address correction. After an order
              has been processed or shipped, address changes may not be possible.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Marked as delivered</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If a package is marked as delivered by the shipping carrier but is
              not immediately located, customers should first check around the
              delivery location, confirm the address used at checkout, and
              contact the carrier when appropriate. Support requests for
              delivered-package issues may be reviewed on a case-by-case basis.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Shipping delays</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Shipping dates and delivery estimates are provided as general
              guidance and are not guaranteed unless explicitly stated
              otherwise. Unexpected delays can occur during processing,
              handoff, carrier transit, or final delivery.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Support</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              For shipping-related questions, customers should contact support
              as soon as possible and include the order details needed for
              review. The business may evaluate shipment issues, address errors,
              and carrier-delivery concerns based on the available order and
              tracking information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
