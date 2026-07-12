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
            Browse products, review pricing, and check out with less friction
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Explore available products, open individual product pages, and move
            through checkout with pricing, order details, and key store
            information all in one place.
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
              View information
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Clear product pricing</div>
              <p className="mt-2 text-[var(--muted)]">
                Pricing stays visible while you browse the product lineup.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Straightforward product pages</div>
              <p className="mt-2 text-[var(--muted)]">
                Each listing links directly to its full product details.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 text-sm">
              <div className="font-medium">Simpler checkout path</div>
              <p className="mt-2 text-[var(--muted)]">
                Review products, pricing, and store details without jumping
                around the site.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-white px-4 py-2">
              Product details
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Visible pricing
            </span>
            <span className="rounded-full bg-white px-4 py-2">
              Easy navigation
            </span>
          </div>
        </div>

        <div className="gradient-ring card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5">
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>Featured product</span>
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
                  Product page available
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
                  Continue to checkout
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
          <div className="eyebrow">Store overview</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A cleaner way to browse products and review details
          </h2>
        </div>

        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is organized to make product browsing simpler, with
            visible pricing, product images, and consistent listing details
            across the site.
          </p>
          <p>
            Product pages, checkout, and store information are connected so
            visitors can move through the site more easily.
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
              Current product lineup
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
              Browse current listings with pricing, dosage details, and direct
              links to product pages and checkout.
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
                    Product
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
                  Product details
                </span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  Checkout available
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
      "Review available products, pricing, and core details directly from the product grid.",
    ],
    [
      "Open product details",
      "Use the product page to review the image, dosage, product details, and key notes.",
    ],
    [
      "Continue to checkout",
      "Move from the selected product into checkout with the order summary and key store information still easy to access.",
    ],
  ];

  return (
    <section className="section border-y border-black/5 bg-white/70">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          From product page to checkout in three steps
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
      "Each listing shows pricing directly on the page so products are easier to compare.",
    ],
    [
      "Consistent product details",
      "Product name, dosage, images, and supporting details are presented in a more consistent format.",
    ],
    [
      "Simpler checkout path",
      "Product pages and checkout are connected so the process feels more direct.",
    ],
    [
      "Easy access to store info",
      "Shipping, refund, privacy, and terms pages stay easy to reach while browsing.",
    ],
  ];

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">Why it’s easier to use</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Built to make browsing and checkout feel more straightforward
          </h2>

          <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[var(--primary)]" />
              Product pages present listing details and important notes in a
              cleaner format.
            </div>
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-[var(--primary)]" />
              Shipping details and policy pages stay easy to find while
              browsing.
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-[var(--primary)]" />
              Checkout includes a clear order summary and payment layout.
            </div>
            <div className="flex items-center gap-3">
              <WalletCards size={18} className="text-[var(--primary)]" />
              The path from product listing to checkout stays simple and direct.
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
              Important details before checkout
            </h2>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">Store information in one place</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Product pages, shipping details, refund terms, privacy terms, and
              checkout information are available throughout the site so visitors
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
              The site supports a standard checkout flow and can also support an
              alternate hosted payment option when needed.
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
          <div className="eyebrow">Ready to browse</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Browse products, review the details, and continue to checkout
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Explore current listings, open product pages, and move through the
            site with pricing, store information, and checkout details kept easy
            to follow.
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
