"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
export default function CartButton(){const{count}=useCart();return <Link href="/cart" aria-label={`Cart with ${count} items`} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"><ShoppingBag size={18}/>{count>0&&<span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--primary)] px-1 text-[10px] font-semibold text-white">{count>99?"99+":count}</span>}</Link>}
