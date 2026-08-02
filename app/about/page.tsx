export default function AboutPage() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="eyebrow">About</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            About Peptide Friend
          </h1>
        </div>

        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is a modern product catalog built around clarity: dedicated product pages, visible vial sizes, current catalog pricing, and easy access to store information.
          </p>
          <p>
            The experience is intentionally simple. Visitors can browse the lineup, compare listings, review policies, and find support information without unnecessary clutter.
          </p>
          <p>
            Online ordering will be activated only after the business, fulfillment, and payment setup is complete.
          </p>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          [
            "Clear product information",
            "Each product page includes pricing, dosage, and basic listing details so customers can review the essentials on the product page.",
          ],
          [
            "Store information within reach",
            "Shipping, refund, privacy, and terms pages are easy to access while browsing and before placing an order.",
          ],
          [
            "Ready for the next step",
            "The catalog is structured so an approved ordering flow can be connected later without redesigning the customer experience.",
          ],
        ].map(([title, copy]) => (
          <div key={title} className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
