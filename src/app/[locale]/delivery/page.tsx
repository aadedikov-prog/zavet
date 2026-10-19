import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.delivery.title, description: dict.delivery.lead };
}

export default async function DeliveryPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.delivery.title },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {dict.delivery.title}
      </h1>
      <p className="mt-3 max-w-2xl text-walnut">{dict.delivery.lead}</p>
      <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-walnut">
        {dict.delivery.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </div>
  );
}
