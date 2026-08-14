import { BadgeCheck } from "lucide-react";
import { credenciais } from "@/content/site";

/**
 * Faixa de credenciais em movimento contínuo.
 * O site atual não exibia DEKRA, ISO 9001 nem o credenciamento DETRAN —
 * provas de confiança que a empresa já usa no Instagram e desperdiçava aqui.
 */
export default function Credenciais() {
  const fita = [...credenciais, ...credenciais];

  return (
    <section className="border-y border-gold-500/10 bg-ink-800/40 py-7" aria-label="Credenciais">
      <div className="mask-edges flex overflow-hidden">
        <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {fita.map((c, i) => (
            <li
              key={`${c}-${i}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-medium text-cream-300/55"
              aria-hidden={i >= credenciais.length}
            >
              <BadgeCheck size={17} className="text-gold-500/80" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
