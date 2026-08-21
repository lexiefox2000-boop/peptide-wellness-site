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


export type OrderItemInput = { slug: string; quantity: number };

export function getCartAmounts(items: OrderItemInput[]) {
  const normalized = items.flatMap((item) => {
    const product = products.find((p) => p.slug === item.slug);
    const quantity = Math.max(1, Math.min(20, Math.floor(Number(item.quantity) || 0)));
    return product ? [{ product, quantity, unitPrice: parsePrice(product.price) }] : [];
  });
  if (!normalized.length) return null;
  const subtotal = Number(normalized.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0).toFixed(2));
  const shipping = shippingFor(subtotal);
  const total = Number((subtotal + shipping).toFixed(2));
  return { items: normalized, subtotal, shipping, total };
}

export function areCheckoutItemsAllowed(items: OrderItemInput[]) {
  return items.length > 0 && items.every((item) => isCheckoutAllowed(item.slug));
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
