import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FamilyCard from "@/components/cards/FamilyCard";
import ProductCard from "@/components/cards/ProductCard";
import ContactForm from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Stat,
} from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { families } from "@/data/families";
import { getFeaturedProducts } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Pain Solutions | Tecnología para el manejo del dolor",
  description:
    "Soluciones, equipos e insumos especializados para profesionales e instituciones de salud. Conoce el portafolio de Pain Solutions.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    code: "01",
    title: "Entendemos tu necesidad",
    text: "Conocemos qué tecnología, equipo o insumo estás buscando.",
  },
  {
    code: "02",
    title: "Revisamos las alternativas",
    text: "Identificamos las opciones disponibles dentro de nuestro portafolio.",
  },
  {
    code: "03",
    title: "Gestionamos tu requerimiento",
    text: "Te ayudamos con disponibilidad, información comercial y cotización.",
  },
  {
    code: "04",
    title: "Te acompañamos",
    text: "Seguimos siendo tu punto de contacto para futuras necesidades de equipos, insumos y accesorios.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <>
      <Hero />

      {/* ── 02 · Manifiesto (navy full block) ──────────────── */}
      <section className="bg-navy text-paper">
        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <Eyebrow light number="02">
                  Manifiesto
                </Eyebrow>
                <h2 className="mt-6 font-sans text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-paper text-balance sm:text-[2.75rem] lg:text-[3.5rem]">
                  La radiofrecuencia es una técnica, no un catálogo.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="text-[1.0625rem] leading-[1.65] text-paper/75">
                  Distribuimos la línea completa de un solo fabricante y
                  validamos cada configuración con el equipo clínico antes
                  de cualquier cotización. Cánulas, sondas, generadores y
                  accesorios del mismo sistema, no componentes sueltos.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/soluciones/rfa" variant="primary-light">
                    Conocer RFA Solutions
                  </ButtonLink>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/55">
                    480 kHz · Avanos
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 03 · Soluciones médicas (teal accent) ──────────── */}
      <section className="bg-ice/50 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Nuestras soluciones"
                number="03"
                title={
                  <>
                    Cuatro familias,
                    <br />
                    un mismo sistema.
                  </>
                }
                description="Explora equipos, insumos y accesorios especializados disponibles dentro de nuestro portafolio."
              />
            </Reveal>
            <Reveal delay={0.15}>
              <ButtonLink href="/soluciones/rfa" variant="outline-dark">
                Explorar RFA Solutions
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ── 04 · Stats bar (teal) ──────────────────────────── */}
      <section className="bg-teal text-paper">
        <Container className="py-14 sm:py-16">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            <Stat
              value="04"
              label="Modalidades"
              hint="Convencional · Refrigerada · Tined · Equipos"
              light
            />
            <Stat
              value="13"
              label="Referencias"
              hint="Catálogo vigente"
              light
            />
            <Stat
              value="01"
              label="Fabricante"
              hint="Avanos · RFA Solutions"
              light
            />
            <Stat
              value="480"
              label="kHz estándar"
              hint="Sistema RFA"
              light
            />
          </div>
        </Container>
      </section>

      {/* ── 05 · Productos destacados ─────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Portafolio"
                number="04"
                title="Conoce nuestras soluciones destacadas."
                description="Una muestra de los equipos e insumos disponibles dentro de nuestro portafolio."
              />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                {featured.length} referencias activas
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-14 text-center">
            <ButtonLink href="/soluciones" variant="outline-dark">
              Ver portafolio completo
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* ── 06 · Diferencial Pain Solutions ─────────────────── */}
      <section className="bg-ice/50 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pain Solutions"
              number="05"
              title="Más que encontrar un producto"
              description="La incorporación de tecnología médica requiere entender el equipo, sus componentes y las necesidades de cada institución o profesional."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.code} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
                    <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-teal-deep">
                      Paso {step.code}
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {step.code} / 04
                    </span>
                  </div>
                  <h3 className="mt-6 font-sans text-[1.25rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ── 07 · Asesoría · Big teal CTA strip ─────────────── */}
      <section className="bg-teal-deep text-paper">
        <div className="mx-auto grid w-full max-w-[80rem] grid-cols-12 gap-x-6 gap-y-10 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <Eyebrow light number="06">
                Asesoría
              </Eyebrow>
              <h2 className="mt-6 font-sans text-[2.5rem] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-paper text-balance sm:text-[3.5rem] lg:text-[4rem]">
                ¿No sabes exactamente qué solución necesitas?
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.6] text-paper/85">
                Cuéntanos qué tecnología estás evaluando incorporar y nuestro equipo podrá ayudarte
                a revisar las alternativas disponibles.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href="/asesoria" variant="primary">
                  Hablar con un asesor
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="outline-light"
                >
                  Escribir por WhatsApp
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={0.15}>
              <ul className="border-2 border-paper/20">
                {[
                  ["Asesoría", "L–V · 9:00 – 18:00 (GMT-5)"],
                  ["Cotizaciones", "Respuesta en 24 h hábiles"],
                  ["Documentación", "Manuales y fichas técnicas vigentes"],
                  ["Cobertura", "Lima y provincias bajo coordinación"],
                ].map(([k, v], i) => (
                  <li
                    key={k}
                    className={`flex items-baseline justify-between bg-teal-deep px-5 py-5 ${
                      i > 0 ? "border-t border-paper/15" : ""
                    }`}
                  >
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/65">
                      {k}
                    </span>
                    <span className="text-right text-[0.9375rem] font-medium text-paper">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 08 · Contacto ──────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Contacto"
                  number="07"
                  title="Hablemos de lo que necesitas"
                  description="¿Buscas un equipo, un insumo específico o necesitas una cotización? Déjanos tus datos y nuestro equipo se pondrá en contacto contigo."
                />
                <ul className="mt-10 divide-y divide-ink/10 border-y-2 border-ink">
                  <li className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="font-sans text-[1.125rem] font-bold text-navy transition-colors hover:text-teal-deep"
                    >
                      {site.contactEmail}
                    </a>
                  </li>
                  <li className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                      WhatsApp
                    </span>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[1.125rem] font-bold text-navy transition-colors hover:text-teal-deep"
                    >
                      WhatsApp comercial
                    </a>
                  </li>
                  <li className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                      Ubicación
                    </span>
                    <span className="font-sans text-[1.125rem] font-bold text-navy">
                      {site.location}
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <ContactForm
                    endpoint={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
