import Image from "next/image";
import Link from "next/link";
import { faqs, products } from "@/lib/data";
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
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Peptide Friend home">
          <Image
            src="/peptidefriendlogo.png"
            alt="Peptide Friend logo"
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
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="fade-up">
          <div className="eyebrow">Peptide Friend</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Peptides, clearly listed.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--muted)]">
            Shop Tirzepatide, Retatrutide, Sermorelin, GHK-CU, NAD+, and Bac
            Water with pricing and product details shown before checkout.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
            >
              Browse products
            </Link>
            <Link
              href="/information"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
            >
              Store information
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Current lineup</div>
              <p className="mt-2 text-[var(--muted)]">
                Browse the full catalog in one place.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Prices up front</div>
              <p className="mt-2 text-[var(--muted)]">
                Review listed prices before checkout.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Pepe keeps it tidy</div>
              <p className="mt-2 text-[var(--muted)]">
                Size, price, and listing details are easy to spot on each
                product page.
              </p>
            </div>
          </div>
        </div>

        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#f8fcff,#edf7fc)] p-6 md:p-8">
            <div className="text-center">
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                Peptide Friend
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Cute mascot, serious catalog.
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Pepe keeps the lineup friendly while product pages stay clear,
                calm, and easy to browse.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-[var(--muted)]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Tirzepatide
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Retatrutide
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Sermorelin
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                GHK-CU
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                NAD+
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Bac Water
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="#products"
                className="rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
              >
                View products
              </Link>
              <Link
                href="/checkout"
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-center text-sm font-medium"
              >
                Go to checkout
              </Link>
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
          <div className="eyebrow">About Peptide Friend</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A friendly peptide catalog with prices shown
          </h2>
        </div>

        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend brings the current lineup together with individual
            product pages, listed vial sizes, and pricing shown on each
            listing.
          </p>
          <p>
            Pepe adds personality to the brand, while product details, store
            policies, FAQ content, and contact information stay straightforward.
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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow">Products</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              The current lineup
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
              Browse current listings with product names, vial sizes, pricing,
              and direct links to each product page.
            </p>
          </div>

          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
          >
            Go to checkout <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="card flex h-full flex-col rounded-[1.75rem] p-5"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block rounded-[1.5rem] bg-[var(--surface-soft)] p-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="mx-auto h-52 w-auto object-contain"
                />
              </Link>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {product.dosage}
                  </p>
                </div>

                <div className="rounded-full bg-[var(--accent)] px-3 py-2 text-sm font-medium text-[var(--primary)]">
                  {product.price}
                </div>
              </div>

              <p className="mt-4 text-sm text-[var(--muted)]">
                {product.description}
              </p>

              <div className="mt-5 space-y-2">
                {product.highlights.slice(0, 2).map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-[var(--muted)]"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 text-[var(--primary)]"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[var(--muted)]">
                For research use only. Not for human or veterinary use.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium"
                >
                  View details
                </Link>
                <Link
                  href={`/checkout?product=${product.slug}`}
                  className="rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
                >
                  Continue to checkout
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
      "Browse products",
      "Start with the product grid to compare current listings, vial sizes, and pricing.",
    ],
    [
      "Open the product page",
      "Review the selected product, listed size, price, and product details.",
    ],
    [
      "Continue to checkout",
      "Move forward with the selected item and review the order summary before payment.",
    ],
  ];

  return (
    <section className="section border-y border-black/5 bg-white/70">
      <div className="container">
        <div className="eyebrow">How ordering works</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Three simple steps
        </h2>

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
    [
      "Listed products",
      "Each listing includes the product name, vial size, and price.",
    ],
    [
      "Prices shown",
      "Review listed pricing before moving to checkout.",
    ],
    [
      "Direct product pages",
      "Each product page keeps the selected item, size, and price easy to review.",
    ],
    [
      "Store policies",
      "Shipping, refund, privacy, and terms pages remain easy to access.",
    ],
  ];

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Why people like Peptide Friend</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Clear listings, prices up front, and a little Pepe personality
          </h2>

          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[var(--primary)]" />
              Product pages keep essential listing details near the top.
            </div>
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-[var(--primary)]" />
              Shipping and store policy information stay close while browsing.
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-[var(--primary)]" />
              Checkout keeps the selected item and order summary in view.
            </div>
            <div className="flex items-center gap-3">
              <WalletCards size={18} className="text-[var(--primary)]" />
              Checkout options can be added here when the store is ready.
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
            <div className="eyebrow">Questions before ordering</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Product details and store information in one place
            </h2>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">Pepe keeps things easy to find</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product pages, shipping information, refund terms, privacy
              details, and checkout information stay available throughout the
              store.
            </p>
          </div>
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
            <div className="eyebrow">Payment options</div>
            <h3 className="mt-3 text-2xl font-semibold">
              Checkout options can be added here
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Card or alternate payment methods can be added to checkout when
              the store is ready.
            </p>
            <Link
              href="/checkout"
              className="mt-5 inline-flex rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Go to checkout
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
          <div className="eyebrow">Peptide Friend</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Browse the lineup and say hi to Pepe
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Review current listings, open product pages, and check the details
            before checkout.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
            >
              Browse products
            </Link>
            <Link
              href="/checkout"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
            >
              Go to checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
