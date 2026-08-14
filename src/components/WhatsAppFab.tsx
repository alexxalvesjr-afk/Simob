"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink, empresa } from "@/content/site";

/**
 * Botão flutuante de WhatsApp com convite que aparece uma vez.
 * O WhatsApp é o canal principal desse público — merece presença permanente.
 */
export default function WhatsAppFab() {
  const [visivel, setVisivel] = useState(false);
  const [convite, setConvite] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 400);
    window.addEventListener("scroll", aoRolar, { passive: true });

    const t = setTimeout(() => setConvite(true), 9000);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-6 right-5 z-50 flex items-end gap-3 sm:bottom-8 sm:right-8"
        >
          <AnimatePresence>
            {convite && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="glass-strong relative mb-1 hidden max-w-[15rem] rounded-2xl px-4 py-3 sm:block"
              >
                <button
                  onClick={() => setConvite(false)}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-paper-3 text-ink-500"
                  aria-label="Fechar convite"
                >
                  <X size={12} />
                </button>
                <p className="text-sm leading-snug text-ink-800">
                  Ficou com dúvida? Fale direto com um despachante.
                </p>
                <p className="mt-1 text-xs text-ink-400">
                  {empresa.contato.whatsappLabel}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappLink("Olá! Vim pelo site do Grupo SiMoB e queria tirar uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-signal-whats shadow-[0_10px_36px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110"
            aria-label="Conversar no WhatsApp"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-signal-whats/35 [animation-duration:2.8s]" />
            <MessageCircle size={25} className="relative z-10 text-white" fill="white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
