/**
 * Selos circulares das cinco verticais — reconstruídos em vetor a partir das
 * artes da marca: ícone no topo, wordmark "SiMoB" ("Si" preto, pingo vermelho
 * no i, "MoB" dourado) e o nome da vertical embaixo, tudo dentro de um círculo.
 *
 * Vetorial de propósito: fica nítido em qualquer tamanho, pesa quase nada e
 * acompanha o mesmo gradiente dourado usado no logotipo principal.
 */

type Id = "doc" | "academy" | "consultoria" | "leiloes" | "psicologia";

const NOMES: Record<Id, string> = {
  doc: "DOC",
  academy: "ACADEMY",
  consultoria: "CONSULTORIA",
  leiloes: "LEILÕES",
  psicologia: "PSICOLOGIA",
};

/** Ícone de cada vertical, desenhado na caixa 100×54 acima do wordmark. */
function Icone({ id, ouro }: { id: Id; ouro: string }) {
  const preto = "#0d1220";

  switch (id) {
    case "doc":
      return (
        <g>
          {/* Folha de documento com canto dobrado */}
          <path
            d="M36 12 h20 l10 10 v30 a2 2 0 0 1-2 2 H36 a2 2 0 0 1-2-2 V14 a2 2 0 0 1 2-2 z"
            fill={preto}
          />
          <path d="M56 12 l10 10 h-10 z" fill={ouro} />
          <rect x="40" y="28" width="14" height="2.6" rx="1.3" fill="#fff" />
          <rect x="40" y="34" width="20" height="2.6" rx="1.3" fill="#fff" />
          <rect x="40" y="40" width="16" height="2.6" rx="1.3" fill="#fff" />
          {/* Selo de conferido */}
          <circle cx="63" cy="45" r="9" fill={ouro} />
          <path
            d="M58.5 45.2 l3 3 l5.5-6"
            stroke="#fff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      );

    case "academy":
      return (
        <g>
          {/* Capelo */}
          <path d="M50 12 L78 24 L50 36 L22 24 Z" fill={preto} />
          <path
            d="M34 29 v10 c0 4 7 7 16 7 s16-3 16-7 V29 l-16 7 z"
            fill={preto}
          />
          {/* Borla */}
          <path d="M70 26 v13" stroke={ouro} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="70" cy="43" r="4" fill={ouro} />
        </g>
      );

    case "consultoria":
      return (
        <g>
          {/* Barras crescentes */}
          <rect x="26" y="40" width="9" height="14" rx="1.5" fill={preto} />
          <rect x="39" y="32" width="9" height="22" rx="1.5" fill={preto} />
          <rect x="52" y="24" width="9" height="30" rx="1.5" fill={preto} />
          <rect x="65" y="16" width="9" height="38" rx="1.5" fill={preto} />
          {/* Seta de tendência */}
          <path
            d="M24 34 L40 20 L50 28 L70 8"
            stroke={ouro}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M58 8 h13 v13" stroke={ouro} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      );

    case "leiloes":
      return (
        <g>
          {/* Martelo do leiloeiro */}
          <g transform="rotate(-32 50 30)">
            <rect x="34" y="18" width="26" height="15" rx="3.5" fill={preto} />
            <rect x="41" y="18" width="3.5" height="15" fill={ouro} />
            <rect x="52" y="18" width="3.5" height="15" fill={ouro} />
            <rect x="58" y="23" width="26" height="5.5" rx="2.75" fill={preto} />
          </g>
          {/* Base */}
          <rect x="30" y="46" width="40" height="6" rx="3" fill={preto} />
        </g>
      );

    case "psicologia":
      return (
        <g>
          <circle cx="50" cy="31" r="20" fill="none" stroke={ouro} strokeWidth="2.4" />
          {/* Letra grega psi */}
          <path
            d="M50 17 v28 M38 22 v7 c0 6.6 5.4 12 12 12 s12-5.4 12-12 v-7"
            stroke={preto}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M43 47 h14" stroke={preto} strokeWidth="3.2" strokeLinecap="round" />
        </g>
      );
  }
}

export default function VerticalBadge({
  id,
  className = "h-24 w-24",
  fundo = "#ffffff",
  aro = "rgba(13,18,32,0.14)",
}: {
  id: Id;
  className?: string;
  /** Cor de preenchimento do círculo — trocar para usar sobre fundo escuro. */
  fundo?: string;
  /** Cor do aro do círculo. */
  aro?: string;
}) {
  const gid = `bv-${id}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`SiMoB ${NOMES[id]}`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8b23c" />
          <stop offset="45%" stopColor="#c8921a" />
          <stop offset="100%" stopColor="#8a6110" />
        </linearGradient>
      </defs>

      {/* Círculo */}
      <circle cx="50" cy="50" r="49" fill={fundo} stroke={aro} strokeWidth="1.6" />

      <Icone id={id} ouro={`url(#${gid})`} />

      {/* Wordmark SiMoB */}
      <g
        fontFamily="var(--font-sora), system-ui, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="-0.8"
        textAnchor="middle"
      >
        <text x="50" y="77">
          <tspan fill="#0d1220">Si</tspan>
          <tspan fill={`url(#${gid})`}>MoB</tspan>
        </text>
      </g>
      {/* Pingo vermelho do "i", como na arte original */}
      <circle cx="47.2" cy="62.4" r="2.5" fill="#a01c1c" />

      {/* Nome da vertical */}
      <text
        x="50"
        y="89"
        textAnchor="middle"
        fontFamily="var(--font-sora), system-ui, sans-serif"
        fontSize={NOMES[id].length > 8 ? "8.4" : "10"}
        fontWeight="600"
        letterSpacing="1.2"
        fill="#0d1220"
      >
        {NOMES[id]}
      </text>
    </svg>
  );
}
