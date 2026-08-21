import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CartProvider } from "./CartProvider";
import CartButton from "./CartButton";

export const metadata: Metadata = {
  title: "Peptide Friend",
  description: "Welcome to Peptide Friend.",
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/peptidefriendlogo.png"
        alt="Peptide Friend logo"
        className="h-12 w-12 object-contain"
      />
      <div>
        <div className="text-lg font-semibold tracking-tight">Peptide Friend</div>
        <div className="hidden text-xs text-[var(--muted)] sm:block">Everybody needs a Peptide Friend.</div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><CartProvider>
        <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>

        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(251,250,247,.88)] backdrop-blur-xl">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" aria-label="Peptide Friend home"><Logo /></Link>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link href="/#products">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <Link
                href="/#products"
                className="rounded-full bg-[var(--primary)] px-5 py-2.5 font-medium text-[var(--primary-foreground)]"
              >
                Shop now
              </Link>
              <CartButton />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <CartButton />
              <details className="relative">
                <summary className="flex cursor-pointer list-none items-center rounded-full border border-black/10 p-2" aria-label="Open menu">
                  <Menu size={18} />
                </summary>
                <nav className="absolute right-0 mt-3 w-52 rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
                  <Link className="block rounded-xl px-3 py-2 text-sm" href="/#products">Shop</Link>
                  <Link className="block rounded-xl px-3 py-2 text-sm" href="/cart">Cart</Link>
                  <Link className="block rounded-xl px-3 py-2 text-sm" href="/about">About</Link>
                  <Link className="block rounded-xl px-3 py-2 text-sm" href="/faq">FAQ</Link>
                  <Link className="block rounded-xl px-3 py-2 text-sm" href="/contact">Contact</Link>
                </nav>
              </details>
            </div>
          </div>
        </header>

        <main id="content">{children}</main>

        <footer className="border-t border-black/5 bg-white/80 py-12">
          <div className="container grid gap-8 md:grid-cols-3">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-[var(--muted)]">Questions? Ask a friend.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Explore</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <div><Link href="/#products">Shop</Link></div>
                <div><Link href="/about">About</Link></div>
                <div><Link href="/faq">FAQ</Link></div>
                <div><Link href="/contact">Contact</Link></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Policies</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <div><Link href="/shipping">Shipping</Link></div>
                <div><Link href="/refunds">Refunds</Link></div>
                <div><Link href="/privacy">Privacy</Link></div>
                <div><Link href="/terms">Terms</Link></div>
              </div>
            </div>
          </div>
        </footer>
      </CartProvider></body>
    </html>
  );
}
