"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import PlacaConsole from "./PlacaConsole";
import { whatsappLink, credenciais } from "@/content/site";

const surgir = {
  oculto: { opacity: 0, y: 26, filter: "blur(8px)" },
  visivel: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
      {/* Camadas de atmosfera */}
      <div className="mesh-gold absolute inset-0 -z-20" aria-hidden />
      <div className="grid-tech absolute inset-0 -z-10 opacity-70" aria-hidden />

      {/* Brilhos que respiram */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.62, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-gold-500/18 blur-[130px]"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.28, 0.5, 0.28], scale: [1.08, 1, 1.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -right-32 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-600/14 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ---------- Coluna de texto ---------- */}
          <motion.div
            initial="oculto"
            animate="visivel"
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Selo de origem */}
            <motion.div
              variants={surgir}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4"
            >
              <span className="whitespace-nowrap rounded-full bg-gold-500/20 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold-700">
                Salvador · BA
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap text-xs text-ink-600">
                <Star size={12} className="shrink-0 fill-gold-400 text-gold-600" />
                Credenciado DETRAN-BA
                <span className="hidden sm:inline">&nbsp;há mais de 10 anos</span>
              </span>
            </motion.div>

            {/* Manchete */}
            <motion.h1
              variants={surgir}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 text-[2.6rem] font-bold leading-[1.03] tracking-[-0.035em] text-ink-900 sm:text-6xl lg:text-[4.1rem]"
            >
              Sua tranquilidade começa quando a{" "}
              <span className="text-gold-shimmer">burocracia acaba.</span>
            </motion.h1>

            {/* Apoio */}
            <motion.p
              variants={surgir}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl"
            >
              Documentação, capacitação, consultoria, leilões e saúde mental para
              o setor automotivo. Cinco verticais, um só grupo — e um time que
              resolve o seu processo{" "}
              <strong className="font-semibold text-ink-900">em até 48 horas</strong>,
              sem você pisar no DETRAN.
            </motion.p>

            {/* Ações */}
            <motion.div
              variants={surgir}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site e preciso resolver a documentação do meu veículo.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 px-8 py-4 font-semibold text-ink-900 shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-lg"
              >
                <MessageCircle size={19} className="relative z-10" />
                <span className="relative z-10">Resolver meu documento</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
              </a>

              <a
                href="#verticais"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold-600/40 px-8 py-4 font-semibold text-gold-700 transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-500/10"
              >
                Conhecer o grupo
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Credenciais */}
            <motion.ul
              variants={surgir}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5"
            >
              {credenciais.slice(0, 3).map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-ink-400">
                  <span className="h-1 w-1 rounded-full bg-gold-500" />
                  {c}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- Console de consulta ---------- */}
          <div className="lg:pl-6">
            <PlacaConsole />
          </div>
        </div>
      </div>

      {/* Fio dourado que fecha o herói */}
      <div className="hairline mx-auto mt-24 max-w-7xl" />
    </section>
  );
}
