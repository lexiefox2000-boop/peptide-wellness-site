import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow">Educational landing page</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Peptides for Weight Loss, explained with clarity instead of hype</h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">This page mirrors the clean telehealth funnel structure users recognize, but removes membership pressure and keeps pricing, disclaimers, and product context visible from the start.</p>
          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6">
            <h2 className="text-xl font-semibold">How this page converts cleanly</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Educational framing before the commerce ask.</li>
              <li>Clear one-time purchase path with guest checkout.</li>
              <li>FAQ, ingredient transparency, and compliance disclosures above the fold and throughout the funnel.</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-[var(--surface-soft)] p-6">
            <div className="text-sm text-[var(--muted)]">Starting at</div>
            <div className="mt-2 text-5xl font-semibold tracking-tight">$349</div>
            <p className="mt-4 text-sm text-[var(--muted)]">No memberships. No recurring fees. Card and crypto accepted.</p>
            <div className="mt-6 space-y-3">
              <Link href="/checkout" className="block rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-medium text-[var(--primary-foreground)]">Shop this category</Link>
              <Link href="/products/peptide-1" className="block rounded-full border border-black/10 px-5 py-3 text-center text-sm font-medium">View product detail</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16 grid gap-6 md:grid-cols-3">
        {['Educational overview','Usage information','Disclosure and FAQ'].map((item) => (
          <div key={item} className="card rounded-[1.5rem] p-6">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">Each module is designed to reduce uncertainty and increase trust before checkout, using plain language and restrained visual hierarchy.</p>
          </div>
        ))}
      </div>
      <div className="container mt-16 rounded-[2rem] border border-black/5 bg-[var(--surface-tint)] p-8 text-sm text-[var(--muted)]">Disclaimer: This concept uses educational wording and avoids promises of specific health, medical, or weight outcomes. Final live copy should be reviewed by qualified legal and clinical advisors.</div>
    </div>
  );
}
