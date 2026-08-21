# Peptide Friend — launch setup

## Customer flow
Browse → choose quantity → Add to cart → Cart → Checkout → Bitcoin → payment confirmation.

The cart supports multiple products and multiple quantities. Prices and totals are recalculated server-side before a NOWPayments payment is created.

## Vercel environment variables
Add these in Vercel Project Settings → Environment Variables:

- `NOWPAYMENTS_API_KEY`
- `NOWPAYMENTS_IPN_SECRET`
- `NOWPAYMENTS_ALLOWED_PRODUCTS`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Never commit the real API key, IPN secret, or Supabase service-role key to GitHub.

`NOWPAYMENTS_ALLOWED_PRODUCTS` is a server-side allowlist. Use comma-separated product slugs that the business/payment provider has approved. The server rejects any cart containing an item outside that list.

## Supabase
Run `supabase/schema.sql` in the project's Supabase SQL editor. It includes the `items_json` field used to preserve multi-item order details. The final `ALTER TABLE ... ADD COLUMN IF NOT EXISTS` line is safe for an existing orders table.

## Before launch
1. Deploy to the Vercel preview URL.
2. Add the environment variables.
4. Test adding different products and multiple quantities.
5. Confirm cart totals and shipping.
6. Place a small real Bitcoin test order.
7. Confirm the order is saved in Supabase and NOWPayments status updates reach the IPN endpoint.
8. Confirm the cart clears only after a finished payment.
9. Connect the production domain.
10. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and redeploy.
11. Run one final end-to-end test on the production domain.
