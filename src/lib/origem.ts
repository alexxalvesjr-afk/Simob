"use client";

import { useEffect, useState } from "react";

/**
 * Origem do lead.
 *
 * A reunião definiu que o link da bio do Instagram passa a apontar para o
 * site em vez de ir direto ao WhatsApp, justamente para conseguir rastrear
 * de onde o lead veio. Este módulo guarda essa origem na primeira visita e
 * a carrega junto de toda mensagem de WhatsApp e de todo envio de formulário,
 * para o CRM saber a procedência sem depender de perguntar ao cliente.
 *
 * Fica em sessionStorage: dura a visita inteira, mesmo navegando entre
 * páginas, e não persegue a pessoa em visitas futuras.
 */

const CHAVE = "simob-origem";

export type Origem = {
  fonte: string; // utm_source, ou o domínio de quem indicou
  midia?: string; // utm_medium
  campanha?: string; // utm_campaign
  pagina: string; // por onde entrou no site
};

function detectar(): Origem {
  const p = new URLSearchParams(window.location.search);
  const utmSource = p.get("utm_source");

  if (utmSource) {
    return {
      fonte: utmSource,
      midia: p.get("utm_medium") ?? undefined,
      campanha: p.get("utm_campaign") ?? undefined,
      pagina: window.location.pathname,
    };
  }

  // Sem UTM: usa quem indicou. Instagram e Google chegam por aqui.
  const ref = document.referrer;
  if (ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (!host.includes(window.location.hostname)) {
        return { fonte: host, midia: "referral", pagina: window.location.pathname };
      }
    } catch {
      /* referrer malformado: cai em direto */
    }
  }

  return { fonte: "direto", pagina: window.location.pathname };
}

export function useOrigem(): Origem | null {
  const [origem, setOrigem] = useState<Origem | null>(null);

  useEffect(() => {
    try {
      const salva = sessionStorage.getItem(CHAVE);
      if (salva) {
        setOrigem(JSON.parse(salva) as Origem);
        return;
      }
      const nova = detectar();
      sessionStorage.setItem(CHAVE, JSON.stringify(nova));
      setOrigem(nova);
    } catch {
      // Navegação privada ou storage bloqueado: segue sem rastreio.
      setOrigem(detectar());
    }
  }, []);

  return origem;
}

/** Etiqueta curta anexada à mensagem, para o CRM classificar o lead. */
export function etiquetaOrigem(origem: Origem | null): string {
  if (!origem) return "";
  const partes = [origem.fonte, origem.midia, origem.campanha].filter(Boolean);
  return `\n\n—\nOrigem: ${partes.join(" · ")} · ${origem.pagina}`;
}
