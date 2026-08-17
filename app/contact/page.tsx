"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Peptide Friend: ${String(data.get("topic") || "Question")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
    if (email) {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setSent(true);
    }
  }

  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Questions? Ask a friend.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Have a question about a product, an order, or just need a little help finding what you’re looking for? Send us a message. We’re happy to help.
          </p>
          {supportEmail && (
            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6 text-sm text-[var(--muted)]">
              Prefer email? Reach us at <a className="font-medium text-[var(--primary)]" href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </div>
          )}
        </div>

        <form onSubmit={submit} className="card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">Name<input required name="name" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" placeholder="Your name" /></label>
            <label className="text-sm">Email<input required type="email" name="email" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" placeholder="you@example.com" /></label>
            <label className="text-sm md:col-span-2">What can we help with?<select name="topic" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"><option>General question</option><option>Product question</option><option>Order help</option><option>Business inquiry</option></select></label>
            <label className="text-sm md:col-span-2">Message<textarea required name="message" className="mt-2 min-h-40 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none" placeholder="Tell us what’s on your mind..." /></label>
          </div>
          <button type="submit" disabled={!supportEmail} className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)] disabled:opacity-50">Send message</button>
          {sent && <p className="mt-4 text-sm text-[var(--muted)]">Your email app should open with your message ready to send.</p>}
        </form>
      </div>
    </div>
  );
}
