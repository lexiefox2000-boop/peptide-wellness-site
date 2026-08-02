import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow">About Peptide Friend</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Welcome to Peptide Friend.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            We created Peptide Friend to make shopping feel simple, modern, and approachable.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Browse the collection, find what you need, and reach out anytime you have a question.
          </p>
          <Link
            href="/#products"
            className="mt-8 inline-flex rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]"
          >
            Shop products
          </Link>
        </div>
      </div>
    </div>
  );
}
