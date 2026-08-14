import { Quote, Star } from "lucide-react";
import { depoimentos } from "@/content/site";
import Section, { SectionHead } from "../ui/Section";
import Reveal from "../ui/Reveal";

/**
 * Prova social. O site atual não tinha nenhuma — num serviço em que o
 * cliente entrega documento e dinheiro a um terceiro, isso custa conversão.
 */
export default function Depoimentos() {
  return (
    <Section className="border-y border-ink-900/8 bg-paper-2">
      <SectionHead
        eyebrow="Quem já resolveu"
        titulo="A gente cuida do processo."
        destaque="Eles cuidam da vida."
        centro
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {depoimentos.map((d, i) => (
          <Reveal key={d.autor} delay={i * 0.09}>
            <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-paper p-7 transition-all duration-500 hover:border-gold-600/40">
              <Quote
                size={40}
                className="absolute -right-1 -top-1 text-gold-500/10 transition-colors duration-500 group-hover:text-gold-500/20"
              />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-gold-400 text-gold-600" />
                ))}
              </div>

              <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-ink-700">
                “{d.texto}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/8 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/30 bg-gold-500/10 font-display text-sm font-bold text-gold-600">
                  {d.autor
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block font-semibold text-ink-900">{d.autor}</span>
                  <span className="block text-sm text-ink-400">{d.cargo}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
