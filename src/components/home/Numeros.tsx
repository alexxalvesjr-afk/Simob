"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { numeros } from "@/content/site";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";

/** Contador que sobe até o valor quando entra na tela. */
function Contador({ alvo, sufixo }: { alvo: string; sufixo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const naTela = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  const final = parseInt(alvo, 10);

  useEffect(() => {
    if (!naTela) return;

    // Respeita quem prefere menos movimento: mostra o número final direto.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(final);
      return;
    }

    const duracao = 1500;
    const inicio = performance.now();
    let raf = 0;

    const passo = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setN(Math.round(final * eased));
      if (t < 1) raf = requestAnimationFrame(passo);
    };

    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [naTela, final]);

  return (
    <span ref={ref} className="text-gold-gradient">
      {n}
      {sufixo}
    </span>
  );
}

export default function Numeros() {
  return (
    <Section className="border-b border-ink-900/8">
      <SectionHead
        eyebrow="Em números"
        titulo="Dez anos resolvendo o que"
        destaque="ninguém quer resolver."
        sub="Cada número aqui representa um processo que alguém não precisou encarar sozinho."
        centro
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {numeros.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-paper p-7 transition-all duration-500 hover:border-gold-600/40 hover:bg-paper-2">
              {/* Brilho que acompanha o hover */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <p className="font-display text-5xl font-bold leading-none lg:text-[3.4rem]">
                <Contador alvo={item.valor} sufixo={item.sufixo} />
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-ink-900">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
