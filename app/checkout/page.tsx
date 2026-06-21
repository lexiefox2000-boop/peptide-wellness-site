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
      <div className="container grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="eyebrow">Checkout</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Fast, transparent, guest-friendly checkout
          </h1>

          <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-4 text-sm">
            <div className="font-medium">Selected product</div>
            <div className="mt-1 text-[var(--muted)]">
              {selectedProduct.name} · {selectedProduct.dosage}
            </div>
            <div className="mt-3">
              <Link
                href={`/products/${selectedProduct.slug}`}
                className="text-sm font-medium text-[var(--primary)]"
              >
                Review product details
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
              Shipping address
              <input
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                placeholder="123 Wellness Ave"
              />
            </label>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-5">
            <div className="text-sm font-medium">Payment options</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <button className="rounded-2xl border border-[var(--primary)] bg-[var(--surface-tint)] px-4 py-4 text-left text-sm">
                Card via Stripe
                <br />
                <span className="text-[var(--muted)]">
                  Use Stripe Checkout or Payment Links for the fastest setup.
                </span>
              </button>
              <button className="rounded-2xl border border-black/10 bg-[var(--surface-soft)] px-4 py-4 text-left text-sm">
                Crypto via Coinbase Commerce
                <br />
                <span className="text-[var(--muted)]">
                  Redirect to hosted crypto checkout with wallet support.
                </span>
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm text-[var(--muted)]">
            Clear order review before payment, with a fast guest-friendly flow.
          </div>

          <button className="mt-8 w-full rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-[var(--primary-foreground)]">
            Continue to Payment
          </button>
        </div>

        <aside className="space-y-4">
          <div className="card rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">{selectedProduct.name}</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-4 text-sm text-[var(--muted)]">
              {selectedProduct.dosage} · One-time purchase
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

          <div className="card rounded-[1.5rem] p-6 text-sm text-[var(--muted)]">
            Checkout integration notes: store order records in Supabase, route
            card payments through Stripe, and keep crypto as a clean alternative
            rather than a disruptive upsell.
          </div>

          <div className="card rounded-[1.5rem] p-6 text-sm text-[var(--muted)]">
            Compliance note: include final order disclaimers, fulfillment
            timing, and product handling details directly above the pay action.
          </div>
        </aside>
      </div>
    </div>
  );
}
