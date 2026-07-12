import Link from "next/link";
import { products } from "@/lib/data";

type CheckoutPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { product: productSlug } = await searchParams;
  const selectedProduct =
    products.find((item) => item.slug === productSlug) ?? products[0];

  const subtotal = parsePrice(selectedProduct.price);
  const shipping = subtotal >= 300 ? 0 : 18;
  const tax = Number((subtotal * 0.063).toFixed(2));
  const total = Number((subtotal + shipping + tax).toFixed(2));

  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="eyebrow">Checkout</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Review your order and choose a payment path
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Confirm the selected product, shipping details, and preferred payment
            option before completing the order review.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-4 text-sm">
            <div className="font-medium">Selected product</div>
            <div className="mt-1 text-[var(--muted)]">
              {selectedProduct.name} · {selectedProduct.dosage}
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={`/products/${selectedProduct.slug}`}
                className="text-sm font-medium text-[var(--primary)]"
              >
                Review product details
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-[var(--muted)]"
              >
                Continue browsing
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Contact information</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                First name
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="Ariana"
                />
              </label>

              <label className="text-sm">
                Last name
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="Lopez"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="you@example.com"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Phone
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="(555) 123-4567"
                />
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Shipping address</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm md:col-span-2">
                Street address
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="123 Example Street"
                />
              </label>

              <label className="text-sm">
                City
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="Miami"
                />
              </label>

              <label className="text-sm">
                State
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="Florida"
                />
              </label>

              <label className="text-sm">
                ZIP code
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="33101"
                />
              </label>

              <label className="text-sm">
                Country
                <input
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                  placeholder="United States"
                />
              </label>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-5">
            <h2 className="text-lg font-semibold">Payment options</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Select the preferred path for checkout completion.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <button className="rounded-2xl border border-[var(--primary)] bg-[var(--surface-tint)] px-4 py-4 text-left text-sm">
                Card checkout
                <br />
                <span className="text-[var(--muted)]">
                  Connect a hosted card processor for a familiar customer payment
                  flow.
                </span>
              </button>

              <button className="rounded-2xl border border-black/10 bg-[var(--surface-soft)] px-4 py-4 text-left text-sm">
                Crypto checkout
                <br />
                <span className="text-[var(--muted)]">
                  Offer an alternate hosted crypto option for customers who
                  prefer that payment method.
                </span>
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm text-[var(--muted)]">
            By continuing, the customer confirms the entered contact details,
            shipping information, and selected order contents for final review.
          </div>

          <Link
            href={`/checkout/thank-you?product=${selectedProduct.slug}`}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-[var(--primary-foreground)]"
          >
            Continue to order confirmation
          </Link>
        </div>

        <aside className="space-y-4">
          <div className="card rounded-[2rem] p-6">
            <div className="text-sm font-medium text-[var(--muted)]">
              Order summary
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <div className="font-medium">{selectedProduct.name}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {selectedProduct.dosage}
                </div>
              </div>
              <div className="text-sm font-medium">{formatPrice(subtotal)}</div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Estimated tax</span>
                <span>{formatPrice(tax)}</span>
              </div>

              <div className="flex justify-between border-t border-black/5 pt-3 font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          <div className="card rounded-[1.5rem] p-6 text-sm">
            <div className="font-medium">Checkout notes</div>
            <div className="mt-3 space-y-2 text-[var(--muted)]">
              <p>Free shipping is automatically applied on orders over $300.</p>
              <p>Tax is currently displayed as an estimated checkout value.</p>
              <p>Hosted payment setup can be connected after layout approval.</p>
            </div>
          </div>

          <div className="card rounded-[1.5rem] p-6 text-sm">
            <div className="font-medium">Policy access</div>
            <div className="mt-3 space-y-2 text-[var(--muted)]">
              <p>
                Review shipping, refunds, privacy, and terms before launch.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/shipping" className="text-[var(--primary)]">
                  Shipping
                </Link>
                <Link href="/refunds" className="text-[var(--primary)]">
                  Refunds
                </Link>
                <Link href="/privacy" className="text-[var(--primary)]">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[var(--primary)]">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
