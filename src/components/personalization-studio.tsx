"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale, Occasion, Product } from "@/content/types";
import { localePath, t } from "@/lib/i18n";
import { AddToCartDemoButton } from "./demo-cart";
import { InsertPreview } from "./insert-preview";
import { PlaceholderFrame } from "./placeholder-frame";

type PersonalizationStudioProps = {
  locale: Locale;
  dict: Dictionary;
  product: Product;
  occasions: Occasion[];
  initialOccasionSlug: string;
};

const WISH_MAX = 300;

export function PersonalizationStudio({
  locale,
  dict,
  product,
  occasions,
  initialOccasionSlug,
}: PersonalizationStudioProps) {
  const available = useMemo(
    () => occasions.filter((o) => product.occasionSlugs.includes(o.slug)),
    [occasions, product.occasionSlugs],
  );

  const [occasionSlug, setOccasionSlug] = useState(
    available.some((o) => o.slug === initialOccasionSlug)
      ? initialOccasionSlug
      : (available[0]?.slug ?? "other"),
  );
  const occasion =
    available.find((o) => o.slug === occasionSlug) ?? available[0];

  const [templateId, setTemplateId] = useState(
    occasion?.templates[0]?.id ?? "",
  );
  const template =
    occasion?.templates.find((tpl) => tpl.id === templateId) ??
    occasion?.templates[0];

  const [wishMode, setWishMode] = useState<"ready" | "own">("ready");
  const [wish, setWish] = useState(
    occasion ? t(locale, occasion.sampleWishes[0].text) : "",
  );
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");
  const [largeOpen, setLargeOpen] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  function onOccasionChange(slug: string) {
    const next = available.find((o) => o.slug === slug);
    if (!next) return;
    setOccasionSlug(slug);
    setTemplateId(next.templates[0]?.id ?? "");
    setWish(t(locale, next.sampleWishes[0]?.text ?? { bg: "", en: "" }));
    setWishMode("ready");
  }

  const priceLabel = t(locale, product.demoPriceLabel);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
      {/* Gallery */}
      <div className="space-y-3 lg:sticky lg:top-24">
        {activeThumb === 0 ? (
          <InsertPreview
            locale={locale}
            dict={dict}
            template={template}
            wish={wish}
            signature={signature}
            date={date}
          />
        ) : (
          <PlaceholderFrame
            label={dict.common.placeholderImage}
            note={dict.common.placeholderNote}
            aspect="diptych"
            tone={activeThumb % 2 === 0 ? "wood" : "warm"}
            className="rounded-sm"
          />
        )}
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`focus-ring overflow-hidden rounded-sm border ${
                activeThumb === index
                  ? "border-antique-gold"
                  : "border-border"
              }`}
              onClick={() => setActiveThumb(index)}
              aria-label={`${dict.common.placeholderImage} ${index + 1}`}
            >
              <PlaceholderFrame
                label={index === 0 ? "1" : String(index + 1)}
                aspect="thumb"
                tone={index % 2 === 0 ? "wood" : "warm"}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="focus-ring inline-flex rounded-sm border border-walnut/35 px-4 py-2 text-sm text-walnut md:hidden"
          onClick={() => setLargeOpen(true)}
        >
          {dict.product.openLargePreview}
        </button>
      </div>

      {/* Details + steps */}
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-3xl leading-tight text-espresso md:text-4xl">
            {t(locale, product.name)}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="tracking-wide text-antique-gold" aria-hidden="true">
              ★ ★ ★ ★ ★
            </span>
            <Link
              href={localePath(locale, "/reviews")}
              className="focus-ring text-muted underline-offset-2 hover:underline"
            >
              {dict.product.noReviews}
            </Link>
          </div>
          <p className="mt-4 text-2xl font-semibold text-espresso">{priceLabel}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-antique-gold">
            {dict.common.demoPriceNote}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t(locale, product.description)}
          </p>
          <p className="mt-2 text-sm text-walnut/90">{dict.product.diptychNote}</p>
        </div>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-espresso">
            {dict.product.chooseOccasion}
          </span>
          <select
            className="focus-ring w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-espresso"
            value={occasionSlug}
            onChange={(e) => onOccasionChange(e.target.value)}
          >
            {available.map((o) => (
              <option key={o.slug} value={o.slug}>
                {t(locale, o.name)}
              </option>
            ))}
          </select>
        </label>

        {/* Step 1 templates */}
        {occasion ? (
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 font-serif text-xl text-espresso">
              <span className="step-badge">1</span>
              {dict.product.stepDesign}
            </h2>
            <p className="text-sm text-muted">{dict.product.templatesLead}</p>
            <div className="grid grid-cols-3 gap-3">
              {occasion.templates.map((tpl) => {
                const selected = tpl.id === template?.id;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    className={`focus-ring overflow-hidden rounded-sm border text-left transition ${
                      selected
                        ? "border-antique-gold ring-1 ring-antique-gold"
                        : "border-border hover:border-walnut/40"
                    }`}
                    onClick={() => setTemplateId(tpl.id)}
                  >
                    <PlaceholderFrame
                      label={t(locale, tpl.motifHint)}
                      aspect="square"
                      tone="warm"
                    />
                    <span className="block px-2 py-2 text-center text-xs font-medium text-espresso md:text-sm">
                      {t(locale, tpl.label)}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* Step 2 wish */}
        <section className="space-y-3">
          <h2 className="flex items-center gap-2 font-serif text-xl text-espresso">
            <span className="step-badge">2</span>
            {dict.product.stepWish}
          </h2>
          <div className="inline-flex rounded-sm border border-border p-0.5 text-sm">
            <button
              type="button"
              className={`focus-ring rounded-sm px-3 py-1.5 ${
                wishMode === "ready"
                  ? "bg-parchment text-espresso"
                  : "text-muted"
              }`}
              onClick={() => setWishMode("ready")}
            >
              {dict.product.readyWishes}
            </button>
            <button
              type="button"
              className={`focus-ring rounded-sm px-3 py-1.5 ${
                wishMode === "own" ? "bg-parchment text-espresso" : "text-muted"
              }`}
              onClick={() => setWishMode("own")}
            >
              {dict.product.ownText}
            </button>
          </div>

          {wishMode === "ready" && occasion ? (
            <ul className="space-y-2">
              {occasion.sampleWishes.map((sample) => (
                <li key={sample.id}>
                  <button
                    type="button"
                    className={`focus-ring w-full rounded-sm border px-3 py-2.5 text-left text-sm transition ${
                      wish === t(locale, sample.text)
                        ? "border-antique-gold bg-parchment/40"
                        : "border-border hover:border-walnut/40"
                    }`}
                    onClick={() => setWish(t(locale, sample.text))}
                  >
                    {t(locale, sample.text)}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="relative">
            <textarea
              id="zavet-wish"
              className="focus-ring min-h-[120px] w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-espresso"
              value={wish}
              maxLength={WISH_MAX}
              onChange={(e) => {
                setWish(e.target.value);
                setWishMode("own");
              }}
              placeholder={dict.product.wishPlaceholder}
            />
            <p className="mt-1 text-right text-xs text-muted">
              {wish.length}/{WISH_MAX} {dict.product.charCount}
            </p>
          </div>
        </section>

        {/* Step 3 names */}
        <section className="space-y-3">
          <h2 className="flex items-center gap-2 font-serif text-xl text-espresso">
            <span className="step-badge">3</span>
            {dict.product.stepNames}
          </h2>
          <input
            id="zavet-signature"
            className="focus-ring w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-espresso"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder={dict.product.signaturePlaceholder}
          />
        </section>

        {/* Step 4 date */}
        <section className="space-y-3">
          <h2 className="flex items-center gap-2 font-serif text-xl text-espresso">
            <span className="step-badge">4</span>
            {dict.product.stepDate}
          </h2>
          <input
            id="zavet-date"
            type="date"
            className="focus-ring w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-espresso"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </section>

        <AddToCartDemoButton dict={dict} priceLabel={priceLabel} />
      </div>

      {largeOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-espresso/45 p-4 sm:items-center sm:justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={dict.product.previewTitle}
        >
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-surface p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-serif text-2xl text-espresso">
                {dict.product.previewTitle}
              </h2>
              <button
                type="button"
                className="focus-ring rounded-sm border border-border px-3 py-1.5 text-sm text-walnut"
                onClick={() => setLargeOpen(false)}
              >
                {dict.product.closeLargePreview}
              </button>
            </div>
            <InsertPreview
              locale={locale}
              dict={dict}
              template={template}
              wish={wish}
              signature={signature}
              date={date}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
