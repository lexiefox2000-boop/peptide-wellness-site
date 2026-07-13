import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, faqs } from "@/lib/data";
import { CheckCircle2, ArrowLeft } from "lucide-react";

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
          <div className="card rounded-[1.75rem] p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={900}
              className="w-full rounded-[1.5rem] bg-white object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    Size
                  </div>
                  <div className="mt-2 text-2xl font-semibold">
                    {product.dosage}
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-[var(--accent)] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[var(--primary)]/70">
                    Price
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[var(--primary)]">
                    {product.price}
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-[var(--muted)]">
                {product.description}
              </p>

              <p className="mt-4 text-sm text-[var(--muted)]">
                For research use only. Not for human or veterinary use.
              </p>
            </div>

            <div className="card rounded-[1.5rem] p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-2xl font-semibold">{product.price}</div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    {product.name} · {product.dosage}
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

              <p className="mt-4 text-sm text-[var(--muted)]">
                Review the listed size, price, and product details before checkout.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
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

              <div className="card rounded-[1.5rem] p-6">
                <h2 className="font-semibold">Listing information</h2>
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
            </div>
          </div>
        </div>

        <div className="card rounded-[1.75rem] p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Related products</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                More from the catalog
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
            Questions before ordering
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
