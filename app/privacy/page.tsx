export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Privacy</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page explains what customer information may be collected, how it
          may be used, and how order-related communication is handled.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Information collected</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The site may collect customer information such as name, email
              address, shipping address, billing details, and order-related
              information submitted through forms or checkout.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">How information is used</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customer information may be used to process orders, provide
              customer support, send order confirmations, share shipping
              updates, and improve the overall customer experience.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Payment processing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Payment information is processed through third-party payment
              providers and is not stored directly on the site.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Third-party services</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The business may use third-party services for payment processing,
              shipping, email communication, analytics, or customer support as
              part of operating the site and fulfilling orders.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Data sharing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customer information is not intended to be sold to unrelated third
              parties. Information may be shared only as needed to complete
              transactions, provide services, comply with legal obligations, or
              support normal business operations.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Questions related to privacy or customer information can be
              directed to the business through the contact information listed on
              the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
