import type { Metadata } from "next";
import Image from "next/image";
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

export default function NosotrosPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12">
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
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <Eyebrow number="N.02">Quiénes somos</Eyebrow>
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
            <Stat value="30+" label="Años" hint="Manejo del dolor" light />
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
              number="N.03"
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

      {/* ── N.04 · Referente médico ─────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <Eyebrow number="N.04">Referente médico</Eyebrow>
                <h2 className="mt-6 font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:text-[2.5rem] lg:text-[3rem]">
                  Una mirada clínica detrás de cada solución.
                </h2>
                <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  La experiencia médica que respalda el conocimiento que Pain
                  Solutions acerca a profesionales e instituciones para la
                  elección y el uso adecuado de cada solución.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-8">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-4 lg:col-span-5">
                      <Image
                        src="/images/doctor.jpg"
                        alt="Dr. Víctor Ignacio Espinoza Aranguren"
                        width={500}
                        height={791}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-8 lg:col-span-7">
                      <p className="font-display text-[1.375rem] font-medium leading-[1.15] text-ink">
                        Dr. Víctor Ignacio Espinoza Aranguren
                      </p>
                      <p className="mt-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal-deep">
                        Anestesiología y Medicina del Dolor
                      </p>
                      <p className="mt-6 text-[0.9375rem] leading-[1.65] text-ink-soft">
                        Con más de 30 años de experiencia en el manejo del
                        dolor, su práctica clínica se ha desarrollado alrededor
                        del dolor agudo y crónico, las técnicas intervencionistas
                        y los cuidados paliativos.
                      </p>
                      <p className="mt-4 text-[0.9375rem] leading-[1.65] text-ink-soft">
                        Director de la Clínica del Dolor de Lima desde 2011 y
                        con 32 años de experiencia clínica en EsSalud, formado
                        en la Universidad Nacional Mayor de San Marcos.
                      </p>
                      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-ink/12 pt-5">
                        <li>
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            30+ años
                          </span>
                          <p className="mt-1 text-[0.875rem] text-ink-soft">
                            Manejo del dolor
                          </p>
                        </li>
                        <li>
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            Director
                          </span>
                          <p className="mt-1 text-[0.875rem] text-ink-soft">
                            Clínica del Dolor de Lima (desde 2011)
                          </p>
                        </li>
                        <li>
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            32 años
                          </span>
                          <p className="mt-1 text-[0.875rem] text-ink-soft">
                            EsSalud (desde 1994)
                          </p>
                        </li>
                        <li>
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            UNMSM
                          </span>
                          <p className="mt-1 text-[0.875rem] text-ink-soft">
                            Anestesiología · Medicina del Dolor
                          </p>
                        </li>
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/12 pt-5">
                        <a
                          href="https://www.linkedin.com/in/victorespinozaaranguren"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-teal-deep"
                        >
                          LinkedIn →
                        </a>
                        <a
                          href="https://www.youtube.com/@VictorIgnacioEspinozaAranguren"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-teal-deep"
                        >
                          YouTube →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Víctor Ignacio Espinoza Aranguren",
              jobTitle: "Director, Clínica del Dolor de Lima",
              worksFor: {
                "@type": "MedicalClinic",
                name: "Clínica del Dolor de Lima",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Universidad Nacional Mayor de San Marcos",
                },
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Médico-Cirujano",
                  credentialCategory: "degree",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Especialista en Anestesiología y Medicina del Dolor",
                  credentialCategory: "degree",
                },
              ],
              knowsAbout: [
                { "@type": "MedicalSpecialty", name: "Anesthesiology" },
                { "@type": "MedicalSpecialty", name: "Pain Management" },
                { "@type": "MedicalSpecialty", name: "Palliative Care" },
              ],
              sameAs: [
                "https://www.linkedin.com/in/victorespinozaaranguren",
                "https://www.youtube.com/@VictorIgnacioEspinozaAranguren",
              ],
            }),
          }}
        />
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
