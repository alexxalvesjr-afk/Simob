import type { Metadata } from "next";
import { Gavel, ShieldCheck, FileSignature, TrendingUp, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import { garantiasLeilao, faqLeiloes } from "@/content/paginas";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "SiMoB Leilões — leilões de veículos com transferência inclusa",
  description:
    "Leilões online e presenciais auditados na Bahia. Lotes com laudo, lances registrados e transferência feita pela SiMoB DOC.",
};

const icones = [Users, ShieldCheck, FileSignature, TrendingUp];

export default function LeiloesPage() {
  return (
    <>
      <PageHero
        eyebrow="SiMoB Leilões · Leilões de veículos"
        titulo="Arremate com laudo e"
        destaque="transferência inclusos."
        sub="A parte difícil de um leilão não é dar o lance — é o que vem depois. Aqui, a documentação do bem arrematado já sai resolvida pela nossa equipe."
      >
        <Button
          href={whatsappLink("Olá! Quero acompanhar os próximos leilões da SiMoB.")}
          externo
          tamanho="lg"
        >
          <Gavel size={18} /> Avisar sobre próximos leilões
        </Button>
        <Button href="#comitente" variante="contorno" tamanho="lg">
          Quero vender meu bem
        </Button>
      </PageHero>

      {/* ---- Garantias ---- */}
      <Section className="border-b border-gold-500/10">
        <SectionHead
          eyebrow="Como garantimos"
          titulo="Leilão sem"
          destaque="letra miúda."
          centro
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {garantiasLeilao.map((g, i) => {
            const Icone = icones[i];
            return (
              <Reveal key={g.titulo} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-gold-500/12 bg-ink-800/45 p-7 transition-all duration-500 hover:border-gold-500/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                    <Icone size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-cream-50">
                    {g.titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-cream-300/65">{g.texto}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---- Agenda ---- */}
      <Section>
        <SectionHead
          eyebrow="Agenda"
          titulo="Próximos"
          destaque="leilões."
          sub="Os lotes são publicados junto com o edital, cerca de 15 dias antes de cada leilão."
          centro
        />

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-14 max-w-2xl rounded-2xl p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
              <Gavel size={24} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-cream-50">
              O próximo leilão está sendo montado
            </h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-cream-300/70">
              Entre na lista e receba o edital e os lotes no WhatsApp assim que forem
              publicados — antes de irem para as redes.
            </p>
            <div className="mt-8">
              <Button
                href={whatsappLink(
                  "Olá! Quero entrar na lista de avisos dos leilões da SiMoB.",
                )}
                externo
                tamanho="lg"
              >
                Entrar na lista de avisos
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---- Comitente ---- */}
      <Section id="comitente" className="border-y border-gold-500/10 bg-ink-800/30">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Para quem vende"
              titulo="Seu bem exposto a"
              destaque="centenas de compradores."
              sub="Você define o lance mínimo, a gente cuida da avaliação, da divulgação e do fechamento. A comissão só é cobrada sobre a venda efetivada."
            />
            <Reveal delay={0.24}>
              <div className="mt-9">
                <Button
                  href={whatsappLink(
                    "Olá! Quero cadastrar um bem para leilão como comitente.",
                  )}
                  externo
                  tamanho="lg"
                >
                  Cadastrar meu bem
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <ul className="space-y-4">
              {[
                "Avaliação gratuita do bem",
                "Lance mínimo definido com você",
                "Divulgação em todos os nossos canais",
                "Documentação e transferência pela SiMoB DOC",
                "Comissão apenas sobre a venda efetivada",
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-gold-500/12 bg-ink-900/50 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/12 font-display text-sm font-bold text-gold-300">
                    {i + 1}
                  </span>
                  <span className="text-cream-100/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Faq
        itens={faqLeiloes}
        eyebrow="Dúvidas"
        titulo="Como funciona"
        destaque="na prática."
      />

      <CtaFinal
        titulo="Quer comprar ou vender no próximo leilão?"
        sub="Fale com a nossa equipe e entenda o processo completo — do cadastro à transferência do bem."
        mensagem="Olá! Quero informações sobre os leilões da SiMoB."
      />
    </>
  );
}
