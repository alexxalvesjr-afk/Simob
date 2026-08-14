"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, LayoutDashboard } from "lucide-react";
import Logo from "./Logo";
import { navegacao, whatsappLink } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar e trava o scroll enquanto ele estiver aberto
  useEffect(() => setAberto(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink-900/10 bg-paper backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Link href="/" className="group shrink-0" aria-label="Grupo SiMoB — início">
            <Logo className="h-11 w-auto transition-transform duration-500 group-hover:scale-[1.04]" />
          </Link>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navegacao.map((item) => {
              const ativo = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      ativo
                        ? "text-gold-600"
                        : "text-ink-500 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                    {ativo && (
                      <motion.span
                        layoutId="nav-ativo"
                        className="absolute inset-0 -z-10 rounded-full bg-gold-500/12 ring-1 ring-gold-500/25"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/gestao"
              className="flex items-center gap-2 rounded-full border border-gold-600/40 px-4 py-2 text-sm font-medium text-gold-700 transition-all duration-300 hover:border-gold-400/60 hover:bg-gold-500/10"
            >
              <LayoutDashboard size={15} />
              Área do cliente
            </Link>
            <a
              href={whatsappLink("Olá! Vim pelo site e preciso de ajuda com documentação veicular.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-gold-sm transition-all duration-300 hover:shadow-gold"
            >
              <span className="relative z-10">Falar agora</span>
              <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Gatilho mobile */}
          <button
            onClick={() => setAberto((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-600/30 text-gold-700 lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            {aberto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Painel mobile */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-paper backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-6 pb-16 pt-24">
              <ul className="space-y-1">
                {navegacao.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between border-b border-ink-900/8 py-4"
                    >
                      <span>
                        <span className="block font-display text-2xl font-semibold text-ink-900">
                          {item.label}
                        </span>
                        <span className="text-sm text-ink-400">{item.desc}</span>
                      </span>
                      <ArrowRight size={18} className="text-gold-500" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                href={whatsappLink("Olá! Vim pelo site do Grupo SiMoB.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 py-4 font-semibold text-ink-900"
              >
                Falar no WhatsApp <ArrowRight size={17} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
