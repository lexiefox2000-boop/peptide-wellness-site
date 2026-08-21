# Peptide Friend storefront

Next.js storefront with a server-side NOWPayments Bitcoin checkout and Supabase order persistence.

## What is implemented

- Mobile-friendly product browsing
- Quantity selector and multi-item cart
- Bitcoin-only checkout through NOWPayments
- Server-only NOWPayments API key
- NOWPayments IPN callback with HMAC-SHA512 signature verification
- Customer-facing payment status polling
- Supabase order + shipping-detail persistence
- Server-side price and cart-total calculation
- Server-side product allowlist through `NOWPAYMENTS_ALLOWED_PRODUCTS`
- Customer-facing Contact page that currently states support will be available soon

## Production configuration

1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Add the variables from `.env.example` to Vercel.
3. Add a fresh NOWPayments API key directly to Vercel.
4. Add the NOWPayments IPN secret directly to Vercel.
5. Confirm the NOWPayments payout wallet is correct.
6. Set `NOWPAYMENTS_ALLOWED_PRODUCTS` to the product slugs approved for checkout, or `*` only if the full current catalog is approved.
7. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
8. Redeploy after changing environment variables.
9. Make a small end-to-end test purchase before opening checkout publicly.

## Security notes

Never commit real `NOWPAYMENTS_API_KEY`, `NOWPAYMENTS_IPN_SECRET`, or `SUPABASE_SERVICE_ROLE_KEY` values. These must remain server-side in Vercel environment variables.
