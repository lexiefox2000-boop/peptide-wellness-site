import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">FAQ</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Frequently asked questions
        </h1>

        <p className="mt-6 text-lg text-[var(--muted)]">
          Find answers to common questions about product information, catalog pricing, shipping, store status, and policies.
        </p>

        <div className="mt-10 space-y-4">
          {faqs
            .concat([
              {
                q: "Where can I review current pricing?",
                a: "Current catalog pricing is shown on the catalog and individual product pages.",
              },
              {
                q: "Where can I find shipping and refund information?",
                a: "Shipping, refund, privacy, and terms information is available through the site’s policy pages.",
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
