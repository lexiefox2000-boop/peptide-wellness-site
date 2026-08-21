import Link from "next/link";
import { products } from "@/lib/data";
import { getOrderAmounts, isCheckoutAllowed } from "@/lib/commerce";
import CryptoCheckout from "./CryptoCheckout";

type CheckoutPageProps = {
  searchParams: Promise<{ product?: string }>;
};

function money(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { product: productSlug } = await searchParams;
  const product = products.find((item) => item.slug === productSlug) ?? products[0];
  const amounts = getOrderAmounts(product.slug)!;
  const checkoutAllowed = isCheckoutAllowed(product.slug);

  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="eyebrow">Checkout</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Your picks look good.</h1>

          <form id="checkout-form">
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Contact</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="text-sm">First name<input required name="firstName" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="given-name" /></label>
                <label className="text-sm">Last name<input required name="lastName" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="family-name" /></label>
                <label className="text-sm md:col-span-2">Email<input required name="email" type="email" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="email" /></label>
                <label className="text-sm md:col-span-2">Phone<input name="phone" type="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="tel" /></label>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold">Shipping</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="text-sm md:col-span-2">Address<input required name="address" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="street-address" /></label>
                <label className="text-sm">City<input required name="city" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="address-level2" /></label>
                <label className="text-sm">State<input required name="state" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="address-level1" /></label>
                <label className="text-sm">ZIP<input required name="postalCode" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" autoComplete="postal-code" /></label>
                <label className="text-sm">Country<input required name="country" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" defaultValue="United States" autoComplete="country-name" /></label>
              </div>
            </div>
          </form>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Complete your order securely with Bitcoin.</p>

            <div className="mt-4 max-w-xl">
              <CryptoCheckout productSlug={product.slug} productName={product.name} checkoutEligible={checkoutAllowed} />
            </div>


          </div>
        </div>

        <aside className="space-y-4">
          <div className="card rounded-[2rem] p-6">
            <div className="text-sm text-[var(--muted)]">Order summary</div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div><div className="font-semibold">{product.name}</div><div className="mt-1 text-sm text-[var(--muted)]">{product.dosage}</div></div>
              <div className="font-semibold">{product.price}</div>
            </div>
            <div className="mt-6 space-y-3 border-t border-black/5 pt-5 text-sm">
              <div className="flex justify-between"><span className="text-[var(--muted)]">Subtotal</span><span>{money(amounts.subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Shipping</span><span>{amounts.shipping === 0 ? "Free" : money(amounts.shipping)}</span></div>
              <div className="flex justify-between border-t border-black/5 pt-3 text-base font-semibold"><span>Total</span><span>{money(amounts.total)}</span></div>
            </div>
          </div>
          <Link href={`/products/${product.slug}`} className="block text-center text-sm font-medium text-[var(--primary)]">Keep shopping</Link>
        </aside>
      </div>
    </div>
  );
}
