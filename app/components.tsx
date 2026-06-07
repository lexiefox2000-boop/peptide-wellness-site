import Image from "next/image";
import Link from 'next/link';
import { faqs, products, testimonials } from '@/lib/data';
import { ArrowRight, CheckCircle2, CreditCard, Shield, Truck, WalletCards } from 'lucide-react';
export function Navbar() {
return (
<header className="w-full border-b bg-white">
<div className="container mx-auto flex items-center justify-between py-4 px-4">
<Link href="/">
<Image
src="/peptidefriendlogo.png"
alt="Peptide Wellness Logo"
width={140}
height={40}
/>
</Link>
</div>
</header>
);
}
export function Hero() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="fade-up">
          <div className="eyebrow">Premium peptide wellness</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">Modern Peptide Wellness, Made Simple</h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">A premium peptide storefront with clear product pages, transparent details, and a friction-light checkout experience designed to help customers shop quickly and confidently.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#products" className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]">Shop Peptides</Link>
            <Link href="/peptides-weight-loss" className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium">Learn More</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-white px-4 py-2">Straightforward checkout</span>
            <span className="rounded-full bg-white px-4 py-2">Crypto + card payment</span>
            <span className="rounded-full bg-white px-4 py-2">Clear ingredient visibility</span>
          </div>
        </div>
        <div className="gradient-ring card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5">
            <div className="flex items-center justify-between text-sm text-[var(--muted)]"><span>Featured protocol</span><span>$349</span></div>
            <div className="mt-5 rounded-[1.5rem] bg-white p-6">
              <div className="h-64 rounded-[1.25rem] bg-gradient-to-br from-[var(--surface-tint)] via-white to-[var(--surface-soft)]" />
              <h2 className="mt-6 text-2xl font-semibold">GLP-1 Wellness Support Kit</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Clear product presentation with usage notes, transparent fulfillment details, and a fast path to checkout.</p>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-[var(--accent)] px-3 py-2 text-[var(--primary)]">Fast checkout</span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">Ships after review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="section border-y border-black/5 bg-white/70">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div>
          <div className="eyebrow">What peptides are</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">A clean path from product education to purchase</h2>
        </div>
        <div className="space-y-4 text-[var(--muted)]">
          <p>Peptides are short chains of amino acids that can be discussed in wellness and medical-adjacent contexts. On this site, educational copy stays focused on formulation categories, care workflow, storage, labeling, and informed purchasing.</p>
          <p>That keeps the experience trustworthy and compliant: shoppers can understand what they are buying, review key details quickly, and move through the site without unnecessary friction.</p>
        </div>
      </div>
    </section>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Featured products</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Simple product cards built to convert</h2>
          </div>
          <Link href="/checkout" className="hidden text-sm text-[var(--primary)] md:inline-flex md:items-center md:gap-2">Fast checkout <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.slug} className="card rounded-[1.75rem] p-5">
              <div className="h-52 rounded-[1.25rem] bg-[linear-gradient(145deg,#f6faf9,#f2ede6)]" />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{product.dosage}</p>
                </div>
                <div className="text-sm font-medium">{product.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {product.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--primary)]" /> {benefit}</li>)}
              </ul>
              <div className="mt-6 flex gap-3">
                <Link href={`/products/${product.slug === 'peptide-1' ? 'peptide-1' : 'peptide-1'}`} className="flex-1 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium">View details</Link>
                <Link href="/checkout" className="flex-1 rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]">Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ['Explore', 'Read educational product pages with pricing, ingredient visibility, and fulfillment notes before you begin checkout.'],
    ['Choose', 'Choose the product that fits your needs and move into a fast, mobile-friendly cart flow.'],
    ['Checkout', 'Pay by card or crypto, complete your order as a guest, and receive clear next-step messaging.'],
  ];
  return (
    <section className="section bg-white/70 border-y border-black/5">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Three simple steps to purchase</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(([title, copy], index) => (
            <div key={title} className="card rounded-[1.5rem] p-6">
              <div className="text-sm text-[var(--primary)]">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsTrust() {
  const items = [
    ['Transparent pricing', 'Pricing appears clearly where shoppers expect it, without extra friction before checkout.'],
    ['Clear product labeling', 'Dosage, contents, storage notes, and fulfillment context are shown in plain language.'],
    ['Fast decision UX', 'Educational content and FAQs answer concerns before payment details appear.'],
    ['Premium support flow', 'Checkout feels modern and fast while still surfacing disclaimers and order expectations.'],
  ];
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Benefits</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Premium, clear, and easy to buy</h2>
          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3"><Shield size={18} className="text-[var(--primary)]" /> Medical-adjacent aesthetic with compliant educational wording.</div>
            <div className="flex items-center gap-3"><Truck size={18} className="text-[var(--primary)]" /> Fast checkout patterns and fulfillment transparency.</div>
            <div className="flex items-center gap-3"><CreditCard size={18} className="text-[var(--primary)]" /> Stripe-friendly card path with optional crypto handoff.</div>
            <div className="flex items-center gap-3"><WalletCards size={18} className="text-[var(--primary)]" /> Guest checkout enabled by default.</div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([title, copy]) => (
            <div key={title} className="card rounded-[1.5rem] p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsFaqCrypto() {
  return (
    <section className="section border-y border-black/5 bg-white/75">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-6">
          <div>
            <div className="eyebrow">Testimonials</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Trust built into the scroll</h2>
          </div>
          {testimonials.map((item) => (
            <div key={item.name} className="card rounded-[1.5rem] p-6">
              <p className="text-lg">“{item.quote}”</p>
              <div className="mt-4 text-sm text-[var(--muted)]">{item.name}</div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <div className="eyebrow">FAQ</div>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="rounded-2xl border border-black/5 bg-white p-4">
                  <summary className="cursor-pointer list-none font-medium">{faq.q}</summary>
                  <p className="mt-3 text-sm text-[var(--muted)]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="card rounded-[1.5rem] bg-[var(--surface-tint)] p-6">
            <div className="eyebrow">Crypto payments</div>
            <h3 className="mt-3 text-2xl font-semibold">Built for modern checkout preferences</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">Add a clear crypto option through Coinbase Commerce or a comparable provider so users can choose between card and digital asset payment paths without friction.</p>
            <Link href="/checkout" className="mt-5 inline-flex rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--primary-foreground)]">Review checkout flow</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="card rounded-[2rem] bg-[linear-gradient(135deg,#ffffff,#eef4f2)] p-8 md:p-12">
          <div className="eyebrow">Final call to action</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">A direct-to-consumer peptide brand built for clear, fast purchasing</h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">Use this foundation to launch a conversion-focused ecommerce experience with premium design language, clear purchase pathways, and educational messaging that supports compliance review.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/checkout" className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]">Start Checkout</Link>
            <Link href="/about" className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium">About the brand</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
