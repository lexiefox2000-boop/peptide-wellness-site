import Link from "next/link";
import { products } from "@/lib/data";

type ThankYouPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const { product: productSlug } = await searchParams;
  const selectedProduct =
    products.find((item) => item.slug === productSlug) ?? products[0];

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <div className="card rounded-[2rem] p-8 md:p-10">
          <div className="eyebrow">Order received</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Thank you — we’ve got your order.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Your order has been received. Keep your order details handy, and we’ll take it from here.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-5">
            <div className="text-sm font-medium">Order summary</div>
            <div className="mt-3 text-sm text-[var(--muted)]">
              {selectedProduct.name} · {selectedProduct.dosage}
            </div>
            <div className="mt-2 text-base font-semibold">
              {selectedProduct.price}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-5">
            <div className="text-sm font-medium">What happens next</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 1</div>
                <p className="mt-2 text-[var(--muted)]">
                  We receive your order details and get everything ready for the next step.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 2</div>
                <p className="mt-2 text-[var(--muted)]">
                  Your shipping details are used to prepare your order for fulfillment.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 3</div>
                <p className="mt-2 text-[var(--muted)]">
                  Need help along the way? Reach out through our Contact page and a Peptide Friend will help.
                </p>
              </div>
            </div>
          </div>


          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Return home
            </Link>

            <Link
              href={`/products/${selectedProduct.slug}`}
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium"
            >
              View product again
            </Link>

            <Link
              href="/shipping"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium"
            >
              Review shipping policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
