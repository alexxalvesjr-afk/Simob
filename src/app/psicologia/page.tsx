import type { Metadata } from "next";
import { HeartPulse, Lock, Video, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import { atendimentosPsico, passosPsico, faqPsico } from "@/content/paginas";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB Psicologia — saúde mental para o setor de mobilidade",
  description:
    "Atendimento psicológico online e presencial para motoristas, operadores e equipes do setor automotivo. Primeira conversa gratuita e sigilo integral.",
};

export default function PsicologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB Psicologia · Saúde mental"
        titulo="Quem dirige o Brasil"
        destaque="também precisa de cuidado."
        sub="Dez horas no trânsito, prazo apertado, responsabilidade por carga e por vida. A gente criou essa vertical porque via isso todo dia — e ninguém falava sobre."
      >
        <Button
          href={whatsappLink("Olá! Quero agendar a conversa inicial com a SiMoB Psicologia.")}
          externo
          tamanho="lg"
        >
          <HeartPulse size={18} /> Agendar conversa gratuita
        </Button>
      </PageHero>

      {/* ---- Garantias de confiança ---- */}
      <Section className="border-b border-gold-500/10">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { Icone: Lock, t: "Sigilo integral", d: "Garantido pelo Código de Ética do Psicólogo. Nem a empresa contratante tem acesso ao conteúdo das sessões." },
            { Icone: Video, t: "Online ou presencial", d: "Atendimento por vídeo em plataforma segura, com a mesma validade do presencial." },
            { Icone: MapPin, t: "Unidade em Salvador", d: "Atendimento presencial no Caminho das Árvores, com agenda flexível." },
          ].map(({ Icone, t, d }, i) => (
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

      {/* ---- Modalidades ---- */}
      <Section>
        <SectionHead
          eyebrow="Modalidades"
          titulo="Atendimento"
          destaque="do seu jeito."
          sub="Para a pessoa que precisa falar e para a empresa que quer cuidar da equipe."
          centro
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {atendimentosPsico.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-gold-500/12 bg-ink-800/45 p-7 transition-all duration-500 hover:border-gold-500/30">
                <span className="w-fit rounded-full bg-purple-500/12 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-purple-300">
                  {a.formato}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-cream-50">
                  {a.titulo}
                </h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-cream-300/68">{a.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Processo ---- */}
      <Section className="border-y border-gold-500/10 bg-ink-800/30">
        <SectionHead
          eyebrow="Processo"
          titulo="Como é o"
          destaque="seu atendimento."
          centro
        />

        <div className="relative mt-18">
          <div
            className="absolute inset-x-0 top-9 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,160,23,.4) 12%, rgba(212,160,23,.4) 88%, transparent)",
            }}
            aria-hidden
          />
          <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
            {passosPsico.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.11}>
                <li className="group">
                  <div className="relative z-10 mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-gold-500/25 bg-ink-900 font-display text-2xl font-bold text-gold-gradient transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold">
                    {p.n}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-cream-50">
                    {p.titulo}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-cream-300/65">{p.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Faq itens={faqPsico} eyebrow="Dúvidas" titulo="O que você" destaque="precisa saber." />

      <CtaFinal
        titulo="A primeira conversa é gratuita."
        sub="Sem compromisso e sem julgamento. Só uma conversa para entender o que você está passando e ver se faz sentido continuar."
        mensagem="Olá! Quero agendar a conversa inicial da SiMoB Psicologia."
      />
    </>
  );
}
