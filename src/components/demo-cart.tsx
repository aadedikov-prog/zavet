"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Dictionary } from "@/content/dictionaries/bg";
import { IconBag } from "./icons";

type CartContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function DemoCartProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useDemoCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useDemoCart must be used within DemoCartProvider");
  return ctx;
}

export function CartBadgeButton({
  dict,
}: {
  dict: Dictionary;
}) {
  const { setOpen } = useDemoCart();
  return (
    <button
      type="button"
      className="focus-ring relative rounded-sm p-1.5 text-espresso hover:text-walnut"
      aria-label={`${dict.nav.cart} (0)`}
      onClick={() => setOpen(true)}
    >
      <IconBag />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-antique-gold px-1 text-[0.65rem] font-semibold text-white">
        0
      </span>
    </button>
  );
}

export function DemoCartDrawer({ dict }: { dict: Dictionary }) {
  const { open, setOpen } = useDemoCart();
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-espresso/40"
      role="dialog"
      aria-modal="true"
      aria-label={dict.product.cartDemoTitle}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label={dict.product.cartClose}
        onClick={() => setOpen(false)}
      />
      <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-surface shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-2xl text-espresso">{dict.nav.cart}</h2>
          <button
            type="button"
            className="focus-ring text-sm text-walnut"
            onClick={() => setOpen(false)}
          >
            {dict.product.cartClose}
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <IconBag className="h-10 w-10 text-antique-gold" />
          <p className="font-serif text-xl text-espresso">{dict.product.cartEmpty}</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {dict.product.cartDemoBody}
          </p>
        </div>
        <div className="border-t border-border bg-ivory/80 px-5 py-4 text-xs text-walnut">
          {dict.product.cartDemoTitle}
        </div>
      </aside>
    </div>
  );
}

export function AddToCartDemoButton({
  dict,
  priceLabel,
}: {
  dict: Dictionary;
  priceLabel: string;
}) {
  const { setOpen } = useDemoCart();
  return (
    <div className="space-y-2">
      <button
        type="button"
        className="btn-walnut focus-ring"
        onClick={() => setOpen(true)}
      >
        <span>{dict.product.addToCart}</span>
        <span className="opacity-80">|</span>
        <span>{priceLabel}</span>
      </button>
      <p className="text-xs leading-relaxed text-muted">{dict.product.cartDemoBody}</p>
    </div>
  );
}
