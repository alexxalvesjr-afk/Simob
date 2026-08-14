"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Fio dourado no topo que mostra o quanto da página já foi lido. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const largura = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: largura }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500"
      aria-hidden="true"
    />
  );
}
