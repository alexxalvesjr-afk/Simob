import type { Metadata } from "next";
import { GraduationCap, Award, Users, MonitorPlay } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Catalogo from "@/components/academy/Catalogo";
import { faqAcademy } from "@/content/paginas";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB Academy — cursos e certificações para o setor automotivo",
  description:
    "Formação para vistoriadores ECV, condutores especiais, reciclagem de infratores e gestão de frotas. Certificado válido em todo o Brasil.",
};

const pilares = [
  { Icone: Award, titulo: "Certificado nacional", texto: "Aceito em todo o Brasil, emitido em até 5 dias úteis." },
  { Icone: MonitorPlay, titulo: "Online com tutoria", texto: "Estude no seu ritmo, com professor disponível para dúvidas." },
  { Icone: Users, titulo: "Turmas para empresas", texto: "Desconto progressivo a partir de 8 alunos e relatório por participante." },
  { Icone: GraduationCap, titulo: "Professores da operação", texto: "Quem ensina aqui trabalha na área — não só dá aula sobre ela." },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB Academy · Cursos e treinamentos"
        titulo="Certificação que"
        destaque="o mercado reconhece."
        sub="Formação profissional para quem quer entrar ou crescer no setor automotivo. Do vistoriador iniciante ao gestor de frota."
      >
        <Button href="#catalogo" tamanho="lg">
          <GraduationCap size={18} /> Ver todos os cursos
        </Button>
        <Button
          href={whatsappLink("Olá! Quero matricular minha equipe na SiMoB Academy.")}
          externo
          variante="contorno"
          tamanho="lg"
        >
          Turma para empresa
        </Button>
      </PageHero>

      {/* ---- Pilares ---- */}
      <Section className="border-b border-ink-900/8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(({ Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-ink-900/8 bg-paper-2 p-6 transition-all duration-500 hover:border-gold-600/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-600/30 bg-gold-500/10 text-accent transition-transform duration-500 group-hover:scale-110">
                  <Icone size={19} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-ink-900">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Catálogo ---- */}
      <Section id="catalogo">
        <SectionHead
          eyebrow="Catálogo"
          titulo="Todos os"
          destaque="cursos."
          sub="Filtre por área ou busque pelo nome. Matrícula direto no WhatsApp, sem cadastro."
        />
        <div className="mt-12">
          <Catalogo />
        </div>
      </Section>

      <Faq
        itens={faqAcademy}
        eyebrow="Dúvidas"
        titulo="Antes de"
        destaque="se matricular."
      />

      <CtaFinal
        titulo="A próxima turma começa em breve."
        sub="Fale com a coordenação, tire suas dúvidas sobre pré-requisitos e garanta sua vaga."
        mensagem="Olá! Quero informações sobre os cursos da SiMoB Academy."
      />
    </>
  );
}
