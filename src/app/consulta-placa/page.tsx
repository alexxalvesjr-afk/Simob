import type { Metadata } from "next";
import { MessageCircle, ShieldCheck, Zap, CircleDollarSign } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaFinal from "@/components/CtaFinal";
import PlacaConsole from "@/components/home/PlacaConsole";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Consulta de placa grátis — IPVA, multas e restrições",
  description:
    "Consulte gratuitamente a situação do seu veículo: licenciamento, IPVA, multas e restrições. Resultado em segundos, sem cadastro.",
};

const oQueMostra = [
  { Icone: ShieldCheck, t: "Restrições e alienação", d: "Se há bloqueio judicial, alienação fiduciária ou impedimento de transferência." },
  { Icone: CircleDollarSign, t: "Débitos em aberto", d: "IPVA, licenciamento, DPVAT e multas pendentes no veículo." },
  { Icone: Zap, t: "Situação do licenciamento", d: "Se o CRLV está em dia e quando vence a próxima obrigação." },
];

export default function ConsultaPlacaPage() {
  return (
    <>
      <PageHero
        eyebrow="Gratuito · Sem cadastro"
        titulo="Consulte a situação do"
        destaque="seu veículo."
        sub="Licenciamento, IPVA, multas e restrições em segundos. E se aparecer alguma pendência, a gente resolve para você."
        aside={<PlacaConsole />}
      />

      {/* ---- O que a consulta mostra ---- */}
      <Section>
        <SectionHead
          eyebrow="O que aparece"
          titulo="Tudo que você precisa saber"
          destaque="antes de comprar ou vender."
          centro
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {oQueMostra.map(({ Icone, t, d }, i) => (
            <Reveal key={t} delay={i * 0.09}>
              <div className="h-full rounded-2xl border border-gold-500/12 bg-ink-800/45 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                  <Icone size={19} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-cream-50">{t}</h3>
                <p className="mt-2 leading-relaxed text-cream-300/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Ponte para o serviço ---- */}
      <Section className="border-y border-gold-500/10 bg-ink-800/30">
        <Reveal>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-cream-50 sm:text-4xl">
              Apareceu pendência na consulta?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream-300/72">
              Multas, IPVA atrasado, licenciamento vencido, restrição de transferência —
              a SiMoB DOC resolve tudo isso sem você precisar ir ao DETRAN.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={whatsappLink(
                  "Olá! Consultei minha placa no site e apareceu pendência. Podem me ajudar?",
                )}
                externo
                variante="whats"
                tamanho="lg"
              >
                <MessageCircle size={18} /> Falar com um despachante
              </Button>
              <Button href="/doc" variante="contorno" tamanho="lg">
                Ver todos os serviços
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaFinal
        titulo="A consulta é grátis. A tranquilidade também deveria ser."
        sub="Manda a placa no WhatsApp e a gente devolve um diagnóstico completo do que precisa ser feito."
        mensagem="Olá! Quero um diagnóstico da situação do meu veículo."
      />
    </>
  );
}
