type PlaceholderFrameProps = {
  label: string;
  note?: string;
  aspect?: "diptych" | "square" | "hero" | "story" | "thumb";
  className?: string;
  caption?: string;
  tone?: "warm" | "wood" | "detail";
};

const aspectClass = {
  diptych: "aspect-[4/3]",
  square: "aspect-square",
  hero: "min-h-[420px] md:min-h-[520px]",
  story: "aspect-[3/4] min-h-[280px]",
  thumb: "aspect-square",
} as const;

const toneClass = {
  warm: "from-[#efe4d4] via-[#e7d4b8] to-[#d9c3a2]",
  wood: "from-[#cbb297] via-[#a88868] to-[#7d5d45]",
  detail: "from-[#8f7358] via-[#6d5340] to-[#3d2f26]",
} as const;

export function PlaceholderFrame({
  label,
  note,
  aspect = "diptych",
  className = "",
  caption,
  tone = "warm",
}: PlaceholderFrameProps) {
  return (
    <figure
      className={`relative overflow-hidden bg-gradient-to-br ${toneClass[tone]} ${aspectClass[aspect]} ${className}`}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 0 46%, rgba(48,37,31,0.12) 46% 54%, transparent 54%), linear-gradient(45deg, transparent 0 46%, rgba(177,138,85,0.18) 46% 54%, transparent 54%)",
        }}
      />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center">
        <span
          className={`max-w-sm font-serif tracking-wide ${
            tone === "detail" ? "text-ivory" : "text-espresso/80"
          } text-lg md:text-xl`}
        >
          {label}
        </span>
        {note ? (
          <span
            className={`max-w-md text-xs leading-relaxed md:text-sm ${
              tone === "detail" ? "text-ivory/80" : "text-walnut/80"
            }`}
          >
            {note}
          </span>
        ) : null}
      </figcaption>
      {caption ? (
        <span className="absolute bottom-4 right-4 max-w-[10rem] border-t border-ivory/70 pt-2 text-right text-xs text-ivory">
          {caption}
        </span>
      ) : null}
    </figure>
  );
}
