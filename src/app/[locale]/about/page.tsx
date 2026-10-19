import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.about.title };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.about.title },
        ]}
      />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <h1 className="font-serif text-4xl text-espresso md:text-5xl">
            {dict.about.title}
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-walnut">
            {dict.about.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
        <PlaceholderFrame
          label={dict.common.placeholderImage}
          note={dict.common.placeholderNote}
          aspect="square"
        />
      </div>
    </div>
  );
}
