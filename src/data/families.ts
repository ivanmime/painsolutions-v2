export type FamilySlug = "conventional" | "cooled" | "tined" | "equipos";

export interface Family {
  slug: FamilySlug;
  name: string;
  shortName: string;
  code: string; // F-01, F-02 ...
  cardTitle: string;
  cardDescription: string;
  heroKicker: string;
  shortDescription: string;
  body: string[];
  specs: { label: string; value: string }[];
}

export const families: Family[] = [
  {
    slug: "conventional",
    code: "F-01",
    name: "Radiofrecuencia convencional",
    shortName: "Conventional",
    cardTitle: "Radiofrecuencia convencional",
    cardDescription:
      "Cánulas y sondas especializadas para soluciones de radiofrecuencia convencional.",
    heroKicker: "Conventional RFA",
    shortDescription:
      "Cánulas y sondas especializadas para soluciones de radiofrecuencia convencional. Lesiones focales predecibles para nervios periféricos y ramas articulares.",
    body: [
      "La radiofrecuencia convencional es la base de las técnicas intervencionistas de manejo del dolor. El sistema Avanos para Conventional RFA incluye cánulas, sondas reutilizables y de un solo uso, diseñados para generar lesiones térmicas focales y predecibles en nervios periféricos, ramas articulares y ramas comunicantes.",
      "Cada componente de la familia está documentado con atributos intercambiables — calibre (gauge), longitud de cánula, longitud de punta activa y forma de punta — para adaptarse a la indicación clínica y a la profundidad del tejido objetivo.",
      "Todas las configuraciones son compatibles con los generadores Avanos de la línea RFA, lo que permite integrar la familia Conventional con el resto del portafolio sin cambiar de plataforma.",
    ],
    specs: [
      { label: "Punta activa", value: "5 / 10 mm" },
      { label: "Calibres", value: "18G · 22G" },
      { label: "Modalidad", value: "Térmica" },
      { label: "Compatibilidad", value: "Generador RFA Avanos" },
    ],
  },
  {
    slug: "cooled",
    code: "F-02",
    name: "Radiofrecuencia refrigerada",
    shortName: "Cooled",
    cardTitle: "Radiofrecuencia refrigerada",
    cardDescription:
      "Componentes especializados para soluciones de radiofrecuencia refrigerada.",
    heroKicker: "Cooled RFA",
    shortDescription:
      "Componentes especializados para soluciones de radiofrecuencia refrigerada (Cooled RFA). Control térmico avanzado para lesiones de mayor volumen.",
    body: [
      "La radiofrecuencia refrigerada (Cooled RFA) permite generar lesiones de mayor volumen que la RFA convencional, manteniendo el control sobre la temperatura del tejido. La refrigeración interna de la punta activa disipa el calor adyacente, lo que posibilita aplicar mayor potencia durante más tiempo sin carbonización del tejido inmediato.",
      "La familia Cooled incluye kits completos, introductores de fluido (Fluid Delivery Introducers) y sondas refrigeradas por agua (Water Cooled Probes). Cada componente está diseñado para integrarse con el generador y la bomba del sistema Cooled RFA.",
      "La configuración típica requiere generador compatible, bomba de perfusión y cánula específica. Pain Solutions puede asesorar sobre la configuración completa para su centro y validar las compatibilidades del sistema.",
    ],
    specs: [
      { label: "Punta activa", value: "4 mm" },
      { label: "Calibre", value: "22G" },
      { label: "Refrigeración", value: "Interna por agua" },
      { label: "Requiere", value: "Generador + bomba" },
    ],
  },
  {
    slug: "tined",
    code: "F-03",
    name: "Tined RFA",
    shortName: "Tined",
    cardTitle: "Tined RFA",
    cardDescription:
      "Cánulas y sondas especializadas para soluciones Tined de radiofrecuencia.",
    heroKicker: "Tined RFA",
    shortDescription:
      "Cánulas y sondas especializadas para soluciones Tined de radiofrecuencia. Orientación direccional perpendicular para indicaciones de precisión.",
    body: [
      "Las cánulas y sondas Tined incorporan aletas (tines) en el extremo activo que anclan el componente en el tejido y dirigen la corriente de forma perpendicular al eje del nervio. Esta configuración es valiosa cuando se busca afectar nervios motores sin lesionar estructuras adyacentes.",
      "La familia Tined incluye cánulas con aletas y sondas reutilizables y de un solo uso, con perfiles finos (22G) y longitudes que permiten acceder a planos tisulares profundos manteniendo la precisión direccional.",
      "Todos los componentes Tined son compatibles con los generadores Avanos de la línea RFA y se integran con el resto del portafolio para configuraciones de sistema completo.",
    ],
    specs: [
      { label: "Punta activa", value: "10 mm" },
      { label: "Calibre", value: "22G" },
      { label: "Orientación", value: "Perpendicular" },
      { label: "Estabilización", value: "Aletas (tines)" },
    ],
  },
  {
    slug: "equipos",
    code: "F-04",
    name: "Equipos y accesorios",
    shortName: "Equipos y accesorios",
    cardTitle: "Equipos y accesorios",
    cardDescription:
      "Equipos y componentes necesarios para complementar las soluciones de radiofrecuencia.",
    heroKicker: "Equipment & Accessories",
    shortDescription:
      "Generadores, bombas, cables y accesorios necesarios para complementar las soluciones de radiofrecuencia Avanos.",
    body: [
      "Los equipos y accesorios son la base operativa de cualquier sistema de radiofrecuencia. La familia incluye el generador RFA Avanos, compatible con los modos Conventional, Cooled y Tined; la bomba de perfusión para procedimientos refrigerados; y los cables de conexión optimizados para la frecuencia de 480 kHz del sistema.",
      "Cada componente está validado por el fabricante para operar como sistema integrado, eliminando variabilidad entre equipos y asegurando el cumplimiento de las especificaciones técnicas del procedimiento.",
      "Pain Solutions acompaña la configuración inicial del sistema en su centro, incluyendo la validación de compatibilidades con el equipamiento existente.",
    ],
    specs: [
      { label: "Frecuencia", value: "480 kHz" },
      { label: "Potencia", value: "0 – 50 W" },
      { label: "Modos", value: "Conv. · Cooled · Tined" },
      { label: "Compatibilidad", value: "Línea RFA Avanos" },
    ],
  },
];

export function getFamily(slug: string): Family | undefined {
  return families.find((f) => f.slug === slug);
}
