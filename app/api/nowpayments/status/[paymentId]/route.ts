import { NextResponse } from "next/server";
import { getNowPayment } from "@/lib/nowpayments";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ paymentId: string }> },
) {
  try {
    const { paymentId } = await params;
    const payment = await getNowPayment(paymentId);

    return NextResponse.json({
      paymentId: String(payment.payment_id),
      status: payment.payment_status,
      payAddress: payment.pay_address,
      payAmount: payment.pay_amount,
      payCurrency: payment.pay_currency,
      orderId: payment.order_id,
      updatedAt: payment.updated_at,
    });
  } catch (error) {
    console.error("NOWPayments status error", error);
    return NextResponse.json({ error: "Unable to retrieve payment status." }, { status: 502 });
  }
}
