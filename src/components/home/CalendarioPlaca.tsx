"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, TriangleAlert, MessageCircle, ExternalLink } from "lucide-react";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";
import { calendarioLicenciamento as cal, whatsappLink } from "@/content/site";
import { useOrigem, etiquetaOrigem } from "@/lib/origem";

/**
 * "Qual o final da sua placa?"
 *
 * Saiu direto da reunião: a cada mês vence um final de placa, e a ideia era
 * transformar isso em campanha recorrente. Aqui vira ferramenta — a pessoa
 * toca no próprio final e descobre o mês, com o WhatsApp já preenchido.
 *
 * Também é isca de busca: "licenciamento final 3 bahia" é pesquisa real,
 * e esta seção responde exatamente isso.
 */
export default function CalendarioPlaca() {
  const [final, setFinal] = useState<string | null>(null);
  const origem = useOrigem();
  const prazo = cal.prazos.find((p) => p.final === final);

  return (
    <Section className="border-y border-ink-900/8 bg-paper-2">
      <SectionHead
        eyebrow={`Licenciamento ${cal.ano} · ${cal.estado}`}
        titulo="Qual o final da"
        destaque="sua placa?"
        sub="O mês do seu licenciamento depende do último número da placa. Toque no seu para ver o prazo — e resolver antes de virar multa."
        centro
      />

      {/* Teclado de finais */}
      <Reveal delay={0.12}>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-5 gap-2.5 sm:gap-3">
          {cal.prazos.map((p) => {
            const ativo = final === p.final;
            return (
              <button
                key={p.final}
                onClick={() => setFinal(ativo ? null : p.final)}
                aria-pressed={ativo}
                aria-label={`Placa com final ${p.final}`}
                className={`group relative flex aspect-square items-center justify-center rounded-2xl border font-display text-2xl font-bold transition-all duration-300 sm:text-3xl ${
                  ativo
                    ? "border-gold-500 bg-gradient-to-br from-gold-300 to-gold-500 text-anchor shadow-gold"
                    : "border-ink-900/10 bg-paper text-ink-900 hover:-translate-y-0.5 hover:border-gold-500/50"
                }`}
              >
                {p.final}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Resultado */}
      <AnimatePresence mode="wait">
        {prazo && (
          <motion.div
            key={prazo.final}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl"
          >
            <div className="glass rounded-2xl p-7 text-center sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/12 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                <CalendarDays size={14} />
                Placa com final {prazo.final}
              </span>

              <p className="mt-5 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Vence em{" "}
                <span className="text-gold-gradient">{prazo.mes}</span>
              </p>
              <p className="mt-2 text-ink-500">
                Prazo final: {prazo.limite}/{cal.ano}
              </p>

              <a
                href={whatsappLink(
                  `Olá! Minha placa termina em ${prazo.final} e o licenciamento vence em ${prazo.mes}. Quero resolver com vocês.${etiquetaOrigem(origem)}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-signal-whats px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                <MessageCircle size={18} />
                Quero resolver o meu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*
        Aviso obrigatório enquanto o calendário não for conferido na fonte
        oficial. Prazo errado publicado faz alguém perder o vencimento.
      */}
      {!cal.conferido && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-xl border border-gold-600/30 bg-gold-500/8 px-5 py-4 text-sm leading-relaxed text-ink-500">
            <TriangleAlert size={17} className="mt-0.5 shrink-0 text-accent" />
            <span>
              Datas de referência. O calendário oficial é republicado a cada ano —
              confirme no{" "}
              <a
                href={cal.fonte}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-accent underline underline-offset-2"
              >
                DETRAN-BA <ExternalLink size={12} />
              </a>{" "}
              ou fale com a gente para confirmar o seu prazo.
            </span>
          </p>
        </Reveal>
      )}
    </Section>
  );
}
