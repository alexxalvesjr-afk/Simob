"use client";

import Link from "next/link";
import { ArrowUpRight, Check, FileText, GraduationCap, Briefcase, Gavel, HeartPulse } from "lucide-react";
import { verticais } from "@/content/site";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";

const icones = {
  doc: FileText,
  academy: GraduationCap,
  consultoria: Briefcase,
  leiloes: Gavel,
  psicologia: HeartPulse,
} as const;

export default function Verticais() {
  const [principal, ...demais] = verticais;
  const IconePrincipal = icones[principal.id as keyof typeof icones];

  return (
    <Section id="verticais">
      <SectionHead
        eyebrow="Nossas soluções"
        titulo="Cinco verticais."
        destaque="Uma só responsabilidade."
        sub="Cada uma nasceu de um problema real que os nossos clientes traziam. Juntas, cobrem o ciclo inteiro de um veículo — e de quem vive dele."
      />

      <div className="mt-16 grid gap-5 lg:grid-cols-12">
        {/* ---- Card em destaque: SiMoB DOC ---- */}
        <Reveal className="lg:col-span-7">
          <Link
            href={principal.slug}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-gold-500/25 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-8 transition-all duration-500 hover:border-gold-400/50 sm:p-10"
          >
            {/* Malha decorativa */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(28rem 18rem at 88% -10%, rgba(212,160,23,0.22), transparent 65%)",
              }}
            />
            {/* Brilho no hover */}
            <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ boxShadow: "inset 0 0 60px rgba(212,160,23,0.12)" }}
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/12 text-gold-300">
                  <IconePrincipal size={25} />
                </span>
                <span className="rounded-full border border-gold-400/40 bg-gold-500/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold-200">
                  Mais procurado
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {principal.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-cream-50 sm:text-4xl">
                {principal.nome}
              </h3>
              <p className="mt-3 max-w-md text-xl font-medium leading-snug text-gold-100/90">
                {principal.headline}
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-cream-300/70">
                {principal.descricao}
              </p>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {principal.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-cream-200/85">
                    <Check size={15} className="shrink-0 text-gold-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <span className="relative mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-ink-900 transition-transform duration-300 group-hover:translate-x-1">
              {principal.cta}
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </Reveal>

        {/* ---- Demais verticais ---- */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {demais.map((v, i) => {
            const Icone = icones[v.id as keyof typeof icones];
            return (
              <Reveal key={v.id} delay={0.08 + i * 0.08}>
                <Link
                  href={v.slug}
                  className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-gold-500/12 bg-ink-800/45 p-6 transition-all duration-400 hover:border-gold-500/30 hover:bg-ink-700/55"
                >
                  {/* Barra de cor da vertical */}
                  <span
                    className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                    style={{ background: v.cor }}
                  />

                  <span
                    className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-400"
                    style={{
                      borderColor: `${v.cor}33`,
                      backgroundColor: `${v.cor}14`,
                      color: v.cor,
                    }}
                  >
                    <Icone size={19} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream-300/45">
                      {v.eyebrow}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-cream-50">
                      {v.nome}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream-300/65">
                      {v.descricao}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
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
      </div>
    </Section>
  );
}
