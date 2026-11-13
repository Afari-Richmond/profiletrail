import { cn } from "cn";
import { Reveal } from "./Reveal";

type StatementSectionProps = {
  eyebrow?: string;
  children: React.ReactNode;
  tone?: "cream" | "dark";
  id?: string;
};

export function StatementSection({
  eyebrow,
  children,
  tone = "cream",
  id,
}: StatementSectionProps) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "px-6 py-24 md:py-32",
        dark ? "bg-panel text-panel-foreground" : "bg-background text-foreground"
      )}
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p
            className={cn(
              "mb-5 text-sm font-medium",
              dark ? "text-panel-foreground/60" : "text-muted-foreground"
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <p className="font-display text-3xl font-medium tracking-tight text-balance md:text-4xl">
          {children}
        </p>
      </Reveal>
    </section>
  );
}
