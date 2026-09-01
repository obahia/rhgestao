import { stockPhotos } from "./stock-photos";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Por que RH+", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const painPoints = [
  "Controlar vencimento de ASO de dezenas — ou centenas — de colaboradores.",
  "Agendar admissionais, periódicos e demissionais sem atrasar contratações.",
  "Manter PGR e PCMSO atualizados e prontos para fiscalização.",
  "Enviar os eventos de SST no eSocial dentro do prazo.",
] as const;

export type Service = {
  index: string;
  title: string;
  summary: string;
  items: string[];
  photo: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Medicina Ocupacional",
    summary:
      "Os exames e o acompanhamento clínico que garantem que cada colaborador está apto para o trabalho — e que sua empresa está com a documentação em dia.",
    photo: stockPhotos.clinicalConsult,
    items: [
      "PCMSO",
      "ASO — admissional, periódico e demissional",
      "Exame de retorno ao trabalho",
      "Exame de mudança de função ou de risco",
      "Avaliação ocupacional para PCD",
      "Exames complementares — audiometria, acuidade visual, ECG e outros",
      "Acompanhamento ocupacional contínuo",
    ],
  },
  {
    index: "02",
    title: "Segurança do Trabalho",
    summary:
      "Identificação, avaliação e controle dos riscos da sua operação, com suporte técnico presente — não só um relatório entregue uma vez por ano.",
    photo: stockPhotos.safetyVestsGroup,
    items: [
      "PGR — Programa de Gerenciamento de Riscos",
      "Inventário de riscos ocupacionais",
      "Acompanhamento técnico em campo",
      "Programas de prevenção específicos por atividade",
    ],
  },
  {
    index: "03",
    title: "eSocial / SST",
    summary:
      "Os eventos de Saúde e Segurança do Trabalho enviados no prazo certo, com a informação organizada para não gerar inconsistência com o eSocial.",
    photo: stockPhotos.documentSigning,
    items: [
      "Gestão dos eventos S-2210, S-2220 e S-2240",
      "Organização das informações de SST",
      "Suporte direto ao RH e ao Departamento Pessoal",
      "Acompanhamento de obrigações e prazos",
    ],
  },
  {
    index: "04",
    title: "Gestão Ocupacional",
    summary:
      "A rotina que costuma sobrar para o RH — exames, documentos, renovações — organizada e acompanhada pela nossa equipe, do início ao fim.",
    photo: stockPhotos.documentReview,
    items: [
      "Acompanhamento individual de colaboradores",
      "Controle de vencimentos e renovações",
      "Centralização de documentos e laudos",
      "Suporte contínuo às demandas do RH",
    ],
  },
];

export const onlineSystemFeatures = [
  {
    icon: "monitor",
    title: "Portal online",
    description: "Exames, vencimentos e documentos consultados sem precisar ligar.",
  },
  {
    icon: "send",
    title: "eSocial integrado",
    description: "Eventos de SST organizados e enviados sem redigitar em duas ferramentas.",
  },
  {
    icon: "fingerprint",
    title: "Biometria digital",
    description: "Cada exame confirmado pela digital de quem foi atendido — sem fraude.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Sua empresa fala com a RH+",
    description:
      "Você nos conta o tamanho da operação, os cargos e as funções envolvidas.",
  },
  {
    index: "02",
    title: "Entendemos sua operação e os riscos",
    description:
      "Levantamos os riscos ocupacionais e o que a legislação exige para o seu setor.",
  },
  {
    index: "03",
    title: "Organizamos exames e documentação",
    description:
      "PCMSO, PGR, ASOs e os eventos de eSocial ficam sob controle, com prazos definidos.",
  },
  {
    index: "04",
    title: "Acompanhamos sua empresa continuamente",
    description:
      "Renovações, novas admissões e mudanças na operação — a RH+ segue junto.",
  },
] as const;

export const differentiators = [
  {
    title: "Identidade confirmada por biometria",
    description:
      "Sem fraude de identidade no exame. O que sua empresa apresenta na fiscalização bate com quem foi atendido de verdade.",
  },
  {
    title: "Tudo com o mesmo parceiro",
    description:
      "Medicina, segurança, eSocial e gestão — sem dividir contrato entre três fornecedores diferentes.",
  },
  {
    title: "Atendimento também à tarde",
    description:
      "Pouco comum entre clínicas ocupacionais em Jacarepaguá. Agenda sem travar a produção.",
  },
  {
    title: "Estrutura local, não central de atendimento",
    description:
      "Você fala com quem conhece a sua empresa, no Rio de Janeiro — não com um call center genérico.",
  },
] as const;

