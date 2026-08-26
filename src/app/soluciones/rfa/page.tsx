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
  title: "Soluciones de radiofrecuencia",
  description:
    "Explora equipos, cánulas, sondas y accesorios especializados para soluciones de radiofrecuencia Avanos RFA.",
  alternates: { canonical: "/soluciones/rfa" },
};

export default function RfaPage() {
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
                <Eyebrow number="R.01">AVANOS RFA Solutions</Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
                  Soluciones de ablación por radiofrecuencia
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Encuentra equipos, cánulas, sondas y accesorios especializados para soluciones de
                  radiofrecuencia. Explora el portafolio por tipo de tecnología.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/asesoria" variant="primary">
                    Hablar con un asesor
                  </ButtonLink>
                  <ButtonLink href="/soluciones" variant="outline-dark">
                    Todas las soluciones
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Familias"
              number="R.02"
              title="Explora por tipo de tecnología"
              description="Cada familia agrupa los componentes especializados para una técnica específica de radiofrecuencia."
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
                eyebrow="Portafolio"
                number="R.03"
                title="Todos los productos RFA"
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
    </>
  );
}
