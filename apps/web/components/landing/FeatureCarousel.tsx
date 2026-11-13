"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "cn";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type Slide = {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    id: "organizations",
    eyebrow: "For Organizations",
    heading: "Issue employment records your people can actually use",
    description:
      "Create employment records, review them, and issue cryptographically signed credentials — without replacing the letters and processes your HR team already trusts.",
    cta: { label: "Register your organization", href: "/register" },
  },
  {
    id: "individuals",
    eyebrow: "For Individuals",
    heading: "Carry your employment history with you",
    description:
      "Every credential you receive stays in one place. Share what you choose, for as long as you choose, and revoke access whenever you want.",
    cta: { label: "Explore your dashboard", href: "/register" },
  },
  {
    id: "recruiters",
    eyebrow: "For Recruiters",
    heading: "Verify employment without the phone tag",
    description:
      "Open a shared link and see the cryptographic signature, issuer status, and credential status in one view — no account required.",
    cta: { label: "Explore verification", href: "#how-it-works" },
  },
];

function OrganizationVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-border bg-card p-4 shadow-sm">
      <p className="text-xs font-medium text-muted-foreground">
        New employment record
      </p>
      <div className="mt-3 space-y-2">
        <div className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground">
          Kwame Asante
        </div>
        <div className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground">
          Software Engineer
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
          DRAFT
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
          Approve &amp; Issue
        </span>
      </div>
    </div>
  );
}

function IndividualVisual() {
  const rows = [
    { org: "Accra Logistics Ltd.", role: "Software Engineer" },
    { org: "Nova Fintech", role: "Backend Intern" },
  ];
  return (
    <div className="w-full max-w-xs space-y-3">
      {rows.map((row, i) => (
        <div
          key={row.org}
          className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm"
          style={{ marginLeft: i * 12 }}
        >
          <div>
            <p className="text-sm font-medium text-foreground">{row.org}</p>
            <p className="text-xs text-muted-foreground">{row.role}</p>
          </div>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-medium text-accent">
            Active
          </span>
        </div>
      ))}
    </div>
  );
}

function RecruiterVisual() {
  const checks = ["Signature verified", "Issuer verified", "Credential active"];
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
        <Lock className="size-3 text-muted-foreground" />
        <span className="truncate text-[11px] text-muted-foreground">
          profiletrail.live/verify/8f2c…
        </span>
      </div>
      <div className="space-y-2 p-4">
        {checks.map((check) => (
          <div
            key={check}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <CheckCircle2 className="size-4 shrink-0 text-accent" />
            {check}
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS: Record<string, React.ComponentType> = {
  organizations: OrganizationVisual,
  individuals: IndividualVisual,
  recruiters: RecruiterVisual,
};

export function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];
  const Visual = VISUALS[slide.id];

  return (
    <section
      id="organizations"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <p className="text-sm font-medium text-muted-foreground">
              {slide.eyebrow}
            </p>
            <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance text-foreground md:text-4xl">
              {slide.heading}
            </h3>
            <p className="mt-4 max-w-md text-muted-foreground">
              {slide.description}
            </p>
            <Link
              href={slide.cta.href}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground"
            >
              {slide.cta.label}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-10">
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-border bg-secondary/60 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="flex w-full justify-center"
              >
                <Visual />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.eyebrow}`}
                aria-current={i === active}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <span id="individuals" className="sr-only" />
      <span id="recruiters" className="sr-only" />
    </section>
  );
}
