"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

export const CHAVE_TEMA = "simob-tema";
export type Tema = "claro" | "escuro";

/**
 * Alternador de tema.
 *
 * O tema é aplicado como data-theme no <html> por um script inline que roda
 * antes da primeira pintura (ver layout.tsx) — sem ele a página aparece no
 * tema errado por um quadro. Aqui só lemos o que já está aplicado.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [tema, setTema] = useState<Tema>("escuro");
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const atual = document.documentElement.getAttribute("data-theme");
    setTema(atual === "claro" ? "claro" : "escuro");
    setMontado(true);
  }, []);

  function alternar() {
    const novo: Tema = tema === "escuro" ? "claro" : "escuro";
    setTema(novo);
    document.documentElement.setAttribute("data-theme", novo);
    try {
      localStorage.setItem(CHAVE_TEMA, novo);
    } catch {
      /* navegação privada: o tema vale só para esta visita */
    }
  }

  const escuro = tema === "escuro";

  return (
    <button
      onClick={alternar}
      aria-label={escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      title={escuro ? "Tema claro" : "Tema escuro"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/30 text-accent transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-500/10 ${className}`}
    >
      {/* Antes de montar não sabemos o tema real: evita trocar o ícone na hidratação */}
      {montado && (
        <motion.span
          key={tema}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex"
        >
          {escuro ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      )}
    </button>
  );
}
