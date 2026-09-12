import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pain Solutions | Tecnología para el manejo del dolor",
    template: "%s | Pain Solutions",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: site.name,
    title: "Pain Solutions | Tecnología para el manejo del dolor",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Solutions | Tecnología para el manejo del dolor",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "MedicalOrganization"],
      "@id": `${site.url}#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/logo.jpg`,
      description: site.description,
      email: site.contactEmail,
      telephone: `+${site.whatsappNumber}`,
      foundingDate: "2026",
      areaServed: { "@type": "Country", name: "Perú" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. José Leguía y Meléndez 1309",
        addressLocality: "Pueblo Libre",
        postalCode: "15084",
        addressCountry: "PE",
      },
      knowsAbout: [
        { "@type": "MedicalSpecialty", name: "Pain Management" },
        { "@type": "MedicalSpecialty", name: "Anesthesiology" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-PE"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
