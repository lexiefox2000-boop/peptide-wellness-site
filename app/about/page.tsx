export default function AboutPage() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="eyebrow">About</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">A premium wellness brand built around transparency</h1>
        </div>
        <div className="space-y-4 text-[var(--muted)]">
          <p>Aurel is positioned as a modern peptide wellness brand with a minimal, medical-adjacent interface and a direct pricing model.</p>
          <p>The core brand promise is simple: no memberships, no recurring surprise fees, clearer product context, and a checkout flow that respects user intent.</p>
          <p>The visual language blends soft luxury wellness cues with the clean product discipline users expect from modern telehealth experiences.</p>
        </div>
      </div>
      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {[
          ['Premium design system', 'White space, rounded cards, subtle gradients, and restrained typography make the interface feel calm and elevated.'],
          ['Educational trust', 'Every page answers common questions before pushing the cart.'],
          ['Operational clarity', 'Fulfillment notes, payment choices, and pricing stay easy to find.']
        ].map(([title, copy]) => (
          <div key={title} className="card rounded-[1.5rem] p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm text-[var(--muted)]">{copy}</p></div>
        ))}
      </div>
    </div>
  );
}
