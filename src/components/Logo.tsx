/**
 * Marca SiMoB em vetor — reconstruída a partir do logotipo usado no
 * Instagram @simob.br (arco superior + gradiente dourado + caixa alternada).
 * Vetorial: fica nítida em qualquer tamanho e anima sem custo de imagem.
 */

export default function Logo({
  className = "h-10",
  showGrupo = true,
  id = "logo",
}: {
  className?: string;
  showGrupo?: boolean;
  id?: string;
}) {
  const gid = `${id}-gold`;
  const sid = `${id}-swoosh`;

  return (
    <svg
      viewBox="0 0 200 62"
      className={className}
      role="img"
      aria-label="Grupo SiMoB"
      fill="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7dd97" />
          <stop offset="28%" stopColor="#e8b23c" />
          <stop offset="55%" stopColor="#d4a017" />
          <stop offset="78%" stopColor="#8a6110" />
          <stop offset="100%" stopColor="#e8b23c" />
        </linearGradient>
        <linearGradient id={sid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6110" />
          <stop offset="45%" stopColor="#f2ca63" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
      </defs>

      {/* Arco superior — o "swoosh" que atravessa o topo do logotipo */}
      <path
        d="M8 22 C 44 2, 128 -2, 190 14"
        stroke={`url(#${sid})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Palavra "Grupo" */}
      {showGrupo && (
        <text
          x="10"
          y="17"
          fontFamily="var(--font-sora), system-ui, sans-serif"
          fontSize="9"
          fontWeight="500"
          letterSpacing="0.5"
          fill="#cfc7b5"
        >
          Grupo
        </text>
      )}

      {/* Wordmark SiMoB */}
      <text
        x="6"
        y="55"
        fontFamily="var(--font-sora), system-ui, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-1.5"
        fill={`url(#${gid})`}
      >
        SiMoB
      </text>
    </svg>
  );
}

/** Versão compacta — só o monograma, para favicon, avatar e o FAB. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="SiMoB" fill="none">
      <defs>
        <linearGradient id="mark-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7dd97" />
          <stop offset="50%" stopColor="#d4a017" />
          <stop offset="100%" stopColor="#8a6110" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#04060c" />
      <rect
        width="40"
        height="40"
        rx="11"
        fill="none"
        stroke="url(#mark-gold)"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M8 14 C 16 8, 26 8, 33 12"
        stroke="url(#mark-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text
        x="20"
        y="31"
        textAnchor="middle"
        fontFamily="var(--font-sora), system-ui, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-1"
        fill="url(#mark-gold)"
      >
        SB
      </text>
    </svg>
  );
}
