"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/(bg|en)/, "") || "";

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-sm border border-border bg-ivory/70 p-0.5 text-xs"
      role="group"
      aria-label={label}
    >
      {(["bg", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <a
            key={code}
            href={`/${code}${rest}`}
            hrefLang={code}
            lang={code}
            aria-current={active ? "page" : undefined}
            className={`focus-ring relative z-10 rounded-sm px-2 py-1 uppercase tracking-wide transition ${
              active
                ? "bg-walnut text-ivory"
                : "text-walnut hover:bg-parchment/70"
            }`}
          >
            {code}
          </a>
        );
      })}
    </div>
  );
}
