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
