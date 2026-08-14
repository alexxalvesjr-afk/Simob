"use client";

import { motion } from "motion/react";
import { ArrowRight, Bell, CircleCheck, Loader, TriangleAlert } from "lucide-react";
import Section, { Eyebrow } from "../ui/Section";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { gestao } from "@/content/site";

const FROTA = [
  { placa: "BRA2A26", modelo: "Fiat Strada", status: "Em dia", tom: "ok" },
  { placa: "PJX7F42", modelo: "Renault Master", status: "Licenc. em 7 dias", tom: "alerta" },
  { placa: "BRAGS44", modelo: "Toyota Corolla", status: "Transferência", tom: "andamento" },
  { placa: "OKL1D09", modelo: "VW Delivery", status: "Em dia", tom: "ok" },
];

const tons = {
  ok: { cor: "text-emerald-300", bg: "bg-emerald-500/10", Icone: CircleCheck },
  alerta: { cor: "text-gold-300", bg: "bg-gold-500/12", Icone: TriangleAlert },
  andamento: { cor: "text-sky-300", bg: "bg-sky-500/10", Icone: Loader },
} as const;

/** Chamada do SaaS na home — o produto novo que o grupo está vendendo. */
export default function GestaoTeaser() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(40rem 26rem at 78% 24%, rgba(212,160,23,.13), transparent 66%)",
        }}
        aria-hidden
      />

      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ---- Texto ---- */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold-200">
              Novo · Plataforma
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-5">
              <Eyebrow>SiMoB Gestão</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] text-cream-50 sm:text-5xl">
              A documentação da sua frota inteira{" "}
              <span className="text-gold-gradient">num painel só.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-cream-300/75">
              {gestao.sub}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <ul className="mt-8 space-y-3.5">
              {gestao.recursos.slice(0, 4).map((r) => (
                <li key={r.titulo} className="flex gap-3">
                  <CircleCheck size={19} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>
                    <strong className="font-semibold text-cream-50">{r.titulo}.</strong>{" "}
                    <span className="text-cream-300/70">{r.texto}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/gestao" tamanho="lg">
                Conhecer a plataforma <ArrowRight size={17} />
              </Button>
              <Button href="/gestao#planos" variante="contorno" tamanho="lg">
                Ver planos
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ---- Mockup do painel ---- */}
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gold-500/10 blur-[80px]" />

            <div className="glass-strong overflow-hidden rounded-[1.5rem] shadow-depth">
              {/* Barra do app */}
              <div className="flex items-center justify-between border-b border-gold-500/12 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-xs font-medium text-cream-300/55">
                  gestao.gruposimob.com.br
                </span>
                <Bell size={14} className="text-gold-400" />
              </div>

              <div className="p-5">
                {/* Indicadores */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { n: "42", l: "veículos" },
                    { n: "3", l: "vencendo" },
                    { n: "7", l: "OS ativas" },
                  ].map((k, i) => (
                    <motion.div
                      key={k.l}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="rounded-xl border border-gold-500/12 bg-ink-800/60 p-3.5"
                    >
                      <p className="text-gold-gradient font-display text-2xl font-bold">
                        {k.n}
                      </p>
                      <p className="text-[0.7rem] text-cream-300/55">{k.l}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Lista da frota */}
                <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream-300/40">
                  Frota
                </p>
                <ul className="space-y-2">
                  {FROTA.map((v, i) => {
                    const { cor, bg, Icone } = tons[v.tom as keyof typeof tons];
                    return (
                      <motion.li
                        key={v.placa}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.09 }}
                        className="flex items-center justify-between rounded-xl border border-gold-500/10 bg-ink-800/45 px-3.5 py-2.5"
                      >
                        <span className="flex items-center gap-3">
                          <span className="rounded-md border border-cream-300/25 bg-cream-50 px-2 py-0.5 font-display text-[0.7rem] font-bold tracking-wider text-ink-800">
                            {v.placa}
                          </span>
                          <span className="text-sm text-cream-200/75">{v.modelo}</span>
                        </span>
                        <span
                          className={`flex items-center gap-1.5 rounded-full ${bg} px-2.5 py-1 text-[0.68rem] font-semibold ${cor}`}
                        >
                          <Icone size={12} />
                          {v.status}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
