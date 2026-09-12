import type { Metadata } from "next";
import AsesoriaForm from "@/components/forms/AsesoriaForm";
import { ButtonLink } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Stat,
} from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Asesoría",
  description:
    "Te ayudamos a encontrar la solución adecuada. Cuéntanos qué tecnología estás evaluando y nuestro equipo revisará las alternativas disponibles.",
  alternates: { canonical: "/asesoria" },
};

const situations = [
  {
    code: "A.01",
    title: "Estás evaluando un nuevo equipo",
    text: "Quieres conocer qué alternativas existen dentro del portafolio.",
  },
  {
    code: "A.02",
    title: "Necesitas identificar insumos",
    text: "Quieres encontrar los componentes asociados a un equipo o solución.",
  },
  {
    code: "A.03",
    title: "Necesitas una cotización",
    text: "Tienes un requerimiento específico para tu práctica o institución.",
  },
  {
    code: "A.04",
    title: "No sabes qué producto necesitas",
    text: "Conoces la necesidad, pero todavía no la referencia exacta.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos qué necesitas",
    text: "Recibimos información sobre tu requerimiento.",
  },
  {
    number: "02",
    title: "Revisamos las alternativas",
    text: "Identificamos opciones disponibles dentro del portafolio.",
  },
  {
    number: "03",
    title: "Nos ponemos en contacto contigo",
    text: "Compartimos información y siguientes pasos.",
  },
];

export default function AsesoriaPage() {
  return (
    <>
      <PageHero
        number="A.00"
        eyebrow="Asesoría especializada"
        title="Te ayudamos a encontrar la solución adecuada"
        lead="Cuéntanos qué tecnología estás evaluando o qué necesidad tienes y nuestro equipo podrá ayudarte a revisar las alternativas disponibles dentro de nuestro portafolio."
        aside={
          <div className="border-2 border-ink bg-ice/50 p-6">
            <Eyebrow number="A.0T">Tiempos</Eyebrow>
            <dl className="mt-6 grid grid-cols-1 gap-y-6">
              <Stat value="24h" label="Respuesta" hint="Hábiles" />
              <Stat value="L–V" label="Horario" hint="9:00 – 18:00 (GMT-5)" />
              <Stat value="01" label="Asesor" hint="Por solicitud" />
            </dl>
          </div>
        }
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Podemos ayudarte si…"
              number="A.01"
              title="Situaciones que resolvemos a diario"
              description="Si tu escenario está en esta lista, podemos ayudarte."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
            {situations.map((situation) => (
              <StaggerItem key={situation.code} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {situation.code}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink/30"
                    />
                  </div>
                  <h3 className="mt-6 heading-tile text-[1.375rem] text-navy">
                    {situation.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {situation.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-y border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cómo funciona"
              number="A.02"
              title="Un proceso simple en tres pasos"
              description="Mantenemos un único punto de contacto durante todo el ciclo."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      PASO {step.number}
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {step.number}/03
                    </span>
                  </div>
                  <h3 className="mt-6 heading-tile text-[1.375rem] text-navy">
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

      <section id="solicitar" className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Solicitar asesoría"
                  number="A.03"
                  title="Cuéntanos qué necesitas"
                  description="Completa el formulario y nuestro equipo se pondrá en contacto contigo para revisar juntos las alternativas disponibles."
                />
                <div className="mt-10">
                  <ButtonLink href={whatsappLink()} external variant="outline-dark">
                    O escríbenos por WhatsApp
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <AsesoriaForm endpoint={process.env.NEXT_PUBLIC_FORMSPREE_ASESORIA} />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
