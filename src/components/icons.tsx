type IconProps = { className?: string; title?: string };

export function IconSearch({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 16.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19.5c1.8-3.2 4-4.75 6.5-4.75s4.7 1.55 6.5 4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBag({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 8h11l-.7 10.2a1.5 1.5 0 0 1-1.5 1.4H8.7a1.5 1.5 0 0 1-1.5-1.4L6.5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 8V6.8A3 3 0 0 1 12 3.8 3 3 0 0 1 15 6.8V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBookMark({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M16 4.5c-2.2 2-5.4 3.2-8.8 3.4v9.2c3.5-.1 6.8-1.3 8.8-3.4 2 2.1 5.3 3.3 8.8 3.4V7.9C21.4 7.7 18.2 6.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16 4.5v9.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12.2 2.2 16 4.5l3.8-2.3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHeartHands({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18s-6-3.6-6-8a3.2 3.2 0 0 1 5.4-2.2L12 8.2l.6-.4A3.2 3.2 0 0 1 18 10c0 4.4-6 8-6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGem({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 19 9l-7 11.5L5 9l7-5.5Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 9h14M9.2 3.9 12 9l2.8-5.1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconLeaf({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.5 5.5c-6.5-.4-11.8 3.2-12.8 10.2 3.2.4 7.6-1 10.4-4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M6.2 19.2 12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconGift({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="9" width="15" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 9v11M4.5 13h15" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 9c-2.2 0-3.5-1.6-3.5-3S10 4 12 6.5C14 4 15.5 4.5 15.5 6 15.5 7.4 14.2 9 12 9Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function IconTruck({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 7.5h10v9h-10v-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M13.5 10.5h4.2L20 13.2v3.3h-6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17.5" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17" cy="17.5" r="1.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function IconChevron({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9M8.5 4.5 12.5 8 8.5 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
