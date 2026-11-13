"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16"
    >
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
        </span>
        Employment Credential Infrastructure
      </motion.div>

      <motion.h1
        variants={item}
        className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl"
      >
        Your professional history.{" "}
        <span className="inline-block">Verified</span> and portable.
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-lg text-muted-foreground"
      >
        ProfileTrail enables organizations to issue verifiable employment
        credentials and gives individuals a secure way to manage and share
        their professional records.
      </motion.p>

      <motion.div variants={item} className="mt-8 flex items-center gap-6">
        <Button
          render={<Link href="/register" />}
          nativeButton={false}
          className="h-11 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:bg-primary/85 hover:scale-[1.03] active:scale-[0.98]"
        >
          Get Started
        </Button>
        <Link
          href="#how-it-works"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground"
        >
          See how it works
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
