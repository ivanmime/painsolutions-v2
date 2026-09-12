import type { Metadata } from "next";
import AsesoriaForm from "@/components/forms/AsesoriaForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Asesoría",
  description:
    "Acompañamiento para sacar el máximo provecho de tu equipo y su configuración: dudas de uso, configuración y manejo, como parte de la postventa o mediante horas de asesoría adicionales.",
  alternates: { canonical: "/asesoria" },
};

const WHATSAPP_ASESORIA =
  "Hola, estoy interesado(a) en el servicio de asesoría de Pain Solutions. Quisiera recibir información sobre acompañamiento y bolsas de horas para mi equipo.";

const moments = [
  {
    title: "Si compraste un equipo con Pain Solutions",
    body: [
      "Algunas ventas pueden incluir una bolsa de horas o sesiones de acompañamiento postventa para apoyar la puesta en marcha, resolver dudas y reforzar el uso adecuado del equipo.",
      "Cuando necesites soporte adicional fuera de lo incluido, puedes contratar nuevas horas de asesoría.",
    ],
  },
  {
    title: "Si ya tienes un equipo y necesitas apoyo adicional",
    body: [
      "También puedes solicitar asesoría de forma independiente, aunque el equipo no haya sido adquirido recientemente.",
      "Revisamos tu necesidad y definimos contigo el tipo de acompañamiento que necesitas.",
    ],
  },
];

const topics = [
  {
    code: "01",
    title: "Configuración del equipo",
    text: "Orientación para comprender la configuración adecuada del sistema y sus componentes.",
  },
  {
    code: "02",
    title: "Uso y funcionamiento",
    text: "Acompañamiento para resolver dudas sobre el manejo y funcionamiento del equipo.",
  },
  {
    code: "03",
    title: "Capacitación adicional",
    text: "Sesiones complementarias para reforzar conocimientos después de la capacitación incluida en la venta.",
  },
  {
    code: "04",
    title: "Resolución de dudas específicas",
    text: "Espacios de asesoría para revisar necesidades puntuales relacionadas con el equipo, sus accesorios o su configuración.",
  },
];

const uses = [
  "resolver dudas específicas.",
  "reforzar capacitaciones.",
  "revisar configuraciones.",
  "acompañar la adopción del equipo por parte del equipo clínico o técnico.",
  "ampliar el soporte después de las horas incluidas en la postventa.",
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos qué necesitas",
    text: "Indícanos qué equipo utilizas y qué tipo de apoyo estás buscando.",
  },
  {
    number: "02",
    title: "Revisamos tu necesidad",
    text: "Definimos si el acompañamiento corresponde a la postventa incluida o si requiere horas adicionales de asesoría.",
  },
  {
    number: "03",
    title: "Acordamos el alcance",
    text: "Te proponemos una cantidad de horas o sesiones acorde con el tipo de acompañamiento requerido.",
  },
  {
    number: "04",
    title: "Coordinamos la asesoría",
    text: "Agendamos las sesiones y trabajamos sobre las dudas o necesidades definidas.",
  },
];

export default function AsesoriaPage() {
  return (
    <>
      <PageHero
        number="A.00"
        eyebrow="Asesoría especializada"
        title="Acompañamiento para sacar el máximo provecho de tu equipo y su configuración"
        lead="Te ayudamos a resolver dudas sobre el uso, configuración y manejo de tus equipos, ya sea como parte del acompañamiento posterior a una compra o mediante horas de asesoría adicionales."
        actions={
          <>
            <ButtonLink href="#solicitar" variant="primary">
              Solicitar asesoría
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(WHATSAPP_ASESORIA)}
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
              eyebrow="Acompañamiento"
              number="A.01"
              title="Asesoría antes y después de la compra"
              description="El acompañamiento puede adaptarse a diferentes momentos."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
            {moments.map((moment) => (
              <StaggerItem key={moment.title} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <h3 className="heading-tile text-[1.375rem] text-navy">
                    {moment.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {moment.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.9375rem] leading-[1.6] text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
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
              eyebrow="Temas de asesoría"
              number="A.02"
              title="¿En qué podemos ayudarte?"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <StaggerItem key={topic.code} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6">
                  <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted">
                      {topic.code} / 04
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink/30"
                    />
                  </div>
                  <h3 className="mt-6 heading-tile text-[1.375rem] text-navy">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {topic.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Una bolsa de horas según tu necesidad"
                  number="A.03"
                  title="Contrata el acompañamiento que necesites"
                  description="La asesoría adicional puede organizarse como una bolsa de horas o sesiones, de acuerdo con el nivel de acompañamiento requerido."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                  Puede utilizarse para
                </p>
                <ul className="mt-5 divide-y divide-ink/10 border-y-2 border-ink">
                  {uses.map((use) => (
                    <li key={use} className="flex items-baseline gap-4 py-4">
                      <span
                        aria-hidden="true"
                        className="font-mono text-[0.625rem] text-teal-deep"
                      >
                        →
                      </span>
                      <span className="text-[0.9375rem] leading-[1.6] text-ink-soft">
                        {use}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 flex items-end lg:col-span-5 lg:justify-end">
              <Reveal delay={0.1}>
                <ButtonLink href="#solicitar" variant="primary">
                  Consultar bolsa de horas
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="El proceso"
              number="A.04"
              title="¿Cómo funciona?"
            />
          </Reveal>
          <ol className="mt-14 border-y-2 border-navy">
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
                  eyebrow="Para clientes con equipos adquiridos"
                  number="A.05"
                  title="Tu acompañamiento no termina con la entrega"
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
                  La venta puede incluir capacitación y acompañamiento postventa
                  según el equipo y las condiciones comerciales acordadas.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Cuando necesites profundizar, capacitar a más personas o
                  resolver nuevas dudas, puedes ampliar ese acompañamiento
                  mediante horas adicionales de asesoría.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="solicitar"
        className="scroll-mt-24 border-t border-line py-20 sm:py-28"
      >
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Solicita asesoría"
                  number="A.06"
                  title="Cuéntanos qué equipo utilizas y qué necesitas resolver"
                  description="Déjanos algunos datos y nuestro equipo se pondrá en contacto contigo para entender tu necesidad y proponerte el tipo de acompañamiento adecuado."
                />
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <AsesoriaForm
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
              <Eyebrow number="A.07">Asesoría especializada</Eyebrow>
              <h2 className="mt-6 heading-section text-[1.75rem] text-navy sm:text-[2.25rem]">
                ¿Prefieres hablar directamente con nosotros?
              </h2>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                Escríbenos por WhatsApp y cuéntanos qué equipo utilizas y qué
                tipo de apoyo necesitas.
              </p>
            </div>
            <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <ButtonLink
                href={whatsappLink(WHATSAPP_ASESORIA)}
                external
                variant="primary"
              >
                Hablar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
