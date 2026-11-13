export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5 20.5 6v6c0 5.1-3.6 8.9-8.5 9.5C7.1 20.9 3.5 17.1 3.5 12V6L12 2.5Z"
        fill="currentColor"
      />
      <path
        d="m8.5 12.2 2.4 2.4 4.6-4.9"
        stroke="var(--background)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="size-6 text-foreground" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        ProfileTrail
      </span>
    </span>
  );
}
