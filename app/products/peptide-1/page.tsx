import Link from 'next/link';
import { products, faqs } from '@/lib/data';

const product = products[0];

export default function ProductPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div className="card rounded-[2rem] p-6">
          <div className="h-[480px] rounded-[1.5rem] bg-[linear-gradient(145deg,#f6faf9,#f2ede6)]" />
        </div>
        <div>
          <div className="eyebrow">Product detail</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-[var(--muted)]"><span>{product.dosage}</span><span>•</span><span>{product.price}</span></div>
          <p className="mt-6 max-w-2xl text-[var(--muted)]">{product.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/5 bg-white p-5">
              <h2 className="font-semibold">Educational overview</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Use this block for product context, fulfillment expectations, packaging, and storage. Keep claims restrained and factual.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/5 bg-white p-5">
              <h2 className="font-semibold">Usage information</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Summarize handling notes, timeline expectations, and checkout disclosures in a calm, readable format.</p>
            </div>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
            <h2 className="text-lg font-semibold">Ingredient transparency</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {product.ingredients.map((ingredient) => <li key={ingredient}>• {ingredient}</li>)}
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/checkout" className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]">Add to Cart</Link>
            <Link href="/faq" className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium">Read FAQ</Link>
          </div>
        </div>
      </div>
      <div className="container mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="card rounded-[1.5rem] p-6">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-black/5 bg-white p-4">
                <summary className="cursor-pointer list-none font-medium">{faq.q}</summary>
                <p className="mt-3 text-sm text-[var(--muted)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="card rounded-[1.5rem] p-6">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div className="mt-5 space-y-4 text-sm text-[var(--muted)]">
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-4">“The design makes the product feel premium and the pricing easy to understand.”</div>
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-4">“I appreciate the ingredient transparency and the lack of subscription tactics.”</div>
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-4">“Fast mobile checkout and a much clearer flow than most wellness sites.”</div>
          </div>
          <h3 className="mt-8 text-lg font-semibold">Related products</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-4"><div className="font-medium">Metabolic Balance Peptide</div><div className="mt-2 text-sm text-[var(--muted)]">$429</div></div>
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-4"><div className="font-medium">Recovery & Routine Stack</div><div className="mt-2 text-sm text-[var(--muted)]">$289</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
