import { NextRequest, NextResponse } from "next/server";
import { verifyNowPaymentsIpn } from "@/lib/nowpayments";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const signature = request.headers.get("x-nowpayments-sig");

    if (!verifyNowPaymentsIpn(payload, signature)) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const paymentId = payload.payment_id ? String(payload.payment_id) : "";
    const orderId = typeof payload.order_id === "string" ? payload.order_id : "";
    const paymentStatus =
      typeof payload.payment_status === "string" ? payload.payment_status : "unknown";

    if (!paymentId && !orderId) {
      return NextResponse.json({ ok: false, error: "Missing payment identifier." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    let query = supabase
      .from("orders")
      .update({
        payment_status: paymentStatus,
        actually_paid: typeof payload.actually_paid === "number" ? payload.actually_paid : null,
        payment_updated_at: new Date().toISOString(),
      });

    query = orderId ? query.eq("id", orderId) : query.eq("nowpayments_payment_id", paymentId);
    const { error } = await query;
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NOWPayments IPN error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
