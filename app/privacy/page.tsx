export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="eyebrow">Privacy</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          This page explains what information may be collected through the site,
          how that information may be used, when it may be shared with service
          providers, and how order-related communication may be handled.
        </p>

        <div className="mt-10 space-y-6">
          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Information collected</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Information submitted through the site may include a customer
              name, email address, phone number, shipping address, billing
              details, order information, and any messages or details provided
              through forms, checkout, or support communication.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">How information may be used</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customer information may be used to process orders, provide
              support, send order confirmations, share shipping updates, respond
              to inquiries, maintain business records, and improve site
              operations and customer experience.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Payment processing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Payment information is intended to be handled through third-party
              payment providers rather than stored directly on the site. Payment
              processing may therefore be subject to the systems, terms, and
              privacy practices of the selected payment provider.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Shipping and service providers</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Information may be shared with third-party service providers when
              reasonably needed to operate the site, process payments, send
              emails, provide shipping updates, fulfill orders, perform
              analytics, or support customer service operations.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Analytics and site activity</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              The site may use analytics, performance tools, or similar services
              to understand traffic, page usage, and general site activity.
              These tools may collect technical information such as browser
              type, device information, IP address, referral data, or page
              interaction details.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Data sharing</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customer information is not intended to be sold to unrelated third
              parties. Information may be shared only when reasonably needed to
              complete transactions, operate the site, support business
              functions, comply with legal obligations, investigate misuse, or
              protect the rights and security of the business or its users.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Customer communication</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Order-related emails or messages may be sent for confirmations,
              fulfillment updates, shipping notices, service responses, or other
              communications reasonably connected to a submitted order or
              customer inquiry.
            </p>
          </div>

          <div className="card rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold">Requests and updates</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Customers with privacy-related questions, correction requests, or
              concerns about submitted information may contact the business
              through the contact information provided on the site. This policy
              may be updated from time to time to reflect changes in site
              features, providers, or business practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
