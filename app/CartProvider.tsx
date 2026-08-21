"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
export type CartItem = { slug: string; quantity: number };
type CartContextValue = { items: CartItem[]; count: number; addItem:(slug:string,quantity?:number)=>void; setQuantity:(slug:string,quantity:number)=>void; removeItem:(slug:string)=>void; clearCart:()=>void };
const CartContext=createContext<CartContextValue|null>(null);
const KEY="peptide-friend-cart";

export function CartProvider({children}:{children:React.ReactNode}) {
  const [items,setItems]=useState<CartItem[]>([]);
  const [ready,setReady]=useState(false);
  useEffect(()=>{ try { const raw=JSON.parse(localStorage.getItem(KEY)||"[]"); if(Array.isArray(raw)) setItems(raw.filter(x=>x&&typeof x.slug==="string"&&Number.isFinite(x.quantity)).map(x=>({slug:x.slug,quantity:Math.max(1,Math.min(20,Math.floor(x.quantity)))}))); } catch {} setReady(true); },[]);
  useEffect(()=>{ if(ready) localStorage.setItem(KEY,JSON.stringify(items)); },[items,ready]);
  const addItem=(slug:string,quantity=1)=>setItems(cur=>{const q=Math.max(1,Math.min(20,Math.floor(quantity)));const found=cur.find(x=>x.slug===slug);return found?cur.map(x=>x.slug===slug?{...x,quantity:Math.min(20,x.quantity+q)}:x):[...cur,{slug,quantity:q}]});
  const removeItem=(slug:string)=>setItems(cur=>cur.filter(x=>x.slug!==slug));
  const setQuantity=(slug:string,quantity:number)=>quantity<=0?removeItem(slug):setItems(cur=>cur.map(x=>x.slug===slug?{...x,quantity:Math.max(1,Math.min(20,Math.floor(quantity)))}:x));
  const clearCart=()=>setItems([]);
  const value=useMemo(()=>({items,count:items.reduce((s,x)=>s+x.quantity,0),addItem,setQuantity,removeItem,clearCart}),[items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart(){const v=useContext(CartContext);if(!v)throw new Error("useCart must be inside CartProvider");return v;}
