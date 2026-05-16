export const CB_BRAND = {
  name: "Fundación Carlos Basualto",
  shortName: "FCB",
  tagline: "Que la música docta llegue donde nunca ha llegado.",
  missionShort:
    "La Fundación Carlos Basualto nace para transformar una vida dedicada a la trompeta en una plataforma que democratiza el acceso a la música, llevando conciertos, formación y experiencias culturales a nuevos espacios.",
  trompetaValue: 5000,
  currency: "CLP",
  socialLinks: {
    instagram: "https://instagram.com/fundacioncarlosbasualto",
    facebook: "https://facebook.com/fundacioncarlosbasualto",
    youtube: "https://youtube.com/@carlosbasualto",
  },
  contact: {
    email: "contacto@fundacioncarlosbasualto.cl",
    phone: "+56 9 1234 5678",
  },
} as const;

export type ProyectoEstado = "activo" | "proximo" | "financiado" | "realizado";

export interface Proyecto {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionLarga?: string;
  imagen: string;
  video?: string;
  estado: ProyectoEstado;
  metaClp: number;
  recaudadoClp: number;
  trompetasDonadas: number;
  personasAlcanzadas?: number;
  fechaInicio?: string;
  fechaFin?: string;
  ubicacion?: string;
  tags?: string[];
}

export interface HitoTrayectoria {
  año: number;
  titulo: string;
  descripcion: string;
}

export interface ImpactoMetric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export const PROYECTO_ACTIVO: Proyecto = {
  id: "festival-musica-antigua-2026",
  slug: "festival-musica-antigua-2026",
  nombre: "Festival de Música Antigua 2026",
  descripcion:
    "Un festival dedicado al repertorio de los siglos XVI al XVIII, llevado a espacios públicos y colegios de Chile. Música barroca, renacentista y clásica temprana interpretada por músicos de primer nivel, de forma totalmente gratuita.",
  descripcionLarga: `El Festival de Música Antigua 2026 es una apuesta por acercar el repertorio histórico —barroco, renacentista y clásico temprano— a públicos que nunca antes han tenido la oportunidad de vivirlo en vivo.

Durante tres semanas, un conjunto de músicos especializados recorrerá colegios, plazas y centros culturales de distintas comunas de Chile, ofreciendo conciertos gratuitos con obras de Bach, Vivaldi, Händel, Telemann y otros compositores del período.

Cada presentación incluye una introducción en lenguaje simple: qué es la música antigua, por qué sigue siendo relevante hoy, y cómo estos sonidos de hace 300 años aún nos hablan. El objetivo no es solo entretener, sino despertar curiosidad y crear nuevas audiencias para la música docta en Chile.`,
  imagen: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=80",
  estado: "activo",
  metaClp: 3500000,
  recaudadoClp: 1190000,
  trompetasDonadas: 238,
  personasAlcanzadas: 0,
  ubicacion: "Santiago y Regiones, Chile",
  fechaInicio: "2026-03-01",
  fechaFin: "2026-03-21",
  tags: ["barroco", "música antigua", "festival", "gratuito", "patrimonio"],
};

