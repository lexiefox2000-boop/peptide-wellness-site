import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="section">
      <div className="container space-y-12">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm text-[var(--primary)]"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="card rounded-[1.75rem] p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={900}
              className="mx-auto h-[460px] w-full rounded-[1.5rem] bg-white object-contain md:h-[600px]"
            />
          </div>

          <div>
            <div className="eyebrow">Good pick</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">{product.dosage}</p>
            <div className="mt-6 text-4xl font-semibold text-[var(--primary)]">
              {product.price}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/checkout?product=${product.slug}`}
                className="inline-flex justify-center rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]"
              >
                Continue to checkout
              </Link>
              <Link
                href="/#products"
                className="inline-flex justify-center rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium"
              >
                Keep shopping
              </Link>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow">More products</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">More from your friend</h2>
            </div>
            <Link href="/#products" className="text-sm font-medium text-[var(--primary)]">
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="card rounded-[1.5rem] p-5"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="mx-auto h-64 w-full object-contain"
                />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{item.dosage}</div>
                  </div>
                  <div className="font-semibold text-[var(--primary)]">{item.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
