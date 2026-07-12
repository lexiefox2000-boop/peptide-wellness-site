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
        <Link href="/">
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
  const featured = products[0];

  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="fade-up">
          <div className="eyebrow">Peptide Friend</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Product catalog with clear listings and visible pricing
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Browse listed products, review vial size and pricing, and move
            through a cleaner catalog experience with a simpler page structure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
            >
              Browse catalog
            </Link>
            <Link
              href="/information"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
            >
              View information page
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-white px-4 py-2">
              Visible pricing
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Product listings
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Cleaner presentation
            </span>
          </div>
        </div>

        <div className="gradient-ring card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5">
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>Featured listing</span>
              <span>{featured.price}</span>
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-white p-6">
              <Image
                src={featured.image}
                alt={featured.name}
                width={500}
                height={500}
                className="h-64 w-full rounded-[1.25rem] bg-white object-cover"
              />
              <h2 className="mt-6 text-2xl font-semibold">{featured.name}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {featured.dosage}
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-[var(--accent)] px-3 py-2 text-[var(--primary)]">
                  Price shown upfront
                </span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Reference details included
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
          <div className="eyebrow">Catalog overview</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A cleaner way to review listed products
          </h2>
        </div>
        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is structured as a simple product catalog with
            visible pricing, product images, and basic listing details presented
            in a more readable format.
          </p>
          <p>
            Product pages are designed to keep information clearer, reduce
            clutter, and present listing details in a more consistent way.
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
            <div className="eyebrow">Product listings</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Current catalog
            </h2>
          </div>
          <Link
            href="/checkout"
            className="hidden text-sm text-[var(--primary)] md:inline-flex md:items-center md:gap-2"
          >
            Review checkout <ArrowRight size={16} />
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
                className="h-52 w-full rounded-[1.25rem] bg-white object-cover"
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
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)]"
                    />
                    <span>{highlight}</span>
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
                  href={`/checkout?product=${product.slug}`}
                  className="flex-1 rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
                >
                  Review product
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
      "Review the listed products, vial sizes, and displayed prices in the catalog.",
    ],
    [
      "Open details",
      "Check the individual product page for the listing image, name, and additional reference details.",
    ],
    [
      "Review",
      "Move to checkout only after the catalog language, notices, and payment flow are ready for launch.",
    ],
  ];

  return (
    <section className="section border-y border-black/5 bg-white/70">
      <div className="container">
        <div className="eyebrow">Catalog flow</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Simple browsing from listing to checkout
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
      "Visible pricing",
      "Each listing shows its displayed price directly on the catalog page.",
    ],
    [
      "Clear listing structure",
      "Product name, vial size, image, and reference details are grouped in a simpler layout.",
    ],
    [
      "Checkout-ready structure",
      "The site can support a checkout layout once payment setup and review language are finalized.",
    ],
    [
      "Cleaner presentation",
      "The storefront is designed to feel more organized, readable, and easier to scan.",
    ],
  ];

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Storefront structure</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Built around readability, organization, and simpler product review
          </h2>

          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[var(--primary)]" />
              Product pages can keep notices and listing details visible in a
              simpler format.
            </div>
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-[var(--primary)]" />
              Catalog and checkout structure can be reviewed step by step before
              launch.
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-[var(--primary)]" />
              Card and crypto payment options can be connected later through a
              third-party provider.
            </div>
            <div className="flex items-center gap-3">
              <WalletCards size={18} className="text-[var(--primary)]" />
              The current layout supports a direct path from listing to product
              page to checkout review.
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
            <div className="eyebrow">Site notes</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Common questions about the current setup
            </h2>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">Important</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product pages should be reviewed carefully before launch so the
              final site language, notices, and payment flow all match the
              intended project setup.
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
            <div className="eyebrow">Crypto checkout</div>
            <h3 className="mt-3 text-2xl font-semibold">
              Optional payment path for a later phase
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              A hosted provider can be added later if the project needs a crypto
              checkout option in addition to standard payment methods.
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
          <div className="eyebrow">Catalog review</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Review the current catalog, product pages, and checkout structure
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Browse the listings, open product detail pages, and confirm the
            catalog language before turning on final payment options.
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
              Review checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
