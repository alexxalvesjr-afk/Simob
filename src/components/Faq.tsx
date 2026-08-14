"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Section, { SectionHead } from "./ui/Section";
import Reveal from "./ui/Reveal";

type Item = { p: string; r: string };

export default function Faq({
  itens,
  eyebrow = "Dúvidas frequentes",
  titulo = "Perguntas que a gente",
  destaque = "ouve todo dia.",
}: {
  itens: readonly Item[];
  eyebrow?: string;
  titulo?: string;
  destaque?: string;
}) {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <Section>
      <SectionHead eyebrow={eyebrow} titulo={titulo} destaque={destaque} centro />

      <div className="mx-auto mt-14 max-w-3xl space-y-3">
        {itens.map((item, i) => {
          const ativo = aberto === i;
          return (
            <Reveal key={item.p} delay={i * 0.05}>
              <div
                className={`overflow-hidden rounded-2xl border transition-colors duration-400 ${
                  ativo
                    ? "border-gold-600/40 bg-paper"
                    : "border-ink-900/8 bg-paper-2 hover:border-gold-600/30"
                }`}
              >
                <button
                  onClick={() => setAberto(ativo ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={ativo}
                >
                  <span
                    className={`font-display text-lg font-semibold transition-colors ${
                      ativo ? "text-gold-700" : "text-ink-900"
                    }`}
                  >
                    {item.p}
                  </span>
                  <motion.span
                    animate={{ rotate: ativo ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-600/30 text-gold-600"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {ativo && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-ink-500">
                        {item.r}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
