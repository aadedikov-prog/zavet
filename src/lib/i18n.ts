import { bg } from "@/content/dictionaries/bg";
import { en } from "@/content/dictionaries/en";
import type { Dictionary } from "@/content/dictionaries/bg";
import type { Locale, LocalizedString } from "@/content/types";

export const locales: Locale[] = ["bg", "en"];
export const defaultLocale: Locale = "bg";

export function isLocale(value: string): value is Locale {
  return value === "bg" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : bg;
}

export function t(locale: Locale, value: LocalizedString): string {
  return value[locale];
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${clean}`;
}
