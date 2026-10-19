import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale, Product } from "@/content/types";
import { localePath, t } from "@/lib/i18n";
import { PlaceholderFrame } from "./placeholder-frame";

type ProductCardProps = {
  locale: Locale;
  product: Product;
  dict: Dictionary;
};

export function ProductCard({ locale, product, dict }: ProductCardProps) {
  const href = localePath(locale, `/product/${product.slug}`);

  return (
    <article className="group flex flex-col gap-3">
      <Link href={href} className="focus-ring block overflow-hidden rounded-sm">
        <PlaceholderFrame
          label={dict.common.placeholderImage}
          note={dict.common.placeholderNote}
          aspect="diptych"
          tone="warm"
        />
      </Link>
      <h3 className="font-serif text-2xl text-espresso">
        <Link href={href} className="focus-ring hover:text-walnut">
          {t(locale, product.name)}
        </Link>
      </h3>
      <p className="text-sm leading-relaxed text-muted">
        {t(locale, product.summary)}
      </p>
      <p className="text-sm font-medium text-espresso">
        {t(locale, product.demoPriceLabel)}
      </p>
      <p className="text-[0.7rem] uppercase tracking-[0.14em] text-antique-gold">
        {dict.common.demoPriceNote}
      </p>
      <p>
        <Link
          href={href}
          className="focus-ring inline-flex min-h-10 items-center text-sm text-walnut underline underline-offset-4 hover:text-espresso"
        >
          {dict.common.viewProduct}
        </Link>
      </p>
    </article>
  );
}
