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
          conditions that apply when a visitor accesses the site, reviews site
          content, or submits an order.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Use of the site</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              By accessing or using the site, visitors agree to the current
              terms, policies, notices, and other posted information made
              available through the site.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Site content and listings</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product listings, pricing, availability, images, descriptions,
              page content, notices, and related materials may be updated,
              revised, limited, or removed at any time without prior notice.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Pricing and order review</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Prices displayed on the site are presented for current review and
              may be changed at any time before an order is accepted or
              processed. The business reserves the right to correct listing
              errors, pricing issues, or inaccurate information without prior
              notice.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The business reserves the right to review, limit, refuse, hold, or
              cancel any order at its discretion, including where order details,
              payment status, product availability, shipping information, or
              policy concerns require additional review.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Customer responsibility</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers are responsible for reviewing product information,
              pricing, checkout details, shipping information, refund terms,
              privacy terms, and any notices shown on the site before
              submitting an order.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Policy relationship</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              These terms work together with the site’s shipping, refund,
              privacy, and other posted policy pages. Use of the site or
              submission of an order indicates agreement with the current
              published versions of those materials.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Acceptable use</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Visitors may not misuse the site, interfere with normal site
              operation, attempt unauthorized access, provide false information,
              or use the site in a way that violates applicable law or harms the
              business, its providers, or other users.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Updates and changes</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              These terms may be updated periodically, and the version published
              on the site at the time of use will control. Continued use of the
              site after updates are posted indicates acceptance of the revised
              terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
