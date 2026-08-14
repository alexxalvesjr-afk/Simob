/** Conteúdo das páginas internas das verticais. */

/* ------------------------------------------------------------------ */
/*  ACADEMY                                                            */
/* ------------------------------------------------------------------ */

export type Curso = {
  nome: string;
  categoria: string;
  carga: string;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  preco: string;
  de?: string;
  desc: string;
  selo?: "Mais vendido" | "Novo" | "Destaque";
};

export const cursos: readonly Curso[] = [
  {
    nome: "Capacitação para Vistoriador Automotivo ECV",
    categoria: "Vistoria veicular",
    carga: "40h",
    nivel: "Iniciante",
    preco: "R$ 1.299",
    de: "R$ 1.499",
    desc: "Formação completa para atuar em Empresas Credenciadas de Vistoria junto ao DETRAN.",
    selo: "Mais vendido",
  },
  {
    nome: "Gestão de Frotas para Empresas",
    categoria: "Gestão empresarial",
    carga: "24h",
    nivel: "Intermediário",
    preco: "R$ 697",
    desc: "Reduza custos e aumente a produtividade da frota com processo, indicador e controle documental.",
    selo: "Novo",
  },
  {
    nome: "Reciclagem para Vistoriador Automotivo ECV",
    categoria: "Vistoria veicular",
    carga: "20h",
    nivel: "Intermediário",
    preco: "R$ 1.800",
    de: "R$ 2.000",
    desc: "Atualização obrigatória para quem já atua como vistoriador e precisa renovar o credenciamento.",
  },
  {
    nome: "Curso de Reciclagem para Condutores Infratores",
    categoria: "Reciclagem",
    carga: "45h",
    nivel: "Iniciante",
    preco: "R$ 199",
    desc: "Obrigatório para condutores com suspensão ou cassação da CNH. Cumpra a exigência e recupere o direito de dirigir.",
    selo: "Mais vendido",
  },
  {
    nome: "Condutores de Veículos de Emergência",
    categoria: "Condutores especiais",
    carga: "50h",
    nivel: "Intermediário",
    preco: "R$ 375",
    desc: "Capacitação obrigatória para condutores de ambulâncias, viaturas policiais e demais veículos de emergência.",
  },
  {
    nome: "Condutores de Transporte Coletivo de Passageiros",
    categoria: "Condutores especiais",
    carga: "50h",
    nivel: "Iniciante",
    preco: "R$ 375",
    desc: "Habilitação complementar obrigatória para motoristas de ônibus, micro-ônibus e vans.",
  },
  {
    nome: "Condutores de Transporte Escolar",
    categoria: "Condutores especiais",
    carga: "50h",
    nivel: "Iniciante",
    preco: "R$ 375",
    desc: "Exigência legal para quem transporta crianças e adolescentes. Segurança e responsabilidade civil.",
  },
  {
    nome: "Condutores de Produtos Perigosos",
    categoria: "Condutores especiais",
    carga: "50h",
    nivel: "Intermediário",
    preco: "R$ 420",
    desc: "Legislação, procedimentos de emergência e sinalização para o transporte de cargas perigosas.",
  },
  {
    nome: "Vistoria Cautelar Veicular",
    categoria: "Vistoria veicular",
    carga: "20h",
    nivel: "Intermediário",
    preco: "R$ 890",
    desc: "Identifique adulterações, fraudes e alterações estruturais em veículos usados.",
  },
] as const;

export const categoriasCurso = [
  "Todos",
  "Vistoria veicular",
  "Condutores especiais",
  "Gestão empresarial",
  "Reciclagem",
] as const;

