"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Copy, LoaderCircle, LockKeyhole, WalletCards } from "lucide-react";

type Props = {
  productSlug: string;
  productName: string;
  checkoutEligible: boolean;
};

type Payment = {
  orderId: string;
  paymentId: string;
  status: string;
  payAddress?: string;
  payAmount?: number;
  payCurrency?: string;
  totalUsd: number;
  productName: string;
};

const terminalStatuses = new Set(["finished", "failed", "refunded", "expired"]);

export default function CryptoCheckout({ productSlug, productName, checkoutEligible }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [payment, setPayment] = useState<Payment | null>(null);
  const [copied, setCopied] = useState<"amount" | "address" | null>(null);

  const statusLabel = useMemo(() => {
    const status = payment?.status || "";
    if (status === "finished") return "Payment received";
    if (["confirmed", "sending"].includes(status)) return "Payment confirmed";
    if (status === "confirming") return "Payment detected — confirming";
    if (status === "partially_paid") return "Partial payment received";
    if (status === "expired") return "Payment expired";
    if (status === "failed") return "Payment failed";
    return "Waiting for Bitcoin payment";
  }, [payment?.status]);

  useEffect(() => {
    if (!payment?.paymentId || terminalStatuses.has(payment.status)) return;

    const interval = window.setInterval(async () => {
      try {
        const response = await fetch(`/api/nowpayments/status/${encodeURIComponent(payment.paymentId)}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = await response.json();
        setPayment((current) => current ? { ...current, status: data.status || current.status } : current);
      } catch {
        // The IPN is authoritative; polling is a customer-facing convenience.
      }
    }, 10000);

    return () => window.clearInterval(interval);
  }, [payment?.paymentId, payment?.status]);

  async function copy(value: string, kind: "amount" | "address") {
    await navigator.clipboard.writeText(value);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1500);
  }

  async function startBitcoinCheckout() {
    setError("");
    if (!checkoutEligible) {
      setError("Bitcoin checkout is not active for this product yet.");
      return;
    }

    const form = document.querySelector<HTMLFormElement>("#checkout-form");
    if (!form) return;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const values = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      address: String(formData.get("address") || ""),
      city: String(formData.get("city") || ""),
      state: String(formData.get("state") || ""),
      postalCode: String(formData.get("postalCode") || ""),
      country: String(formData.get("country") || ""),
    };
    setLoading(true);
    try {
      const response = await fetch("/api/checkout/crypto", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, productSlug }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to start Bitcoin checkout.");
      setPayment(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start Bitcoin checkout.");
    } finally {
      setLoading(false);
    }
  }

  if (payment) {
    return (
      <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
        <div className="flex items-center gap-3">
          {payment.status === "finished" ? (
            <CheckCircle2 size={22} className="text-emerald-600" />
          ) : (
            <WalletCards size={22} className="text-[var(--primary)]" />
          )}
          <div>
            <div className="font-semibold">Bitcoin payment</div>
            <div className="text-xs text-[var(--muted)]">{statusLabel}</div>
          </div>
        </div>

        {payment.status !== "finished" && (
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
              <div className="text-xs uppercase tracking-wide text-[var(--muted)]">Send exactly</div>
              <div className="mt-1 break-all text-lg font-semibold">
                {payment.payAmount} {String(payment.payCurrency || "BTC").toUpperCase()}
              </div>
              {payment.payAmount != null && (
                <button type="button" onClick={() => copy(String(payment.payAmount), "amount")} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)]">
                  <Copy size={13} /> {copied === "amount" ? "Copied" : "Copy amount"}
                </button>
              )}
            </div>

            <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
              <div className="text-xs uppercase tracking-wide text-[var(--muted)]">Bitcoin address</div>
              <div className="mt-1 break-all text-sm font-medium">{payment.payAddress}</div>
              {payment.payAddress && (
                <button type="button" onClick={() => copy(payment.payAddress!, "address")} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)]">
                  <Copy size={13} /> {copied === "address" ? "Copied" : "Copy address"}
                </button>
              )}
            </div>

            <p className="text-xs leading-relaxed text-[var(--muted)]">
              Send Bitcoin only to this address. The payment status on this page updates automatically after NOWPayments detects the transaction.
            </p>
          </div>
        )}

        {payment.status === "finished" && (
          <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
            Payment received for {productName}. Your order reference is {payment.orderId.slice(0, 8).toUpperCase()}.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
      <div className="flex items-center gap-3">
        <WalletCards size={20} className="text-[var(--primary)]" />
        <div className="font-semibold">Bitcoin</div>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">Pay securely in BTC through NOWPayments.</p>

      <button
        type="button"
        disabled={loading || !checkoutEligible}
        onClick={startBitcoinCheckout}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading && <LoaderCircle size={16} className="animate-spin" />}
        {checkoutEligible ? (loading ? "Creating payment…" : "Pay with Bitcoin") : "Payment activation pending"}
      </button>

      {error && <p className="mt-3 text-xs text-red-600">{error}</p>}

      <div className="mt-4 flex items-start gap-2 text-xs text-[var(--muted)]">
        <LockKeyhole size={14} className="mt-0.5 shrink-0" />
        <span>Payment is created server-side. Store API credentials are never exposed in the browser.</span>
      </div>
    </div>
  );
}
