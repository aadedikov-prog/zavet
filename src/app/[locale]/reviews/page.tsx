import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary, isLocale, localePath } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.reviews.title, description: dict.reviews.lead };
}

export default async function ReviewsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs
        items={[
          { href: localePath(locale), label: dict.common.breadcrumbsHome },
          { label: dict.reviews.title },
        ]}
      />
      <h1 className="font-serif text-4xl text-espresso md:text-5xl">
        {dict.reviews.title}
      </h1>
      <p className="mt-3 max-w-2xl text-walnut">{dict.reviews.lead}</p>

      <div className="mt-10 max-w-xl rounded-sm border border-dashed border-walnut/30 bg-parchment/20 px-6 py-10 text-center">
        <div
          className="flex justify-center gap-1 text-antique-gold"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-xl opacity-35">
              ★
            </span>
          ))}
        </div>
        <h2 className="mt-4 font-serif text-2xl text-espresso">
          {dict.reviews.emptyTitle}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-walnut">
          {dict.reviews.emptyBody}
        </p>
        <div className="mt-8 space-y-3 text-left opacity-50" aria-hidden="true">
          <p className="text-xs uppercase tracking-[0.16em] text-walnut">
            {dict.reviews.starsLabel}
          </p>
          <div className="h-10 rounded-sm border border-border bg-ivory" />
          <p className="text-xs uppercase tracking-[0.16em] text-walnut">
            {dict.reviews.commentLabel}
          </p>
          <div className="h-24 rounded-sm border border-border bg-ivory" />
        </div>
      </div>
    </div>
  );
}
