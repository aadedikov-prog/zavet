"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { CartBadgeButton } from "./demo-cart";
import { IconBookMark, IconChevron, IconSearch, IconUser } from "./icons";
import { LanguageSwitcher } from "./language-switcher";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;
  const links = [
    { href: localePath(locale), label: dict.nav.home, match: "exact" as const },
    {
      href: localePath(locale, "/products"),
      label: dict.nav.products,
      match: "prefix" as const,
      chevron: true,
    },
    {
      href: localePath(locale, "/occasions"),
      label: dict.nav.occasions,
      match: "prefix" as const,
      chevron: true,
    },
    { href: localePath(locale, "/about"), label: dict.nav.about, match: "prefix" as const },
    { href: localePath(locale, "/contact"), label: dict.nav.contact, match: "prefix" as const },
  ];

  function isActive(href: string, match: "exact" | "prefix") {
    if (match === "exact") {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href={localePath(locale)} className="focus-ring flex min-w-0 items-center gap-2.5">
          <span className="text-antique-gold">
            <IconBookMark className="h-7 w-10" />
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-[1.65rem] leading-none tracking-[0.06em] text-espresso">
              {dict.brand.name}
            </span>
            <span className="mt-1 block truncate text-[0.58rem] uppercase tracking-[0.18em] text-muted">
              {dict.brand.taglineCaps}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[0.92rem] text-espresso lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = isActive(link.href, link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring inline-flex items-center gap-1 pb-0.5 transition ${
                  active
                    ? "border-b border-antique-gold text-espresso"
                    : "border-b border-transparent text-espresso/80 hover:text-espresso"
                }`}
              >
                {link.label}
                {"chevron" in link && link.chevron ? (
                  <IconChevron className="text-muted" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
          <span
            className="hidden rounded-sm p-1.5 text-espresso/45 sm:inline-flex"
            title={`${dict.nav.search} — ${dict.common.comingSoon}`}
            aria-hidden="true"
          >
            <IconSearch />
          </span>
          <span
            className="hidden rounded-sm p-1.5 text-espresso/45 sm:inline-flex"
            title={`${dict.nav.account} — ${dict.common.comingSoon}`}
            aria-hidden="true"
          >
            <IconUser />
          </span>
          <CartBadgeButton dict={dict} />
        </div>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-border/60 px-4 py-2 text-sm text-walnut lg:hidden"
        aria-label="Mobile"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="focus-ring whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
