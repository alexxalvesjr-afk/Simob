"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShieldCheck, FileText, Clock, TriangleAlert } from "lucide-react";

/**
 * Console de consulta de placa — o visual do herói.
 *
 * Resolve dois problemas do site atual de uma vez:
 *  1. o herói tinha um vazio enorme à direita, sem nenhum visual de produto;
 *  2. a consulta de placa (a isca gratuita mais forte da empresa) estava
 *     escondida numa página interna.
 *
 * Aqui ela é o próprio visual: a placa Mercosul é escaneada e o resultado
 * aparece em cascata. Demonstra o produto sem precisar de imagem externa.
 */

const RESULTADO = [
  { icone: FileText, rotulo: "Licenciamento 2026", valor: "Em dia", ok: true },
  { icone: TriangleAlert, rotulo: "Multas abertas", valor: "1 encontrada", ok: false },
  { icone: ShieldCheck, rotulo: "Restrições", valor: "Nenhuma", ok: true },
  { icone: Clock, rotulo: "IPVA — 4ª cota", valor: "Vence em 12 dias", ok: false },
];

export default function PlacaConsole() {
  const [placa, setPlaca] = useState("");
  const [fase, setFase] = useState<"repouso" | "lendo" | "pronto">("repouso");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Demonstração automática: digita uma placa sozinha na primeira visita.
  useEffect(() => {
    const alvo = "BRA2A26";
    const push = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));

    alvo.split("").forEach((_, i) => {
      push(() => setPlaca(alvo.slice(0, i + 1)), 1200 + i * 110);
    });
    push(() => setFase("lendo"), 1200 + alvo.length * 110 + 350);
    push(() => setFase("pronto"), 1200 + alvo.length * 110 + 2100);

    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  function consultar(e: React.FormEvent) {
    e.preventDefault();
    if (placa.replace(/[^A-Z0-9]/gi, "").length < 7) return;
    setFase("lendo");
    setTimeout(() => setFase("pronto"), 1700);
  }

  return (
    <div className="relative">
      {/* Halo dourado por trás do console */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gold-500/12 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative overflow-hidden rounded-[1.75rem] p-6 shadow-depth sm:p-8"
      >
        {/* Cabeçalho do console */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-500 animate-pulse-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Consulta gratuita
            </span>
          </div>
          <span className="rounded-full bg-ink-600/70 px-2.5 py-1 text-[0.65rem] font-medium text-cream-300/70">
            base DETRAN-BA
          </span>
        </div>

        {/* Placa padrão Mercosul */}
        <div className="relative mx-auto w-full max-w-[19rem]">
          <div className="relative overflow-hidden rounded-xl border-[3px] border-ink-400 bg-gradient-to-b from-white to-cream-200 shadow-lg">
            {/* Tarja azul superior */}
            <div className="flex items-center justify-between bg-[#1c3faa] px-2.5 py-1">
              <span className="text-[0.5rem] font-bold text-white/85">MERCOSUL</span>
              <span className="text-[0.55rem] font-bold tracking-wider text-white">BRASIL</span>
              <span className="h-2.5 w-3.5 rounded-[1px] bg-gradient-to-b from-[#009c3b] via-[#ffdf00] to-[#002776]" />
            </div>

            {/* Caracteres */}
            <div className="flex h-[4.2rem] items-center justify-center">
              <span className="font-display text-[2.6rem] font-bold leading-none tracking-[0.08em] text-ink-800">
                {placa || " "}
                {fase === "repouso" && placa.length < 7 && (
                  <span className="ml-0.5 inline-block h-9 w-0.5 animate-pulse bg-ink-800 align-middle" />
                )}
              </span>
            </div>

            {/* Linha de leitura */}
            {fase === "lendo" && (
              <span className="pointer-events-none absolute inset-x-0 top-0 h-14 animate-scan bg-gradient-to-b from-transparent via-gold-400/55 to-transparent" />
            )}
          </div>
        </div>

        {/* Campo de consulta */}
        <form onSubmit={consultar} className="mt-6 flex gap-2">
          <label htmlFor="placa-hero" className="sr-only">
            Placa do veículo
          </label>
          <input
            id="placa-hero"
            value={placa}
            onChange={(e) => {
              setPlaca(e.target.value.toUpperCase().slice(0, 7));
              setFase("repouso");
            }}
            placeholder="ABC1D23"
            maxLength={7}
            className="min-w-0 flex-1 rounded-xl border border-gold-500/20 bg-ink-800/70 px-4 py-3 font-display tracking-[0.2em] text-cream-50 placeholder:tracking-normal placeholder:text-cream-300/35 focus:border-gold-400/60 focus:outline-none"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-5 font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.03]"
          >
            <Search size={17} />
            <span className="hidden sm:inline">Consultar</span>
          </button>
        </form>

        {/* Resultado */}
        <AnimatePresence mode="wait">
          {fase === "pronto" && (
            <motion.ul
              key="resultado"
              initial="oculto"
              animate="visivel"
              exit={{ opacity: 0 }}
              variants={{ visivel: { transition: { staggerChildren: 0.08 } } }}
              className="mt-5 space-y-2"
            >
              {RESULTADO.map(({ icone: Icone, rotulo, valor, ok }) => (
                <motion.li
                  key={rotulo}
                  variants={{
                    oculto: { opacity: 0, x: -14 },
                    visivel: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center justify-between rounded-xl border border-gold-500/10 bg-ink-800/50 px-4 py-2.5"
                >
                  <span className="flex items-center gap-2.5 text-sm text-cream-300/80">
                    <Icone size={15} className={ok ? "text-emerald-400" : "text-gold-400"} />
                    {rotulo}
                  </span>
                  <span
                    className={`text-sm font-semibold ${ok ? "text-emerald-300" : "text-gold-300"}`}
                  >
                    {valor}
                  </span>
                </motion.li>
              ))}

              <motion.p
                variants={{ oculto: { opacity: 0 }, visivel: { opacity: 1 } }}
                className="pt-1 text-center text-xs text-cream-300/45"
              >
                Demonstração ilustrativa · a consulta real usa a base oficial
              </motion.p>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Selo flutuante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        className="absolute -bottom-7 -left-3 hidden items-center gap-2.5 rounded-2xl border border-gold-500/30 bg-ink-700 px-4 py-3 shadow-depth sm:flex lg:-left-11"
      >
        <ShieldCheck size={19} className="text-gold-400" />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-cream-50">Resposta em 48h</p>
          <p className="text-[0.7rem] text-cream-300/60">prazo médio dos processos</p>
        </div>
      </motion.div>
    </div>
  );
}
