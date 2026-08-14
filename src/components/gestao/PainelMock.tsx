"use client";

import { motion } from "motion/react";
import { Bell, Search, TriangleAlert, CircleCheck, Loader } from "lucide-react";

/**
 * Mockup do painel da SiMoB Gestão.
 * Construído em DOM (não imagem) — fica nítido em qualquer tela, pesa quase
 * nada e anima de verdade quando entra na viewport.
 */

const VEICULOS = [
  { placa: "BRA2A26", modelo: "Fiat Strada 2023", status: "Em dia", tom: "ok" },
  { placa: "PJX7F42", modelo: "Renault Master", status: "Vence em 7 dias", tom: "alerta" },
  { placa: "BRAGS44", modelo: "Toyota Corolla", status: "Transferência", tom: "andamento" },
  { placa: "OKL1D09", modelo: "VW Delivery 9.170", status: "Em dia", tom: "ok" },
  { placa: "MZT4B71", modelo: "Hyundai HR", status: "Vence em 21 dias", tom: "alerta" },
];

const tons = {
  ok: { cor: "text-emerald-300", bg: "bg-emerald-500/10", Icone: CircleCheck },
  alerta: { cor: "text-gold-300", bg: "bg-gold-500/12", Icone: TriangleAlert },
  andamento: { cor: "text-sky-300", bg: "bg-sky-500/10", Icone: Loader },
} as const;

const INDICADORES = [
  { n: "42", l: "veículos ativos" },
  { n: "3", l: "vencendo em 30d" },
  { n: "7", l: "OS em andamento" },
  { n: "R$ 8,4k", l: "custo no mês" },
];

export default function PainelMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-full bg-gold-500/12 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong overflow-hidden rounded-[1.6rem] shadow-depth"
      >
        {/* Barra do navegador */}
        <div className="flex items-center gap-3 border-b border-gold-500/12 px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="flex-1 truncate rounded-md bg-ink-800/70 px-3 py-1 text-center text-[0.68rem] text-cream-300/50">
            gestao.gruposimob.com.br/frota
          </span>
          <Bell size={14} className="shrink-0 text-gold-400" />
        </div>

        <div className="p-5 sm:p-6">
          {/* Busca */}
          <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-gold-500/12 bg-ink-800/60 px-4 py-2.5">
            <Search size={15} className="text-cream-300/40" />
            <span className="text-sm text-cream-300/35">Buscar por placa, modelo ou motorista…</span>
          </div>

          {/* Indicadores */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INDICADORES.map((k, i) => (
              <motion.div
                key={k.l}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.09 }}
                className="rounded-xl border border-gold-500/12 bg-ink-800/55 p-3.5"
              >
                <p className="text-gold-gradient font-display text-xl font-bold sm:text-2xl">
                  {k.n}
                </p>
                <p className="mt-0.5 text-[0.65rem] leading-tight text-cream-300/55">
                  {k.l}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Frota */}
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream-300/40">
              Frota
            </p>
            <p className="text-[0.65rem] text-cream-300/35">5 de 42</p>
          </div>

          <ul className="space-y-2">
            {VEICULOS.map((v, i) => {
              const { cor, bg, Icone } = tons[v.tom as keyof typeof tons];
              return (
                <motion.li
                  key={v.placa}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95 + i * 0.08 }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-gold-500/10 bg-ink-800/45 px-3.5 py-2.5 transition-colors hover:border-gold-500/25"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 rounded-md border border-cream-300/25 bg-cream-50 px-2 py-0.5 font-display text-[0.7rem] font-bold tracking-wider text-ink-800">
                      {v.placa}
                    </span>
                    <span className="truncate text-sm text-cream-200/75">{v.modelo}</span>
                  </span>
                  <span
                    className={`flex shrink-0 items-center gap-1.5 rounded-full ${bg} px-2.5 py-1 text-[0.66rem] font-semibold ${cor}`}
                  >
                    <Icone size={11} />
                    {v.status}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      {/* Alerta flutuante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 250, damping: 20 }}
        className="absolute -bottom-8 -left-3 hidden w-[16.5rem] items-start gap-3 rounded-2xl border border-gold-500/30 bg-ink-700 px-4 py-3 shadow-depth sm:flex lg:-left-12"
      >
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
          <Bell size={15} />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-cream-50">
            Licenciamento vence em 7 dias
          </p>
          <p className="mt-0.5 text-[0.7rem] text-cream-300/60">
            PJX7F42 · avisado no WhatsApp
          </p>
        </div>
      </motion.div>
    </div>
  );
}
