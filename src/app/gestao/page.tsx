import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Bell,
  ClipboardList,
  FolderLock,
  ChartNoAxesColumn,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import PainelMock from "@/components/gestao/PainelMock";
import { gestao, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB Gestão — plataforma de documentação para frotas",
  description:
    "Controle vencimentos, ordens de serviço, documentos e custos de cada placa num painel só. Integrado ao despachante que executa. A partir de R$ 149/mês.",
};

const icones = [Bell, ClipboardList, FolderLock, ChartNoAxesColumn, Users, Workflow];

const faqGestao = [
  {
    p: "Preciso migrar meus dados manualmente?",
    r: "Não. Você envia a relação de placas em planilha ou nos passa o acesso e a nossa equipe faz a carga inicial, incluindo o histórico documental de cada veículo. O onboarding leva em média 3 dias úteis.",
  },
  {
    p: "A plataforma substitui o despachante?",
    r: "Ela substitui a planilha e o grupo de WhatsApp — não o despachante. A diferença é que aqui os dois vivem no mesmo lugar: você abre a ordem de serviço no painel e a equipe da SiMoB DOC já recebe e executa.",
  },
  {
    p: "Consigo usar se minha frota está fora da Bahia?",
    r: "Sim. O controle de vencimentos, o cofre de documentos e os relatórios funcionam para veículos de qualquer estado. A execução dos serviços pela SiMoB DOC é feita na Bahia; fora dela, você usa o painel com o despachante que já tem.",
  },
  {
    p: "Tem fidelidade ou multa por cancelamento?",
    r: "Não há fidelidade nos planos Essencial e Frota — a assinatura é mensal e pode ser cancelada quando quiser. Planos corporativos com SLA contratual seguem o prazo acordado em contrato.",
  },
  {
    p: "Como funciona o teste?",
    r: "São 14 dias com todos os recursos do plano Frota liberados, sem cartão de crédito. Ao final, você escolhe um plano ou a conta é congelada — seus dados ficam guardados por 90 dias.",
  },
];

export default function GestaoPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB Gestão · Plataforma"
        titulo="A documentação da sua frota"
        destaque="num painel só."
        sub={gestao.sub}
        aside={<PainelMock />}
      >
        <Button
          href={whatsappLink(
            "Olá! Quero testar a plataforma SiMoB Gestão por 14 dias.",
          )}
          externo
          tamanho="lg"
        >
          <Sparkles size={17} /> Testar 14 dias grátis
        </Button>
        <Button href="#planos" variante="contorno" tamanho="lg">
          Ver planos <ArrowRight size={16} />
        </Button>
      </PageHero>

      {/* ---- O problema ---- */}
      <Section className="border-b border-ink-900/8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-ink-800 sm:text-[1.9rem] sm:leading-[1.4]">
              Toda frota que a gente atende chegava com{" "}
              <span className="text-gold-gradient">a mesma planilha</span> — desatualizada,
              compartilhada por seis pessoas e com um licenciamento vencido escondido
              na linha 47.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 text-lg text-ink-500">
              A SiMoB Gestão nasceu para acabar com essa planilha.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ---- Recursos ---- */}
      <Section>
        <SectionHead
          eyebrow="Recursos"
          titulo="Feito por despachante,"
          destaque="para quem vive de frota."
          sub="Cada função aqui resolve uma dor que a gente viu acontecer na operação dos nossos clientes."
          centro
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gestao.recursos.map((r, i) => {
            const Icone = icones[i];
            return (
              <Reveal key={r.titulo} delay={i * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-paper-2 p-7 transition-all duration-500 hover:border-gold-600/40 hover:bg-paper-2">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gold-600/30 bg-gold-500/10 text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icone size={21} />
                  </span>
                  <h3 className="relative mt-6 font-display text-lg font-bold text-ink-900">
                    {r.titulo}
                  </h3>
                  <p className="relative mt-2.5 leading-relaxed text-ink-500">
                    {r.texto}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---- Planos ---- */}
      <Section id="planos" className="border-y border-ink-900/8 bg-paper-2">
        <SectionHead
          eyebrow="Planos"
          titulo="Preço que cabe"
          destaque="no tamanho da frota."
          sub="Sem taxa de implantação. Sem fidelidade nos planos mensais. Cancele quando quiser."
          centro
        />

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {gestao.planos.map((plano, i) => {
            const destaque = "destaque" in plano && plano.destaque;
            return (
              <Reveal key={plano.nome} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-[1.5rem] p-8 transition-all duration-500 ${
                    destaque
                      ? "border-2 border-gold-500/60 bg-paper-2 shadow-gold lg:-translate-y-4"
                      : "border border-ink-900/8 bg-paper hover:border-gold-600/30"
                  }`}
                >
                  {destaque && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-anchor">
                      Mais escolhido
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {plano.nome}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-400">{plano.desc}</p>

                  <p className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`font-display text-4xl font-bold ${
                        destaque ? "text-gold-gradient" : "text-ink-900"
                      }`}
                    >
                      {plano.preco}
                    </span>
                    <span className="text-ink-400">{plano.periodo}</span>
                  </p>

                  <p className="mt-3 inline-flex w-fit rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-accent">
                    {plano.limite}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plano.itens.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink-600">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href={whatsappLink(
                        `Olá! Tenho interesse no plano ${plano.nome} da SiMoB Gestão.`,
                      )}
                      externo
                      variante={destaque ? "ouro" : "contorno"}
                      className="w-full"
                    >
                      {plano.preco === "Sob medida" ? "Falar com vendas" : "Começar agora"}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-sm text-ink-400">
            Todos os planos incluem 14 dias de teste, sem cartão de crédito.
          </p>
        </Reveal>
      </Section>

      <Faq
        itens={faqGestao}
        eyebrow="Dúvidas sobre a plataforma"
        titulo="O que perguntam"
        destaque="antes de assinar."
      />

      <CtaFinal
        titulo="Sua frota merece mais que uma planilha."
        sub="Teste 14 dias com todos os recursos liberados. Sem cartão, sem compromisso — e com a nossa equipe fazendo a carga inicial dos seus veículos."
        mensagem="Olá! Quero testar a plataforma SiMoB Gestão."
      />
    </>
  );
}
