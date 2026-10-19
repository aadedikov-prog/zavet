import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OccasionCard } from "@/components/occasion-card";
import { occasions } from "@/content/occasions";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.occasionsPage.title, description: dict.occasionsPage.lead };
}

export default async function OccasionsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.occasionsPage.title },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {dict.occasionsPage.title}
      </h1>
      <p className="mt-3 max-w-2xl text-walnut">{dict.occasionsPage.lead}</p>
      <div className="mt-8 border-t border-border">
        {occasions.map((occasion) => (
          <OccasionCard
            key={occasion.slug}
            locale={locale}
            occasion={occasion}
            cta={dict.common.learnMore}
          />
        ))}
      </div>
    </div>
  );
}
