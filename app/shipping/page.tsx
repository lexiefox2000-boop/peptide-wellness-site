export default function ShippingPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Shipping</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Shipping policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page outlines order processing, shipping timelines, delivery
          expectations, and customer responsibilities related to shipping.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Order processing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Orders are typically processed within 1 to 3 business days unless
              otherwise noted on the site or during periods of higher order
              volume.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Shipping confirmation</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers will receive shipping confirmation and tracking details
              by email once an order has been fulfilled and prepared for
              shipment.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Delivery timing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Delivery timelines may vary depending on destination, shipping
              carrier, weather conditions, holidays, and overall carrier
              performance.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Customer responsibility</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers are responsible for providing an accurate shipping
              address and contact information at checkout. The business is not
              responsible for delays or delivery issues caused by incorrect
              shipping details submitted by the customer.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Address changes</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If an order has not yet shipped, customers may contact support to
              request an address correction. Once an order has been fulfilled or
              shipped, address changes may no longer be possible.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Marked as delivered</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              If a package is marked as delivered by the carrier, any delivery
              issues may need to be reviewed directly with the shipping carrier
              and through support on a case-by-case basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
