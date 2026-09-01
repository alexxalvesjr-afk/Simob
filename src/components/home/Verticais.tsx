"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Briefcase, Gavel, HeartPulse } from "lucide-react";
import { verticais } from "@/content/site";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";

const icones = {
  academy: GraduationCap,
  consultoria: Briefcase,
  leiloes: Gavel,
  psicologia: HeartPulse,
} as const;

/**
 * As outras quatro verticais.
 *
 * O SiMoB DOC saiu daqui e ganhou seção própria logo acima: a reunião
 * apontou que 70% do faturamento é despachante e o site dividia a atenção
 * igualmente entre as cinco. Aqui elas aparecem como o que são — o resto
 * do grupo, para quem já chegou pela documentação.
 */
export default function Verticais() {
  const outras = verticais.filter((v) => v.id !== "doc");

  return (
    <Section id="verticais">
      <SectionHead
        eyebrow="Além da documentação"
        titulo="O grupo resolve"
        destaque="o resto também."
        sub="Quem chega pela documentação costuma precisar de mais alguma coisa depois. Estas quatro frentes existem porque os nossos clientes pediram."
        centro
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {outras.map((v, i) => {
          const Icone = icones[v.id as keyof typeof icones];
          return (
            <Reveal key={v.id} delay={i * 0.08}>
              <Link
                href={v.slug}
                className="group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-ink-900/8 bg-paper-2 p-7 transition-all duration-400 hover:-translate-y-0.5 hover:border-gold-500/40"
              >
                {/* Fio da cor da vertical, revelado no hover */}
                <span
                  className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ background: v.cor }}
                />

                <span
                  className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-400 group-hover:scale-110"
                  style={{
                    borderColor: `${v.cor}40`,
                    backgroundColor: `${v.cor}18`,
                    color: v.cor,
                  }}
                >
                  <Icone size={21} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    {v.eyebrow}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink-900">
                    {v.nome}
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-medium leading-snug text-accent">
                    {v.headline}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {v.descricao}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {v.cta}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
