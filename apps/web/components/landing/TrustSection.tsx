"use client";

import Link from "next/link";
import { ArrowRight, KeyRound } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const BADGES = [
  "Ed25519 signatures",
  "Argon2id password hashing",
  "Ghana Data Protection Act 843",
  "Full audit logging",
];

export function TrustSection() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[320px_1fr] md:gap-14 md:p-12">
        <div className="relative flex aspect-square items-center justify-center rounded-2xl bg-secondary">
          <motion.div
            className="absolute size-44 rounded-full border border-dashed border-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute size-28 rounded-full border border-dashed border-border"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="flex size-16 items-center justify-center rounded-2xl bg-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <KeyRound className="size-7 text-primary-foreground" />
          </motion.div>
          <ul className="absolute top-6 left-6 space-y-1 text-left text-xs text-muted-foreground">
            {BADGES.slice(0, 2).map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
          <ul className="absolute right-6 bottom-6 space-y-1 text-right text-xs text-muted-foreground">
            {BADGES.slice(2).map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Security and trust
          </p>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance text-foreground md:text-4xl">
            A valid signature isn&apos;t the same as a verified employer
          </h3>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Every credential is cryptographically signed and independently
            verifiable — but a signature only proves the record wasn&apos;t
            altered after issuance. We separately track whether the issuing
            organization itself has been reviewed, so recruiters always see
            both.
          </p>
          <Link
            href="#security"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Explore security &amp; trust
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
