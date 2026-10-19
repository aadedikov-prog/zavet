import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { IconBookMark } from "./icons";

type SiteFooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  const links = [
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/delivery"), label: dict.nav.delivery },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
    { href: localePath(locale, "/reviews"), label: dict.nav.reviews },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <div className="flex items-center gap-2 text-antique-gold">
            <IconBookMark className="h-6 w-9" />
            <p className="font-serif text-3xl tracking-[0.06em] text-espresso">
              {dict.brand.name}
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
          <p className="mt-3 text-xs text-muted">{dict.common.salesNote}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-walnut">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring hover:text-espresso"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-border/70 py-4 text-center text-xs text-muted">
        {dict.footer.rights}
      </div>
    </footer>
  );
}
