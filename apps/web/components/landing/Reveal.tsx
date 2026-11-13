"use client";

import { motion, type Variants } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
