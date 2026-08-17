# Peptide Friend storefront

Next.js storefront with a server-side NOWPayments Bitcoin integration scaffold and server-enforced product availability.

## What is implemented

- Bitcoin checkout through NOWPayments (`POST /v1/payment`, forced to BTC)
- Server-only NOWPayments API key
- NOWPayments IPN callback with HMAC-SHA512 signature verification
- Customer-facing payment status polling
- Supabase order + shipping-detail persistence
- Server-side price calculation (browser cannot submit its own price)
- Server-enforced `checkoutEligible` flag for each product
- Card UI preserved but intentionally inactive until an approved card processor is connected

## Before production

1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Add the variables from `.env.example` to Vercel.
3. Generate a fresh NOWPayments API key. Do not reuse any API key that has been shared in chat, email, GitHub, or client-side code.
4. Generate the NOWPayments IPN secret and add it directly to Vercel.
5. Confirm the NOWPayments payout wallet is correct.
6. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
7. In `lib/data.ts`, change `checkoutEligible` to `true` only for products the business has independently confirmed may be sold directly online and are accepted by its payment provider.
8. Redeploy after changing environment variables or product availability.
9. Make a small end-to-end test purchase before opening checkout publicly.

## Security notes

Never commit real `NOWPAYMENTS_API_KEY`, `NOWPAYMENTS_IPN_SECRET`, or `SUPABASE_SERVICE_ROLE_KEY` values. The public storefront must never receive them.
