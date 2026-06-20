import Image from "next/image";
import Link from "next/link";
import { faqs, products, testimonials } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Shield,
  Truck,
  WalletCards,
} from "lucide-react";

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
          <div className="eyebrow">Peptide Friend</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Premium peptide essentials with a cleaner, faster path to checkout
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Shop Peptide Friend’s curated peptide catalog with transparent
            pricing, clear product presentation, and a modern checkout
            experience built for convenience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
            >
              Shop Peptides
            </Link>
            <Link
              href="/peptides-weight-loss"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-white px-4 py-2">
              Transparent pricing
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Crypto + card checkout
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Curated peptide catalog
            </span>
          </div>
        </div>
        <div className="gradient-ring card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5">
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>Featured product</span>
              <span>$349</span>
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-white p-6">
              <div className="h-64 rounded-[1.25rem] bg-gradient-to-br from-[var(--surface-tint)] via-white to-[var(--surface-soft)]" />
              <h2 className="mt-6 text-2xl font-semibold">Tirzepatide 10mg</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Clear product presentation with usage notes, transparent
                fulfillment details, and a fast path to checkout.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-[var(--accent)] px-3 py-2 text-[var(--primary)]">
                  Fast checkout
                </span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Ships after review
                </span>
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
          <div className="eyebrow">Why Peptide Friend</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A more transparent way to shop peptide essentials
          </h2>
        </div>
        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is built to make shopping simpler, clearer, and more
            trustworthy, with clean product presentation, visible pricing, and
            straightforward product information throughout the browsing
            experience.
          </p>
          <p>
            From first click to checkout, the experience is designed to help
            customers compare options quickly, understand product details
            clearly, and purchase with more confidence.
          </p>
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
            <div className="eyebrow">Shop Peptide Friend</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Premium peptide essentials, clearly presented
            </h2>
          </div>
          <Link
            href="/checkout"
            className="hidden text-sm text-[var(--primary)] md:inline-flex md:items-center md:gap-2"
          >
            View checkout <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.slug} className="card rounded-[1.75rem] p-5">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-52 w-full rounded-[1.25rem] object-cover bg-white"
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {product.dosage}
                  </p>
                </div>
                <div className="text-sm font-medium">{product.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)]"
                    />{" "}
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium"
                >
                  View details
                </Link>
                <Link
                  href="/checkout"
                  className="flex-1 rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
                >
                  Add to Cart
                </Link>
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
    [
      "Browse",
      "Explore the catalog with visible pricing, clear product names, and a cleaner storefront designed to make comparison easier.",
    ],
    [
      "Review",
      "Open the product that fits your needs, read the product details, and check fulfillment or checkout information before moving forward.",
    ],
    [
      "Checkout",
      "Complete your order with a fast guest checkout flow and choose the payment option that works best for you.",
    ],
  ];

  return (
    <section className="section bg-white/70 border-y border-black/5">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          A simpler path from product search to checkout
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(([title, copy], index) => (
            <div key={title} className="card rounded-[1.5rem] p-6">
              <div className="text-sm text-[var(--primary)]">
                0{index + 1}
              </div>
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
    [
      "Transparent pricing",
      "Prices are visible throughout the browsing experience so shoppers can compare products without unnecessary friction.",
    ],
    [
      "Clear product details",
      "Product names, dosage details, and supporting information are presented in a cleaner, easier-to-scan format.",
    ],
    [
      "Flexible checkout",
      "Customers can move through checkout quickly with guest-friendly flow and payment options that support convenience.",
    ],
    [
      "Smoother shopping experience",
      "The storefront is designed to feel more modern, more readable, and easier to navigate from first click to purchase.",
    ],
  ];

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Why shoppers choose Peptide Friend</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Clearer presentation, easier browsing, and less friction at checkout
          </h2>
          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[var(--primary)]" /> Product
              presentation built to feel clean, calm, and straightforward.
            </div>
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-[var(--primary)]" /> Fulfillment
              and checkout details surfaced more clearly during the shopping
              flow.
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-[var(--primary)]" /> Card
              and crypto payment paths presented in a more streamlined way.
            </div>
            <div className="flex items-center gap-3">
              <WalletCards size={18} className="text-[var(--primary)]" /> Guest
              checkout support for a faster path to purchase.
            </div>
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
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Trust built into the scroll
            </h2>
          </div>
          {testimonials.map((item) => (
            <div key={item.name} className="card rounded-[1.5rem] p-6">
              <p className="text-lg">“{item.quote}”</p>
              <div className="mt-4 text-sm text-[var(--muted)]">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <div className="eyebrow">FAQ</div>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-black/5 bg-white p-4"
                >
                  <summary className="cursor-pointer list-none font-medium">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm text-[var(--muted)]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="card rounded-[1.5rem] bg-[var(--surface-tint)] p-6">
            <div className="eyebrow">Crypto payments</div>
            <h3 className="mt-3 text-2xl font-semibold">
              Built for modern checkout preferences
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Add a clear crypto option through Coinbase Commerce or a
              comparable provider so users can choose between card and digital
              asset payment paths without friction.
            </p>
            <Link
              href="/checkout"
              className="mt-5 inline-flex rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Review checkout flow
            </Link>
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
        <div className="card rounded-[2rem] bg-[linear-gradient(135deg,#ffffff,#edf7fc)] p-8 md:p-12">
          <div className="eyebrow">Shop with clarity</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Premium peptide essentials with transparent pricing and a smoother
            checkout experience
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Peptide Friend is designed to make browsing, comparing, and
            purchasing simpler, with clear product presentation, visible pricing,
            and checkout options built for convenience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/checkout"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
            >
              Start Checkout
            </Link>
            <Link
              href="#products"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
