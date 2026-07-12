import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">FAQ</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Common questions about the catalog setup
        </h1>

        <p className="mt-6 text-lg text-[var(--muted)]">
          This page explains the current catalog structure, pricing display, and
          payment setup options.
        </p>

        <div className="mt-10 space-y-4">
          {faqs
            .concat([
              {
                q: "Can card payments be added?",
                a: "Yes. A hosted card checkout or payment link can be connected when the final payment flow is ready.",
              },
              {
                q: "How can site content be managed?",
                a: "Product listings, FAQ entries, and supporting page content can be managed through a simple content or database setup as the project evolves.",
              },
              {
                q: "What notices should appear before launch?",
                a: "Include catalog notices, product handling information, and any final reviewed compliance language on the landing, product, and checkout pages.",
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
