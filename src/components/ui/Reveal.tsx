"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variantes: Variants = {
  oculto: (d: "up" | "down" | "left" | "right") => ({
    opacity: 0,
    y: d === "up" ? 34 : d === "down" ? -34 : 0,
    x: d === "left" ? 34 : d === "right" ? -34 : 0,
    filter: "blur(6px)",
  }),
  visivel: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Revela o conteúdo quando ele entra na viewport. Anima uma única vez. */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  return (
    <motion.div
      custom={direction}
      variants={variantes}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Mesma revelação, aplicada em cascata aos filhos diretos. */
export function RevealStagger({
  children,
  className = "",
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ visivel: { transition: { staggerChildren: gap } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={variantes} custom="up" className={className}>
      {children}
    </motion.div>
  );
}
