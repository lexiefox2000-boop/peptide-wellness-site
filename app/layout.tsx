import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Wallet, Menu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aurel Peptide Wellness',
  description: 'Modern peptide wellness with clear product pages and fast checkout.',
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/peptidefriend logo.png"
        alt="Peptide Friend logo"
        className="h-10 w-10 rounded-xl object-contain"
      />
      <div>
        <div className="text-lg font-semibold tracking-tight">Peptide Friend</div>
        <div className="text-xs text-[var(--muted)]">Peptide wellness</div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(251,250,247,.82)] backdrop-blur-xl">
          <div className="container flex items-center justify-between py-4">
            <Link href="/"><Logo /></Link>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link href="/peptides-weight-loss">Peptides for Weight Loss</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/checkout" className="rounded-full bg-[var(--primary)] px-4 py-2 text-[var(--primary-foreground)]">Checkout</Link>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <button className="rounded-full border border-black/10 p-2" aria-label="Open menu"><Menu size={18} /></button>
            </div>
          </div>
          <div className="border-t border-black/5 bg-white/70">
            <div className="container flex flex-wrap items-center gap-4 py-2 text-xs text-[var(--muted)]">
              <div className="flex items-center gap-2"><ShieldCheck size={14} /> Fast ordering</div>
              <div className="flex items-center gap-2"><Wallet size={14} /> Crypto accepted</div>
              <div>Fast guest checkout</div>
              <div>Transparent pricing</div>
            </div>
          </div>
        </header>
        <main id="content">{children}</main>
        <footer className="border-t border-black/5 bg-white/80 py-14">
          <div className="container grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 max-w-xl text-sm text-[var(--muted)]">A premium direct-to-consumer peptide wellness concept focused on transparent pricing, educational content, one-time purchases, and a cleaner checkout experience.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Navigation</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <Link href="/">Home</Link><br />
                <Link href="/peptides-weight-loss">Landing page</Link><br />
                <Link href="/faq">FAQ</Link><br />
                <Link href="/checkout">Checkout</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Disclosure</h3>
              <p className="mt-4 text-sm text-[var(--muted)]">For educational and ecommerce UX demonstration purposes. Product information should be reviewed by legal, medical, and compliance counsel before launch.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
