import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Stat,
} from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Tecnología médica con acompañamiento especializado. Pain Solutions facilita el acceso de profesionales e instituciones de salud a soluciones tecnológicas especializadas.",
  alternates: { canonical: "/nosotros" },
};

const pillars = [
  {
    code: "01",
    title: "Seleccionamos",
    text: "Trabajamos con soluciones y fabricantes especializados.",
  },
  {
    code: "02",
    title: "Asesoramos",
    text: "Ayudamos a revisar las alternativas disponibles según cada requerimiento.",
  },
  {
    code: "03",
    title: "Gestionamos",
    text: "Facilitamos el proceso comercial y de adquisición.",
  },
  {
    code: "04",
    title: "Acompañamos",
    text: "Mantenemos una relación cercana para futuras necesidades de productos e insumos.",
  },
];

const milestones = [
  { year: "2019", text: "Inicio de operaciones como distribuidor especializado en RFA." },
  { year: "2021", text: "Acuerdo de distribución con Avanos para Perú." },
  { year: "2023", text: "Habilitación de la línea Cooled RFA y bombas de perfusión." },
  { year: "2026", text: "Catálogo vigente con 13 referencias activas y cobertura nacional." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <Eyebrow number="N.01">Pain Solutions</Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
                  Tecnología médica con acompañamiento especializado
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Facilitamos el acceso de profesionales e instituciones de
                  salud a soluciones tecnológicas especializadas para el
                  manejo del dolor.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Reveal delay={0.15}>
                <div className="border border-ink/12 bg-ice/40 p-6">
                  <Eyebrow number="N.02">Hoja de ruta</Eyebrow>
                  <ul className="mt-6 space-y-5">
                    {milestones.map((m) => (
                      <li key={m.year} className="flex gap-4">
                        <span className="font-display text-[1.5rem] font-medium leading-none text-ink">
                          {m.year}
                        </span>
                        <p className="text-[0.875rem] leading-[1.55] text-ink-soft">
                          {m.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <Eyebrow number="N.03">Quiénes somos</Eyebrow>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Reveal delay={0.1}>
                <p className="font-display text-[1.75rem] font-medium leading-[1.2] tracking-[-0.01em] text-ink text-balance sm:text-[2.25rem]">
                  Conectamos necesidades médicas con tecnología
                  especializada
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.7] text-ink-soft">
                  Pain Solutions nace para acercar equipos, insumos y
                  soluciones médicas especializadas a profesionales e
                  instituciones de salud. Trabajamos conectando las
                  necesidades de nuestros clientes con tecnología
                  desarrollada por fabricantes internacionales, acompañando
                  el proceso desde la consulta inicial hasta la adquisición.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ink py-14 text-paper sm:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            <Stat value="07" label="Años" hint="Desde 2019" light />
            <Stat value="01" label="Fabricante" hint="Avanos" light />
            <Stat value="13" label="Referencias" hint="Catálogo vigente" light />
            <Stat value="PE" label="Cobertura" hint="Nacional" light />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cómo trabajamos"
              number="N.04"
              title="Cuatro pilares, un solo criterio."
              description="El proceso detrás de cada cotización que entregamos."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.code} className="h-full">
                <div className="flex h-full flex-col bg-paper p-7">
                  <div className="flex items-baseline justify-between border-b border-ink/12 pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {pillar.code} / 04
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink/30"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-[1.375rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {pillar.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
        <div
          aria-hidden="true"
          className="spec-grid absolute inset-0 opacity-30"
        />
        <Container className="relative">
          <Reveal>
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-7">
                <Eyebrow light number="N.05">
                  Nuestro propósito
                </Eyebrow>
                <p className="mt-6 font-display text-[2.25rem] font-medium leading-[1.1] tracking-[-0.015em] text-balance sm:text-[3rem] lg:text-[3.75rem]">
                  Facilitar el acceso a tecnología médica especializada
                </p>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-paper/75">
                  Mediante una experiencia profesional, clara y cercana.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
                <ButtonLink href="/soluciones" variant="light">
                  Explorar soluciones médicas
                </ButtonLink>
                <ButtonLink href="/asesoria" variant="outline-light">
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
