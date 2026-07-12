import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">FAQ</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Common questions about the catalog
        </h1>

        <p className="mt-6 text-lg text-[var(--muted)]">
          This page answers common questions about product listings, pricing,
          shipping information, checkout, and policy access.
        </p>

        <div className="mt-10 space-y-4">
          {faqs
            .concat([
              {
                q: "Can I review pricing before checkout?",
                a: "Yes. Product pricing is displayed directly within the catalog and remains visible as you move into product detail and checkout pages.",
              },
              {
                q: "Where can I find shipping and refund information?",
                a: "Shipping, refunds, privacy, and terms are available through the site’s policy pages so key information is easy to access while browsing.",
              },
              {
                q: "How is site content organized?",
                a: "Product listings, FAQ entries, policy pages, and checkout content are structured to keep the storefront easier to scan and navigate.",
              },
            ])
            .map((faq) => (
              <details key={faq.q} className="card rounded-[1.5rem] p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {faq.q}
                </summary>
                <p className="mt-4 text-sm text-[var(--muted)]">{faq.a}</p>
              </details>
            ))}
        </div>
      </div>
    </div>
  );
}
