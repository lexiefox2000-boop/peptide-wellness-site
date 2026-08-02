import Link from "next/link";
import { products } from "@/lib/data";
import { CreditCard, WalletCards, LockKeyhole } from "lucide-react";

type CheckoutPageProps = {
  searchParams: Promise<{ product?: string }>;
};

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

function money(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { product: productSlug } = await searchParams;
  const product = products.find((item) => item.slug === productSlug) ?? products[0];

  const subtotal = parsePrice(product.price);
  const shipping = subtotal >= 300 ? 0 : 18;
  const total = subtotal + shipping;

  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="eyebrow">Checkout</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Your picks look good.
          </h1>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                First name
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="given-name" />
              </label>
              <label className="text-sm">
                Last name
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="family-name" />
              </label>
              <label className="text-sm md:col-span-2">
                Email
                <input type="email" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="email" />
              </label>
              <label className="text-sm md:col-span-2">
                Phone
                <input type="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="tel" />
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Shipping</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm md:col-span-2">
                Address
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="street-address" />
              </label>
              <label className="text-sm">
                City
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="address-level2" />
              </label>
              <label className="text-sm">
                State
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="address-level1" />
              </label>
              <label className="text-sm">
                ZIP
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="postal-code" />
              </label>
              <label className="text-sm">
                Country
                <input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" defaultValue="United States" autoComplete="country-name" />
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Pick your payment method.</p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border-2 border-[var(--primary)]/25 bg-[var(--surface-tint)] p-5">
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className="text-[var(--primary)]" />
                  <div className="font-semibold">Card</div>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Credit or debit card
                </p>
                <button
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white opacity-55"
                >
                  Pay by card
                </button>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
                <div className="flex items-center gap-3">
                  <WalletCards size={20} className="text-[var(--primary)]" />
                  <div className="font-semibold">Crypto</div>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Pay with supported cryptocurrency
                </p>
                <button
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium opacity-55"
                >
                  Pay with crypto
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-[var(--muted)]">
              <LockKeyhole size={14} className="mt-0.5 shrink-0" />
              <span>
                Payment buttons are intentionally inactive until the approved payment providers are connected.
              </span>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card rounded-[2rem] p-6">
            <div className="text-sm text-[var(--muted)]">Order summary</div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{product.name}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{product.dosage}</div>
              </div>
              <div className="font-semibold">{product.price}</div>
            </div>

            <div className="mt-6 space-y-3 border-t border-black/5 pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Shipping</span>
                <span>{shipping === 0 ? "Free" : money(shipping)}</span>
              </div>
              <div className="flex justify-between border-t border-black/5 pt-3 text-base font-semibold">
                <span>Total</span>
                <span>{money(total)}</span>
              </div>
            </div>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="block text-center text-sm font-medium text-[var(--primary)]"
          >
            Keep shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
