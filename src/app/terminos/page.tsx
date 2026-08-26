import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Pain Solutions.",
  alternates: { canonical: "/terminos" },
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <section className="bg-paper">
      <Container narrow className="py-16 sm:py-24">
        <Eyebrow number="L.03">Legal</Eyebrow>
        <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem]">
          Términos y Condiciones
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none text-[0.9375rem] leading-[1.7] text-ink-soft [&_h2]:font-display [&_h2]:mt-12 [&_h2]:text-[1.375rem] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.01em] [&_h2]:text-ink [&_li]:leading-[1.7]">
          <p>
            El contenido de este sitio tiene fines informativos y comerciales.
            La información técnica de productos proviene de la documentación
            de los fabricantes y no constituye recomendación clínica.
          </p>
          <h2>Uso del sitio</h2>
          <p>
            La información publicada sobre productos, especificaciones y
            disponibilidad puede cambiar sin previo aviso. Las solicitudes de
            cotización están sujetas a confirmación comercial.
          </p>
          <h2>Propiedad intelectual</h2>
          <p>
            Las marcas, nombres de producto e imágenes pertenecen a sus
            respectivos titulares y se utilizan en el marco de las
            autorizaciones comerciales vigentes de Pain Solutions.
          </p>
          <h2>Información clínica</h2>
          <p>
            Nada en este sitio debe interpretarse como asesoría médica. Las
            decisiones sobre el uso de tecnología médica corresponden
            exclusivamente a los profesionales de salud competentes.
          </p>
          <p>Última actualización: agosto 2026.</p>
        </div>
      </Container>
    </section>
  );
}
