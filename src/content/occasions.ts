import type { Occasion } from "./types";

export const occasions: Occasion[] = [
  {
    slug: "relief-gifts",
    name: { bg: "Релефни подаръци", en: "Relief gifts" },
    shortDescription: {
      bg: "Ръчно изработени релефни диптихи — декоративни панели с панта, не обикновени книги.",
      en: "Handmade relief diptychs — hinged decorative panels, not ordinary books.",
    },
    templates: [
      {
        id: "relief-ornament",
        label: { bg: "Класически орнамент", en: "Classic ornament" },
        description: {
          bg: "Спокоен орнаментален кант около вашия текст.",
          en: "A calm ornamental border around your message.",
        },
        motifHint: { bg: "Фино релефно обрамчване", en: "Fine relief framing" },
      },
      {
        id: "relief-minimal",
        label: { bg: "Минимална линия", en: "Minimal line" },
        description: {
          bg: "Чиста типография с деликатна линия.",
          en: "Clean typography with a delicate line.",
        },
        motifHint: { bg: "Сдържан кант", en: "Restrained edge" },
      },
      {
        id: "relief-florals",
        label: { bg: "Меки флорали", en: "Soft florals" },
        description: {
          bg: "Леки растителни мотиви около пожеланието.",
          en: "Light botanical motifs around the wish.",
        },
        motifHint: { bg: "Растителен акцент", en: "Botanical accent" },
      },
    ],
    sampleWishes: [
      {
        id: "rg-1",
        text: {
          bg: "С обич и светлина — за дом, който пази спомени.",
          en: "With love and light — for a home that keeps memories.",
        },
      },
      {
        id: "rg-2",
        text: {
          bg: "Нека този релеф напомня за топлината между нас.",
          en: "May this relief remind us of the warmth between us.",
        },
      },
    ],
  },
  {
    slug: "christening",
    name: { bg: "Кръщене", en: "Christening" },
    shortDescription: {
      bg: "Нежни релефни подаръци за кръщене — с място за лично пожелание.",
      en: "Gentle relief gifts for christening — with room for a personal wish.",
    },
    templates: [
      {
        id: "chris-cross",
        label: { bg: "Малък кръст", en: "Small cross" },
        description: {
          bg: "Деликатен кръст в горната част на вложката.",
          en: "A delicate cross above the insert text.",
        },
        motifHint: { bg: "Малък кръст", en: "Small cross" },
      },
      {
        id: "chris-angel",
        label: { bg: "Ангел", en: "Angel" },
        description: {
          bg: "Мек ангелски мотив около пожеланието.",
          en: "A soft angel motif framing the wish.",
        },
        motifHint: { bg: "Ангелски силует", en: "Angel silhouette" },
      },
      {
        id: "chris-flowers",
        label: { bg: "Меки цветя", en: "Soft flowers" },
        description: {
          bg: "Нежни цветя по края на печатната зона.",
          en: "Gentle flowers along the print edge.",
        },
        motifHint: { bg: "Цветен кант", en: "Floral border" },
      },
    ],
    sampleWishes: [
      {
        id: "ch-1",
        text: {
          bg: "Бог да те пази с вяра, любов и светлина.",
          en: "May God keep you in faith, love, and light.",
        },
      },
      {
        id: "ch-2",
        text: {
          bg: "За твоето кръщене — с благословия и радост.",
          en: "For your christening — with blessing and joy.",
        },
      },
    ],
  },
  {
    slug: "wedding",
    name: { bg: "Сватба", en: "Wedding" },
    shortDescription: {
      bg: "Релефен диптих за сватбен ден — персонално послание върху дясната панела.",
      en: "A relief diptych for the wedding day — a personal message on the right panel.",
    },
    templates: [
      {
        id: "wed-rings",
        label: { bg: "Преплетени халки", en: "Intertwined rings" },
        description: {
          bg: "Две халки като акцент над текста.",
          en: "Two rings as an accent above the text.",
        },
        motifHint: { bg: "Преплетени халки", en: "Intertwined rings" },
      },
      {
        id: "wed-couple",
        label: { bg: "Минималистична двойка", en: "Minimalist couple" },
        description: {
          bg: "Сдържан силует на двама — без излишен декор.",
          en: "A restrained silhouette of two — without excess décor.",
        },
        motifHint: { bg: "Линеен силует", en: "Line silhouette" },
      },
      {
        id: "wed-flowers",
        label: { bg: "Деликатни цветя", en: "Delicate flowers" },
        description: {
          bg: "Леки флорални линии около пожеланието.",
          en: "Light floral lines around the wish.",
        },
        motifHint: { bg: "Деликатни цветя", en: "Delicate flowers" },
      },
    ],
    sampleWishes: [
      {
        id: "w-1",
        text: {
          bg: "За вашия ден — любов, която остава.",
          en: "For your day — love that lasts.",
        },
      },
      {
        id: "w-2",
        text: {
          bg: "Нека пътят ви заедно е светъл и спокоен.",
          en: "May your path together be bright and calm.",
        },
      },
    ],
  },
  {
    slug: "name-day",
    name: { bg: "Имен ден", en: "Name day" },
    shortDescription: {
      bg: "Персонален релеф за имен ден — с три подходящи дизайна за вложката.",
      en: "A personal relief for name day — with three fitting insert designs.",
    },
    templates: [
      {
        id: "nd-saint",
        label: { bg: "Светийски кант", en: "Saint-inspired border" },
        description: {
          bg: "Традиционен кант, вдъхновен от иконописна рамка.",
          en: "A traditional border inspired by an icon frame.",
        },
        motifHint: { bg: "Иконописен кант", en: "Icon-frame border" },
      },
      {
        id: "nd-ornament",
        label: { bg: "Класически орнамент", en: "Classic ornament" },
        description: {
          bg: "Класически орнамент около името и пожеланието.",
          en: "Classic ornament around the name and wish.",
        },
        motifHint: { bg: "Класически орнамент", en: "Classic ornament" },
      },
      {
        id: "nd-florals",
        label: { bg: "Флорали", en: "Florals" },
        description: {
          bg: "Леки флорали за топъл имен ден.",
          en: "Light florals for a warm name day.",
        },
        motifHint: { bg: "Флорален акцент", en: "Floral accent" },
      },
    ],
    sampleWishes: [
      {
        id: "nd-1",
        text: {
          bg: "Честит имен ден — с здраве и радост!",
          en: "Happy name day — with health and joy!",
        },
      },
      {
        id: "nd-2",
        text: {
          bg: "За теб на имен ден — с обич от сърце.",
          en: "For you on your name day — with love from the heart.",
        },
      },
    ],
  },
  {
    slug: "birthday",
    name: { bg: "Рожден ден", en: "Birthday" },
    shortDescription: {
      bg: "Релефен подарък за рожден ден с място за лично послание.",
      en: "A relief gift for a birthday with space for a personal message.",
    },
    templates: [
      {
        id: "bd-wreath",
        label: { bg: "Венец", en: "Wreath" },
        description: {
          bg: "Нежен венец около текста.",
          en: "A gentle wreath around the text.",
        },
        motifHint: { bg: "Растителен венец", en: "Botanical wreath" },
      },
      {
        id: "bd-stars",
        label: { bg: "Звезди", en: "Stars" },
        description: {
          bg: "Дискретни звезди над пожеланието.",
          en: "Quiet stars above the wish.",
        },
        motifHint: { bg: "Малки звезди", en: "Small stars" },
      },
      {
        id: "bd-simple",
        label: { bg: "Чист текст", en: "Clean text" },
        description: {
          bg: "Фокус върху типографията, без допълнителен мотив.",
          en: "Focus on typography, without an extra motif.",
        },
        motifHint: { bg: "Без мотив", en: "No motif" },
      },
    ],
    sampleWishes: [
      {
        id: "bd-1",
        text: {
          bg: "Честит рожден ден — с обич и светли дни напред!",
          en: "Happy birthday — with love and bright days ahead!",
        },
      },
      {
        id: "bd-2",
        text: {
          bg: "За теб днес — радост, здраве и топли спомени.",
          en: "For you today — joy, health, and warm memories.",
        },
      },
    ],
  },
  {
    slug: "jubilee",
    name: { bg: "Юбилей", en: "Jubilee" },
    shortDescription: {
      bg: "За годишнина или юбилей — релеф, който пази думите ви.",
      en: "For an anniversary or jubilee — a relief that keeps your words.",
    },
    templates: [
      {
        id: "ju-laurel",
        label: { bg: "Лавров кант", en: "Laurel border" },
        description: {
          bg: "Сдържан лавров мотив за тържествен тон.",
          en: "A restrained laurel motif for a ceremonial tone.",
        },
        motifHint: { bg: "Лаврови клонки", en: "Laurel sprigs" },
      },
      {
        id: "ju-numbers",
        label: { bg: "Година / число", en: "Year / number" },
        description: {
          bg: "Място за година или число над текста.",
          en: "Space for a year or number above the text.",
        },
        motifHint: { bg: "Числов акцент", en: "Numeric accent" },
      },
      {
        id: "ju-classic",
        label: { bg: "Класическа рамка", en: "Classic frame" },
        description: {
          bg: "Класическа рамка около пожеланието.",
          en: "A classic frame around the wish.",
        },
        motifHint: { bg: "Рамка", en: "Frame" },
      },
    ],
    sampleWishes: [
      {
        id: "ju-1",
        text: {
          bg: "За вашия юбилей — с признателност и обич.",
          en: "For your jubilee — with gratitude and love.",
        },
      },
      {
        id: "ju-2",
        text: {
          bg: "Години, изпълнени със светлина — и още напред.",
          en: "Years filled with light — and more ahead.",
        },
      },
    ],
  },
  {
    slug: "family",
    name: { bg: "Семейство", en: "Family" },
    shortDescription: {
      bg: "Релеф за семейни моменти — имена, дати и топли думи.",
      en: "A relief for family moments — names, dates, and warm words.",
    },
    templates: [
      {
        id: "fa-tree",
        label: { bg: "Клонче", en: "Branch" },
        description: {
          bg: "Леко клонче като семеен акцент.",
          en: "A light branch as a family accent.",
        },
        motifHint: { bg: "Клонче", en: "Branch" },
      },
      {
        id: "fa-heart",
        label: { bg: "Сърце линия", en: "Heart line" },
        description: {
          bg: "Дискретно сърце от една линия.",
          en: "A discreet heart drawn in one line.",
        },
        motifHint: { bg: "Линейно сърце", en: "Line heart" },
      },
      {
        id: "fa-ornament",
        label: { bg: "Домашен орнамент", en: "Home ornament" },
        description: {
          bg: "Топъл орнамент около семейното послание.",
          en: "A warm ornament around the family message.",
        },
        motifHint: { bg: "Орнамент", en: "Ornament" },
      },
    ],
    sampleWishes: [
      {
        id: "fa-1",
        text: {
          bg: "За нашето семейство — дом от обич и спомени.",
          en: "For our family — a home of love and memories.",
        },
      },
      {
        id: "fa-2",
        text: {
          bg: "Заедно сме по-силни — с благодарност всеки ден.",
          en: "Together we are stronger — with thanks every day.",
        },
      },
    ],
  },
  {
    slug: "gratitude",
    name: { bg: "Благодарност", en: "Gratitude" },
    shortDescription: {
      bg: "Кажете „благодаря“ с релефен диптих и лично послание.",
      en: "Say thank you with a relief diptych and a personal message.",
    },
    templates: [
      {
        id: "gr-hands",
        label: { bg: "Отворени длани", en: "Open hands" },
        description: {
          bg: "Символ на даване и приемане — деликатно.",
          en: "A symbol of giving and receiving — gently drawn.",
        },
        motifHint: { bg: "Длани", en: "Hands" },
      },
      {
        id: "gr-ribbon",
        label: { bg: "Лента", en: "Ribbon" },
        description: {
          bg: "Мека лента над текста на благодарността.",
          en: "A soft ribbon above the gratitude text.",
        },
        motifHint: { bg: "Лента", en: "Ribbon" },
      },
      {
        id: "gr-simple",
        label: { bg: "Чисти думи", en: "Plain words" },
        description: {
          bg: "Без мотив — само вашите думи.",
          en: "No motif — only your words.",
        },
        motifHint: { bg: "Без мотив", en: "No motif" },
      },
    ],
    sampleWishes: [
      {
        id: "gr-1",
        text: {
          bg: "Благодаря ти — от сърце и с обич.",
          en: "Thank you — from the heart and with love.",
        },
      },
      {
        id: "gr-2",
        text: {
          bg: "За твоята подкрепа — винаги ще помня.",
          en: "For your support — I will always remember.",
        },
      },
    ],
  },
  {
    slug: "other",
    name: { bg: "Друг повод", en: "Other occasion" },
    shortDescription: {
      bg: "За всеки друг специален момент — три универсални дизайна.",
      en: "For any other special moment — three universal designs.",
    },
    templates: [
      {
        id: "ot-frame",
        label: { bg: "Универсална рамка", en: "Universal frame" },
        description: {
          bg: "Неутрална рамка, подходяща за всеки повод.",
          en: "A neutral frame suited to any occasion.",
        },
        motifHint: { bg: "Рамка", en: "Frame" },
      },
      {
        id: "ot-line",
        label: { bg: "Елегантна линия", en: "Elegant line" },
        description: {
          bg: "Една линия — пространство за вашите думи.",
          en: "A single line — space for your words.",
        },
        motifHint: { bg: "Линия", en: "Line" },
      },
      {
        id: "ot-botanical",
        label: { bg: "Ботаничен акцент", en: "Botanical accent" },
        description: {
          bg: "Лек растителен акцент в ъгъла.",
          en: "A light botanical accent in the corner.",
        },
        motifHint: { bg: "Растение", en: "Plant" },
      },
    ],
    sampleWishes: [
      {
        id: "ot-1",
        text: {
          bg: "За теб — с мисъл и топлина.",
          en: "For you — with thought and warmth.",
        },
      },
      {
        id: "ot-2",
        text: {
          bg: "Нека този спомен остане между нас.",
          en: "May this memory remain between us.",
        },
      },
    ],
  },
];

export function getOccasion(slug: string): Occasion | undefined {
  return occasions.find((o) => o.slug === slug);
}