export const PROYECTOS_MOCK: Proyecto[] = [
  PROYECTO_ACTIVO,
  {
    id: "conciertos-margenes-2025",
    slug: "conciertos-en-los-margenes",
    nombre: "Conciertos en los Márgenes",
    descripcion:
      "Un ciclo de 8 conciertos de música docta en comunas con bajo acceso cultural de la Región Metropolitana. Músicos de trayectoria llevando su arte directamente a colegios públicos, centros comunitarios y plazas de barrio.",
    imagen: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
    estado: "realizado",
    metaClp: 2500000,
    recaudadoClp: 2500000,
    trompetasDonadas: 500,
    personasAlcanzadas: 1200,
    ubicacion: "Región Metropolitana, Chile",
    tags: ["conciertos", "comunidades", "educación", "gratuito"],
  },
  {
    id: "talleres-docta-2025",
    slug: "talleres-musica-docta-ninos",
    nombre: "Talleres Docta para Niños",
    descripcion:
      "12 semanas de talleres de introducción a la música docta para niños y jóvenes de entre 8 y 16 años en tres comunas de Santiago.",
    imagen: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?w=800&q=80",
    estado: "proximo",
    metaClp: 1800000,
    recaudadoClp: 0,
    trompetasDonadas: 0,
    ubicacion: "Santiago, Chile",
    fechaInicio: "2025-10-01",
  },
  {
    id: "orquestas-jovenes-2024",
    slug: "apoyo-orquestas-jovenes",
    nombre: "Apoyo a Orquestas Juveniles",
    descripcion:
      "Financiamos instrumentos, arreglos y viáticos para tres orquestas juveniles de comunas sin recursos del Gran Santiago.",
    imagen: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
    estado: "financiado",
    metaClp: 3000000,
    recaudadoClp: 3000000,
    trompetasDonadas: 600,
    personasAlcanzadas: 85,
    ubicacion: "Gran Santiago, Chile",
  },
  {
    id: "encuentro-musicos-2024",
    slug: "encuentro-musicos-nuevos-talentos",
    nombre: "Encuentro: Maestros y Talentos",
    descripcion:
      "Jornadas de mentoría directa entre músicos consagrados y jóvenes talentos de distintas regiones de Chile.",
    imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    estado: "realizado",
    metaClp: 1200000,
    recaudadoClp: 1200000,
    trompetasDonadas: 240,
    personasAlcanzadas: 48,
    ubicacion: "Valparaíso y Santiago, Chile",
  },
];

export const HITOS_TRAYECTORIA: HitoTrayectoria[] = [
  { año: 1978, titulo: "Primeros pasos", descripcion: "Carlos comienza sus estudios formales de trompeta en el Conservatorio Nacional de Música de Chile, bajo la guía del maestro Luis Alcázar." },
  { año: 1985, titulo: "Primer puesto en orquesta sinfónica", descripcion: "Ingresa como trompeta principal a la Orquesta Filarmónica de Santiago, iniciando una carrera de más de tres décadas en la escena musical chilena." },
  { año: 1992, titulo: "Formación en Europa", descripcion: "Becado para perfeccionamiento en la Hochschule für Musik de Múnich, Alemania, donde trabaja con referentes mundiales de la trompeta." },
  { año: 1998, titulo: "Gira latinoamericana", descripcion: "Primera gira por Argentina, Brasil, Colombia y México representando a Chile en festivales de música docta." },
  { año: 2005, titulo: "Inicio de docencia", descripcion: "Comienza a ejercer como profesor en la Facultad de Artes de la Universidad de Chile, formando a una nueva generación de trompetistas." },
  { año: 2012, titulo: "Premio Nacional", descripcion: "Recibe el Premio a la Trayectoria Musical del Consejo de la Cultura y las Artes de Chile, reconocimiento a 30 años de dedicación." },
  { año: 2020, titulo: "Música en pandemia", descripcion: "Organiza ciclos de conciertos online gratuitos que llegan a más de 50.000 personas en toda Latinoamérica." },
  { año: 2025, titulo: "Nace la Fundación", descripcion: "Con más de 45 años de trayectoria, Carlos transforma su legado en una plataforma abierta para democratizar el acceso a la música docta en Chile." },
];

export const IMPACTO_METRICS: ImpactoMetric[] = [
  { label: "Trompetas solidarias donadas", value: 497 },
  { label: "Proyectos financiados", value: 2 },
  { label: "Personas alcanzadas", value: 1300, suffix: "+" },
  { label: "Conciertos realizados", value: 12 },
  { label: "Colegios visitados", value: 8 },
  { label: "Comunas impactadas", value: 6 },
];

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(amount);
}

export function calcClp(trompetas: number): number {
  return trompetas * CB_BRAND.trompetaValue;
}

export function getProgresoPercent(recaudado: number, meta: number): number {
  return Math.min(100, Math.round((recaudado / meta) * 100));
}
