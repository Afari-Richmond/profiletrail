import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#organizations", label: "For Organizations" },
  { href: "#individuals", label: "For Individuals" },
  { href: "#recruiters", label: "For Recruiters" },
  { href: "#security", label: "Security" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="ProfileTrail home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Button
          render={<Link href="/register" />}
          nativeButton={false}
          className="h-10 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:bg-primary/85 hover:scale-[1.03] active:scale-[0.98]"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
