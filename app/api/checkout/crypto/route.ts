import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getOrderAmounts } from "@/lib/commerce";
import { createNowPayment } from "@/lib/nowpayments";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type CheckoutBody = {
  productSlug?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

const clean = (value: unknown, max = 250) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const order = getOrderAmounts(clean(body.productSlug, 100));

    if (!order) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    // This is deliberately enforced server-side. UI changes alone cannot bypass it.
    if (!order.product.checkoutEligible) {
      return NextResponse.json(
        { error: "This product is not currently available for online checkout." },
        { status: 403 },
      );
    }

    const customer = {
      firstName: clean(body.firstName, 80),
      lastName: clean(body.lastName, 80),
      email: clean(body.email, 160).toLowerCase(),
      phone: clean(body.phone, 40),
      address: clean(body.address, 200),
      city: clean(body.city, 100),
      state: clean(body.state, 100),
      postalCode: clean(body.postalCode, 30),
      country: clean(body.country, 100) || "United States",
    };

    if (
      !customer.firstName ||
      !customer.lastName ||
      !customer.email ||
      !customer.address ||
      !customer.city ||
      !customer.state ||
      !customer.postalCode
    ) {
      return NextResponse.json({ error: "Please complete the required contact and shipping fields." }, { status: 400 });
    }

    const orderId = randomUUID();
    const supabase = getSupabaseAdmin();

    const { error: insertError } = await supabase.from("orders").insert({
      id: orderId,
      product_slug: order.product.slug,
      product_name: order.product.name,
      subtotal_usd: order.subtotal,
      shipping_usd: order.shipping,
      total_usd: order.total,
      first_name: customer.firstName,
      last_name: customer.lastName,
      email: customer.email,
      phone: customer.phone || null,
      address_line1: customer.address,
      city: customer.city,
      state: customer.state,
      postal_code: customer.postalCode,
      country: customer.country,
      payment_provider: "nowpayments",
      payment_method: "btc",
      payment_status: "creating",
    });

    if (insertError) throw new Error(`Unable to save order: ${insertError.message}`);

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin).replace(/\/$/, "");

    try {
      const payment = await createNowPayment({
        priceAmount: order.total,
        orderId,
        orderDescription: `${order.product.name} order`,
        callbackUrl: `${siteUrl}/api/nowpayments/ipn`,
      });

      const { error: updateError } = await supabase
        .from("orders")
        .update({
          nowpayments_payment_id: String(payment.payment_id),
          payment_status: payment.payment_status || "waiting",
          crypto_pay_address: payment.pay_address || null,
          crypto_pay_amount: payment.pay_amount ?? null,
          crypto_pay_currency: payment.pay_currency || "btc",
        })
        .eq("id", orderId);

      if (updateError) throw new Error(`Unable to update order: ${updateError.message}`);

      return NextResponse.json({
        orderId,
        paymentId: String(payment.payment_id),
        status: payment.payment_status,
        payAddress: payment.pay_address,
        payAmount: payment.pay_amount,
        payCurrency: payment.pay_currency || "btc",
        totalUsd: order.total,
        productName: order.product.name,
      });
    } catch (error) {
      await supabase.from("orders").update({ payment_status: "create_failed" }).eq("id", orderId);
      throw error;
    }
  } catch (error) {
    console.error("Crypto checkout error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to start Bitcoin checkout." },
      { status: 500 },
    );
  }
}
