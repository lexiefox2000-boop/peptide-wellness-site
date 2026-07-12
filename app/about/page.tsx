export default function AboutPage() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="eyebrow">About</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            A cleaner catalog experience built around clarity
          </h1>
        </div>

        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Peptide Friend is organized as a modern product catalog with visible
            pricing, simpler navigation, and a more readable ecommerce layout.
          </p>
          <p>
            The site presents product listings, reference information, policy
            access, and checkout paths in a cleaner format without heavy
            promotional language.
          </p>
          <p>
            The visual system uses soft spacing, rounded cards, and restrained
            typography to keep the browsing experience organized and easy to
            scan.
          </p>
        </div>
      </div>

      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          [
            "Clear layout system",
            "White space, rounded cards, and restrained typography help the interface feel organized and easier to navigate.",
          ],
          [
            "Readable information",
            "Each page presents listing details, pricing, and supporting notes in a simpler and more consistent format.",
          ],
          [
            "Connected checkout flow",
            "The catalog links product pages, policy access, and checkout in one more direct storefront path.",
          ],
        ].map(([title, copy]) => (
          <div key={title} className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
