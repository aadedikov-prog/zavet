import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrow,
  IconGem,
  IconGift,
  IconHeartHands,
  IconLeaf,
  IconTruck,
} from "@/components/icons";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { ProductCard } from "@/components/product-card";
import { occasions } from "@/content/occasions";
import { getFeaturedProducts } from "@/content/products";
import { getDictionary, isLocale, localePath, t } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const valueIcons = [
  IconHeartHands,
  IconGem,
  IconLeaf,
  IconGift,
  IconTruck,
];

const popularSlugs = [
  "christening",
  "wedding",
  "family",
  "name-day",
  "birthday",
] as const;

export async function generateMetadata({ params }: HomePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: `${dict.brand.name} — ${dict.brand.tagline}`,
    description: dict.home.heroLead,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);
  const featured = getFeaturedProducts();
  const popular = popularSlugs
    .map((slug) => occasions.find((o) => o.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <PlaceholderFrame
            label={dict.common.placeholderImage}
            note={dict.common.placeholderNote}
            aspect="hero"
            tone="wood"
            className="h-full min-h-[420px] opacity-90 md:min-h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/75 via-espresso/45 to-espresso/20" />
        </div>
        <div className="relative mx-auto flex max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-xl text-ivory">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-antique-gold">
              {dict.home.heroEyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-ivory md:text-6xl">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base">
              {dict.home.heroLead}
            </p>
            <Link
              href={localePath(locale, "/products")}
              className="btn-gold focus-ring mt-8"
            >
              {dict.home.heroCta}
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto grid max-w-6xl divide-y divide-border/80 md:grid-cols-5 md:divide-x md:divide-y-0">
          {dict.home.values.map((item, index) => {
            const Icon = valueIcons[index] ?? IconGem;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 px-4 py-8 text-center"
              >
                <span className="text-antique-gold">
                  <Icon />
                </span>
                <h2 className="font-serif text-lg text-espresso">{item.title}</h2>
                <p className="text-xs leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular categories */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            {dict.home.categoriesTitle}
          </h2>
          <Link
            href={localePath(locale, "/occasions")}
            className="focus-ring inline-flex items-center gap-1 text-sm text-walnut hover:text-espresso"
          >
            {dict.common.browseAll}
            <IconArrow />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {popular.map((occasion) =>
            occasion ? (
              <Link
                key={occasion.slug}
                href={localePath(locale, `/occasion/${occasion.slug}`)}
                className="focus-ring group block"
              >
                <PlaceholderFrame
                  label={dict.common.placeholderImage}
                  aspect="square"
                  tone="warm"
                  className="rounded-sm"
                />
                <span className="mt-3 flex items-center gap-2 font-serif text-xl text-espresso group-hover:text-walnut">
                  {t(locale, occasion.name)}
                  <span className="text-antique-gold transition group-hover:translate-x-0.5">
                    <IconArrow />
                  </span>
                </span>
              </Link>
            ) : null,
          )}
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-3">
          <PlaceholderFrame
            label={dict.common.placeholderImage}
            note={dict.common.placeholderNote}
            aspect="story"
            tone="wood"
          />
          <div className="flex flex-col justify-center bg-ivory px-8 py-12 md:px-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-antique-gold">
              {dict.home.storyEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-espresso md:text-[2rem]">
              {dict.home.storyTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {dict.home.storyBody}
            </p>
            <Link
              href={localePath(locale, "/about")}
              className="btn-gold focus-ring mt-8 self-start"
            >
              {dict.home.storyCta}
              <IconArrow />
            </Link>
          </div>
          <PlaceholderFrame
            label={dict.common.placeholderImage}
            aspect="story"
            tone="detail"
            caption={dict.home.storyCaption}
          />
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            {dict.home.featuredTitle}
          </h2>
          <p className="mt-3 text-muted">{dict.home.featuredLead}</p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard
              key={product.slug}
              locale={locale}
              product={product}
              dict={dict}
            />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-ivory/70">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            {dict.home.processTitle}
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {dict.home.processSteps.map((step, index) => (
              <li key={step.title}>
                <p className="text-xs uppercase tracking-[0.22em] text-antique-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-espresso">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
