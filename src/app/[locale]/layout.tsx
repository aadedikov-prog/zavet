import { notFound } from "next/navigation";
import { DemoCartDrawer, DemoCartProvider } from "@/components/demo-cart";
import { HtmlLang } from "@/components/html-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <DemoCartProvider>
      <div className="flex min-h-full flex-col bg-background">
        <HtmlLang locale={raw} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-ivory focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader locale={raw} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={raw} dict={dict} />
        <DemoCartDrawer dict={dict} />
      </div>
    </DemoCartProvider>
  );
}
