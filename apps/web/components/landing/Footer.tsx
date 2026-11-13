import Link from "next/link";
import { LogoMark } from "./Logo";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "For Organizations", href: "#organizations" },
      { label: "For Individuals", href: "#individuals" },
      { label: "For Recruiters", href: "#recruiters" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Security & Trust", href: "#security" },
      { label: "About", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-10">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="text-sm text-muted-foreground">
                  {column.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-foreground hover:text-muted-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <LogoMark className="hidden size-7 shrink-0 text-foreground sm:block" />
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 ProfileTrail. All rights reserved.</p>
          <p>Employment credential infrastructure — not a background check service.</p>
        </div>
      </div>
    </footer>
  );
}
