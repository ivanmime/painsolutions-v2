import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Pain Solutions.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <section className="bg-paper">
      <Container narrow className="py-16 sm:py-24">
        <Eyebrow number="L.01">Legal</Eyebrow>
        <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem]">
          Política de Privacidad
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none text-[0.9375rem] leading-[1.7] text-ink-soft [&_h2]:font-display [&_h2]:mt-12 [&_h2]:text-[1.375rem] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.01em] [&_h2]:text-ink [&_li]:leading-[1.7]">
          <p>
            Pain Solutions respeta tu privacidad. Los datos que envíes a través
            de los formularios de este sitio (nombre, institución, email,
            teléfono y mensaje) serán utilizados únicamente para responder a
            tu consulta, brindar asesoría comercial y gestionar cotizaciones
            solicitadas.
          </p>
          <h2>Uso de la información</h2>
          <p>
            La información recibida no será compartida con terceros con fines
            comerciales. Podremos utilizarla para contactarte respecto a tu
            requerimiento y enviarte información relacionada con los
            productos sobre los que consultaste.
          </p>
          <h2>Derechos</h2>
          <p>
            Puedes solicitar en cualquier momento el acceso, rectificación o
            eliminación de tus datos escribiendo a nuestro correo de
            contacto.
          </p>
          <h2>Actualizaciones</h2>
          <p>
            Esta política puede actualizarse periódicamente. Cualquier cambio
            será publicado en esta página. Última actualización: agosto 2026.
          </p>
        </div>
      </Container>
    </section>
  );
}
