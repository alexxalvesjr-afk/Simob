/**
 * Fonte única de conteúdo do Grupo SiMoB.
 * Dados institucionais extraídos do perfil @simob.br e do site atual.
 * Alterar copy aqui reflete em todo o site.
 */

export const empresa = {
  nome: "Grupo SiMoB",
  assinatura: "Centro de Soluções em Mobilidade",
  bio: "Soluções inteligentes em mobilidade, regularização veicular, capacitação, leilão e consultoria.",
  slogan: "Sua tranquilidade é a nossa prioridade.",
  promessa: "Agilidade, segurança e confiança para você rodar tranquilo.",
  endereco: {
    linha1: "Av. Tancredo Neves, 274 — Caminho das Árvores",
    linha2: "Salvador — BA, 41100-800",
    completo:
      "Av. Tancredo Neves, 274 — Caminho das Árvores, Salvador — BA, 41100-800",
    maps: "https://maps.google.com/?q=Av.+Tancredo+Neves,+274,+Caminho+das+Arvores,+Salvador+BA",
  },
  contato: {
    whatsapp: "5571981671212",
    whatsappLabel: "(71) 98167-1212",
    telefone2: "(71) 99205-8112",
    fixo: "(71) 3193-3597",
    email: "contato@gruposimob.com.br",
  },
  social: {
    instagram: "https://instagram.com/simob.br",
    facebook: "https://facebook.com/simob.br",
  },
} as const;

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${empresa.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/* ------------------------------------------------------------------ */
/*  NAVEGAÇÃO                                                          */
/* ------------------------------------------------------------------ */

export const navegacao = [
  { label: "Documentação", href: "/doc", desc: "Despachante veicular completo" },
  { label: "Academy", href: "/academy", desc: "Cursos e certificações" },
  { label: "Consultoria", href: "/consultoria", desc: "Abertura e credenciamento" },
  { label: "Leilões", href: "/leiloes", desc: "Compra e venda com garantia" },
  { label: "Psicologia", href: "/psicologia", desc: "Saúde mental do setor" },
  { label: "Gestão", href: "/gestao", desc: "Plataforma para frotas e ECVs", destaque: true },
] as const;

/* ------------------------------------------------------------------ */
/*  PROVA SOCIAL / CREDENCIAIS                                         */
/* ------------------------------------------------------------------ */

export const credenciais = [
  "Credenciado DETRAN-BA",
  "Parceiro oficial DEKRA",
  "Certificação ISO 9001",
  "QMS Academy",
  "+10 anos em Salvador",
  "5.000+ clientes atendidos",
] as const;

export const numeros = [
  { valor: "10", sufixo: "+", label: "anos de estrada", desc: "Desde 2015 regularizando veículos na Bahia" },
  { valor: "5", sufixo: "mil+", label: "clientes atendidos", desc: "Pessoas físicas, frotas e concessionárias" },
  { valor: "48", sufixo: "h", label: "prazo médio", desc: "Da solicitação ao documento na sua mão" },
  { valor: "98", sufixo: "%", label: "aprovação na 1ª via", desc: "Processo conferido antes de dar entrada" },
] as const;

/* ------------------------------------------------------------------ */
/*  AS CINCO VERTICAIS                                                 */
/* ------------------------------------------------------------------ */

export type Vertical = {
  id: string;
  slug: string;
  eyebrow: string;
  nome: string;
  headline: string;
  descricao: string;
  bullets: readonly string[];
  cta: string;
  destaque?: boolean;
  cor: string;
};

export const verticais: readonly Vertical[] = [
  {
    id: "doc",
    slug: "/doc",
    eyebrow: "Despachante veicular",
    nome: "SiMoB DOC",
    headline: "Documentação sem fila e sem DETRAN.",
    descricao:
      "Licenciamento, transferência, emplacamento e gestão de frotas. A gente entra na fila para você — e te avisa quando estiver pronto.",
    bullets: [
      "Transferência de propriedade",
      "Emplacamento Mercosul",
      "Licenciamento anual e CRLV digital",
      "Gestão documental de frotas",
    ],
    cta: "Resolver meu documento",
    destaque: true,
    cor: "#d4a017",
  },
  {
    id: "academy",
    slug: "/academy",
    eyebrow: "Cursos e treinamentos",
    nome: "SiMoB Academy",
    headline: "Certificação que o mercado reconhece.",
    descricao:
      "Formação para vistoriadores, condutores especiais e gestores de frota. Certificado válido em todo o território nacional.",
    bullets: [
      "Vistoriador automotivo ECV",
      "Condutores de emergência e escolar",
      "Reciclagem para infratores",
      "Gestão de frotas para empresas",
    ],
    cta: "Ver cursos",
    cor: "#3b82f6",
  },
  {
    id: "consultoria",
    slug: "/consultoria",
    eyebrow: "Consultoria automotiva",
    nome: "SiMoB Consultoria",
    headline: "Do CNPJ ao credenciamento DETRAN.",
    descricao:
      "Abertura de empresas, credenciamento de ECV e certificação ISO 9001 — com quem já passou por todo o processo.",
    bullets: [
      "Abertura e regularização de empresas",
      "Credenciamento DETRAN e ECV",
      "Implantação de ISO 9001",
      "Adequação e auditoria de processos",
    ],
    cta: "Falar com especialista",
    cor: "#10b981",
  },
  {
    id: "leiloes",
    slug: "/leiloes",
    eyebrow: "Leilões de veículos",
    nome: "SiMoB Leilões",
    headline: "Arremate com laudo e transferência inclusos.",
    descricao:
      "Leilões online e presenciais auditados. E quando você arremata, a documentação já sai resolvida pela SiMoB DOC.",
    bullets: [
      "Lotes auditados e com laudo",
      "Lances 100% registrados",
      "Transferência feita pela SiMoB DOC",
      "Cadastro gratuito de comitente",
    ],
    cta: "Ver leilões",
    cor: "#ef4444",
  },
  {
    id: "psicologia",
    slug: "/psicologia",
    eyebrow: "Saúde mental",
    nome: "SiMoB Psicologia",
    headline: "Quem dirige o Brasil também precisa de cuidado.",
    descricao:
      "Atendimento psicológico presencial e online para motoristas, operadores e equipes do setor de mobilidade.",
    bullets: [
      "Atendimento online e presencial",
      "Programas para frotas e equipes",
      "Avaliação e acompanhamento contínuo",
      "Sessão experimental sem custo",
    ],
    cta: "Agendar conversa",
    cor: "#a855f7",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  SERVIÇOS DOC — com prazos reais (transparência = conversão)        */
/* ------------------------------------------------------------------ */

export const servicosDoc = [
  { nome: "Consulta de débitos e restrições", prazo: "1 dia útil", categoria: "Consulta" },
  { nome: "Transferência de propriedade", prazo: "10 dias úteis", categoria: "Transferência" },
  { nome: "Emplacamento de veículo novo", prazo: "5 dias úteis", categoria: "Emplacamento" },
  { nome: "Segunda via de CRLV", prazo: "3 dias úteis", categoria: "Documento" },
  { nome: "Licenciamento anual", prazo: "2 dias úteis", categoria: "Documento" },
  { nome: "Baixa de veículo", prazo: "8 dias úteis", categoria: "Baixa" },
  { nome: "Emplacamento de reboque e trailer", prazo: "7 dias úteis", categoria: "Emplacamento" },
  { nome: "Placa Mercosul (remarcação)", prazo: "3 dias úteis", categoria: "Emplacamento" },
  { nome: "Isenção PCD / IPI / ICMS", prazo: "20 dias úteis", categoria: "Isenção" },
  { nome: "Emplacamento de veículo elétrico", prazo: "5 dias úteis", categoria: "Emplacamento" },
  { nome: "ATPV-e (intenção de venda)", prazo: "1 dia útil", categoria: "Transferência" },
  { nome: "Gestão documental de frota", prazo: "Contínuo", categoria: "Frota" },
] as const;

/* ------------------------------------------------------------------ */
/*  COMO FUNCIONA                                                      */
/* ------------------------------------------------------------------ */

export const passos = [
  {
    n: "01",
    titulo: "Você conta o que precisa",
    texto:
      "Pelo WhatsApp ou pelo site, em menos de dois minutos. Sem formulário quilométrico.",
  },
  {
    n: "02",
    titulo: "A gente confere antes de dar entrada",
    texto:
      "Nossa equipe revisa cada documento. É por isso que 98% dos processos passam de primeira.",
  },
  {
    n: "03",
    titulo: "Você acompanha em tempo real",
    texto:
      "Cada etapa aparece no seu painel e chega no seu WhatsApp. Sem precisar ligar para saber.",
  },
  {
    n: "04",
    titulo: "Recebe pronto onde estiver",
    texto:
      "Documento digital na hora e via física entregue em Salvador e Região Metropolitana.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  DEPOIMENTOS                                                        */
/* ------------------------------------------------------------------ */

export const depoimentos = [
  {
    texto:
      "Transferi dois carros da empresa sem sair do escritório. O acompanhamento pelo WhatsApp resolveu o que antes me custava dois dias de trabalho.",
    autor: "Ricardo Menezes",
    cargo: "Sócio, transportadora em Salvador",
  },
  {
    texto:
      "Fiz o curso de vistoriador na Academy e hoje trabalho credenciado numa ECV. O certificado abriu a porta que eu precisava.",
    autor: "Jaqueline Souza",
    cargo: "Vistoriadora automotiva",
  },
  {
    texto:
      "A consultoria conduziu todo o credenciamento da nossa ECV junto ao DETRAN. Saiu no prazo e sem retrabalho.",
    autor: "Anderson Lima",
    cargo: "Diretor, centro de vistoria",
  },
  {
    texto:
      "Uso o painel de gestão para as 40 placas da frota. Recebo o aviso do licenciamento antes de vencer — nunca mais tomei multa por atraso.",
    autor: "Patrícia Andrade",
    cargo: "Gestora de frota",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    p: "Preciso ir até o DETRAN em algum momento?",
    r: "Na maioria dos serviços, não. Transferência, licenciamento e segunda via são resolvidos integralmente por nós. Quando a vistoria presencial for obrigatória, agendamos no horário que funcionar para você e indicamos a ECV mais próxima.",
  },
  {
    p: "Quanto tempo leva o licenciamento?",
    r: "O licenciamento anual sai em média em 2 dias úteis após a quitação dos débitos. Assim que é emitido, você recebe o CRLV digital no WhatsApp — antes mesmo da via física.",
  },
  {
    p: "Vocês atendem frotas e empresas?",
    r: "Sim. É uma das nossas maiores operações. Frotas contam com gestor dedicado, painel de acompanhamento, alertas de vencimento e faturamento mensal consolidado em vez de pagamento por processo.",
  },
  {
    p: "Como acompanho o andamento da minha solicitação?",
    r: "Cada solicitação gera uma OS com link de acompanhamento. Você vê a etapa atual no painel e recebe notificação no WhatsApp a cada mudança de status.",
  },
  {
    p: "Atendem fora de Salvador?",
    r: "Atendemos toda a Bahia. Em Salvador e Região Metropolitana fazemos coleta e entrega dos documentos físicos; nas demais cidades o processo corre digitalmente e a via física vai pelos Correios.",
  },
  {
    p: "Quais formas de pagamento vocês aceitam?",
    r: "Pix, cartão em até 12x e boleto. Para empresas, trabalhamos com faturamento mensal. O orçamento é fechado antes de qualquer cobrança — sem taxa surpresa no final.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  SaaS — SiMoB GESTÃO                                                */
/* ------------------------------------------------------------------ */

export const gestao = {
  headline: "A plataforma que controla a documentação da sua frota inteira.",
  sub: "Vencimentos, ordens de serviço, custos e documentos de cada placa — num painel só. Feito por despachante, para quem vive de frota.",
  recursos: [
    {
      titulo: "Alertas antes do vencimento",
      texto:
        "Licenciamento, IPVA e seguro avisam com 30, 15 e 7 dias de antecedência. Por e-mail e WhatsApp.",
    },
    {
      titulo: "Ordens de serviço rastreáveis",
      texto:
        "Cada processo tem status, responsável e histórico. Seu time para de perguntar 'como está o carro X'.",
    },
    {
      titulo: "Cofre de documentos",
      texto:
        "CRLV, ATPV, laudos e notas guardados por placa. Baixe qualquer documento em dois cliques.",
    },
    {
      titulo: "Custos por veículo",
      texto:
        "Quanto cada placa consumiu em taxas, multas e manutenção documental — com exportação para o financeiro.",
    },
    {
      titulo: "Multiusuário com permissões",
      texto:
        "Gestor, financeiro e operação enxergam só o que precisam. Auditoria completa de quem fez o quê.",
    },
    {
      titulo: "Integração com a SiMoB DOC",
      texto:
        "Abriu a OS no painel? Nossa equipe já recebe e executa. Plataforma e despachante no mesmo lugar.",
    },
  ],
  planos: [
    {
      nome: "Essencial",
      preco: "R$ 149",
      periodo: "/mês",
      desc: "Para quem administra as primeiras placas.",
      limite: "Até 10 veículos",
      itens: [
        "Alertas de vencimento",
        "Cofre de documentos",
        "1 usuário",
        "Suporte por WhatsApp",
      ],
    },
    {
      nome: "Frota",
      preco: "R$ 449",
      periodo: "/mês",
      desc: "O plano de quem opera frota de verdade.",
      limite: "Até 60 veículos",
      destaque: true,
      itens: [
        "Tudo do Essencial",
        "Ordens de serviço rastreáveis",
        "Relatório de custos por veículo",
        "5 usuários com permissões",
        "Gestor de conta dedicado",
      ],
    },
    {
      nome: "Corporativo",
      preco: "Sob medida",
      periodo: "",
      desc: "Frotas grandes, ECVs e concessionárias.",
      limite: "Veículos ilimitados",
      itens: [
        "Tudo do Frota",
        "API e integração com ERP",
        "Usuários ilimitados",
        "SLA contratual",
        "Onboarding assistido",
      ],
    },
  ],
} as const;
