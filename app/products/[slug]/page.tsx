import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { products, faqs, testimonials } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 2);

  return (
    <div className="section">
      <div className="container">
        <Link
          href="/#products"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="card rounded-[2rem] p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              className="w-full rounded-[1.5rem] bg-white object-cover"
            />
          </div>

          <div>
            <div className="eyebrow">Product detail</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-[var(--muted)]">
              <span>{product.dosage}</span>
              <span>•</span>
              <span>{product.price}</span>
            </div>
            <p className="mt-6 max-w-2xl text-[var(--muted)]">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/5 bg-white p-5">
                <h2 className="font-semibold">Why shoppers choose it</h2>
                <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[var(--primary)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-black/5 bg-white p-5">
                <h2 className="font-semibold">What’s included</h2>
                <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[var(--primary)]" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
              <h2 className="text-lg font-semibold">Ordering notes</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Product information is shown in a clear, easy-to-review format
                before checkout. Final medical, legal, and compliance review
                should be completed before launch.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
               href={`/checkout?product=${product.slug}`}
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
              >
                Add to Cart
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-medium"
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] px-0">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-5 space-y-3">
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

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.25rem] border border-black/5 bg-white p-4"
                >
                  “{item.quote}”
                  <div className="mt-3 text-xs">{item.name}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold">Related products</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="rounded-[1.25rem] border border-black/5 bg-white p-4"
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    {item.price}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
