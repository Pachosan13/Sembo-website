export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  answerFirst: string;
  includes: string[];
  certifications: string[];
  sectors: string[];
  faqs: FAQItem[];
  iconName: "Flame" | "Droplets" | "Zap" | "Cpu" | "Sun" | "Briefcase";
  summary: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: "Comercial y Retail" | "Residencial y PH" | "Institucional y Salud" | "Industrial" | "Energía y Solar";
  location: string;
  description: string;
  imageUrl: string;
  client: string;
  system: string;
}

export type RoutePath =
  | "/"
  | "/servicios/sistemas-contra-incendio-panama"
  | "/servicios/sistemas-de-bombeo-panama"
  | "/servicios/plantas-electricas-panama"
  | "/servicios/centros-de-control-de-motores-panama"
  | "/servicios/energia-solar-panama"
  | "/servicios/gerencia-de-proyectos-panama"
  | "/proyectos"
  | "/nosotros"
  | "/contacto"
  | "/preguntas-frecuentes";
