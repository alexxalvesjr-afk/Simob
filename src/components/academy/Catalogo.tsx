"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ChartNoAxesColumn, Search, ArrowRight } from "lucide-react";
import { cursos, categoriasCurso } from "@/content/paginas";
import { whatsappLink } from "@/content/site";

const selos = {
  "Mais vendido": "bg-gold-500 text-anchor",
  Novo: "bg-emerald-500 text-anchor",
  Destaque: "bg-sky-500 text-anchor",
} as const;

/** Catálogo com busca e filtro por categoria — instantâneo, sem recarregar. */
export default function Catalogo() {
  const [categoria, setCategoria] = useState<string>("Todos");
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return cursos.filter((c) => {
      const okCategoria = categoria === "Todos" || c.categoria === categoria;
      const okBusca =
        !termo ||
        c.nome.toLowerCase().includes(termo) ||
        c.desc.toLowerCase().includes(termo);
      return okCategoria && okBusca;
    });
  }, [categoria, busca]);

  return (
    <div>
      {/* Busca */}
      <div className="relative mb-6">
        <Search
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
        />
        <label htmlFor="busca-curso" className="sr-only">
          Buscar curso
        </label>
        <input
          id="busca-curso"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar curso…"
          className="w-full rounded-xl border border-ink-900/10 bg-paper py-3.5 pl-11 pr-4 text-ink-900 placeholder:text-ink-300 transition-colors focus:border-gold-400/60 focus:outline-none"
        />
      </div>

      {/* Filtros */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categoriasCurso.map((c) => {
          const ativo = categoria === c;
          return (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                ativo ? "text-anchor" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              {ativo && (
                <motion.span
                  layoutId="filtro-ativo"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold-300 to-gold-500"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {!ativo && (
                <span className="absolute inset-0 -z-10 rounded-full border border-ink-900/10" />
              )}
              {c}
            </button>
          );
        })}
      </div>

      {/* Grade */}
      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtrados.map((c) => (
            <motion.li
              key={c.nome}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-paper-2 transition-all duration-400 hover:border-gold-600/40 hover:bg-paper-2">
                {/* Faixa superior no lugar de foto — vetorial e leve */}
                <div className="relative h-28 overflow-hidden border-b border-ink-900/8 bg-gradient-to-br from-gold-500/12 via-paper-3 to-paper-4">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        "radial-gradient(14rem 9rem at 78% -20%, rgba(212,160,23,.28), transparent 68%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-35"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(212,160,23,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,.09) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
                    }}
                  />
                  {c.selo && (
                    <span
                      className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider ${selos[c.selo]}`}
                    >
                      {c.selo}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {c.categoria}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink-900">
                    {c.nome}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {c.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-4 text-xs text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {c.carga}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ChartNoAxesColumn size={13} /> {c.nivel}
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-between border-t border-ink-900/8 pt-5">
                    <span>
                      {c.de && (
                        <span className="mr-2 text-sm text-ink-300 line-through">
                          {c.de}
                        </span>
                      )}
                      <span className="text-gold-gradient font-display text-xl font-bold">
                        {c.preco}
                      </span>
                    </span>

                    <a
                      href={whatsappLink(`Olá! Quero me matricular no curso: ${c.nome}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-600/40 px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-500/10"
                    >
                      Matricular
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtrados.length === 0 && (
        <p className="py-16 text-center text-ink-400">
          Nenhum curso encontrado. Tente outro termo ou fale com a gente no WhatsApp.
        </p>
      )}
    </div>
  );
}
