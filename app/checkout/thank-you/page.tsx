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
            Thank you for your order request
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Your checkout submission has been recorded and the selected product
            has been added to the order review flow.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-5">
            <div className="text-sm font-medium">Order summary</div>
            <div className="mt-3 text-sm text-[var(--muted)]">
              {selectedProduct.name} · {selectedProduct.dosage}
            </div>
            <div className="mt-2 text-sm text-[var(--muted)]">
              A follow-up confirmation, fulfillment review, and final payment
              arrangement can be handled from the next stage of the process.
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm">
              <div className="font-medium">Step 1</div>
              <p className="mt-2 text-[var(--muted)]">
                Order details are reviewed against the selected product and
                submitted customer information.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm">
              <div className="font-medium">Step 2</div>
              <p className="mt-2 text-[var(--muted)]">
                Shipping, payment method, and fulfillment readiness are confirmed
                before completion.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm">
              <div className="font-medium">Step 3</div>
              <p className="mt-2 text-[var(--muted)]">
                Final instructions or next-step communication can be provided
                through the preferred support workflow.
              </p>
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
          </div>

          <div className="mt-8 text-sm text-[var(--muted)]">
            Please confirm that all notices, policy language, payment handling,
            and fulfillment messaging match your final live workflow before
            launch.
          </div>
        </div>
      </div>
    </div>
  );
}
