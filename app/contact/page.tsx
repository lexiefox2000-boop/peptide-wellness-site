export default function ContactPage() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Contact Peptide Friend
          </h1>
          <p className="mt-6 text-[var(--muted)]">
            Use this page for general questions, order support, policy
            questions, or business inquiries.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6 text-sm text-[var(--muted)]">
            A support email such as support@yourdomain.com or
            hello@yourdomain.com can also be listed here once the final domain
            is connected.
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-black/5 bg-[var(--surface-soft)] p-6 text-sm text-[var(--muted)]">
            Response times can be listed here as well, such as replies within 1
            to 2 business days, so customers know what to expect.
          </div>
        </div>

        <form className="card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">
              Name
              <input
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm">
              Email
              <input
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm md:col-span-2">
              Topic
              <select className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none">
                <option>General question</option>
                <option>Order support</option>
                <option>Business inquiry</option>
                <option>Policy question</option>
              </select>
            </label>

            <label className="text-sm md:col-span-2">
              Message
              <textarea
                className="mt-2 min-h-40 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
                placeholder="Write your message here"
              />
            </label>
          </div>

          <div className="mt-6 text-sm text-[var(--muted)]">
            Include enough detail for the message to be reviewed and answered
            more efficiently.
          </div>

          <p className="mt-4 text-sm text-[var(--muted)]">
            For research use only. Not for human or veterinary use.
          </p>

          <button className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)]">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
