import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AlquilerForm from "@/components/forms/AlquilerForm";
import { ButtonLink } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";
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
    "Alquiler del equipo Cooled RF, con proveedor Avanos o Baylis Medical, para procedimientos que requieran esta tecnología, con soporte operativo y logístico coordinado para cada caso.",
  alternates: { canonical: "/alquiler" },
};

const WHATSAPP_ALQUILER =
  "Hola, estoy interesado(a) en el servicio de alquiler por procedimiento con el equipo Cooled RF. Quisiera consultar disponibilidad y condiciones para un próximo caso.";

type RentalEquipment = {
  code: string;
  brand: string;
  name: string;
  image?: string;
  description: string;
  specs: { label: string; value: string }[];
};

const equipment: RentalEquipment[] = [
  {
    code: "01",
    brand: "AVANOS",
    name: "Cooled RF",
    image: "/images/products/cooled-kit.png",
    description:
      "Equipo Cooled RF de Avanos para procedimientos de radiofrecuencia refrigerada, con los componentes y accesorios de su línea de sistema.",
    specs: [
      { label: "Proveedor", value: "Avanos" },
      { label: "Modalidad", value: "Cooled RFA" },
      { label: "Componentes", value: "Por definir" },
    ],
  },
  {
    code: "02",
    brand: "BAYLIS MEDICAL",
    name: "Cooled RF",
    image: "/images/products/baylis-cooled-rf.png",
    description:
      "Equipo Cooled RF de Baylis Medical para procedimientos de radiofrecuencia refrigerada. Descripción pendiente de completar.",
    specs: [
      { label: "Proveedor", value: "Baylis Medical" },
      { label: "Modalidad", value: "Cooled RFA" },
      { label: "Componentes", value: "Por definir" },
    ],
  },
];

const includes = [
  {
    code: "01",
    title: "Equipo Cooled RF",
    text: "Disponibilidad del equipo Cooled RF durante el tiempo coordinado para la realización del procedimiento, según el proveedor elegido.",
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
    text: "Identificamos el equipo —Avanos o Baylis Medical—, las cánulas y los componentes requeridos para preparar el servicio.",
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
  "Equipo y proveedor",
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
              Coordinamos el alquiler del equipo Cooled RF —disponible con
              proveedor Avanos o Baylis Medical— para procedimientos que
              requieran esta tecnología, junto con el soporte operativo y
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

      <section className="border-b border-line bg-ice/50 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Equipos disponibles"
              number="AL.01"
              title="Equipos disponibles para alquiler"
              description="Elige el equipo que mejor se adapte a tu procedimiento y a la disponibilidad del momento."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
            {equipment.map((item) => (
              <StaggerItem key={item.code} className="h-full">
                <div className="flex h-full flex-col border-2 border-ink bg-paper">
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-ice">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`Equipo ${item.name} de ${item.brand}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-contain p-6"
                      />
                    ) : (
                      <>
                        <GridOverlay tone="dark" className="opacity-10" />
                        <div className="absolute inset-0 grid place-items-center">
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            Imagen próximamente
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center bg-navy px-2 py-0.5 font-mono text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-paper">
                        {item.brand}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-teal-deep">
                      {item.code} · Equipo
                    </p>
                    <h3 className="mt-2 heading-tile text-[1.375rem] text-navy">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                      {item.description}
                    </p>
                    <dl className="mt-5 border-t border-line">
                      {item.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                        >
                          <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            {spec.label}
                          </dt>
                          <dd className="text-[0.875rem] text-ink-soft">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-auto pt-6">
                      <Link
                        href="#solicitar"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-navy transition-colors hover:text-teal-deep"
                      >
                        Elegir este equipo
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover/link:translate-x-1"
                        >
                          <path
                            d="M1 5h12M9 1l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="square"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Qué incluye el servicio"
              number="AL.02"
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
              number="AL.03"
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
                  number="AL.04"
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
                  number="AL.05"
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
                  number="AL.06"
                  title="¿Necesitas el equipo Cooled RF para un próximo procedimiento?"
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
              <Eyebrow number="AL.07">Alquiler por procedimiento</Eyebrow>
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