export const faqAcademy = [
  {
    p: "O certificado tem validade em todo o Brasil?",
    r: "Sim. Os cursos da SiMoB Academy seguem as diretrizes do CONTRAN e do DETRAN, e o certificado é aceito em todo o território nacional. Ele é emitido em até 5 dias úteis após a conclusão.",
  },
  {
    p: "As aulas são presenciais ou online?",
    r: "Depende do curso. Formações teóricas como reciclagem e condutores especiais são online com tutoria. Cursos de vistoria têm módulo prático presencial na nossa unidade em Salvador.",
  },
  {
    p: "Quanto tempo tenho para concluir?",
    r: "Você tem 90 dias de acesso a partir da matrícula. O conteúdo fica liberado integralmente desde o primeiro dia, então dá para acelerar se quiser terminar antes.",
  },
  {
    p: "Preciso de experiência prévia?",
    r: "Os cursos marcados como Iniciante não exigem experiência — só CNH válida na categoria correspondente. Os intermediários pedem atuação prévia na área, informada no ato da matrícula.",
  },
  {
    p: "A empresa pode matricular a equipe inteira?",
    r: "Sim, e é comum. Turmas fechadas a partir de 8 alunos têm desconto progressivo, relatório de conclusão por participante e possibilidade de aula na sede da sua empresa.",
  },
];

/* ------------------------------------------------------------------ */
/*  CONSULTORIA                                                        */
/* ------------------------------------------------------------------ */

export const servicosConsultoria = [
  {
    titulo: "Abertura e regularização de empresas",
    texto:
      "CNPJ, alvarás, inscrição estadual e enquadramento tributário para quem vai abrir no setor automotivo.",
    prazo: "15 a 30 dias",
  },
  {
    titulo: "Credenciamento DETRAN e ECV",
    texto:
      "Conduzimos todo o processo de credenciamento de Empresa Credenciada de Vistoria — da estrutura física à documentação.",
    prazo: "60 a 90 dias",
  },
  {
    titulo: "Implantação de ISO 9001",
    texto:
      "Mapeamento de processos, manual da qualidade e preparação para auditoria de certificação.",
    prazo: "4 a 6 meses",
  },
  {
    titulo: "Auditoria e adequação de processos",
    texto:
      "Diagnóstico da operação atual, plano de ação e acompanhamento até a conformidade.",
    prazo: "30 a 60 dias",
  },
  {
    titulo: "Consultoria para leiloeiros e pátios",
    texto:
      "Regularização documental, fluxo de transferência e conformidade com a legislação de leilões.",
    prazo: "Sob análise",
  },
  {
    titulo: "Planejamento e expansão",
    texto:
      "Estudo de viabilidade para abrir filial, nova unidade ou entrar numa nova vertical do setor.",
    prazo: "Sob análise",
  },
] as const;

export const faqConsultoria = [
  {
    p: "Vocês acompanham até o credenciamento sair?",
    r: "Sim. O contrato só encerra quando o credenciamento é publicado. Acompanhamos vistorias do órgão, exigências complementares e recursos, se necessário.",
  },
  {
    p: "Quanto custa credenciar uma ECV?",
    r: "O investimento varia conforme a estrutura que a empresa já tem. Fazemos um diagnóstico gratuito e apresentamos o orçamento fechado, com as taxas do órgão discriminadas à parte.",
  },
  {
    p: "Atendem empresas de fora da Bahia?",
    r: "Sim, para abertura de empresa, ISO 9001 e adequação de processos — feitos remotamente. Credenciamento junto ao DETRAN atendemos presencialmente apenas na Bahia.",
  },
  {
    p: "Já tenho empresa aberta. Serve para mim?",
    r: "Serve, e é a maioria dos casos. Boa parte dos nossos clientes já opera e busca credenciamento, certificação ou adequação para poder crescer.",
  },
];

/* ------------------------------------------------------------------ */
/*  LEILÕES                                                            */
/* ------------------------------------------------------------------ */

