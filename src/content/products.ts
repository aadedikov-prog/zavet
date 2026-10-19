import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "diptych-light",
    name: {
      bg: "Диптих „Светлина“",
      en: "Diptych “Light”",
    },
    summary: {
      bg: "Два релефни панела с панта — ляво икона/мотив, дясно персонално послание.",
      en: "Two hinged relief panels — icon/motif on the left, personal message on the right.",
    },
    description: {
      bg: "Ръчно изработен декоративен релефен диптих, който прилича на отворена книга, но не е функционална книга. Двата твърди панела са съединени с панти. При сгъване гърбовете се допират, а релефните лица остават отвън. Стандартната печатна вложка е 130 × 180 mm портрет; дървената/основата е малко по-голяма. Това е Phase 1 демо на персонализация — визуализацията не е калибрирана за печат.",
      en: "A handmade decorative relief diptych that resembles an open book, but is not a functional book. Two rigid panels are joined with hinges. When folded, the backs touch and the relief faces stay outward. The standard printable insert is 130 × 180 mm portrait; the wooden/base panel is slightly larger. This is a Phase 1 personalization demo — the preview is not print-calibrated.",
    },
    occasionSlugs: [
      "relief-gifts",
      "christening",
      "wedding",
      "name-day",
      "birthday",
      "jubilee",
      "family",
      "gratitude",
      "other",
    ],
    featured: true,
    demoPriceLabel: {
      bg: "149.00 лв (демо)",
      en: "BGN 149.00 (demo)",
    },
  },
  {
    slug: "diptych-memory",
    name: {
      bg: "Диптих „Спомен“",
      en: "Diptych “Memory”",
    },
    summary: {
      bg: "Топъл релеф за семейни и празнични поводи — с място за вашите думи.",
      en: "A warm relief for family and festive occasions — with space for your words.",
    },
    description: {
      bg: "Декоративен релефен диптих с панти: лявата панела носи ръчно завършен повдигнат мотив; дясната приема отпечатано персонализирано послание върху твърда основа, с релеф около печата, който прикрива ръбовете. Не е обикновена книга. Персонализацията тук е локална демо-визуализация (Phase 1).",
      en: "A decorative hinged relief diptych: the left panel carries a hand-finished raised motif; the right accepts a printed personalized message on a rigid base, with handmade relief around the print concealing the edges. It is not an ordinary book. Personalization here is a local demo preview (Phase 1).",
    },
    occasionSlugs: [
      "relief-gifts",
      "family",
      "birthday",
      "jubilee",
      "gratitude",
      "other",
    ],
    featured: true,
    demoPriceLabel: {
      bg: "149.00 лв (демо)",
      en: "BGN 149.00 (demo)",
    },
  },
  {
    slug: "diptych-blessing",
    name: {
      bg: "Диптих „Благословия“",
      en: "Diptych “Blessing”",
    },
    summary: {
      bg: "Подходящ за кръщене и имен ден — релеф отвън, послание отдясно.",
      en: "Suited to christening and name day — relief outward, message on the right.",
    },
    description: {
      bg: "Ръчно изработен релефен диптих: два панела с панта, релефните лица остават видими и когато е сгънат. Печатната зона на дясната панела е 130 × 180 mm портрет. Phase 1 показва концептуален избор на дизайн и текст — точна печатна визуализация е Phase 2.",
      en: "A handmade relief diptych: two hinged panels, relief faces remain visible even when folded. The right-panel print area is 130 × 180 mm portrait. Phase 1 shows conceptual design and text choice — accurate print preview is Phase 2.",
    },
    occasionSlugs: ["christening", "name-day", "gratitude", "other", "relief-gifts"],
    featured: true,
    demoPriceLabel: {
      bg: "149.00 лв (демо)",
      en: "BGN 149.00 (demo)",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsForOccasion(occasionSlug: string): Product[] {
  return products.filter((p) =>
    p.occasionSlugs.includes(occasionSlug as Product["occasionSlugs"][number]),
  );
}
