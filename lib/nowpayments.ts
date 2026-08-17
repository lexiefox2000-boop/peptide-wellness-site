import crypto from "node:crypto";

const PRODUCTION_BASE = "https://api.nowpayments.io/v1";

function apiBase() {
  return process.env.NOWPAYMENTS_API_BASE_URL?.replace(/\/$/, "") || PRODUCTION_BASE;
}

function apiKey() {
  const key = process.env.NOWPAYMENTS_API_KEY;
  if (!key) throw new Error("NOWPayments is not configured: missing NOWPAYMENTS_API_KEY");
  return key;
}

export type NowPayment = {
  payment_id: number | string;
  payment_status: string;
  pay_address?: string;
  price_amount?: number;
  price_currency?: string;
  pay_amount?: number;
  pay_currency?: string;
  order_id?: string;
  order_description?: string;
  purchase_id?: string;
  created_at?: string;
  updated_at?: string;
};

async function nowFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${apiBase()}${path}`, {
    ...init,
    headers: {
      "x-api-key": apiKey(),
      "content-type": "application/json",
    },
    cache: "no-store",
  });

  const text = await response.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text };
  }

  if (!response.ok) {
    const message =
      typeof data === "object" && data && "message" in data
        ? String((data as { message?: unknown }).message)
        : `NOWPayments request failed (${response.status})`;
    throw new Error(message);
  }

  return data as T;
}

export function createNowPayment(input: {
  priceAmount: number;
  orderId: string;
  orderDescription: string;
  callbackUrl: string;
}) {
  return nowFetch<NowPayment>("/payment", {
    method: "POST",
    body: JSON.stringify({
      price_amount: input.priceAmount,
      price_currency: "usd",
      pay_currency: "btc",
      ipn_callback_url: input.callbackUrl,
      order_id: input.orderId,
      order_description: input.orderDescription,
    }),
  });
}

export function getNowPayment(paymentId: string) {
  return nowFetch<NowPayment>(`/payment/${encodeURIComponent(paymentId)}`);
}

function sortObjectDeep(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortObjectDeep);
  if (value && typeof value === "object") {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .reduce<Record<string, unknown>>((result, key) => {
        result[key] = sortObjectDeep((value as Record<string, unknown>)[key]);
        return result;
      }, {});
  }
  return value;
}

export function verifyNowPaymentsIpn(payload: unknown, receivedSignature: string | null) {
  const secret = process.env.NOWPAYMENTS_IPN_SECRET;
  if (!secret || !receivedSignature) return false;

  const expected = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(sortObjectDeep(payload)))
    .digest("hex");

  const left = Buffer.from(expected, "utf8");
  const right = Buffer.from(receivedSignature, "utf8");
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}
