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
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="fade-up">
          <div className="eyebrow">Peptide Friend</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Browse product listings, pricing, and checkout in one clear flow
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Explore the catalog, open product pages, and move into checkout with
            pricing, policy links, and order details presented in a more
            organized way.
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
              View information
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Pricing shown clearly</div>
              <p className="mt-2 text-[var(--muted)]">
                Product prices stay visible while browsing the catalog.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Product pages connected</div>
              <p className="mt-2 text-[var(--muted)]">
                Each listing links directly to its product detail page.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Checkout made simple</div>
              <p className="mt-2 text-[var(--muted)]">
                Product review, pricing, and policy access stay connected.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-white px-4 py-2">
              Product listings
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Detail pages
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Policy links
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
                  Product detail page available
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/products/${featured.slug}`}
                  className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-medium"
                >
                  View details
                </Link>
                <Link
                  href={`/checkout?product=${featured.slug}`}
                  className="rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
                >
                  Review product
                </Link>
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
            A more organized way to review listed products
          </h2>
        </div>

        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is arranged as a product catalog with visible
            pricing, product imagery, and consistent listing details across the
            storefront.
          </p>
          <p>
            Product pages, checkout, and policy links are connected so visitors
            can move through the site without losing context.
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
            <div className="eyebrow">Product listings</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Current catalog
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
              Browse current listings with pricing, dosage details, and direct
              links into product pages and checkout.
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
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Product listing
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
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

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Visible pricing
                </span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Detail page
                </span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Checkout path
                </span>
              </div>

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
      "Review listed products, pricing, and core details directly from the catalog.",
    ],
    [
      "Open details",
      "Use the product page to review the listing image, dosage, highlights, and reference notes.",
    ],
    [
      "Checkout",
      "Move from the selected product into checkout with connected policy access and order review.",
    ],
  ];

  return (
    <section className="section border-y border-black/5 bg-white/70">
      <div className="container">
        <div className="eyebrow">Catalog flow</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          From listing to checkout in three steps
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
      "Each listing shows pricing directly on the catalog page for faster review.",
    ],
    [
      "Consistent product details",
      "Product name, dosage, image, and supporting details appear in a more consistent format.",
    ],
    [
      "Connected checkout",
      "The storefront links product pages, checkout, and order summary in one flow.",
    ],
    [
      "Policy access",
      "Shipping, refund, privacy, and terms pages remain easy to reach while browsing.",
    ],
  ];

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Storefront structure</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Built for readability and easier navigation
          </h2>

          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[var(--primary)]" />
              Product pages present listing details and notices in a cleaner
              format.
            </div>
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-[var(--primary)]" />
              Shipping details and policy pages stay easy to access while
              browsing.
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-[var(--primary)]" />
              Checkout includes a straightforward order summary and payment
              layout.
            </div>
            <div className="flex items-center gap-3">
              <WalletCards size={18} className="text-[var(--primary)]" />
              The route from catalog to product page to checkout stays direct.
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
            <div className="eyebrow">Common questions</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Key information before checkout
            </h2>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">Store information in one place</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product pages, shipping details, refund terms, privacy terms, and
              checkout information are available through the site so visitors
              can review key details before placing an order.
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
              Standard checkout with optional alternate payment support
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The checkout flow supports a standard payment path and can also
              include an alternate hosted payment option when needed.
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
          <div className="eyebrow">Catalog review</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Browse the catalog, review product pages, and continue to checkout
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Explore listings, open product pages, and move through the
            storefront with pricing, policy links, and a more organized
            checkout path.
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
