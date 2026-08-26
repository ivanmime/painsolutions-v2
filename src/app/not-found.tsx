import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Layout";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
        <Eyebrow number="404">Error</Eyebrow>
        <h1 className="mt-6 max-w-2xl font-sans text-[3rem] font-extrabold uppercase leading-[1.05] tracking-[-0.025em] text-navy text-balance sm:text-[4rem] lg:text-[5rem]">
          Página no encontrada
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft">
          La página que buscas no existe o fue movida. Explora nuestras
          soluciones médicas o habla con un asesor.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/soluciones" variant="outline-dark">
            Explorar soluciones
          </ButtonLink>
        </div>
        <Link
          href="/contacto"
          className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted hover:text-navy"
        >
          Contacto →
        </Link>
      </Container>
    </section>
  );
}
