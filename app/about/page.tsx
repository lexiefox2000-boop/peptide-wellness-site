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
            Peptides can feel complicated. We’re here to make finding what you’re looking for simpler, friendlier, and a lot less intimidating.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Explore the collection at your own pace. And if you have a question along the way, ask a friend. That’s what we’re here for.
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
