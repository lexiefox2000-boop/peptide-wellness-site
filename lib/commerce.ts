import { products } from "@/lib/data";

export function parsePrice(price: string) {
  const value = Number(price.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(value) || value < 0) throw new Error("Invalid product price");
  return value;
}

export function shippingFor(subtotal: number) {
  return subtotal >= 300 ? 0 : 18;
}

export function getOrderAmounts(productSlug: string) {
  const product = products.find((item) => item.slug === productSlug);
  if (!product) return null;

  const subtotal = parsePrice(product.price);
  const shipping = shippingFor(subtotal);
  const total = Number((subtotal + shipping).toFixed(2));

  return { product, subtotal, shipping, total };
}

export function isCheckoutAllowed(productSlug: string) {
  const configured = process.env.NOWPAYMENTS_ALLOWED_PRODUCTS?.trim();
  if (!configured) return false;
  if (configured === "*") return true;

  const allowed = new Set(
    configured
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );

  return allowed.has(productSlug);
}
