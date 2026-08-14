"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FileText, GraduationCap, Briefcase, Gavel, HeartPulse } from "lucide-react";
import { verticais } from "@/content/site";
import Section, { Eyebrow } from "../ui/Section";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { whatsappLink } from "@/content/site";

const icones = [FileText, GraduationCap, Briefcase, Gavel, HeartPulse];

/**
 * Órbita do ecossistema — versão animada e interativa do diagrama 360°
 * que existia estático no site atual. Cada satélite reage ao mouse e
 * explica a vertical sem tirar o usuário da página.
 */
export default function Ecossistema() {
  const [ativo, setAtivo] = useState(0);
  // Raio em % da largura do container — acompanha o anel de 0,72 em qualquer tela.
  const raio = 36;
  const vertical = verticais[ativo];

  return (
    <Section className="overflow-hidden border-y border-gold-500/10 bg-ink-800/30">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ---- Texto ---- */}
        <div>
          <Reveal>
            <Eyebrow>Ecossistema</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-bold leading-[1.08] text-cream-50 sm:text-5xl lg:text-[3.4rem]">
              O Grupo SiMoB em{" "}
              <span className="text-gold-gradient">360°</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-lg leading-relaxed text-cream-300/75">
              A maioria dos nossos clientes chega por uma vertical e fica por
              três. Quem arremata no leilão precisa transferir. Quem transfere
              uma frota precisa gerir. Quem gere uma equipe precisa cuidar dela.
            </p>
          </Reveal>

          {/* Painel da vertical selecionada */}
          <Reveal delay={0.2}>
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass mt-9 rounded-2xl p-6"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: vertical.cor }}
              >
                {vertical.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-cream-50">
                {vertical.nome}
              </h3>
              <p className="mt-2 leading-relaxed text-cream-300/70">
                {vertical.descricao}
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8">
              <Button
                href={whatsappLink(
                  "Olá! Quero entender quais soluções do Grupo SiMoB fazem sentido para mim.",
                )}
                externo
                tamanho="lg"
              >
                Falar com um especialista
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ---- Órbita ---- */}
        <Reveal direction="left" className="flex justify-center">
          <div className="relative h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem]">
            {/* Anéis */}
            {[1, 0.72, 0.44].map((escala, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full border border-gold-500/15"
                style={{
                  width: `${escala * 100}%`,
                  height: `${escala * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Halo pulsante */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/18 blur-3xl animate-pulse-gold" />

            {/* Núcleo */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold-500/35 bg-ink-900 shadow-gold">
              <span className="text-[0.6rem] font-medium uppercase tracking-widest text-cream-300/55">
                Grupo
              </span>
              <span className="text-gold-gradient font-display text-2xl font-extrabold">
                SiMoB
              </span>
            </div>

            {/*
              Satélites em três camadas, de propósito:
              1) o container gira;
              2) cada satélite é posicionado por left/top (a rotação da camada 1
                 não pode disputar a mesma propriedade transform do
                 posicionamento, senão todos colapsam no centro);
              3) o botão contra-gira para o ícone ficar sempre de pé.
            */}
            <div className="absolute inset-0 animate-orbit [animation-duration:34s]">
              {verticais.map((v, i) => {
                const Icone = icones[i];
                const angulo = (i / verticais.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angulo) * raio;
                const y = 50 + Math.sin(angulo) * raio;
                const selecionado = ativo === i;

                return (
                  <div
                    key={v.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <button
                      onMouseEnter={() => setAtivo(i)}
                      onFocus={() => setAtivo(i)}
                      onClick={() => setAtivo(i)}
                      aria-label={v.nome}
                      className="block animate-orbit [animation-direction:reverse] [animation-duration:34s]"
                    >
                      <span
                        className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-2xl border bg-ink-900 transition-all duration-400 sm:h-[3.6rem] sm:w-[3.6rem]"
                        style={{
                          borderColor: selecionado ? v.cor : "rgba(212,160,23,0.22)",
                          color: selecionado ? v.cor : "rgba(207,199,181,0.6)",
                          boxShadow: selecionado ? `0 0 30px -4px ${v.cor}99` : "none",
                          transform: selecionado ? "scale(1.15)" : "scale(1)",
                        }}
                      >
                        <Icone size={21} />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
