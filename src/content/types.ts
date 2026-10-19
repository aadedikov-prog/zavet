export type Locale = "bg" | "en";

export type OccasionSlug =
  | "relief-gifts"
  | "christening"
  | "wedding"
  | "name-day"
  | "birthday"
  | "jubilee"
  | "family"
  | "gratitude"
  | "other";

export type TemplateId = string;

export interface LocalizedString {
  bg: string;
  en: string;
}

export interface TemplateConcept {
  id: TemplateId;
  label: LocalizedString;
  description: LocalizedString;
  motifHint: LocalizedString;
}

export interface SampleWish {
  id: string;
  text: LocalizedString;
}

export interface Occasion {
  slug: OccasionSlug;
  name: LocalizedString;
  shortDescription: LocalizedString;
  templates: TemplateConcept[];
  sampleWishes: SampleWish[];
}

export interface Product {
  slug: string;
  name: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  occasionSlugs: OccasionSlug[];
  featured?: boolean;
  /** Demo-only label; not a live price */
  demoPriceLabel: LocalizedString;
}
