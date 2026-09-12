import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Pain Solutions.",
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage number="L.02" title="Política de Cookies">
      <p>
        Este sitio utiliza cookies propias y de terceros con fines analíticos
        (Google Analytics 4) para entender cómo los visitantes usan el sitio y
        mejorar la experiencia.
      </p>
      <h2>Cookies analíticas</h2>
      <p>
        Las cookies analíticas nos permiten medir de forma anónima el tráfico y
        las páginas más visitadas. No almacenamos información personal
        identificable a través de estas cookies.
      </p>
      <h2>Gestión de cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento. Ten en cuenta que bloquear ciertas cookies puede
        afectar la funcionalidad del sitio.
      </p>
      <p>Última actualización: agosto 2026.</p>
    </LegalPage>
  );
}
