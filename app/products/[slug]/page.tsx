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

  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
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
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-sm text-[var(--primary)]"
            >
              <ArrowLeft size={16} />
              Back to catalog
            </Link>

            <div className="mt-4 text-sm text-[var(--muted)]">Product detail</div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
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

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card rounded-[1.5rem] p-6">
              <h2 className="font-semibold">Listing highlights</h2>
              <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[var(--primary)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card rounded-[1.5rem] p-6">
              <h2 className="font-semibold">Reference details</h2>
              <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                {product.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[var(--primary)]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="font-semibold">Catalog notes</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              This listing is presented in a catalog-style format with visible
              pricing and neutral product information. Final legal, compliance,
              and payment-review language should be confirmed before launch.
            </p>
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
              Back to products
            </Link>
          </div>

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
        </div>
      </div>
    </div>
  );
}
