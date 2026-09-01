import type { Metadata } from "next";
import { MessageCircle, Search, Clock, ShieldCheck, Truck, FileCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Passos from "@/components/home/Passos";
import { servicosDoc, faq, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB DOC — Despachante veicular em Salvador/BA",
  description:
    "Transferência, licenciamento, emplacamento Mercosul e gestão documental de frotas. Prazos declarados, acompanhamento em tempo real e nenhuma ida ao DETRAN.",
};

const diferenciais = [
  {
    Icone: Clock,
    titulo: "Prazo declarado antes de começar",
    texto:
      "Você sabe quantos dias úteis leva cada serviço antes de fechar. Nada de 'depende'.",
  },
  {
    Icone: ShieldCheck,
    titulo: "Conferência dupla dos documentos",
    texto:
      "Revisamos tudo antes de dar entrada. É por isso que 98% dos processos passam de primeira.",
  },
  {
    Icone: Truck,
    titulo: "Coleta e entrega em Salvador",
    texto:
      "Buscamos e devolvemos os documentos onde você estiver, na capital e Região Metropolitana.",
  },
  {
    Icone: FileCheck,
    titulo: "CRLV digital na hora da emissão",
    texto:
      "Assim que sai, chega no seu WhatsApp — antes mesmo da via física ficar pronta.",
  },
];

/** Agrupa os serviços por categoria para a tabela de prazos. */
function porCategoria() {
  const mapa = new Map<string, typeof servicosDoc[number][]>();
  for (const s of servicosDoc) {
    const lista = mapa.get(s.categoria) ?? [];
    lista.push(s);
    mapa.set(s.categoria, lista);
  }
  return [...mapa.entries()];
}

export default function DocPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB DOC · Despachante veicular"
        titulo="Documentação veicular"
        destaque="sem burocracia."
        sub="Licenciamento, transferência, emplacamento e gestão de frotas em Salvador e em toda a Bahia. Você manda a placa — a gente devolve o documento."
      >
        <Button
          href={whatsappLink("Olá! Preciso de um serviço da SiMoB DOC.")}
          externo
          tamanho="lg"
        >
          <MessageCircle size={18} /> Solicitar serviço
        </Button>
        <Button href="/consulta-placa" variante="contorno" tamanho="lg">
          <Search size={17} /> Consultar placa
        </Button>
      </PageHero>

      {/* ---- Serviços e prazos ---- */}
      <Section>
        <SectionHead
          eyebrow="O que fazemos"
          titulo="Cada serviço com"
          destaque="o prazo na mesa."
          sub="Transparência é o nosso diferencial: você escolhe sabendo quanto tempo leva."
        />

        <div className="mt-14 space-y-10">
          {porCategoria().map(([categoria, itens], gi) => (
            <Reveal key={categoria} delay={gi * 0.06}>
              <div>
                <h3 className="mb-4 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  {categoria}
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-500/35 to-transparent" />
                </h3>

                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {itens.map((s) => (
                    <li key={s.nome}>
                      <a
                        href={whatsappLink(
                          `Olá! Quero um orçamento para: ${s.nome}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-center justify-between gap-4 rounded-xl border border-ink-900/8 bg-paper-2 px-5 py-4 transition-all duration-400 hover:border-gold-600/40 hover:bg-paper-2"
                      >
                        <span className="font-medium leading-snug text-ink-800">
                          {s.nome}
                        </span>
                        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500/10 px-2.5 py-1 text-[0.7rem] font-semibold text-accent">
                          <Clock size={11} />
                          {s.prazo}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Diferenciais ---- */}
      <Section className="border-y border-ink-900/8 bg-paper-2">
        <SectionHead
          eyebrow="Por que a SiMoB"
          titulo="O despachante que você"
          destaque="não precisa cobrar."
          centro
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {diferenciais.map(({ Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 0.08}>
              <div className="group flex h-full gap-5 rounded-2xl border border-ink-900/8 bg-paper p-7 transition-all duration-500 hover:border-gold-600/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-600/30 bg-gold-500/10 text-accent transition-transform duration-500 group-hover:scale-110">
                  <Icone size={21} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">{titulo}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{texto}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Passos />

      <Faq
        itens={faq}
        eyebrow="Dúvidas"
        titulo="Antes de você"
        destaque="perguntar."
      />

      <CtaFinal
        titulo="Manda a placa. A gente resolve o resto."
        sub="Em poucos minutos você recebe o que precisa fazer, quanto custa e em quantos dias fica pronto."
        mensagem="Olá! Quero um orçamento da SiMoB DOC."
      />
    </>
  );
}