export const faqItems = [
  {
    question: "O que é medicina ocupacional?",
    answer:
      "É a área da medicina voltada à saúde do trabalhador dentro do ambiente de trabalho. Ela avalia se o colaborador está apto para exercer sua função e acompanha sua saúde ao longo do vínculo com a empresa, por meio de exames como o ASO e programas como o PCMSO.",
  },
  {
    question: "Quais exames ocupacionais uma empresa precisa realizar?",
    answer:
      "Em geral, admissional, periódico, de retorno ao trabalho, de mudança de função ou de risco e demissional — além de exames complementares como audiometria e acuidade visual, quando a função exige. A frequência e os exames complementares variam de acordo com os riscos da função e o que consta no PCMSO da empresa.",
  },
  {
    question: "O que é PCMSO?",
    answer:
      "É o Programa de Controle Médico de Saúde Ocupacional, obrigatório para empresas com empregados CLT. Ele define quais exames cada função exige e organiza o acompanhamento da saúde dos colaboradores ao longo do tempo.",
  },
  {
    question: "O que é PGR?",
    answer:
      "É o Programa de Gerenciamento de Riscos, que substituiu o antigo PPRA. Ele identifica, avalia e define medidas de controle para os riscos ocupacionais presentes na empresa, servindo de base para o PCMSO e para as ações de segurança do trabalho.",
  },
  {
    question: "A RH+ atende quais regiões?",
    answer:
      "Atendemos empresas no Rio de Janeiro e região metropolitana. Fale com a nossa equipe para confirmar a cobertura para o seu município ou unidade.",
  },
  {
    question: "A RH+ realiza exames admissionais e demissionais?",
    answer:
      "Sim. Organizamos e acompanhamos todo o ciclo de exames ocupacionais — admissional, periódico, mudança de função, retorno ao trabalho e demissional — conforme o PCMSO da sua empresa.",
  },
  {
    question: "Como solicitar atendimento para minha empresa?",
    answer:
      "Você pode solicitar um orçamento pelo formulário desta página ou falar diretamente com a nossa equipe pelo WhatsApp. Vamos entender o porte da sua empresa e os riscos da operação antes de propor o plano de atendimento.",
  },
  {
    question: "O que é SST no eSocial?",
    answer:
      "É o conjunto de eventos do eSocial relacionados à Saúde e Segurança do Trabalho — como exames ocupacionais, riscos ambientais e monitoramento da saúde — que as empresas precisam transmitir ao governo dentro de prazos definidos.",
  },
] as const;

export const aboutGallery = [
  { photo: stockPhotos.teamDiscussion, caption: "Equipe RH+" },
  { photo: stockPhotos.workspace, caption: "Rotina organizada" },
  { photo: stockPhotos.deskHandshake, caption: "Atendimento próximo" },
] as const;

export const testimonials = [
  {
    name: "Flávia F S Tavares",
    localGuide: false,
    quote:
      "Super atenciosos, educados e bastante solícitos, sem contar que é a única em Jacarepaguá que faz atendimento no período da tarde. Valor justo.",
  },
  {
    name: "Fillipe Neves",
    localGuide: true,
    quote:
      "Sempre fui bem atendido no espaço. O ambiente é confortável. O atendimento é rápido e eficaz desde a recepção até a consulta com o profissional da saúde.",
  },
  {
    name: "Michelle Magnavita",
    localGuide: true,
    quote: "Ótimo atendimento. Todos os funcionários são muito atenciosos e cuidadosos.",
  },
  {
    name: "Adan Zito",
    localGuide: true,
    quote: "Excelente atendimento, ágil e eficiente. Recomendo!",
  },
  {
    name: "Julia Davila",
    localGuide: false,
    quote: "Ótima empresa, recepcionista Natália muito simpática. Ótima equipe.",
  },
  {
    name: "Jeferson Teófilo",
    localGuide: false,
    quote:
      "Ótimo atendimento. São super rápidos e atenciosos conosco. Indico a todos — obrigado pela ótima atenção.",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
