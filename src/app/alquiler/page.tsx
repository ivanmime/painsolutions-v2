import type { Metadata } from "next";
import AsesoriaForm from "@/components/forms/AsesoriaForm";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Alquiler",
  description:
    "Tecnología especializada disponible cuando la necesitas, sin necesidad de adquirir el equipo. Alquiler por procedimiento con soporte operativo.",
  alternates: { canonical: "/alquiler" },
};

const includes = [
  {
    code: "01",
    title: "Equipo especializado",
    text: "Disponibilidad del equipo requerido durante el tiempo necesario para el procedimiento.",
  },
  {
    code: "02",
    title: "Personal especializado",
    text: "Acompañamiento de personal capacitado para la operación y manejo del equipo durante el procedimiento.",
  },
  {
    code: "03",
    title: "Traslado y logística",
    text: "Coordinación del transporte del equipo hacia la clínica u hospital donde se realizará el procedimiento.",
  },
  {
    code: "04",
    title: "Consumibles necesarios",
    text: "Según el procedimiento, el servicio puede contemplar los consumibles asociados, como cánulas y electrodos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos qué necesitas",
    text: "Indícanos el procedimiento, institución y fecha estimada.",
  },
  {
    number: "02",
    title: "Revisamos la configuración",
    text: "Confirmamos el equipo y los componentes necesarios para el caso.",
  },
  {
    number: "03",
    title: "Coordinamos disponibilidad y traslado",
    text: "Organizamos el equipo, personal y logística para el procedimiento.",
  },
  {
    number: "04",
    title: "Acompañamos el procedimiento",
    text: "El equipo permanece disponible durante el tiempo coordinado para su realización.",
  },
];

const situations = [
  "médicos que requieren el equipo para un procedimiento específico;",
  "clínicas u hospitales que necesitan acceso puntual a la tecnología;",
  "profesionales que todavía no justifican la compra de un equipo propio.",
];

export default function AlquilerPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <Eyebrow number="AL.00">Alquiler</Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
                  Alquiler por procedimiento
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-2xl font-display text-[1.375rem] font-medium leading-[1.3] tracking-[-0.01em] text-ink text-balance sm:text-[1.625rem]">
                  Tecnología especializada disponible cuando la necesitas, sin
                  necesidad de adquirir el equipo.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Ponemos a disposición el equipo requerido para el
                  procedimiento junto con el soporte operativo necesario para
                  su uso, coordinando cada caso de forma personalizada.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink href="#solicitar" variant="primary">
                    Consultar disponibilidad
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappLink(
                      "Hola, quisiera consultar la disponibilidad de alquiler por procedimiento de Pain Solutions."
                    )}
                    external
                    variant="outline-dark"
                  >
                    Escribir por WhatsApp
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
              eyebrow="Qué incluye el servicio"
              number="AL.01"
              title="Más que el alquiler de un equipo"
              description="El servicio se organiza por procedimiento e integra los elementos necesarios para poder trasladar y utilizar la tecnología en la institución donde se realizará."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item) => (
              <StaggerItem key={item.code} className="h-full">
                <div className="flex h-full flex-col bg-paper p-7">
                  <div className="flex items-baseline justify-between border-b border-ink/12 pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {item.code} / 04
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink/30"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-[1.375rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-y border-line bg-ice/40 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cómo funciona"
              number="AL.02"
              title="Coordinamos cada alquiler según el procedimiento"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <div className="flex h-full flex-col bg-paper p-7">
                  <div className="flex items-baseline justify-between border-b border-ink/12 pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      PASO {step.number}
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {step.number}/04
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.375rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
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

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Para quién puede ser útil"
                  number="AL.03"
                  title="Una alternativa a la compra para necesidades puntuales"
                  description="Pensado para profesionales e instituciones que necesitan acceder a tecnología especializada para uno o varios procedimientos sin adquirir inmediatamente el equipo."
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
                  Ejemplos de situaciones que sí están alineadas con lo
                  conversado:
                </p>
                <ul className="mt-6 divide-y divide-ink/10 border-y-2 border-ink">
                  {situations.map((situation) => (
                    <li
                      key={situation}
                      className="flex items-baseline gap-4 py-5"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[0.625rem] text-teal-deep"
                      >
                        →
                      </span>
                      <span className="text-[1.0625rem] leading-[1.6] text-ink-soft">
                        {situation}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ice/40 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Alquiler adaptado a cada caso"
                  number="AL.04"
                  title="Cada procedimiento requiere una coordinación diferente"
                  description="La cotización se prepara según el equipo requerido, consumibles, logística, personal necesario y características del procedimiento."
                />
              </Reveal>
            </div>
            <div className="col-span-12 flex items-end lg:col-span-5 lg:justify-end">
              <Reveal delay={0.1}>
                <ButtonLink href="#solicitar" variant="primary">
                  Solicitar cotización
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8 border-2 border-ink bg-paper p-8 sm:p-10">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-sans text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy text-balance sm:text-[2.25rem]">
                  ¿Tienes varios procedimientos programados?
                </h2>
                <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Podemos revisar contigo la mejor forma de coordinar la
                  disponibilidad del equipo para más de un procedimiento.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink href="#solicitar" variant="outline-dark">
                  Hablar con nuestro equipo
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative">
          <Reveal>
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-8">
                <Eyebrow light number="AL.05">
                  Alquiler por procedimiento
                </Eyebrow>
                <h2 className="mt-6 font-display text-[2.25rem] font-medium leading-[1.1] tracking-[-0.015em] text-balance sm:text-[3rem] lg:text-[3.75rem]">
                  ¿Necesitas un equipo para un próximo procedimiento?
                </h2>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-paper/75">
                  Cuéntanos qué necesitas y coordinaremos contigo la
                  disponibilidad, configuración y logística del servicio.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink href="#solicitar" variant="light">
                  Consultar alquiler por procedimiento
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="solicitar" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Consultar disponibilidad"
                  number="AL.06"
                  title="Cuéntanos qué necesitas"
                  description="Completa el formulario y nuestro equipo se pondrá en contacto contigo para coordinar la disponibilidad, configuración y logística del servicio."
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border border-ink/12 bg-paper p-6 sm:p-10">
                  <AsesoriaForm
                    endpoint={process.env.NEXT_PUBLIC_FORMSPREE_ASESORIA}
                    submitLabel="Consultar disponibilidad"
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
