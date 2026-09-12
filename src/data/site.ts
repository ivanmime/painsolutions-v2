export const site = {
  name: "Pain Solutions",
  tagline: "Tecnología médica especializada para profesionales e instituciones de salud",
  shortTagline: "Tecnología intervencionista del dolor",
  promise: "La más alta tecnología al servicio de todos",
  description:
    "Conectamos a profesionales e instituciones de salud con equipos, insumos y soluciones médicas de fabricantes internacionales para el manejo del dolor.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51932441179",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "vicanespinoza@gmail.com",
  location: "Lima, Perú",
  founded: 2026,
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

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavGroup[];
}

export const nav: NavItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    children: [
      {
        label: "Asesoría",
        href: "/asesoria",
        description: "Revisamos juntos las alternativas disponibles para tu requerimiento.",
      },
      {
        label: "Soluciones médicas",
        href: "/soluciones",
        description: "Equipos, insumos y accesorios especializados.",
        children: [
          { label: "RFA Solutions", href: "/soluciones/rfa" },
          { label: "Conventional", href: "/soluciones/rfa/conventional" },
          { label: "Cooled", href: "/soluciones/rfa/cooled" },
          { label: "Tined", href: "/soluciones/rfa/tined" },
          { label: "Equipos y accesorios", href: "/soluciones/rfa/equipos" },
        ],
      },
      {
        label: "Alquiler",
        href: "/alquiler",
        description: "Accede a la tecnología sin adquirirla.",
      },
    ],
  },
  { label: "Contacto", href: "/contacto" },
];

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      "Hola, estoy interesado(a) en conocer qué solución o servicio de Pain Solutions se adapta mejor a mi necesidad. ¿Me pueden orientar?"
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function productWhatsappLink(productName: string, sku?: string): string {
  const line = sku ? ` (${sku})` : "";
  return whatsappLink(
    `Hola, quisiera recibir información sobre ${productName}${line}.`
  );
}

export function whatsappDisplay(): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("51")) {
    return `+51 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return `+${digits}`;
}
