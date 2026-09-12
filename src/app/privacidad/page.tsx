import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Pain Solutions.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <LegalPage number="L.01" title="Política de Privacidad">
      <p>
        Pain Solutions respeta tu privacidad. Los datos que envíes a través de
        los formularios de este sitio (nombre, institución, email, teléfono y
        mensaje) serán utilizados únicamente para responder a tu consulta,
        brindar asesoría comercial y gestionar cotizaciones solicitadas.
      </p>
      <h2>Uso de la información</h2>
      <p>
        La información recibida no será compartida con terceros con fines
        comerciales. Podremos utilizarla para contactarte respecto a tu
        requerimiento y enviarte información relacionada con los productos
        sobre los que consultaste.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes solicitar en cualquier momento el acceso, rectificación o
        eliminación de tus datos escribiendo a nuestro correo de contacto.
      </p>
      <h2>Actualizaciones</h2>
      <p>
        Esta política puede actualizarse periódicamente. Cualquier cambio será
        publicado en esta página. Última actualización: agosto 2026.
      </p>
    </LegalPage>
  );
}
