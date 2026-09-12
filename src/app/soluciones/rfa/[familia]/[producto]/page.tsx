import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import QuoteForm from "@/components/forms/QuoteForm";
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
import { getFamily } from "@/data/families";
import {
  getProduct,
  getProductsByFamily,
  getRelatedProducts,
  products,
} from "@/data/products";
import { productWhatsappLink } from "@/data/site";

interface PageProps {
  params: Promise<{ familia: string; producto: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    familia: p.family,
    producto: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { producto } = await params;
  const product = getProduct(producto);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `/soluciones/rfa/${product.family}/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { familia, producto } = await params;
  const product = getProduct(producto);
  if (!product) notFound();
  const family = getFamily(familia);
  if (!family) notFound();

  const related = getRelatedProducts(product);
  const familyItems = getProductsByFamily(family.slug).filter(
    (p) => p.slug !== product.slug
  );
  const mainVariant = product.variants[0];

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
                {
                  label: family.shortName,
                  href: `/soluciones/rfa/${family.slug}`,
                },
                { label: product.name },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={0.05}>
                <Eyebrow number={`R-${String(
                  products.findIndex((p) => p.slug === product.slug) + 1
                ).padStart(2, "0")}`}>
                  {product.brand} · {product.productType}
                </Eyebrow>
                <h1 className="mt-6 heading-page text-[2.5rem] text-navy sm:text-[3.25rem] lg:text-[clamp(2.5rem,3.8vw,3.75rem)]">
                  {product.name}
                </h1>
                <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  {product.shortDescription}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink href="#cotizar" variant="primary">
                    Solicitar cotización
                  </ButtonLink>
                  <ButtonLink
                    href={productWhatsappLink(product.name, mainVariant?.sku)}
                    external
                    variant="outline-dark"
                  >
                    Consultar disponibilidad
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="border-2 border-ink bg-paper">
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-ice">
                    <Image
                      src={product.mainImage}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-contain p-8"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 h-3 w-px bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 h-px w-3 bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-4 h-3 w-px bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-4 h-px w-3 bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-4 h-3 w-px bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-4 h-px w-3 bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 h-3 w-px bg-ink/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 h-px w-3 bg-ink/40"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between border-b border-line pb-3">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                        Variante principal
                      </span>
                      <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                        SKU {mainVariant?.sku ?? "—"}
                      </span>
                    </div>
                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.8125rem]">
                      {mainVariant?.attributes.map((attr) => (
                        <div
                          key={attr.label}
                          className="flex items-baseline justify-between border-b border-ink/8 pb-1.5"
                        >
                          <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            {attr.label}
                          </dt>
                          <dd className="font-sans text-[0.875rem] font-bold text-navy">
                            {attr.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-teal py-12 text-paper">
        <Container>
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            <Stat
              value={product.brand}
              label="Fabricante"
              hint="Línea RFA"
              light
            />
            <Stat
              value={family.shortName}
              label="Familia"
              hint={family.heroKicker}
              light
            />
            <Stat
              value={String(product.variants.length).padStart(2, "0")}
              label="Variantes"
              hint="Configuraciones"
              light
            />
            <Stat
              value="PE"
              label="Cobertura"
              hint="Distribuidor"
              light
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <Eyebrow number="A.01">Descripción</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="mt-6 space-y-6 text-[1.0625rem] leading-[1.7] text-ink-soft">
                  {product.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-ice/50 p-6">
                  <Eyebrow number="A.02">Características principales</Eyebrow>
                  <ul className="mt-5 space-y-3">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[0.9375rem] leading-[1.55] text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-px w-4 shrink-0 bg-ink"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {product.variants.length > 0 ? (
        <section className="border-y border-line bg-ice/50 py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Configuraciones"
                number="A.03"
                title="Variantes disponibles"
                description="Cada variante mantiene la documentación técnica y la trazabilidad del fabricante."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 overflow-x-auto border-2 border-ink bg-paper">
                <table className="w-full border-collapse text-left text-[0.875rem]">
                  <thead>
                    <tr className="border-b border-line bg-ice/60">
                      <th className="px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                        SKU
                      </th>
                      {mainVariant?.attributes.map((attr) => (
                        <th
                          key={attr.label}
                          className="px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted"
                        >
                          {attr.label}
                        </th>
                      ))}
                      <th className="px-4 py-3 text-right font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                        Disponibilidad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.variants.map((variant) => (
                      <tr
                        key={variant.sku}
                        className="border-b border-ink/8 last:border-b-0"
                      >
                        <td className="px-4 py-4 font-mono text-[0.8125rem] text-ink">
                          {variant.sku}
                        </td>
                        {variant.attributes.map((attr) => (
                          <td
                            key={attr.label}
                            className="px-4 py-4 text-ink-soft"
                          >
                            {attr.value}
                          </td>
                        ))}
                        <td className="px-4 py-4 text-right">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            <span
                              aria-hidden="true"
                              className="inline-block h-1.5 w-1.5 bg-teal"
                            />
                            Bajo pedido
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section id="cotizar" className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Cotización"
                  number="B.01"
                  title={`Solicita la ${product.name}.`}
                  description="Te respondemos con disponibilidad, ficha técnica y compatibilidad con tu sistema actual."
                />
                <ul className="mt-10 space-y-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-block h-px w-4 bg-ink" />
                    Documentación técnica vigente
                  </li>
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-block h-px w-4 bg-ink" />
                    Compatibilidad validada con tu generador
                  </li>
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-block h-px w-4 bg-ink" />
                    Trazabilidad por lote
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <QuoteForm
                    endpoint={process.env.NEXT_PUBLIC_FORMSPREE_QUOTE}
                    productName={product.name}
                    productSku={mainVariant?.sku}
                    family={family.shortName}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 || familyItems.length > 0 ? (
        <section className="border-t border-line bg-ice/50 py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Complementos"
                number="B.02"
                title="Para configurar el sistema completo."
                description="Componentes que se integran con este producto dentro de la familia RFA de Avanos."
              />
            </Reveal>
            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(related.length > 0 ? related : familyItems)
                .slice(0, 4)
                .map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
            </Stagger>
          </Container>
        </section>
      ) : null}
    </>
  );
}
