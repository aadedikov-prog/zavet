import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale, TemplateConcept } from "@/content/types";
import { t } from "@/lib/i18n";
import { PlaceholderFrame } from "./placeholder-frame";

type InsertPreviewProps = {
  locale: Locale;
  dict: Dictionary;
  template?: TemplateConcept;
  wish: string;
  signature: string;
  date: string;
  compact?: boolean;
};

export function InsertPreview({
  locale,
  dict,
  template,
  wish,
  signature,
  date,
  compact = false,
}: InsertPreviewProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface">
      <div className={`grid ${compact ? "" : "md:grid-cols-2"}`}>
        <div className="border-b border-border/70 bg-parchment/40 p-3 md:border-b-0 md:border-r">
          <PlaceholderFrame
            label={dict.common.placeholderImage}
            note={compact ? undefined : dict.common.placeholderNote}
            aspect="square"
            tone="wood"
            className="min-h-[200px]"
          />
        </div>
        <div className="flex min-h-[240px] flex-col bg-[#fbf7f0] p-3">
          <div
            className="relative mx-auto flex w-full max-w-[200px] flex-1 flex-col border border-walnut/20 bg-[#fffdf8] px-3 py-4"
            style={{ aspectRatio: "130 / 180" }}
          >
            <div className="pointer-events-none absolute inset-2 border border-dashed border-antique-gold/40" />
            <p className="relative z-[1] text-center text-[0.6rem] uppercase tracking-[0.14em] text-antique-gold">
              {template ? t(locale, template.motifHint) : "—"}
            </p>
            <div
              className="relative z-[1] mt-3 flex flex-1 flex-col justify-center gap-2 text-center"
              aria-live="polite"
            >
              <p
                data-preview-wish
                className="font-serif text-[0.95rem] leading-snug whitespace-pre-wrap text-espresso"
              >
                {wish.trim() || "…"}
              </p>
              {signature.trim() ? (
                <p data-preview-signature className="text-xs italic text-walnut">
                  {signature}
                </p>
              ) : null}
              {date.trim() ? (
                <p data-preview-date className="text-[0.65rem] tracking-wide text-muted">
                  {date}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-2 text-center text-[0.6rem] text-muted">
            {dict.product.insertSpec}
          </p>
        </div>
      </div>
      <p className="border-t border-border/70 bg-ivory px-3 py-2 text-[0.7rem] leading-relaxed text-muted">
        {dict.product.previewDisclaimer}
      </p>
    </div>
  );
}
