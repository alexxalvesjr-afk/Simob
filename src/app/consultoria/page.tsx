import type { Metadata } from "next";
import { MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Contato from "@/components/Contato";
import { servicosConsultoria, faqConsultoria } from "@/content/paginas";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB Consultoria — abertura de empresas e credenciamento DETRAN",
  description:
    "Abertura de empresas, credenciamento de ECV junto ao DETRAN e certificação ISO 9001 para o setor automotivo. Acompanhamento até a publicação.",
};

export default function ConsultoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB Consultoria · Consultoria automotiva"
        titulo="Do CNPJ ao"
        destaque="credenciamento DETRAN."
        sub="Abrir uma empresa no setor automotivo tem uma trilha de exigências que ninguém explica. A gente já percorreu essa trilha — e conduz você por ela."
      >
        <Button
          href={whatsappLink("Olá! Quero falar com a consultoria do Grupo SiMoB.")}
          externo
          tamanho="lg"
        >
          <MessageCircle size={18} /> Diagnóstico gratuito
        </Button>
        <Button href="#contato" variante="contorno" tamanho="lg">
          Enviar meu caso
        </Button>
      </PageHero>

      {/* ---- Serviços ---- */}
      <Section>
        <SectionHead
          eyebrow="O que fazemos"
          titulo="Consultoria que termina"
          destaque="com o carimbo na mão."
          sub="Não entregamos relatório e vamos embora. Acompanhamos até a exigência ser cumprida."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicosConsultoria.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 0.07}>
              <a
                href={whatsappLink(`Olá! Tenho interesse em: ${s.titulo}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-500/12 bg-ink-800/45 p-7 transition-all duration-500 hover:border-gold-500/32 hover:bg-ink-700/50"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-snug text-cream-50">
                    {s.titulo}
                  </h3>
                  <ArrowUpRight
                    size={17}
                    className="mt-1 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <p className="relative mt-3 flex-1 leading-relaxed text-cream-300/68">
                  {s.texto}
                </p>

                <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-300">
                  <Clock size={12} /> {s.prazo}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Faq
        itens={faqConsultoria}
        eyebrow="Dúvidas"
        titulo="O que perguntam"
        destaque="na primeira conversa."
      />

      <CtaFinal
        titulo="Conta o seu caso. O diagnóstico é gratuito."
        sub="Em uma conversa a gente identifica o que falta, quanto custa e quanto tempo leva — sem compromisso."
        mensagem="Olá! Quero um diagnóstico da SiMoB Consultoria."
      />

      <Contato />
    </>
  );
}
