import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow">About Peptide Friend</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Everybody needs a Peptide Friend.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            Peptide Friend was created to make the shopping experience feel simpler, friendlier, and a lot less intimidating.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Browse the collection, pick what you&apos;re looking for, and if you have a question, ask a friend.
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