export const garantiasLeilao = [
  {
    titulo: "Lotes auditados",
    texto: "Todo bem passa por conferência documental antes de entrar no leilão.",
  },
  {
    titulo: "Lances registrados",
    texto: "Cada lance fica gravado e auditável. Sem lance fantasma, sem surpresa.",
  },
  {
    titulo: "Transferência inclusa",
    texto: "Arrematou? A SiMoB DOC assume a documentação e entrega o veículo no seu nome.",
  },
  {
    titulo: "Venda em dias, não meses",
    texto: "Quem anuncia conosco tem alcance de centenas de compradores qualificados.",
  },
] as const;

export const faqLeiloes = [
  {
    p: "Como faço para dar um lance?",
    r: "Basta se cadastrar, enviar documento com foto e aguardar a aprovação — costuma sair no mesmo dia. Depois disso você acompanha os lotes abertos e dá lances direto pelo painel.",
  },
  {
    p: "Posso ver o veículo antes de arrematar?",
    r: "Sim. Todo leilão tem período de visitação presencial no pátio, com data divulgada no edital. Também publicamos fotos detalhadas e o laudo de cada lote.",
  },
  {
    p: "Quem paga a transferência?",
    r: "A transferência é responsabilidade do arrematante, mas fica com a SiMoB DOC e entra com condição especial — você já sai do leilão sabendo o custo total.",
  },
  {
    p: "Quero vender meu bem. Como funciona?",
    r: "Você se cadastra como comitente, nossa equipe avalia o bem, define o lance mínimo com você e inclui no próximo leilão. A comissão só é cobrada sobre a venda efetivada.",
  },
];

/* ------------------------------------------------------------------ */
/*  PSICOLOGIA                                                         */
/* ------------------------------------------------------------------ */

export const atendimentosPsico = [
  {
    titulo: "Terapia individual",
    texto:
      "Acompanhamento contínuo para ansiedade, estresse ocupacional, burnout e questões pessoais.",
    formato: "Online ou presencial",
  },
  {
    titulo: "Programas para frotas",
    texto:
      "Cuidado estruturado para equipes de motoristas — quem passa 10 horas no trânsito carrega o que ninguém vê.",
    formato: "In company",
  },
  {
    titulo: "Avaliação psicológica",
    texto:
      "Avaliação para condutores especiais, processos seletivos e acompanhamento pós-acidente.",
    formato: "Presencial",
  },
  {
    titulo: "Rodas de conversa",
    texto:
      "Encontros em grupo sobre saúde mental no trânsito, sono, pressão por prazo e convivência.",
    formato: "In company",
  },
] as const;

export const passosPsico = [
  {
    n: "01",
    titulo: "Avaliação inicial",
    texto: "Você conta o que está buscando num formulário curto e sigiloso.",
  },
  {
    n: "02",
    titulo: "Sessão experimental",
    texto: "Uma conversa introdutória sem custo para conhecer o profissional e ver se combina.",
  },
  {
    n: "03",
    titulo: "Início do acompanhamento",
    texto: "Definição de objetivos, frequência e formato — online ou presencial.",
  },
  {
    n: "04",
    titulo: "Evolução contínua",
    texto: "Acompanhamento regular com revisão periódica do que está funcionando.",
  },
] as const;

export const faqPsico = [
  {
    p: "O atendimento é sigiloso?",
    r: "Integralmente. O sigilo profissional é garantido pelo Código de Ética do Psicólogo. Em programas para empresas, a contratante recebe apenas indicadores agregados — nunca o conteúdo das sessões.",
  },
  {
    p: "Preciso ser do setor automotivo?",
    r: "Não. Nosso olhar nasceu do setor, mas o atendimento é aberto a qualquer pessoa. Só significa que entendemos bem a rotina de quem vive de estrada e de oficina.",
  },
  {
    p: "Quanto custa a sessão?",
    r: "A primeira conversa é gratuita. A partir dela, o valor é definido conforme a modalidade e a frequência, com opção de valor social para casos avaliados individualmente.",
  },
  {
    p: "Atendem por vídeo?",
    r: "Sim. O atendimento online é feito em plataforma segura e tem a mesma validade do presencial, conforme resolução do Conselho Federal de Psicologia.",
  },
];
