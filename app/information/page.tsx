import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow">Information</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Store information, all in one place
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Everything you need to browse with confidence — product details, store policies, shipping information, and answers to common questions.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
            <h2 className="text-xl font-semibold">What you can review here</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Helpful product information in one easy-to-browse collection.</li>
              <li>Clear product details and current pricing.</li>
              <li>Easy access to FAQs, shipping, refunds, privacy, and store terms.</li>
            </ul>
          </div>
        </div>

        <div className="card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-6">
            <div className="text-sm text-[var(--muted)]">Good to know</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Everything in one place.
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Browse the collection, review store policies, and find answers to common questions whenever you need them.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/#products"
                className="block rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
              >
                Browse products
              </Link>
              <Link
                href="/products/tirzepatide-10mg"
                className="block rounded-full border border-black/10 px-5 py-3 text-center text-sm font-medium"
              >
                Explore a product
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          [
            "Product pages",
            "Find product details, available options, and pricing in one clean place.",
          ],
          [
            "Store policies",
            "Shipping, refunds, privacy, and terms are easy to find whenever you need them.",
          ],
          [
            "FAQ and support",
            "Still wondering about something? Browse the FAQs or ask a Peptide Friend.",
          ],
        ].map(([title, copy]) => (
          <div key={title} className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
          </div>
        ))}
      </div>

      <div className="container mt-16 rounded-[2rem] border border-black/5 bg-[var(--surface-tint)] p-8 text-sm text-[var(--muted)]">
        Questions along the way? We’re here to help.
      </div>
    </div>
  );
}
