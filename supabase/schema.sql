-- Peptide Friend order storage for server-side checkout + NOWPayments status updates.
-- Run this once in the Supabase SQL editor for the project used by the storefront.

create table if not exists public.orders (
  id uuid primary key,
  created_at timestamptz not null default now(),
  product_slug text not null,
  product_name text not null,
  subtotal_usd numeric(10,2) not null,
  shipping_usd numeric(10,2) not null,
  total_usd numeric(10,2) not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  address_line1 text not null,
  city text not null,
  state text not null,
  postal_code text not null,
  country text not null default 'United States',
  payment_provider text not null,
  payment_method text not null,
  nowpayments_payment_id text unique,
  payment_status text not null default 'creating',
  crypto_pay_address text,
  crypto_pay_amount numeric,
  crypto_pay_currency text,
  actually_paid numeric,
  payment_updated_at timestamptz
);

alter table public.orders enable row level security;
-- No public policies are added intentionally. The storefront writes/updates orders
-- only through server routes using SUPABASE_SERVICE_ROLE_KEY.

create index if not exists orders_payment_id_idx on public.orders(nowpayments_payment_id);
create index if not exists orders_email_idx on public.orders(email);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
