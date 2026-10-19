import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PersonalizationStudio } from "@/components/personalization-studio";
import { occasions } from "@/content/occasions";
import type { OccasionSlug } from "@/content/types";
import { getProduct, products } from "@/content/products";
import { getDictionary, isLocale, localePath, t } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ occasion?: string }>;
};

function isOccasionSlug(value: string): value is OccasionSlug {
  return [
    "relief-gifts",
    "christening",
    "wedding",
    "name-day",
    "birthday",
    "jubilee",
    "family",
    "gratitude",
    "other",
  ].includes(value);
}

export function generateStaticParams() {
  return products.flatMap((product) =>
    (["bg", "en"] as const).map((locale) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: t(raw, product.name),
    description: t(raw, product.summary),
  };
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { locale: raw, slug } = await params;
  const { occasion: occasionQuery } = await searchParams;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const product = getProduct(slug);
  if (!product) notFound();
  const dict = getDictionary(locale);
  const initialOccasion =
    occasionQuery &&
    isOccasionSlug(occasionQuery) &&
    product.occasionSlugs.includes(occasionQuery)
      ? occasionQuery
      : product.occasionSlugs[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          {
            href: localePath(locale, "/occasions"),
            label: dict.nav.occasions,
          },
          { label: t(locale, product.name) },
        ]}
      />
      <PersonalizationStudio
        locale={locale}
        dict={dict}
        product={product}
        occasions={occasions}
        initialOccasionSlug={initialOccasion}
      />
    </div>
  );
}
