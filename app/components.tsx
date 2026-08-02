import Image from "next/image";
import Link from "next/link";
import { faqs, products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Link href="/" aria-label="Peptide Friend home" className="flex items-center gap-3">
          <Image
            src="/peptidefriendlogo.png"
            alt="Peptide Friend logo"
            width={58}
            height={58}
            className="h-12 w-12 object-contain"
          />
          <div>
            <div className="text-lg font-semibold leading-tight">Peptide Friend</div>
            <div className="text-xs text-[var(--muted)]">Everybody needs a Peptide Friend.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link href="/#products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/#products"
            className="rounded-full bg-[var(--primary)] px-5 py-3 font-medium text-[var(--primary-foreground)]"
          >
            Shop now
          </Link>
        </nav>

        <Link
          href="/#products"
          className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-[var(--primary-foreground)] md:hidden"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="fade-up">
          <div className="eyebrow">Welcome to Peptide Friend</div>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Meet your Peptide Friend.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            Peptides can be complicated. Shopping doesn&apos;t have to be.
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="inline-flex rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Shop products
            </Link>
          </div>
        </div>

        <div className="card rounded-[2rem] p-6 md:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#f8fcff,#edf7fc)] p-7 text-center md:p-10">
            <Image
              src="/peptidefriendlogo.png"
              alt="Peptide Friend"
              width={180}
              height={180}
              className="mx-auto h-32 w-32 object-contain md:h-40 md:w-40"
            />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              A friend in the peptide world.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-[var(--muted)]">
              Cute name. Simple shop. We&apos;ll take it from here.
            </p>
            <Link
              href="#products"
              className="mt-7 inline-flex rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-medium text-[var(--primary-foreground)]"
            >
              View products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="section border-y border-black/5 bg-white/70">
      <div className="container">
        <div>
          <div className="eyebrow">The lineup</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Products
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.slug}
              className="card flex h-full flex-col rounded-[1.75rem] p-5"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block rounded-[1.5rem] bg-[var(--surface-soft)] p-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="mx-auto h-80 w-full object-contain sm:h-96"
                />
              </Link>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{product.dosage}</p>
                </div>
                <div className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                  {product.price}
                </div>
              </div>

              <Link
                href={`/products/${product.slug}`}
                className="mt-6 rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]"
              >
                View product
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSimple() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow">About us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Everybody needs a Peptide Friend.
          </h2>
        </div>
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            We&apos;re here to make the experience feel a little friendlier: simple shopping, clear information, and real support when you need it.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
          >
            About us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FaqSimple() {
  const featuredFaqs = faqs.slice(0, 4);
  return (
    <section className="section border-y border-black/5 bg-white/75">
      <div className="container grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <div className="eyebrow">Need a hand?</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Questions?
          </h2>
          <p className="mt-4 text-[var(--muted)]">No awkward questions. Just reach out.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium"
          >
            Contact us
          </Link>
        </div>

        <div className="space-y-3">
          {featuredFaqs.map((faq) => (
            <details key={faq.q} className="card rounded-[1.25rem] p-5">
              <summary className="cursor-pointer list-none font-medium">{faq.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="card rounded-[2rem] bg-[linear-gradient(135deg,#ffffff,#edf7fc)] p-8 text-center md:p-12">
          <div className="eyebrow">Peptide Friend</div>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Find your product.
          </h2>
          <Link
            href="#products"
            className="mt-7 inline-flex rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]"
          >
            Shop products
          </Link>
        </div>
      </div>
    </section>
  );
}
