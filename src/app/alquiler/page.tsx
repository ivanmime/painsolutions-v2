import type { Metadata } from "next";
import AlquilerForm from "@/components/forms/AlquilerForm";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Alquiler por procedimiento",
  description:
    "Alquiler de la máquina BAYLIS para procedimientos que requieran esta tecnología, con soporte operativo y logístico coordinado para cada caso.",
  alternates: { canonical: "/alquiler" },
};

const WHATSAPP_ALQUILER =
  "Hola, estoy interesado(a) en el servicio de alquiler por procedimiento con el equipo BAYLIS. Quisiera consultar disponibilidad y condiciones para un próximo caso.";

const includes = [
  {
    code: "01",
    title: "Equipo BAYLIS",
    text: "Disponibilidad de la máquina BAYLIS durante el tiempo coordinado para la realización del procedimiento.",
  },
  {
    code: "02",
    title: "Cánulas y consumibles",
    text: "Revisamos las cánulas y consumibles requeridos según el procedimiento y la configuración necesaria.",
  },
  {
    code: "03",
    title: "Personal capacitado",
    text: "El servicio puede contemplar personal preparado para apoyar en la operación y manejo del equipo durante el procedimiento.",
  },
  {
    code: "04",
    title: "Traslado y logística",
    text: "Coordinamos el traslado del equipo hasta la clínica, hospital o institución donde se realizará el procedimiento.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos sobre el procedimiento",
    text: "Compártenos qué procedimiento necesitas realizar, la fecha estimada y dónde se llevará a cabo.",
  },
  {
    number: "02",
    title: "Revisamos la configuración necesaria",
    text: "Identificamos el equipo, las cánulas y los componentes requeridos para preparar el servicio.",
  },
  {
    number: "03",
    title: "Evaluamos ubicación y logística",
    text: "Revisamos la clínica u hospital donde se realizará el procedimiento y coordinamos el traslado de acuerdo con la ubicación y distancia.",
  },
  {
    number: "04",
    title: "Confirmamos disponibilidad y cotización",
    text: "Preparamos una propuesta considerando el equipo, consumibles, personal y logística necesarios para el caso.",
  },
  {
    number: "05",
    title: "Coordinamos el procedimiento",
    text: "El equipo y el soporte acordado estarán disponibles durante el tiempo coordinado para su realización.",
  },
];

const quoteItems = [
  "Equipo BAYLIS",
  "Cánulas y consumibles",
  "Personal requerido",
  "Lugar del procedimiento",
  "Distancia y logística",
];

export default function AlquilerPage() {
  return (
    <>
      <PageHero
        number="AL.00"
        eyebrow="Alquiler"
        title="Alquiler por procedimiento"
        lead={
          <>
            <p>
              Tecnología especializada disponible cuando la necesitas, sin
              necesidad de adquirir el equipo.
            </p>
            <p>
              Coordinamos el alquiler de la máquina BAYLIS para procedimientos
              que requieran esta tecnología, junto con el soporte operativo y
              logístico necesario para cada caso.
            </p>
          </>
        }
        actions={
          <>
            <ButtonLink href="#solicitar" variant="primary">
              Consultar disponibilidad
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(WHATSAPP_ALQUILER)}
              external
              variant="outline-dark"
            >
              Hablar por WhatsApp
            </ButtonLink>
          </>
        }
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Qué incluye el servicio"
              number="AL.01"
              title="Una solución coordinada para cada procedimiento"
              description="El servicio de alquiler se organiza de acuerdo con las características del procedimiento, la configuración requerida y el lugar donde se realizará."
            >
              <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
                No se trata únicamente de disponer del equipo: coordinamos los
                elementos necesarios para que la tecnología pueda estar
                disponible durante el procedimiento.
              </p>
            </SectionHeading>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item) => (
              <StaggerItem key={item.code} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {item.code} / 04
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink/30"
                    />
                  </div>
                  <h3 className="mt-6 heading-tile text-[1.375rem] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-6 border-l-2 border-teal pl-4 text-[0.9375rem] leading-[1.6] text-ink-muted">
              Las condiciones logísticas pueden variar de acuerdo con la
              ubicación y distancia.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="El proceso"
              number="AL.02"
              title="¿Cómo funciona?"
            />
          </Reveal>
          <ol className="mt-12 border-y-2 border-navy">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 0.05}
                className="border-b border-line last:border-b-0"
              >
                <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-7">
                  <span className="col-span-12 font-mono text-[0.6875rem] tracking-[0.2em] text-teal-deep sm:col-span-2">
                    {step.number}
                  </span>
                  <h3 className="col-span-12 heading-tile text-[1.375rem] text-navy sm:col-span-4">
                    {step.title}
                  </h3>
                  <p className="col-span-12 text-[0.9375rem] leading-[1.6] text-ink-soft sm:col-span-6">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Para quién puede ser útil"
                  number="AL.03"
                  title="Una alternativa a la compra para necesidades puntuales"
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
                  El alquiler por procedimiento está pensado para profesionales
                  e instituciones que necesitan acceder a tecnología
                  especializada para uno o varios casos sin adquirir
                  inmediatamente el equipo.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Puede ser una alternativa cuando necesitas utilizar la
                  tecnología para un procedimiento específico, cubrir una
                  necesidad puntual o evaluar la solución antes de considerar
                  una compra.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Cotización personalizada por procedimiento"
                  number="AL.04"
                  title="Cada caso requiere una coordinación diferente"
                  description="La cotización se prepara considerando:"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {quoteItems.map((item) => (
                    <li
                      key={item}
                      className="border border-ink/15 bg-paper px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8 border-2 border-ink bg-paper p-8 sm:p-10">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="heading-section text-[1.75rem] text-navy sm:text-[2.25rem]">
                  ¿Tienes varios procedimientos programados?
                </h2>
                <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Si necesitas el equipo para más de un procedimiento, podemos
                  revisar contigo la mejor forma de coordinar disponibilidad,
                  consumibles y logística.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink href="#solicitar" variant="outline-dark">
                  Consultar disponibilidad
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="solicitar"
        className="scroll-mt-24 border-t border-line bg-paper py-20 sm:py-28"
      >
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Solicita información sobre alquiler"
                  number="AL.05"
                  title="¿Necesitas la máquina BAYLIS para un próximo procedimiento?"
                  description="Déjanos los datos principales del caso y nuestro equipo se pondrá en contacto contigo para revisar disponibilidad, configuración y condiciones del servicio."
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <AlquilerForm
                    endpoint={process.env.NEXT_PUBLIC_FORMSPREE_ASESORIA}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow number="AL.06">Alquiler por procedimiento</Eyebrow>
              <h2 className="mt-6 heading-section text-[1.75rem] text-navy sm:text-[2.25rem]">
                ¿Prefieres hablar directamente con nosotros?
              </h2>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                También puedes escribirnos por WhatsApp para consultar
                disponibilidad o contarnos sobre tu próximo procedimiento.
              </p>
            </div>
            <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <ButtonLink
                href={whatsappLink(WHATSAPP_ALQUILER)}
                external
                variant="primary"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
