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
            Thank you — your order request has been submitted
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Your checkout submission has been recorded for review. The selected
            product and submitted checkout details can now move into the next
            stage of order and fulfillment review.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-5">
            <div className="text-sm font-medium">Order summary</div>
            <div className="mt-3 text-sm text-[var(--muted)]">
              {selectedProduct.name} · {selectedProduct.dosage}
            </div>
            <div className="mt-2 text-sm text-[var(--muted)]">
              The selected product has been attached to this checkout review
              flow, and the next communication step can be handled through the
              configured support or order-management process.
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-5">
            <div className="text-sm font-medium">What happens next</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 1</div>
                <p className="mt-2 text-[var(--muted)]">
                  Submitted order details are reviewed against the selected
                  product and customer information provided at checkout.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 2</div>
                <p className="mt-2 text-[var(--muted)]">
                  Shipping details, payment path, and fulfillment readiness are
                  reviewed before the next stage is confirmed.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-4 text-sm">
                <div className="font-medium">Step 3</div>
                <p className="mt-2 text-[var(--muted)]">
                  Follow-up communication, final instructions, or additional
                  order guidance can be provided through the selected support
                  workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[var(--surface-tint)] p-5 text-sm text-[var(--muted)]">
            Please make sure the final live workflow, payment handling, policy
            language, shipping communication, and fulfillment messaging all
            match the actual process that will be used after launch.
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
