import type { Metadata } from "next";
import FamilyCard from "@/components/cards/FamilyCard";
import ProductCard from "@/components/cards/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/Layout";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { families } from "@/data/families";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Soluciones médicas",
  description:
    "Conoce equipos, insumos y accesorios especializados disponibles dentro del portafolio de Pain Solutions.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      <section className="relative border-b border-line bg-paper">
        <div
          aria-hidden="true"
          className="absolute inset-0 paper-grain opacity-60"
        />
        <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <Eyebrow number="S.01">Portafolio</Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
                  Soluciones médicas para el manejo del dolor
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Tecnología, equipos e insumos especializados para soluciones
                  de ablación por radiofrecuencia.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink href="#rfa" variant="primary">
                    Explorar RFA Solutions
                  </ButtonLink>
                  <ButtonLink
                    href="/asesoria"
                    variant="outline-dark"
                  >
                    Solicitar asesoría
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="rfa" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="AVANOS RFA Solutions"
              number="S.02"
              title="Soluciones de ablación por radiofrecuencia."
              description="Encuentra equipos, cánulas, sondas y accesorios especializados para soluciones de radiofrecuencia. Explora el portafolio por tipo de tecnología y encuentra la configuración adecuada para tu requerimiento."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-line bg-ice/40 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Portafolio completo"
                number="S.03"
                title="Todos los productos"
                description="Explora el listado completo de equipos e insumos disponibles dentro de nuestro portafolio RFA."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                {products.length} referencias activas
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-navy-deep py-16 text-paper sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-6 gap-y-8">
              <div className="col-span-12 lg:col-span-8">
                <p className="font-display text-[1.75rem] font-medium leading-[1.15] text-balance sm:text-[2.5rem]">
                  ¿Buscas un producto específico o una referencia puntual?
                </p>
                <p className="mt-4 max-w-2xl text-[1rem] leading-[1.6] text-paper/70">
                  Si conoces la referencia o el tipo de insumo, te ayudamos
                  a revisar disponibilidad.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink href="/contacto" variant="primary-light">
                  Consultar producto
                </ButtonLink>
                <ButtonLink
                  href="/asesoria"
                  variant="outline-light"
                >
                  Asesoría
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
