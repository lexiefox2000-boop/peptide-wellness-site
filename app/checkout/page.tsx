export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-8">
            <div className="card rounded-[2rem] p-6 md:p-8">
              <div>
                <div className="eyebrow">Checkout</div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  Complete your Peptide Friend order
                </h1>
                <p className="mt-4 max-w-xl text-[var(--muted)]">
                  Guest-friendly checkout with transparent pricing, clear order
                  details, and modern payment options. No extra account
                  friction—just confirm your information, choose payment, and
                  place your order.
                </p>
              </div>

              <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-semibold text-[var(--primary-foreground)]">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Order details</div>
                      <p className="text-xs text-[var(--muted)]">
                        Review products and pricing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xs font-semibold">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Shipping</div>
                      <p className="text-xs text-[var(--muted)]">
                        Add contact and address details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xs font-semibold">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Payment</div>
                      <p className="text-xs text-[var(--muted)]">
                        Choose card or crypto.
                      </p>
                    </div>
                  </div>
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
                    Card checkout
                    <br />
                    <span className="text-[var(--muted)]">
                      Use Stripe or a similar provider for a fast, familiar card
                      payment flow.
                    </span>
                  </button>

                  <button className="rounded-2xl border border-black/10 bg-[var(--surface-soft)] px-4 py-4 text-left text-sm">
                    Crypto checkout
                    <br />
                    <span className="text-[var(--muted)]">
                      Offer Coinbase Commerce or a comparable option for digital
                      asset payments.
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm text-[var(--muted)]">
                Clear order review before payment, with a fast guest-friendly
                flow and visible checkout expectations.
              </div>

              <button className="mt-8 w-full rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-[var(--primary-foreground)]">
                Continue to Payment
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card rounded-[2rem] p-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Tirzepatide 10mg</span>
                <span>$349</span>
              </div>

              <div className="mt-4 text-sm text-[var(--muted)]">
                Example product · One-time purchase
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Subtotal</span>
                  <span>$349</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Shipping</span>
                  <span>$18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Estimated tax</span>
                  <span>$22</span>
                </div>
                <div className="flex justify-between border-t border-black/5 pt-3 font-medium">
                  <span>Total</span>
                  <span>$389</span>
                </div>
              </div>
            </div>

            <div className="card rounded-[1.5rem] p-6 text-sm text-[var(--muted)]">
              Checkout integration notes: keep order records in your backend,
              connect card payments through Stripe, and present crypto as a
              clean alternative instead of a disruptive upsell.
            </div>

            <div className="card rounded-[1.5rem] p-6 text-sm text-[var(--muted)]">
              Compliance note: include final order disclaimers, fulfillment
              timing, and product handling details directly above the pay
              action.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
