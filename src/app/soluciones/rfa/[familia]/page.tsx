import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCard from "@/components/cards/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import {
  Breadcrumb,
  Container,
  Eyebrow,
  SectionHeading,
  Stat,
} from "@/components/ui/Layout";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import {
  families,
  getFamily,
} from "@/data/families";
import { getProductsByFamily } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

interface PageProps {
  params: Promise<{ familia: string }>;
}

export async function generateStaticParams() {
  return families.map((f) => ({ familia: f.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { familia } = await params;
  const family = getFamily(familia);
  if (!family) return { title: "Familia no encontrada" };
  return {
    title: family.name,
    description: family.shortDescription,
    alternates: { canonical: `/soluciones/rfa/${family.slug}` },
  };
}

export default async function FamilyPage({ params }: PageProps) {
  const { familia } = await params;
  const family = getFamily(familia);
  if (!family) notFound();

  const items = getProductsByFamily(family.slug);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="pt-10 pb-16 sm:pt-12 sm:pb-20">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Soluciones médicas", href: "/soluciones" },
                { label: "RFA Solutions", href: "/soluciones/rfa" },
                { label: family.shortName },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.05}>
                <Eyebrow number={family.code}>
                  {family.heroKicker}
                </Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4rem]">
                  {family.name}
                </h1>
                <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  {family.shortDescription}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink
                    href={whatsappLink(
                      `Hola, quisiera información sobre la familia ${family.shortName} de Pain Solutions.`
                    )}
                    external
                    variant="primary"
                  >
                    Consultar disponibilidad
                  </ButtonLink>
                  <ButtonLink href="/soluciones/rfa" variant="outline-dark">
                    Volver al portafolio RFA
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="border border-ink/12 bg-ice/40">
                  <div className="flex items-center justify-between border-b border-ink/12 px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                    <span>Especificaciones</span>
                    <span>{site.brand}</span>
                  </div>
                  <dl className="divide-y divide-ink/10">
                    {family.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-baseline justify-between px-5 py-3.5"
                      >
                        <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                          {spec.label}
                        </dt>
                        <dd className="font-display text-[1rem] font-medium text-ink">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <Eyebrow number="A.01">Descripción</Eyebrow>
                <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                  {family.shortName} · documentación técnica
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="space-y-6 text-[1.0625rem] leading-[1.7] text-ink-soft">
                  {family.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-navy py-12 text-paper">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            <Stat
              value={String(items.length).padStart(2, "0")}
              label="Referencias"
              hint="En esta familia"
              light
            />
            <Stat value="01" label="Fabricante" hint={site.brand} light />
            <Stat
              value="480"
              label="kHz"
              hint="Frecuencia del sistema"
              light
            />
            <Stat value="PE" label="Cobertura" hint="Lima y provincias" light />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Catálogo"
                number="A.02"
                title="Productos de la familia"
                description="Cada referencia se cotiza contra disponibilidad real del fabricante al momento de la consulta."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                {items.length} resultado{items.length === 1 ? "" : "s"}
              </p>
            </Reveal>
          </div>

          {items.length > 0 ? (
            <Stagger className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </Stagger>
          ) : (
            <Reveal>
              <p className="mt-12 border border-ink/12 bg-paper p-8 text-ink-soft">
                Aún no hay referencias publicadas en esta familia.{" "}
                <a
                  href="/contacto"
                  className="font-medium text-ink underline-offset-4 hover:underline"
                >
                  Escríbenos
                </a>{" "}
                para consultar disponibilidad.
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="bg-navy-deep py-16 text-paper sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-6 gap-y-8">
              <div className="col-span-12 lg:col-span-8">
                <p className="font-display text-[1.75rem] font-medium leading-[1.15] text-balance sm:text-[2.5rem]">
                  ¿Dudas sobre compatibilidad con tu generador o bomba actual?
                </p>
                <p className="mt-4 max-w-2xl text-[1rem] leading-[1.6] text-paper/70">
                  Validamos la configuración completa del set antes de la
                  cotización.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink href="/asesoria" variant="primary-light">
                  Solicitar asesoría
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="outline-light"
                >
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
