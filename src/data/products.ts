import type { FamilySlug } from "./families";

export type Availability = "on_request";

export interface Variant {
  sku: string;
  attributes: { label: string; value: string }[];
  availability: Availability;
}

export interface Product {
  slug: string;
  brand: string;
  name: string;
  family: FamilySlug;
  productType: string;
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  features: string[];
  variants: Variant[];
  relatedProducts: string[];
  featured?: boolean;
  body: string[];
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    slug: "conventional-cannula",
    brand: "AVANOS",
    name: "Conventional Cannula",
    family: "conventional",
    productType: "Cannula",
    shortDescription:
      "Cánula especializada para procedimientos de radiofrecuencia convencional. Calibres y longitudes activas configurables según la profundidad del tejido objetivo.",
    longDescription:
      "Cánula Avanos para RFA convencional. Configuraciones intercambiables de calibre, longitud y punta activa para lesiones focales predecibles.",
    mainImage: "/images/products/conventional-cannula.svg",
    features: [
      "Active Tip Length 5 mm — lesión focal de tamaño estándar para nervios periféricos",
      "Gauge 18G — equilibrio entre precisión y facilidad de inserción",
      "Cannula Length 100 mm — adecuada para planos superficiales y medianos",
      "Punta recta — orientación coaxial con el eje de inserción",
    ],
    variants: [
      {
        sku: "CC-STD-18-100",
        attributes: [
          { label: "Active Tip Length", value: "5 mm" },
          { label: "Cannula Gauge", value: "18G" },
          { label: "Cannula Length", value: "100 mm" },
          { label: "Tip Shape", value: "Straight" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["conventional-reusable-probe", "conventional-single-use-probe"],
    featured: true,
    body: [
      "La cánula convencional Avanos de 18G y 100 mm con punta activa de 5 mm está diseñada para procedimientos estándar de ablación por radiofrecuencia convencional. Su configuración permite lesiones focales en nervios periféricos, ramas articulares y ramas comunicantes, con la precisión que requieren los procedimientos intervencionistas de manejo del dolor. La punta activa de 5 mm genera una lesión térmica predecible cuando se aplica la energía recomendada por el fabricante.",
      "Esta cánula es compatible con los generadores Avanos de la línea RFA y se integra con sondas reutilizables y de un solo uso del portafolio. La selección de calibre y longitud debe considerar la profundidad del tejido objetivo y la anatomía del paciente. Pain Solutions distribuye la línea completa Avanos en Perú; si necesita orientación sobre la configuración correcta para una indicación específica, nuestro equipo puede revisar las alternativas disponibles.",
    ],
    seoTitle: "Conventional Cannula 18G 100mm — Distribuidor Avanos en Perú | Pain Solutions",
    seoDescription:
      "Cánula Avanos para RFA convencional con punta activa de 5 mm, gauge 18G y longitud 100 mm. Compatible con generadores Avanos. Distribuidor en Perú.",
  },
  {
    slug: "conventional-reusable-probe",
    brand: "AVANOS",
    name: "Conventional Reusable Probe",
    family: "conventional",
    productType: "Probe",
    shortDescription:
      "Sonda reutilizable para radiofrecuencia convencional. Punta activa de precisión para procedimientos repetidos con la misma sonda.",
    longDescription:
      "Sonda reutilizable Avanos para RFA convencional. Punta activa de precisión, esterilizable según protocolo del fabricante.",
    mainImage: "/images/products/conventional-reusable-probe.webp",
    features: [
      "Reutilizable para múltiples procedimientos — reduce costo por caso en centros de alto volumen",
      "Punta activa de precisión — lesión focal predecible",
      "Compatible con sistema RFA Avanos — interoperabilidad validada",
      "Esterilizable según protocolo del fabricante",
    ],
    variants: [
      {
        sku: "CRP-STD-18",
        attributes: [
          { label: "Cannula Gauge", value: "18G" },
          { label: "Active Tip Length", value: "5 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["conventional-cannula", "conventional-single-use-probe"],
    body: [
      "La sonda reutilizable Avanos para RFA convencional está diseñada para centros que realizan un volumen elevado de procedimientos y pueden amortizar la inversión en una sonda durable. Su punta activa de 5 mm y gauge 18G entregan una lesión focal predecible en nervios periféricos, ramas articulares y ramas comunicantes, manteniendo las características técnicas del sistema convencional Avanos.",
      "Esta sonda se esteriliza según el protocolo del fabricante entre usos, lo que reduce el costo por procedimiento en centros con flujo clínico sostenido. Es compatible con los generadores Avanos de la línea RFA y con las cánulas conventional cannula del portafolio. Pain Solutions distribuye esta sonda en Perú; si su centro busca optimizar el costo por procedimiento sin sacrificar precisión, nuestro equipo puede revisar las alternativas disponibles.",
    ],
    seoTitle: "Conventional Reusable Probe Avanos 18G — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Sonda reutilizable Avanos para RFA convencional. Punta activa de 5 mm, gauge 18G. Compatible con generadores Avanos. Distribuidor en Perú.",
  },
  {
    slug: "conventional-single-use-probe",
    brand: "AVANOS",
    name: "Conventional Single Use Probe",
    family: "conventional",
    productType: "Probe",
    shortDescription:
      "Sonda de un solo uso para radiofrecuencia convencional. Esterilidad garantizada y rendimiento consistente por procedimiento.",
    longDescription:
      "Sonda de un solo uso Avanos para RFA convencional. Esterilidad garantizada y trazabilidad individual del insumo.",
    mainImage: "/images/products/conventional-single-use-probe.svg",
    features: [
      "Uso único — máxima esterilidad por procedimiento",
      "Punta activa de 5 mm — lesión focal predecible",
      "Gauge 18G — equilibrio entre precisión y facilidad de inserción",
      "Rendimiento consistente — sin variabilidad entre sondas",
    ],
    variants: [
      {
        sku: "CSP-STD-18",
        attributes: [
          { label: "Cannula Gauge", value: "18G" },
          { label: "Active Tip Length", value: "5 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["conventional-cannula", "conventional-reusable-probe"],
    body: [
      "La sonda de un solo uso Avanos para RFA convencional garantiza la máxima esterilidad en cada procedimiento, eliminando el riesgo residual asociado a procesos de re-esterilización. Su punta activa de 5 mm y gauge 18G entregan una lesión focal predecible en nervios periféricos, ramas articulares y ramas comunicantes, con la misma precisión técnica que la sonda reutilizable.",
      "Esta sonda es ideal para centros con volumen moderado, clínicas que prefieren flujo de un solo uso por procedimiento, o contextos donde la trazabilidad individual del insumo es un requisito regulatorio. Pain Solutions distribuye la sonda single-use Avanos en Perú; si su centro prioriza esterilidad y trazabilidad por sobre reuso, esta es la configuración correcta.",
    ],
    seoTitle: "Conventional Single Use Probe Avanos 18G — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Sonda de un solo uso Avanos para RFA convencional. Punta activa de 5 mm, gauge 18G. Esterilidad garantizada. Distribuidor en Perú.",
  },
  {
    slug: "hybrid-cannula",
    brand: "AVANOS",
    name: "Hybrid Cannula",
    family: "conventional",
    productType: "Cannula",
    shortDescription:
      "Cánula híbrida que combina versatilidad y precisión para procedimientos de radiofrecuencia convencional y orientación ajustable.",
    longDescription:
      "Cánula híbrida Avanos que combina características de la cánula convencional y la cánula Tined en una sola configuración.",
    mainImage: "/images/products/hybrid-cannula.svg",
    features: [
      "Diseño híbrido versátil — admite configuración Convencional y transición a Tined",
      "Punta activa de 10 mm — lesión de mayor cobertura que la convencional estándar",
      "Gauge 18G — equilibrio entre precisión y facilidad de inserción",
      "Compatibilidad con sistema Avanos — interoperabilidad validada",
    ],
    variants: [
      {
        sku: "HC-STD-18-10",
        attributes: [
          { label: "Active Tip Length", value: "10 mm" },
          { label: "Cannula Gauge", value: "18G" },
          { label: "Cannula Length", value: "100 mm" },
          { label: "Tip Shape", value: "Hybrid" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["conventional-cannula", "tined-cannula"],
    body: [
      "La cánula híbrida Avanos combina características de la cánula convencional y la cánula Tined en una sola configuración. Su punta activa de 10 mm con gauge 18G permite lesiones de mayor cobertura que la convencional estándar, mientras mantiene la versatilidad de uso clínico en procedimientos donde la orientación direccional puede variar intraoperatoriamente.",
      "Esta cánula está pensada para procedimientos donde el clínico busca flexibilidad entre técnica convencional y orientación Tined sin cambiar de insumo intraoperatorio. Es compatible con generadores Avanos de la línea RFA. Pain Solutions distribuye esta configuración en Perú; si su práctica busca una sola cánula para indicaciones mixtas, la hybrid cannula puede ser la respuesta.",
    ],
    seoTitle: "Hybrid Cannula Avanos 18G 10mm — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Cánula híbrida Avanos para RFA convencional con punta activa de 10 mm, gauge 18G. Compatible con sistema Avanos. Distribuidor en Perú.",
  },
  {
    slug: "cooled-kit",
    brand: "AVANOS",
    name: "Cooled RF Kit",
    family: "cooled",
    productType: "Kit",
    shortDescription:
      "Kit completo para procedimientos de radiofrecuencia refrigerada. Incluye los componentes necesarios para configurar Cooled RFA en el centro.",
    longDescription:
      "Kit completo Avanos para Cooled RFA. Agrupa cánula refrigerada, introductores de fluido y accesorios de conexión para Cooled RFA.",
    mainImage: "/images/products/cooled-kit.png",
    features: [
      "Kit completo — incluye los componentes necesarios para Cooled RFA",
      "Tecnología de refrigeración integrada — control térmico de la punta activa",
      "Componentes pre-configurados — compatibilidad validada por el fabricante",
      "Compatible con generador y bomba Avanos — sistema integrado",
    ],
    variants: [
      {
        sku: "CRFK-22-150",
        attributes: [
          { label: "Active Tip Length", value: "4 mm" },
          { label: "Cannula Gauge", value: "22G" },
          { label: "Cannula Length", value: "150 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["fluid-delivery-introducers", "water-cooled-probes", "pump-rfa"],
    featured: true,
    body: [
      "El kit Cooled RF Avanos agrupa los componentes necesarios para configurar Cooled RFA en un centro. Incluye la cánula refrigerada, los introductores de fluido y los accesorios de conexión requeridos para el sistema. La cánula de 22G con punta activa de 4 mm y longitud 150 mm permite acceder a planos tisulares más profundos con control térmico de la punta activa durante la ablación.",
      "Este kit requiere el generador Avanos y la bomba Cooled RFA para funcionar como sistema completo. La refrigeración interna mantiene la temperatura de la punta dentro del rango óptimo durante el procedimiento, lo que se traduce en lesiones de mayor volumen con menor riesgo de sobrecalentamiento tisular. Pain Solutions distribuye el kit completo en Perú; si está evaluando Cooled RFA para su práctica, nuestro equipo puede revisar la configuración completa del sistema y validar las compatibilidades del set con su generador actual, si aplica.",
    ],
    seoTitle: "Cooled RF Kit Avanos 22G 150mm — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Kit completo Avanos para Cooled RFA. Punta activa de 4 mm, gauge 22G, longitud 150 mm. Compatible con generador y bomba Avanos. Distribuidor en Perú.",
  },
  {
    slug: "fluid-delivery-introducers",
    brand: "AVANOS",
    name: "Fluid Delivery Introducers",
    family: "cooled",
    productType: "Introducer",
    shortDescription:
      "Introductores de fluido para Cooled RFA. Control preciso del flujo de refrigerante durante el procedimiento.",
    longDescription:
      "Introductores de fluido Avanos para Cooled RFA. Conexión con la bomba del sistema sin adaptadores adicionales.",
    mainImage: "/images/products/fluid-delivery-introducers.svg",
    features: [
      "Control preciso del flujo de fluido — temperatura óptima en la punta activa",
      "Diseño optimizado para Cooled RFA — integración validada con el sistema",
      "Fácil integración con la bomba Avanos — sin adaptadores adicionales",
      "Componente esencial del kit Cooled RF",
    ],
    variants: [
      {
        sku: "FDI-22",
        attributes: [
          { label: "Cannula Gauge", value: "22G" },
          { label: "Length", value: "150 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["cooled-kit", "water-cooled-probes"],
    body: [
      "Los introductores de fluido Avanos son el componente que conecta la cánula refrigerada con la bomba Cooled RFA, permitiendo el flujo controlado de refrigerante durante el procedimiento. Su diseño está optimizado para integrarse con la bomba del sistema sin adaptadores adicionales, eliminando variabilidad entre componentes y asegurando el control térmico de la punta activa según las especificaciones del fabricante.",
      "Este componente forma parte del kit Cooled RF y está pensado para reemplazo o reposición cuando el flujo clínico lo requiera. Pain Solutions distribuye los introductores Avanos en Perú; si su centro ya opera Cooled RFA y necesita reposición de introductores, nuestro equipo puede ayudarle con la logística.",
    ],
    seoTitle: "Fluid Delivery Introducers Avanos 22G — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Introductores de fluido Avanos para Cooled RFA. Control preciso del refrigerante. Compatible con sistema Cooled Avanos. Distribuidor en Perú.",
  },
  {
    slug: "water-cooled-probes",
    brand: "AVANOS",
    name: "Water Cooled Probes",
    family: "cooled",
    productType: "Probe",
    shortDescription:
      "Sondas refrigeradas por agua para Cooled RFA. Control térmico superior para lesiones de mayor volumen.",
    longDescription:
      "Sondas refrigeradas por agua Avanos para Cooled RFA. Control térmico continuo para lesiones predecibles.",
    mainImage: "/images/products/water-cooled-probes.svg",
    features: [
      "Refrigeración por agua — control térmico continuo durante la ablación",
      "Punta activa de precisión — lesión predecible de mayor volumen",
      "Compatibilidad con generador y bomba Avanos — sistema integrado",
      "Diseño optimizado para Cooled RFA — flujo constante",
    ],
    variants: [
      {
        sku: "WCP-22-150",
        attributes: [
          { label: "Active Tip Length", value: "4 mm" },
          { label: "Cannula Gauge", value: "22G" },
          { label: "Cannula Length", value: "150 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["cooled-kit", "fluid-delivery-introducers"],
    body: [
      "Las sondas refrigeradas por agua Avanos entregan control térmico continuo durante la ablación Cooled RFA. Su punta activa de 4 mm con gauge 22G y longitud 150 mm permite lesiones de mayor volumen que la RFA convencional, manteniendo la temperatura tisular dentro del rango óptimo durante todo el procedimiento.",
      "Estas sondas requieren el generador Avanos y la bomba Cooled RFA para operar como sistema completo. La refrigeración por agua se traduce en lesiones predecibles donde la RFA convencional podría quedar subdimensionada. Pain Solutions distribuye las sondas refrigeradas Avanos en Perú; si su centro busca Cooled RFA, nuestro equipo puede revisar la configuración completa del sistema y validar la compatibilidad con su generador y bomba actuales.",
    ],
    seoTitle: "Water Cooled Probes Avanos 22G 150mm — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Sondas refrigeradas por agua Avanos para Cooled RFA. Punta activa de 4 mm, gauge 22G, longitud 150 mm. Distribuidor en Perú.",
  },
  {
    slug: "tined-cannula",
    brand: "AVANOS",
    name: "Tined Cannula",
    family: "tined",
    productType: "Cannula",
    shortDescription:
      "Cánula con aletas para Tined RFA. Orientación perpendicular y estabilización tisular para nervios motores y ramas difíciles.",
    longDescription:
      "Cánula con aletas Avanos para Tined RFA. Estabilización tisular y orientación perpendicular para indicaciones de precisión.",
    mainImage: "/images/products/tined-cannula.webp",
    features: [
      "Aletas (tines) para estabilidad en tejido — anclaje direccional",
      "Punta activa de 10 mm — lesión orientada perpendicular al nervio",
      "Gauge 22G — perfil más fino para planos profundos",
      "Cannula Length 150 mm — alcance a planos anatómicos más profundos",
    ],
    variants: [
      {
        sku: "TC-22-150",
        attributes: [
          { label: "Active Tip Length", value: "10 mm" },
          { label: "Cannula Gauge", value: "22G" },
          { label: "Cannula Length", value: "150 mm" },
          { label: "Tip Shape", value: "Tined" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["tined-reusable-probe", "tined-single-use-probe"],
    featured: true,
    body: [
      "La cánula Tined Avanos incorpora aletas (tines) en el extremo activo que anclan la cánula en el tejido y dirigen la corriente de forma perpendicular al eje del nervio. Esta configuración es particularmente valiosa cuando se busca afectar nervios motores sin lesionar estructuras adyacentes, o cuando la orientación anatómica exige precisión direccional que la cánula convencional no entrega.",
      "La configuración de 22G con punta activa de 10 mm y longitud 150 mm permite acceder a planos tisulares más profundos manteniendo el perfil fino característico de las cánulas Tined. Compatible con los generadores Avanos de la línea RFA. Pain Solutions distribuye la cánula Tined en Perú; si su práctica busca orientación perpendicular para indicaciones específicas, la cánula Tined es la configuración correcta.",
    ],
    seoTitle: "Tined Cannula Avanos 22G 150mm — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Cánula con aletas Avanos para Tined RFA. Punta activa de 10 mm, gauge 22G, longitud 150 mm. Distribuidor en Perú.",
  },
  {
    slug: "tined-reusable-probe",
    brand: "AVANOS",
    name: "Tined Reusable Probe",
    family: "tined",
    productType: "Probe",
    shortDescription:
      "Sonda reutilizable con aletas para Tined RFA. Combina durabilidad con orientación direccional constante.",
    longDescription:
      "Sonda reutilizable con aletas Avanos para Tined RFA. Mantiene la orientación direccional entre usos.",
    mainImage: "/images/products/tined-reusable-probe.svg",
    features: [
      "Reutilizable para múltiples procedimientos — costo optimizado en alto volumen",
      "Aletas para fijación precisa — orientación direccional mantenida entre usos",
      "Compatible con sistema Tined RFA Avanos — interoperabilidad validada",
      "Punta activa de 10 mm — lesión perpendicular consistente",
    ],
    variants: [
      {
        sku: "TRP-22",
        attributes: [
          { label: "Cannula Gauge", value: "22G" },
          { label: "Active Tip Length", value: "10 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["tined-cannula", "tined-single-use-probe"],
    body: [
      "La sonda reutilizable Tined Avanos está diseñada para centros que realizan un volumen elevado de procedimientos Tined RFA y pueden amortizar la inversión en una sonda durable con aletas. Su punta activa de 10 mm con gauge 22G mantiene la orientación direccional consistente entre usos, característica esencial de las técnicas Tined.",
      "Esta sonda se esteriliza según el protocolo del fabricante entre usos. Es compatible con los generadores Avanos de la línea RFA y con las cánulas Tined cannula del portafolio. Pain Solutions distribuye la sonda Tined reutilizable en Perú; si su centro busca optimizar el costo por procedimiento Tined, esta es la configuración correcta.",
    ],
    seoTitle: "Tined Reusable Probe Avanos 22G — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Sonda reutilizable con aletas Avanos para Tined RFA. Punta activa de 10 mm, gauge 22G. Distribuidor en Perú.",
  },
  {
    slug: "tined-single-use-probe",
    brand: "AVANOS",
    name: "Tined Single Use Probe",
    family: "tined",
    productType: "Probe",
    shortDescription:
      "Sonda de un solo uso con aletas para Tined RFA. Esterilidad garantizada y rendimiento consistente.",
    longDescription:
      "Sonda de un solo uso con aletas Avanos para Tined RFA. Esterilidad garantizada y orientación perpendicular consistente.",
    mainImage: "/images/products/tined-single-use-probe.svg",
    features: [
      "Uso único — máxima esterilidad por procedimiento",
      "Aletas para estabilidad — orientación direccional mantenida",
      "Punta activa de 10 mm — lesión perpendicular predecible",
      "Rendimiento consistente — sin variabilidad entre sondas",
    ],
    variants: [
      {
        sku: "TSP-22",
        attributes: [
          { label: "Cannula Gauge", value: "22G" },
          { label: "Active Tip Length", value: "10 mm" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["tined-cannula", "tined-reusable-probe"],
    body: [
      "La sonda de un solo uso Tined Avanos garantiza la máxima esterilidad en cada procedimiento Tined RFA, eliminando el riesgo residual asociado a procesos de re-esterilización. Su punta activa de 10 mm con gauge 22G y las aletas direccionales mantienen la orientación perpendicular característica de la técnica Tined con la consistencia que solo un insumo nuevo por procedimiento puede entregar.",
      "Esta sonda es ideal para centros con volumen moderado, clínicas que prefieren flujo de un solo uso, o contextos donde la trazabilidad individual del insumo es un requisito regulatorio. Pain Solutions distribuye la sonda Tined single-use en Perú; si su centro prioriza esterilidad y trazabilidad por sobre reuso, esta es la configuración correcta.",
    ],
    seoTitle: "Tined Single Use Probe Avanos 22G — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Sonda de un solo uso con aletas Avanos para Tined RFA. Punta activa de 10 mm, gauge 22G. Distribuidor en Perú.",
  },
  {
    slug: "generator-rfa",
    brand: "AVANOS",
    name: "RFA Generator",
    family: "equipos",
    productType: "Generator",
    shortDescription:
      "Generador de radiofrecuencia Avanos. Control preciso de energía y temperatura para procedimientos Conventional, Cooled y Tined.",
    longDescription:
      "Generador de radiofrecuencia Avanos. Frecuencia estándar 480 kHz, modos Conventional, Cooled y Tined.",
    mainImage: "/images/products/generator-rfa.svg",
    features: [
      "Control preciso de energía RF — rango 0–50 W con ajustes finos",
      "Frecuencia 480 kHz — estándar Avanos para todos los modos de ablación",
      "Interfaz intuitiva — operación simplificada para el equipo clínico",
      "Compatible con toda la línea RFA Avanos — sistema unificado",
    ],
    variants: [
      {
        sku: "GEN-RFA-V3",
        attributes: [
          { label: "Power Range", value: "0–50 W" },
          { label: "Frequency", value: "480 kHz" },
          { label: "Modes", value: "Conventional, Cooled, Tined" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["pump-rfa", "cables-rfa", "conventional-cannula"],
    featured: true,
    body: [
      "El generador RFA Avanos es el corazón del sistema de ablación por radiofrecuencia. Entrega control preciso de energía en el rango de 0–50 W con una frecuencia estándar de 480 kHz, lo que cubre los modos Conventional, Cooled y Tined sin necesidad de cambiar de equipo entre técnicas. Su interfaz está diseñada para operación intuitiva por parte del equipo clínico, con ajustes finos que permiten adaptar el procedimiento a la indicación específica.",
      "Este generador se integra con la bomba Cooled RFA para procedimientos refrigerados y con todos los cables y cánulas del portafolio Avanos. Pain Solutions distribuye el generador RFA Avanos en Perú; si su centro está configurando un sistema RFA completo o evaluando la actualización del generador actual, nuestro equipo puede revisar las compatibilidades y la configuración óptima con su práctica clínica.",
    ],
    seoTitle: "Generador RFA Avanos 480 kHz — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Generador de radiofrecuencia Avanos. Potencia 0–50 W, frecuencia 480 kHz. Compatible con línea RFA completa. Distribuidor en Perú.",
  },
  {
    slug: "pump-rfa",
    brand: "AVANOS",
    name: "RFA Pump",
    family: "equipos",
    productType: "Pump",
    shortDescription:
      "Bomba para Cooled RFA. Flujo constante y controlado para procedimientos de radiofrecuencia refrigerada.",
    longDescription:
      "Bomba de perfusión Avanos para Cooled RFA. Flujo constante y controlado de refrigerante durante el procedimiento.",
    mainImage: "/images/products/pump-rfa.svg",
    features: [
      "Flujo constante y controlado — temperatura óptima en la punta activa",
      "Diseño compacto y portátil — integración sencilla en el quirófano",
      "Integración con sistema Cooled RFA — interoperabilidad validada",
      "Control de flujo ajustable — adaptación a la indicación clínica",
    ],
    variants: [
      {
        sku: "PUMP-RFA-V2",
        attributes: [
          { label: "Flow Range", value: "Configurable" },
          { label: "Compatibility", value: "Cooled RFA Avanos" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["generator-rfa", "cooled-kit", "fluid-delivery-introducers"],
    body: [
      "La bomba RFA Avanos entrega flujo constante y controlado de refrigerante durante los procedimientos Cooled RFA. Su diseño compacto y portátil facilita la integración en el quirófano sin requerir adaptaciones especiales del espacio. La integración con el sistema Cooled RFA Avanos está validada por el fabricante, eliminando variabilidad entre componentes y asegurando el control térmico según las especificaciones del procedimiento.",
      "La bomba opera junto con el generador RFA Avanos y con los introductores de fluido del portafolio. Pain Solutions distribuye la bomba RFA Avanos en Perú; si su centro está configurando Cooled RFA o necesita reposición del componente, nuestro equipo puede revisar la configuración completa del sistema.",
    ],
    seoTitle: "Bomba RFA Avanos Cooled — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Bomba Avanos para Cooled RFA. Flujo constante y controlado. Compatible con sistema Cooled Avanos. Distribuidor en Perú.",
  },
  {
    slug: "cables-rfa",
    brand: "AVANOS",
    name: "RFA Cables",
    family: "equipos",
    productType: "Cable",
    shortDescription:
      "Cables de conexión Avanos para sistema RFA. Conexión segura y confiable entre generador, cánulas y sondas.",
    longDescription:
      "Cables de conexión Avanos para sistema RFA. Optimizados para la frecuencia de 480 kHz del sistema Avanos.",
    mainImage: "/images/products/cables-rfa.svg",
    features: [
      "Conexión segura y confiable — sin pérdida de señal durante el procedimiento",
      "Compatibilidad con generadores Avanos — sistema integrado",
      "Durabilidad comprobada — uso repetido en centros de alto volumen",
      "Blindaje adecuado — sin artefactos en la señal de radiofrecuencia",
    ],
    variants: [
      {
        sku: "CBL-RFA-STD",
        attributes: [
          { label: "Length", value: "Standard" },
          { label: "Connector", value: "Avanos RFA" },
        ],
        availability: "on_request",
      },
    ],
    relatedProducts: ["generator-rfa", "conventional-cannula", "conventional-reusable-probe"],
    body: [
      "Los cables RFA Avanos conectan el generador con las cánulas y sondas del sistema, asegurando transmisión de señal sin pérdida durante el procedimiento. Su blindaje y construcción están optimizados para la frecuencia de 480 kHz del sistema Avanos, eliminando artefactos y manteniendo la integridad de la señal de radiofrecuencia.",
      "Estos cables son compatibles con todos los generadores y cánulas del portafolio Avanos. Pain Solutions distribuye los cables RFA en Perú; si su centro necesita reposición o expansión del cableado del sistema, nuestro equipo puede revisar las opciones disponibles.",
    ],
    seoTitle: "Cables RFA Avanos — Distribuidor en Perú | Pain Solutions",
    seoDescription:
      "Cables de conexión Avanos para sistema RFA. Conexión segura y confiable. Compatible con generadores Avanos. Distribuidor en Perú.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByFamily(family: string): Product[] {
  return products.filter((p) => p.family === family);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProducts
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}
