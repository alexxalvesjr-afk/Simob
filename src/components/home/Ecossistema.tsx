"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { verticais } from "@/content/site";
import Section, { Eyebrow } from "../ui/Section";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import VerticalBadge from "../VerticalBadge";
import { whatsappLink } from "@/content/site";

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
    <Section className="overflow-hidden border-y border-ink-900/8 bg-paper-2">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ---- Texto ---- */}
        <div>
          <Reveal>
            <Eyebrow>Ecossistema</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-bold leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              O Grupo SiMoB em{" "}
              <span className="text-gold-gradient">360°</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
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
              <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">
                {vertical.nome}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-500">
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
                className="absolute left-1/2 top-1/2 rounded-full border border-ink-900/10"
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
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold-600/40 bg-paper shadow-gold">
              <span className="text-[0.6rem] font-medium uppercase tracking-widest text-ink-400">
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
            <div className="absolute inset-0 animate-orbit">
              {verticais.map((v, i) => {
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
                      className="block animate-orbit-reverse"
                    >
                      <span
                        className="block rounded-full transition-all duration-400"
                        style={{
                          boxShadow: selecionado
                            ? `0 0 0 2px ${v.cor}, 0 10px 34px -8px ${v.cor}80`
                            : "0 2px 10px -3px rgba(16,23,40,0.18)",
                          transform: selecionado ? "scale(1.16)" : "scale(1)",
                        }}
                      >
                        <VerticalBadge
                          id={v.id as "doc" | "academy" | "consultoria" | "leiloes" | "psicologia"}
                          className="h-[4.4rem] w-[4.4rem] sm:h-[5.2rem] sm:w-[5.2rem]"
                        />
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
