import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow">Information page</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Product information in a cleaner, more readable format
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            This page organizes product information, pricing context, and key
            supporting details in a layout that is easier to scan and navigate.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
            <h2 className="text-xl font-semibold">What you can review here</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Clear page structure before moving into checkout.</li>
              <li>Visible product context and supporting reference details.</li>
              <li>Helpful notices, FAQ access, and catalog guidance.</li>
            </ul>
          </div>
        </div>

        <div className="card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-6">
            <div className="text-sm text-[var(--muted)]">Catalog example</div>
            <div className="mt-2 text-5xl font-semibold tracking-tight">
              Visible pricing
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              The storefront connects product listings, detail pages, policy
              access, and checkout in one organized browsing flow.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/checkout"
                className="block rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
              >
                Go to checkout
              </Link>
              <Link
                href="/products/tirzepatide-10mg"
                className="block rounded-full border border-black/10 px-5 py-3 text-center text-sm font-medium"
              >
                View sample product detail
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          "Information overview",
          "Reference details",
          "Notices and FAQ",
        ].map((item) => (
          <div key={item} className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Each section presents information in a simpler, easier-to-scan
              format with a clear visual hierarchy.
            </p>
          </div>
        ))}
      </div>

      <div className="container mt-16 rounded-[2rem] border border-black/5 bg-[var(--surface-tint)] p-8 text-sm text-[var(--muted)]">
        Product listings, supporting notices, FAQ content, and checkout access
        are organized here to make the storefront easier to review and navigate.
      </div>
    </div>
  );
}
