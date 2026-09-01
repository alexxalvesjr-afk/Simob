import Link from "next/link";
import type { ReactNode } from "react";

type Variante = "ouro" | "contorno" | "fantasma" | "whats";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const tamanhos = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
} as const;

const variantes: Record<Variante, string> = {
  ouro:
    "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 text-anchor shadow-gold-sm hover:shadow-gold-lg hover:-translate-y-0.5",
  contorno:
    "border border-gold-600/40 text-accent hover:border-gold-400/70 hover:bg-gold-500/10 hover:-translate-y-0.5",
  fantasma: "text-ink-600 hover:text-accent",
  whats:
    "bg-signal-whats text-white shadow-[0_8px_28px_-8px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-8px_rgba(37,211,102,0.7)]",
};

/** Brilho que atravessa o botão no hover. */
function Brilho() {
  return (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
  );
}

export default function Button({
  children,
  href,
  variante = "ouro",
  tamanho = "md",
  className = "",
  externo = false,
  type = "button",
  ...props
}: {
  children: ReactNode;
  href?: string;
  variante?: Variante;
  tamanho?: keyof typeof tamanhos;
  className?: string;
  externo?: boolean;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${tamanhos[tamanho]} ${variantes[variante]} ${className}`;
  const interior = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <Brilho />
    </>
  );

  if (href) {
    if (externo) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {interior}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {interior}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {interior}
    </button>
  );
}
