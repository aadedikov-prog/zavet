import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { products } from "@/content/products";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.productsPage.title, description: dict.productsPage.lead };
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.productsPage.title },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {dict.productsPage.title}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{dict.productsPage.lead}</p>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            locale={locale}
            product={product}
            dict={dict}
          />
        ))}
      </div>
    </div>
  );
}
