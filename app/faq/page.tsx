import { faqs } from '@/lib/data';

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">FAQ</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Answers that remove friction before checkout</h1>
        <p className="mt-6 text-lg text-[var(--muted)]">This page is designed to reduce uncertainty around pricing, crypto acceptance, guest checkout, product transparency, and compliance language.</p>
        <div className="mt-10 space-y-4">
          {faqs.concat([
            { q: 'Is Stripe supported?', a: 'Yes. The checkout structure includes a card-first path that can connect to Stripe Checkout or Stripe Payment Links.' },
            { q: 'How does Supabase fit in?', a: 'Supabase can store products, FAQs, testimonials, inventory metadata, and lightweight CMS content for easy updates.' },
            { q: 'What disclaimers should appear?', a: 'Include educational-use framing, availability notes, and clear legal and clinical review disclaimers on landing, product, and checkout pages.' }
          ]).map((faq) => (
            <details key={faq.q} className="card rounded-[1.5rem] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">{faq.q}</summary>
              <p className="mt-4 text-sm text-[var(--muted)]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
