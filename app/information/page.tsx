import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow">Information</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Information before you place an order
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Use this page to review general store information, product page
            details, and important notes before continuing to checkout.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
            <h2 className="text-xl font-semibold">What you can review here</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>General information about how products are listed on the site.</li>
              <li>Pricing visibility before checkout.</li>
              <li>Access to FAQ, shipping, refund, privacy, and terms pages.</li>
            </ul>
          </div>
        </div>

        <div className="card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-6">
            <div className="text-sm text-[var(--muted)]">Before checkout</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Review key details in one place
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Product pages include pricing, dosage, and basic listing details,
              while policy pages and FAQ answers stay easy to access during
              browsing.
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
                View a product page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          [
            "Product pages",
            "Each product page shows the product name, dosage, price, and basic details before checkout.",
          ],
          [
            "Store policies",
            "Shipping, refund, privacy, and terms information is available to review before placing an order.",
          ],
          [
            "FAQ and support",
            "Common questions and contact options are available if you need more information before ordering.",
          ],
        ].map(([title, copy]) => (
          <div key={title} className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
          </div>
        ))}
      </div>

      <div className="container mt-16 rounded-[2rem] border border-black/5 bg-[var(--surface-tint)] p-8 text-sm text-[var(--muted)]">
        Please review product details, store policies, and checkout information
        before placing an order.
      </div>
    </div>
  );
}
