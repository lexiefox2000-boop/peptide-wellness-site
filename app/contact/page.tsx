export default function ContactPage() {
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL;

  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Questions? Ask a friend.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Need help with a product or an order? Our Peptide Friend bot on Telegram is the quickest way to reach us.
          </p>
          {telegramUrl ? (
            <a href={telegramUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]">
              Chat with us on Telegram →
            </a>
          ) : (
            <p className="mt-8 text-sm text-[var(--muted)]">Telegram support will be available here soon.</p>
          )}
          <p className="mt-5 text-sm text-[var(--muted)]">Please have your order number handy if you’re reaching out about an existing order.</p>
        </div>
      </div>
    </div>
  );
}
