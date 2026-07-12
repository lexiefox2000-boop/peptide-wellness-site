import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, faqs } from "@/lib/data";
import {
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="section">
      <div className="container space-y-10">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm text-[var(--primary)]"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="card rounded-[1.75rem] p-6">
              <Image
                src={product.image}
                alt={product.name}
                width={900}
                height={900}
                className="w-full rounded-[1.5rem] bg-white object-cover"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-[var(--primary)]" />
                  Product details
                </div>
                <p className="mt-2 text-[var(--muted)]">
                  Review the product name, dosage, price, and listing details in
                  one place.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Truck size={16} className="text-[var(--primary)]" />
                  Shipping information
                </div>
                <p className="mt-2 text-[var(--muted)]">
                  Shipping, refund, privacy, and terms information is available
                  before checkout.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Wallet size={16} className="text-[var(--primary)]" />
                  Checkout
                </div>
                <p className="mt-2 text-[var(--muted)]">
                  Continue with the selected product when you’re ready to place
                  your order.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-[var(--muted)]">Product details</div>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">
                  {product.dosage}
                </span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-2 text-[var(--primary)]">
                  {product.price}
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-[var(--muted)]">
                {product.description}
              </p>
            </div>

            <div className="card rounded-[1.5rem] p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">
                    Selected product
                  </div>
                  <div className="mt-2 text-2xl font-semibold">
                    {product.price}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    {product.dosage}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/checkout?product=${product.slug}`}
                    className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
                  >
                    Continue to checkout
                  </Link>
                  <Link
                    href="/#products"
                    className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
                  >
                    View more products
                  </Link>
                </div>
              </div>

              <div className="mt-5 rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm text-[var(--muted)]">
                Review the product details above before continuing to checkout.
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card rounded-[1.5rem] p-6">
                <h2 className="font-semibold">Important information</h2>
                <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 text-[var(--primary)]"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card rounded-[1.5rem] p-6">
                <h2 className="font-semibold">Product details</h2>
                <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 text-[var(--primary)]"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card rounded-[1.5rem] p-6">
              <h2 className="font-semibold">Before checkout</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Please review the product details, shipping information, and
                store policies before placing an order.
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Products are listed with pricing and basic details so you can
                review everything on this page before continuing.
              </p>
            </div>
          </div>
        </div>

        <div className="card rounded-[1.75rem] p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Related products</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                You may also like
              </h2>
            </div>
            <Link
              href="/#products"
              className="text-sm font-medium text-[var(--primary)]"
            >
              View all products
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="rounded-[1.5rem] border border-black/5 bg-white p-4 transition hover:-translate-y-0.5"
              >
                <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="mx-auto h-44 w-auto object-contain"
                  />
                </div>
                <div className="mt-4 font-medium">{item.name}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {item.dosage}
                </div>
                <div className="mt-3 text-sm font-medium text-[var(--primary)]">
                  {item.price}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="card rounded-[1.75rem] p-6 md:p-8">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Common questions
          </h2>

          <div className="mt-6 space-y-3">
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
      </div>
    </div>
  );
}
