# NOWPayments launch setup

The code is wired for BTC payments through NOWPayments. Production payment creation stays server-side and product eligibility is enforced on the server.

## 1. Rotate the previously shared API key
Generate a fresh NOWPayments API key before production. Do not paste the replacement into source code, GitHub, chat, or browser-visible environment variables.

## 2. Create the IPN secret
In NOWPayments Store Settings / Payment Settings, generate the IPN Secret Key when ready to connect callbacks. Store it immediately; NOWPayments shows it only once before regeneration is required.

## 3. Configure the payout wallet
Confirm the BTC payout/outcome wallet in NOWPayments belongs to the business and is correct.

## 4. Create order storage
Create a Supabase project and run `supabase/schema.sql` in its SQL editor.

## 5. Add Vercel environment variables
Add these to Production (and Preview if you want preview checkout testing):

- `NEXT_PUBLIC_SITE_URL` = final HTTPS domain
- `NOWPAYMENTS_API_KEY` = fresh secret API key
- `NOWPAYMENTS_IPN_SECRET` = IPN secret
- `NOWPAYMENTS_API_BASE_URL` = `https://api.nowpayments.io/v1` for production
- `NEXT_PUBLIC_SUPABASE_URL` = Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` = Supabase service-role secret

Redeploy after changing environment variables.

## 6. Product eligibility
Every current product has `checkoutEligible: false` in `lib/data.ts`.

Only after the business independently confirms a specific product can be sold directly online and is accepted by its payment provider, change that product to:

```ts
checkoutEligible: true
```

Both the UI and the server API enforce this flag, so changing only the browser is not enough to bypass it.

## 7. Domain
In Vercel, open the project -> Settings -> Domains -> Add Domain. Enter the final domain and use the exact DNS records Vercel provides at the domain registrar. Once Vercel shows the domain as configured, set the same HTTPS origin in `NEXT_PUBLIC_SITE_URL`.

## 8. Test before opening checkout
After one eligible product and all environment variables are configured:

1. Deploy.
2. Place a small test order.
3. Confirm the order appears in Supabase.
4. Confirm NOWPayments creates a BTC address/amount.
5. Confirm the payment status updates on the checkout page.
6. Confirm the NOWPayments IPN updates `orders.payment_status` in Supabase.
7. Only then announce checkout as live.
