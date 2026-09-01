"use client";

import Link from "next/link";
import { Clock, ArrowRight, CircleHelp } from "lucide-react";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";
import { servicosDoc, servicosExplicados, whatsappLink } from "@/content/site";
import { useOrigem, etiquetaOrigem } from "@/lib/origem";

/**
 * Despachante em primeiro plano.
 *
 * A reunião foi direta: 70% do faturamento vem de despachante, e o site
 * dividia a atenção igualmente entre as cinco verticais. Esta seção sobe
 * para logo depois do herói e passa a ser o corpo principal da home; as
 * outras verticais viram o "e ainda tem" mais abaixo.
 */
export default function Despachante() {
  const origem = useOrigem();

  return (
    <Section id="despachante">
      <SectionHead
        eyebrow="SiMoB DOC · o que mais fazemos"
        titulo="Documentação veicular,"
        destaque="do início ao fim."
        sub="Cada serviço com o prazo declarado antes de você fechar. Toque em qualquer um para pedir orçamento pelo WhatsApp."
      />

      {/* Grade de serviços */}
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {servicosDoc.map((s, i) => (
          <Reveal key={s.nome} delay={Math.min(i, 8) * 0.04}>
            <a
              href={whatsappLink(
                `Olá! Quero um orçamento para: ${s.nome}.${etiquetaOrigem(origem)}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center justify-between gap-4 rounded-xl border border-ink-900/8 bg-paper-2 px-5 py-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-gold-500/45"
            >
              <span className="font-medium leading-snug text-ink-800">{s.nome}</span>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500/12 px-2.5 py-1 text-[0.7rem] font-semibold text-accent">
                <Clock size={11} />
                {s.prazo}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/*
        Os dois serviços que o balcão explica todo dia. Estavam na lista sem
        contexto — quem não sabe o que é gravame não clica em "baixa de gravame".
      */}
      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {servicosExplicados.map((s, i) => (
          <Reveal key={s.nome} delay={i * 0.1}>
            <article className="h-full rounded-2xl border border-ink-900/8 bg-paper-2 p-7 sm:p-8">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <CircleHelp size={14} />
                O que é
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink-900">
                {s.nome}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-500">{s.oQueE}</p>
              <p className="mt-4 leading-relaxed text-ink-500">{s.porQue}</p>

              <p className="mt-5 inline-flex rounded-full bg-gold-500/12 px-3.5 py-1.5 text-xs font-semibold text-accent">
                {s.urgencia}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 flex justify-center">
          <Link
            href="/doc"
            className="group inline-flex items-center gap-2 rounded-full border border-gold-600/40 px-7 py-3.5 font-semibold text-accent transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-500/10"
          >
            Ver tudo sobre documentação
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
