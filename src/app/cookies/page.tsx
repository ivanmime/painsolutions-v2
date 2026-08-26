import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Pain Solutions.",
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <section className="bg-paper">
      <Container narrow className="py-16 sm:py-24">
        <Eyebrow number="L.02">Legal</Eyebrow>
        <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem]">
          Política de Cookies
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none text-[0.9375rem] leading-[1.7] text-ink-soft [&_h2]:font-display [&_h2]:mt-12 [&_h2]:text-[1.375rem] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.01em] [&_h2]:text-ink [&_li]:leading-[1.7]">
          <p>
            Este sitio utiliza cookies propias y de terceros con fines
            analíticos (Google Analytics 4) para entender cómo los visitantes
            usan el sitio y mejorar la experiencia.
          </p>
          <h2>Cookies analíticas</h2>
          <p>
            Las cookies analíticas nos permiten medir de forma anónima el
            tráfico y las páginas más visitadas. No almacenamos información
            personal identificable a través de estas cookies.
          </p>
          <h2>Gestión de cookies</h2>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar las
            cookies en cualquier momento. Ten en cuenta que bloquear ciertas
            cookies puede afectar la funcionalidad del sitio.
          </p>
          <p>Última actualización: agosto 2026.</p>
        </div>
      </Container>
    </section>
  );
}
