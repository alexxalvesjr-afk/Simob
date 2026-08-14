import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Rótulo dourado que antecede os títulos de seção. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-400">
      <span className="h-px w-7 bg-gradient-to-r from-transparent to-gold-500" />
      {children}
    </span>
  );
}

/** Cabeçalho padrão de seção: rótulo + título + apoio. */
export function SectionHead({
  eyebrow,
  titulo,
  destaque,
  sub,
  centro = false,
  className = "",
}: {
  eyebrow?: string;
  titulo: string;
  destaque?: string;
  sub?: string;
  centro?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centro ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.08] text-cream-50 sm:text-5xl lg:text-[3.4rem]">
          {titulo}{" "}
          {destaque && <span className="text-gold-gradient">{destaque}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className={`mt-5 text-lg leading-relaxed text-cream-300/75 ${centro ? "mx-auto max-w-2xl" : ""}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Invólucro de seção com espaçamento vertical consistente. */
export default function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 lg:py-36 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
