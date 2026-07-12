export default function TermsPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Terms</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Terms and conditions
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          These terms describe the general rules, responsibilities, and site
          conditions that apply when a visitor uses the site or places an order.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Use of the site</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              By accessing or using this site, visitors agree to the posted
              terms, policies, notices, and any other information made available
              through the site.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Product information</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product listings, pricing, availability, images, descriptions, and
              related content may be updated, modified, or removed at any time
              without prior notice.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The business reserves the right to refuse, limit, review, or
              cancel any order at its discretion.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Customer responsibility</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers are responsible for reviewing all product information,
              pricing, policies, shipping details, and notices before submitting
              an order.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Policy agreement</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Use of the site and submission of an order constitutes agreement
              with the current version of the site’s policies, notices, and
              terms.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Changes</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              These terms may be updated periodically without prior notice, and
              the version published on the site will control at the time of use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
