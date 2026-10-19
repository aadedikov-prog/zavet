import Link from "next/link";
import type { Locale, Occasion } from "@/content/types";
import { localePath, t } from "@/lib/i18n";
import { IconArrow } from "./icons";
import { PlaceholderFrame } from "./placeholder-frame";

type OccasionCardProps = {
  locale: Locale;
  occasion: Occasion;
  cta: string;
  withImage?: boolean;
};

export function OccasionCard({
  locale,
  occasion,
  cta,
  withImage = false,
}: OccasionCardProps) {
  return (
    <Link
      href={localePath(locale, `/occasion/${occasion.slug}`)}
      className="focus-ring group block"
    >
      {withImage ? (
        <PlaceholderFrame
          label={t(locale, occasion.name)}
          aspect="square"
          tone="warm"
          className="mb-3 rounded-sm"
        />
      ) : null}
      <div className="flex items-baseline justify-between gap-4 border-b border-border/80 py-4 transition group-hover:border-antique-gold">
        <div>
          <h3 className="font-serif text-2xl text-espresso transition group-hover:text-walnut">
            {t(locale, occasion.name)}
          </h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
            {t(locale, occasion.shortDescription)}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs uppercase tracking-[0.16em] text-antique-gold">
          {cta}
          <IconArrow />
        </span>
      </div>
    </Link>
  );
}
