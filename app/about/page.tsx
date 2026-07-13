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
            Peptide Friend is an online catalog for peptide products, with
            product pages that show pricing, dosage, and basic item details
            before checkout.
          </p>
          <p>
            The site is designed to make it easier to browse products, review
            store information, and place an order without unnecessary steps or
            distracting promotional language.
          </p>
          <p>
            Product listings, policy pages, and checkout are organized so
            visitors can review key details in one place before ordering.
          </p>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          [
            "Clear product information",
            "Each product page includes pricing, dosage, and basic listing details so customers can review the essentials before checkout.",
          ],
          [
            "Store information within reach",
            "Shipping, refund, privacy, and terms pages are easy to access while browsing and before placing an order.",
          ],
          [
            "Straightforward ordering",
            "Customers can move from product pages to checkout with a simple order summary and standard payment options.",
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
