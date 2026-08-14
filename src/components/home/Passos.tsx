import { passos } from "@/content/site";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";

/** Como funciona — quatro etapas ligadas por um fio dourado. */
export default function Passos() {
  return (
    <Section>
      <SectionHead
        eyebrow="Como funciona"
        titulo="Quatro passos entre o problema"
        destaque="e o documento na sua mão."
        sub="Sem fila, sem senha, sem ligar três vezes para saber como está."
        centro
      />

      <div className="relative mt-20">
        {/* Fio que conecta as etapas no desktop */}
        <div
          className="absolute inset-x-0 top-9 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,160,23,.45) 12%, rgba(212,160,23,.45) 88%, transparent)",
          }}
          aria-hidden
        />

        <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {passos.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <li className="group relative">
                {/* Marcador */}
                <div className="relative z-10 mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-gold-600/30 bg-paper font-display text-2xl font-bold text-gold-gradient transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold">
                  {p.n}
                </div>

                <h3 className="font-display text-xl font-bold leading-snug text-ink-900">
                  {p.titulo}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink-500">{p.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
