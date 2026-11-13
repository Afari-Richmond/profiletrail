"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

function CredentialCard() {
  return (
    <div className="w-[320px] rounded-2xl border border-white/10 bg-panel-foreground/5 p-5 shadow-2xl backdrop-blur-sm sm:w-[360px]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-panel-foreground/60">Issued by</p>
          <p className="font-display text-base font-medium text-panel-foreground">
            Accra Logistics Ltd.
          </p>
        </div>
        <span className="rounded-full bg-accent/20 px-2.5 py-1 text-[11px] font-medium text-accent">
          VERIFIED
        </span>
      </div>

      <div className="mt-5 space-y-1">
        <p className="text-lg font-medium text-panel-foreground">
          Software Engineer
        </p>
        <p className="text-sm text-panel-foreground/60">
          Engineering · Full-time · Accra, GH
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-panel-foreground/60">
        <span>Oct 2025 — Present</span>
        <span>Issued Nov 2025</span>
      </div>
    </div>
  );
}

function VerificationCard() {
  const checks = [
    "Signature verified",
    "Issuer verified",
    "Credential active",
  ];

  return (
    <div className="w-[280px] rounded-2xl border border-white/10 bg-background p-5 shadow-2xl sm:w-[300px]">
      <div className="flex items-center gap-2">
        <ShieldCheck className="size-5 text-accent" strokeWidth={2} />
        <p className="font-display text-sm font-medium text-foreground">
          Verification Result
        </p>
      </div>
      <ul className="mt-4 space-y-2.5">
        {checks.map((check, i) => (
          <motion.li
            key={check}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <CheckCircle2 className="size-4 shrink-0 text-accent" />
            {check}
          </motion.li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-secondary px-3 py-2 text-center text-xs font-medium text-secondary-foreground">
        Overall status: VALID
      </div>
    </div>
  );
}

export function ProductPanel() {
  return (
    <section className="relative overflow-hidden bg-panel py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl justify-center px-6">
        <div className="relative flex w-full max-w-2xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: -3,
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.7 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              },
            }}
            className="sm:-translate-x-10"
          >
            <CredentialCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            whileInView={{
              opacity: 1,
              y: [0, 10, 0],
              rotate: 2,
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.7, delay: 0.25 },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.95,
              },
            }}
            className="absolute top-16 left-1/2 sm:top-10 sm:left-auto sm:translate-x-24"
          >
            <VerificationCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
