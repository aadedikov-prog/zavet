import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.contact.title, description: dict.contact.lead };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  const rows = [
    { label: dict.contact.emailLabel, value: dict.contact.emailValue },
    { label: dict.contact.phoneLabel, value: dict.contact.phoneValue },
    { label: dict.contact.locationLabel, value: dict.contact.locationValue },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.contact.title },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {dict.contact.title}
      </h1>
      <p className="mt-3 max-w-2xl text-walnut">{dict.contact.lead}</p>
      <dl className="mt-10 max-w-lg space-y-6 border-t border-border pt-8">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs uppercase tracking-[0.18em] text-antique-gold">
              {row.label}
            </dt>
            <dd className="mt-2 text-lg text-espresso">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-walnut/80">{dict.contact.note}</p>
    </div>
  );
}
