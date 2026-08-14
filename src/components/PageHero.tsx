import type { ReactNode } from "react";
import Reveal from "./ui/Reveal";
import { Eyebrow } from "./ui/Section";

/** Cabeçalho padrão das páginas internas — mantém o ritmo visual da home. */
export default function PageHero({
  eyebrow,
  titulo,
  destaque,
  sub,
  children,
  aside,
}: {
  eyebrow: string;
  titulo: string;
  destaque?: string;
  sub: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-24 lg:pt-44">
      <div className="mesh-gold absolute inset-0 -z-20" aria-hidden />
      <div className="grid-tech absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={
            aside
              ? "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
              : "max-w-3xl"
          }
        >
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink-900 sm:text-6xl lg:text-[4rem]">
                {titulo}{" "}
                {destaque && <span className="text-gold-shimmer">{destaque}</span>}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
                {sub}
              </p>
            </Reveal>

            {children && (
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>
              </Reveal>
            )}
          </div>

          {aside && <Reveal direction="left">{aside}</Reveal>}
        </div>
      </div>

      <div className="hairline mx-auto mt-20 max-w-7xl" />
    </section>
  );
}
