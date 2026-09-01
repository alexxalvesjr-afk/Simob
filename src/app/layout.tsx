import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { empresa } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gruposimob.com.br"),
  title: {
    default: "Grupo SiMoB — Documentação veicular sem burocracia em Salvador/BA",
    template: "%s · Grupo SiMoB",
  },
  description:
    "Despachante veicular, cursos, consultoria, leilões e saúde mental para o setor automotivo. Licenciamento, transferência e emplacamento resolvidos em até 48h em Salvador/BA.",
  keywords: [
    "despachante veicular Salvador",
    "transferência de veículo Bahia",
    "licenciamento anual DETRAN BA",
    "emplacamento Mercosul Salvador",
    "gestão de frotas",
    "curso vistoriador automotivo",
    "leilão de veículos Bahia",
  ],
  authors: [{ name: empresa.nome }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gruposimob.com.br",
    siteName: empresa.nome,
    title: "Grupo SiMoB — Sua tranquilidade é a nossa prioridade",
    description:
      "Cinco verticais para o setor automotivo: documentação, capacitação, consultoria, leilões e saúde mental. Salvador/BA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo SiMoB — Centro de Soluções em Mobilidade",
    description:
      "Documentação veicular sem burocracia, com acompanhamento em tempo real. Salvador/BA.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04060c",
  width: "device-width",
  initialScale: 1,
};

/** Dados estruturados — ajuda o Google a exibir endereço, telefone e avaliação. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: empresa.nome,
  description: empresa.bio,
  url: "https://gruposimob.com.br",
  telephone: "+557198167121",
  email: empresa.contato.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Tancredo Neves, 274 — Caminho das Árvores",
    addressLocality: "Salvador",
    addressRegion: "BA",
    postalCode: "41100-800",
    addressCountry: "BR",
  },
  areaServed: { "@type": "State", name: "Bahia" },
  sameAs: [empresa.social.instagram, empresa.social.facebook],
};

/**
 * Escolhe o tema antes da página pintar.
 *
 * O escuro é o padrão da marca (preto-e-ouro do Instagram) e só cede à
 * escolha explícita do visitante — de propósito não seguimos a preferência
 * do sistema, senão a maioria dos aparelhos abriria no claro.
 * Para inverter o padrão, troque 'escuro' por 'claro' nas duas ocorrências.
 */
const SCRIPT_TEMA = `(function(){try{var t=localStorage.getItem('simob-tema');if(t!=='claro'&&t!=='escuro'){t='escuro';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','escuro');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Aplica o tema antes da primeira pintura. Sem isso a página aparece
          no tema padrão por um quadro e depois pula para o escolhido.
          Fica no <head> de propósito: precisa rodar antes do body pintar.
        */}
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_TEMA }} />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Atalho de teclado para leitores de tela */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-anchor"
        >
          Pular para o conteúdo
        </a>

        <ScrollProgress />
        <Nav />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
