export default function ContactPage() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">A contact experience that feels as calm as the storefront</h1>
          <p className="mt-6 text-[var(--muted)]">Use this page for support intake, order questions, wholesale inquiries, and compliance review requests.</p>
        </div>
        <form className="card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">Name<input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" /></label>
            <label className="text-sm">Email<input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" /></label>
            <label className="text-sm md:col-span-2">Topic<select className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"><option>General question</option><option>Order support</option><option>Wholesale</option><option>Compliance review</option></select></label>
            <label className="text-sm md:col-span-2">Message<textarea className="mt-2 min-h-40 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" /></label>
          </div>
          <button className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)]">Send message</button>
        </form>
      </div>
    </div>
  );
}
