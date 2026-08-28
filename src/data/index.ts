export const WHATSAPP_NUMBER = "244938435630";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DEFAULT_MESSAGE = "Olá, ResolvaTech! Gostaria de falar sobre um projeto.";
export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const getWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

export const COMPANY_YEAR = 2023;
export const CURRENT_YEAR = new Date().getFullYear();
export const YEARS_OF_OPERATION = CURRENT_YEAR - COMPANY_YEAR;

export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  cta: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "sites",
    title: "Sites",
    description:
      "Sites institucionais, landing pages e experiências digitais desenvolvidas para posicionar marcas e gerar resultados.",
    technologies: ["Next.js", "React", "Tailwind"],
    cta: "Quero um site →",
    whatsappMessage: "Olá, ResolvaTech! Tenho interesse em desenvolver um site.",
  },
  {
    id: "sistemas",
    title: "Sistemas",
    description:
      "Plataformas e sistemas empresariais personalizados para automatizar processos e centralizar operações.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    cta: "Quero um sistema →",
    whatsappMessage: "Olá, ResolvaTech! Tenho interesse em desenvolver um sistema.",
  },
  {
    id: "aplicativos",
    title: "Aplicativos",
    description:
      "Aplicativos mobile rápidos, modernos e pensados para oferecer uma experiência simples e eficiente.",
    technologies: ["React Native", "Flutter", "Node.js"],
    cta: "Quero um aplicativo →",
    whatsappMessage: "Olá, ResolvaTech! Tenho interesse em desenvolver um aplicativo.",
  },
  {
    id: "lojas",
    title: "Lojas Virtuais",
    description:
      "E-commerces rápidos, escaláveis e preparados para transformar visitantes em clientes.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    cta: "Quero vender online →",
    whatsappMessage: "Olá, ResolvaTech! Tenho interesse em criar uma loja virtual.",
  },
];

export interface Project {
  id: string;
  client: string;
  type: string;
  metric: string;
  description: string;
  size: "large" | "normal";
}

export const projects: Project[] = [
  {
    id: "alpha",
    client: "Cliente Alpha",
    type: "Plataforma SaaS",
    metric: "+38% produtividade",
    description: "Plataforma completa de gestão com dashboards inteligentes e automação de processos.",
    size: "large",
  },
  {
    id: "beta",
    client: "Cliente Beta",
    type: "E-commerce",
    metric: "+62% conversão",
    description: "Loja virtual de alta performance com experiência de compra otimizada.",
    size: "normal",
  },
  {
    id: "gamma",
    client: "Cliente Gamma",
    type: "Sistema empresarial",
    metric: "-41% tempo operacional",
    description: "Sistema integrado que centralizou operações e reduziu retrabalho.",
    size: "normal",
  },
  {
    id: "delta",
    client: "Cliente Delta",
    type: "Aplicativo mobile",
    metric: "+25k usuários",
    description: "App mobile intuitivo que escalou para milhares de usuários ativos.",
    size: "large",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Imersão",
    description: "Entendemos o negócio, os usuários, os problemas e os objetivos.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Transformamos necessidades em arquitetura, funcionalidades, prioridades e roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Criamos uma interface moderna, intuitiva e alinhada à identidade da marca.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Transformamos o projeto em software real utilizando tecnologias modernas.",
  },
  {
    number: "05",
    title: "Testes",
    description: "Validamos funcionalidades, performance, responsividade e experiência.",
  },
  {
    number: "06",
    title: "Publicação",
    description: "Colocamos a solução em produção com configuração adequada de infraestrutura.",
  },
  {
    number: "07",
    title: "Suporte",
    description: "Continuamos acompanhando, corrigindo, evoluindo e mantendo o produto.",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "A ResolvaTech conseguiu transformar um processo que levava horas em algo simples e automatizado.",
    name: "João Silva",
    role: "CEO",
    company: "Empresa Alpha",
  },
  {
    id: "2",
    quote:
      "Mais do que desenvolver o sistema, eles entenderam realmente o nosso negócio.",
    name: "Mariana Costa",
    role: "Diretora",
    company: "Empresa Beta",
  },
  {
    id: "3",
    quote:
      "O resultado ficou muito acima do que imaginávamos quando iniciamos o projeto.",
    name: "Carlos Mendes",
    role: "Founder",
    company: "Empresa Gamma",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "React Native",
  "Flutter",
  "Figma",
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Projetos entregues" },
  { value: 10, suffix: "+", label: "Clientes recorrentes" },
  { value: YEARS_OF_OPERATION, suffix: "+", label: "Anos de operação" },
  { value: 2, suffix: "+", label: "Países atendidos" },
];

export const recognitionStats: Stat[] = [
  { value: 15, suffix: "+", label: "PROJETOS ENTREGUES" },
  { value: 98, suffix: "%", label: "TAXA DE SATISFAÇÃO" },
  { value: YEARS_OF_OPERATION, suffix: "+", label: "ANOS DE MERCADO" },
  { value: 2, suffix: "+", label: "PAÍSES ATENDIDOS" },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Trabalho", href: "#trabalho" },
  { label: "Stack", href: "#stack" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Trabalho", href: "#trabalho" },
  { label: "Stack", href: "#stack" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
