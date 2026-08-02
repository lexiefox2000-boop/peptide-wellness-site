import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Wallet, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Peptide Friend",
  description:
    "Peptide catalog with listed products, pricing, and store information.",
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/peptidefriendlogo.png"
        alt="Peptide Friend logo"
        className="h-14 w-auto max-w-[200px] object-contain"
      />
      <div>
        <div className="text-lg font-semibold tracking-tight">
          Peptide Friend
        </div>
        <div className="text-xs text-[var(--muted)]">
          Simple, clear, easy to browse.
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(251,250,247,.82)] backdrop-blur-xl">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" aria-label="Peptide Friend home">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link href="/information">Information</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link
                href="/checkout"
                className="rounded-full bg-[var(--primary)] px-4 py-2 text-[var(--primary-foreground)]"
              >
                Checkout
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary
                className="flex cursor-pointer list-none items-center rounded-full border border-black/10 p-2"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </summary>
              <nav className="absolute right-0 mt-3 w-52 rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
                <Link className="block rounded-xl px-3 py-2 text-sm" href="/information">Information</Link>
                <Link className="block rounded-xl px-3 py-2 text-sm" href="/faq">FAQ</Link>
                <Link className="block rounded-xl px-3 py-2 text-sm" href="/about">About</Link>
                <Link className="block rounded-xl px-3 py-2 text-sm" href="/contact">Contact</Link>
                <Link className="mt-1 block rounded-xl bg-[var(--primary)] px-3 py-2 text-sm text-white" href="/checkout">Checkout</Link>
              </nav>
            </details>
          </div>

          <div className="border-t border-black/5 bg-white/70">
            <div className="container flex flex-wrap items-center gap-4 py-2 text-xs text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                Pricing shown on product listings
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={14} />
                Checkout options shown at checkout
              </div>
              <div>Product pages show size and price</div>
              <div>Shipping, refunds, privacy, and terms available</div>
            </div>
          </div>
        </header>

        <main id="content">{children}</main>

        <footer className="border-t border-black/5 bg-white/80 py-14">
          <div className="container grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 max-w-xl text-sm text-[var(--muted)]">
                Peptide Friend lists products, prices, and store information in
                one place.
              </p>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
                For research use only. Not for human or veterinary use.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Navigation</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <Link href="/">Home</Link>
                <br />
                <Link href="/information">Information</Link>
                <br />
                <Link href="/faq">FAQ</Link>
                <br />
                <Link href="/checkout">Checkout</Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Policies</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <Link href="/shipping">Shipping</Link>
                <br />
                <Link href="/refunds">Refunds</Link>
                <br />
                <Link href="/privacy">Privacy</Link>
                <br />
                <Link href="/terms">Terms</Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Peptide Friend</h3>
              <p className="mt-4 text-sm text-[var(--muted)]">
                Shop current listings, review product details, and view pricing
                before checkout.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
