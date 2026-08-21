# Peptide Friend — launch checklist

The storefront is configured for Bitcoin checkout through NOWPayments. Card checkout has been removed.

## Vercel environment variables
Add these in Vercel → Project → Settings → Environment Variables, then redeploy:

- `NEXT_PUBLIC_SITE_URL` — current HTTPS site origin; switch to the final custom domain after it is connected
- `NOWPAYMENTS_API_KEY` — production API key (server only)
- `NOWPAYMENTS_IPN_SECRET` — production IPN secret (server only)
- `NOWPAYMENTS_API_BASE_URL=https://api.nowpayments.io/v1`
- `NOWPAYMENTS_ALLOWED_PRODUCTS` — approved product slugs, or `*` only when the entire catalog is approved
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service-role secret (server only)
- `NEXT_PUBLIC_TELEGRAM_URL` — Telegram bot/support link

Never place the NOWPayments API key, IPN secret, or Supabase service-role key in browser code, GitHub, chat, or any variable prefixed with `NEXT_PUBLIC_`.

## Order storage
Create a Supabase project and run `supabase/schema.sql` in the SQL editor before accepting a real order.

## Bitcoin flow
1. Customer completes contact and shipping information.
2. Customer selects Pay with Bitcoin.
3. The server calculates the order total and creates a NOWPayments BTC payment.
4. The customer receives the exact BTC amount and address.
5. The page polls for a customer-facing status update.
6. NOWPayments sends a signed IPN callback and the server updates the stored order.

## Telegram support
Set `NEXT_PUBLIC_TELEGRAM_URL` to the business bot link. Until it is set, the Contact page displays a neutral coming-soon message rather than a broken form.

## Before launch
1. Deploy to a Vercel preview URL.
2. Verify every page on desktop and mobile.
3. Run a small real BTC test order.
4. Confirm the order is created in Supabase.
5. Confirm NOWPayments creates the correct BTC payment.
6. Confirm the IPN updates the stored payment status.
7. Confirm the Telegram button opens the correct bot.
8. Connect the custom domain and update `NEXT_PUBLIC_SITE_URL`.
9. Redeploy and run one final production-domain checkout test.
