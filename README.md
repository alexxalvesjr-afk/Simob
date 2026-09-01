# Grupo SiMoB — site institucional + plataforma

Site do **Grupo SiMoB**, Centro de Soluções em Mobilidade (Salvador/BA), com as
cinco verticais do grupo e a landing da plataforma **SiMoB Gestão**.

## Stack

- **Next.js 15** (App Router) — todas as páginas geradas estaticamente
- **TypeScript** em modo estrito
- **Tailwind CSS v4** — design system em `src/app/globals.css`
- **Motion** — animações de entrada, órbita e microinterações
- **lucide-react** — ícones

Sem imagens externas: logotipo, placa Mercosul, painel da plataforma e diagrama
do ecossistema são vetor/DOM. O site inteiro carrega ~102 kB de JS compartilhado.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # fontes, metadata, JSON-LD, shell
│   ├── page.tsx             # home
│   ├── doc/                 # SiMoB DOC — despachante veicular
│   ├── academy/             # cursos e certificações
│   ├── consultoria/         # abertura de empresas e credenciamento
│   ├── leiloes/             # leilões de veículos
│   ├── psicologia/          # saúde mental do setor
│   ├── gestao/              # SaaS — plataforma para frotas
│   └── consulta-placa/      # consulta gratuita
├── components/
│   ├── ui/                  # Button, Section, Reveal
│   ├── home/                # seções da home
│   ├── academy/             # catálogo com busca e filtro
│   └── gestao/              # mockup do painel
└── content/
    ├── site.ts              # copy institucional, verticais, planos, FAQ
    └── paginas.ts           # conteúdo das páginas internas
```

## Onde editar o conteúdo

Toda a copy vive em `src/content/`. Trocar telefone, endereço, preços, prazos
de serviço, cursos ou perguntas do FAQ é edição de um objeto — nenhum componente
precisa ser tocado.

## Identidade visual e temas

Extraída do perfil [@simob.br](https://instagram.com/simob.br): preto e ouro.
Os tokens estão em `src/app/globals.css`.

O site tem **tema escuro e claro**, com alternador no topo. O escuro é o
padrão; a escolha do visitante fica em `localStorage` e é aplicada por um
script inline no `<head>` antes da primeira pintura, para a página não piscar.
Para inverter o padrão, troque `'escuro'` por `'claro'` nas duas ocorrências
de `SCRIPT_TEMA` em `src/app/layout.tsx`.

Três grupos de tokens sustentam isso:

| Token | Papel |
|---|---|
| `paper-*` | superfícies — claras no tema claro, escuras no escuro |
| `ink-*` | texto — inverte junto com o tema |
| `anchor-*` | superfícies **sempre escuras** (card do SiMoB DOC, rodapé) |
| `accent` | ouro de texto legível no tema corrente |

Regra prática ao criar componentes: texto sobre botão dourado ou sobre a placa
branca usa `text-anchor`, nunca `text-ink-900` — este último inverte e some.

## Pontos de integração pendentes

Estes trechos funcionam hoje, mas estão prontos para receber back-end:

| O quê | Onde | Situação |
|---|---|---|
| Formulário de contato | `src/components/Contato.tsx` | Monta a mensagem e abre o WhatsApp. Defina `FORM_ENDPOINT` para enviar a um back-end antes disso. |
| Consulta de placa | `src/components/home/PlacaConsole.tsx` | Demonstração ilustrativa (marcada como tal na interface). Ligar à API da base oficial. |
| Área do cliente / Gestão | rota `/gestao` | Landing de vendas. O app autenticado é um produto à parte. |
| CNPJ no rodapé | `src/components/Footer.tsx` | Placeholder — substituir pelo número real. |

## Acessibilidade

Skip link, foco visível em toda a interface, alvos de toque ≥ 44px, contraste
AA no texto sobre fundo escuro e `prefers-reduced-motion` respeitado (todas as
animações, incluindo os contadores, param).
