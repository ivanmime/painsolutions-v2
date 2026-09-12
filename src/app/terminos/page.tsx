import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Pain Solutions.",
  alternates: { canonical: "/terminos" },
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <LegalPage number="L.03" title="Términos y Condiciones">
      <p>
        El contenido de este sitio tiene fines informativos y comerciales. La
        información técnica de productos proviene de la documentación de los
        fabricantes y no constituye recomendación clínica.
      </p>
      <h2>Uso del sitio</h2>
      <p>
        La información publicada sobre productos, especificaciones y
        disponibilidad puede cambiar sin previo aviso. Las solicitudes de
        cotización están sujetas a confirmación comercial.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Las marcas, nombres de producto e imágenes pertenecen a sus respectivos
        titulares y se utilizan en el marco de las autorizaciones comerciales
        vigentes de Pain Solutions.
      </p>
      <h2>Información clínica</h2>
      <p>
        Nada en este sitio debe interpretarse como asesoría médica. Las
        decisiones sobre el uso de tecnología médica corresponden
        exclusivamente a los profesionales de salud competentes.
      </p>
      <p>Última actualización: agosto 2026.</p>
    </LegalPage>
  );
}
