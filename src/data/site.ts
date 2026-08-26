export const site = {
  name: "Pain Solutions",
  tagline: "Tecnología médica especializada para profesionales e instituciones de salud",
  shortTagline: "Tecnología intervencionista del dolor",
  promise: "La más alta tecnología al servicio de todos",
  description:
    "Conectamos a profesionales e instituciones de salud con equipos, insumos y soluciones médicas de fabricantes internacionales para el manejo del dolor.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@painsolutions.pe",
  location: "Lima, Perú",
  founded: 2019,
  brand: "AVANOS",
  manufacturer: {
    name: "Avanos",
    line: "RFA Solutions",
    frequency: "480 kHz",
    modalities: "Conventional · Cooled · Tined",
  },
  stats: {
    families: "04",
    references: "13",
    modalities: "03",
  },
} as const;

export const nav = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Soluciones médicas",
    href: "/soluciones",
    children: [
      { label: "RFA Solutions", href: "/soluciones/rfa", description: "Ablación por radiofrecuencia" },
      { label: "Conventional", href: "/soluciones/rfa/conventional", description: "Radiofrecuencia convencional" },
      { label: "Cooled", href: "/soluciones/rfa/cooled", description: "Radiofrecuencia refrigerada" },
      { label: "Tined", href: "/soluciones/rfa/tined", description: "Cánulas y sondas Tined" },
      { label: "Equipos y accesorios", href: "/soluciones/rfa/equipos", description: "Generadores, bombas y cables" },
    ],
  },
  { label: "Asesoría", href: "/asesoria" },
  { label: "Contacto", href: "/contacto" },
] as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? "Hola, quisiera recibir información sobre las soluciones de Pain Solutions."
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function productWhatsappLink(productName: string, sku?: string): string {
  const line = sku ? ` (${sku})` : "";
  return whatsappLink(
    `Hola, quisiera recibir información sobre ${productName}${line}.`
  );
}
