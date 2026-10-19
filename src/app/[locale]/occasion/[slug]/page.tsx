import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { getOccasion, occasions } from "@/content/occasions";
import { getProductsForOccasion } from "@/content/products";
import { getDictionary, isLocale, localePath, t } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return occasions.flatMap((occasion) =>
    (["bg", "en"] as const).map((locale) => ({
      locale,
      slug: occasion.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const occasion = getOccasion(slug);
  if (!occasion) return {};
  return {
    title: t(raw, occasion.name),
    description: t(raw, occasion.shortDescription),
  };
}

export default async function OccasionPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const occasion = getOccasion(slug);
  if (!occasion) notFound();
  const dict = getDictionary(locale);
  const products = getProductsForOccasion(occasion.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          {
            href: localePath(locale, "/occasions"),
            label: dict.nav.occasions,
          },
          { label: t(locale, occasion.name) },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {t(locale, occasion.name)}
      </h1>
      <p className="mt-3 max-w-2xl text-walnut">
        {t(locale, occasion.shortDescription)}
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-espresso">
          {dict.product.templatesTitle}
        </h2>
        <p className="mt-2 text-sm text-walnut">{dict.product.templatesLead}</p>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {occasion.templates.map((tpl) => (
            <li
              key={tpl.id}
              className="border border-border/90 bg-parchment/20 px-4 py-5"
            >
              <h3 className="font-serif text-xl text-espresso">
                {t(locale, tpl.label)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-walnut">
                {t(locale, tpl.description)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-espresso">
          {dict.home.featuredTitle}
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              locale={locale}
              product={product}
              dict={dict}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
