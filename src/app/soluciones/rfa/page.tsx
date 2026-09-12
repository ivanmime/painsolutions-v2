import type { Metadata } from "next";
import FamilyCard from "@/components/cards/FamilyCard";
import ProductCard from "@/components/cards/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  SectionHeading,
} from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero
        number="R.01"
        eyebrow="AVANOS RFA Solutions"
        title="Soluciones de ablación por radiofrecuencia"
        lead="Encuentra equipos, cánulas, sondas y accesorios especializados para soluciones de radiofrecuencia. Explora el portafolio por tipo de tecnología."
        texture
        actions={
          <>
            <ButtonLink href="/asesoria" variant="primary">
              Hablar con un asesor
            </ButtonLink>
            <ButtonLink href="/soluciones" variant="outline-dark">
              Todas las soluciones
            </ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Familias"
              number="R.02"
              title="Explora por tipo de tecnología"
              description="Cada familia agrupa los componentes especializados para una técnica específica de radiofrecuencia."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-line bg-ice/50 py-20 sm:py-28">
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
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
