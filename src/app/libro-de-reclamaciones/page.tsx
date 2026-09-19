import type { Metadata } from "next";
import ReclamoForm from "@/components/forms/ReclamoForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, SectionHeading, Stat } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { site, whatsappDisplay, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones",
  description:
    "Libro de Reclamaciones virtual de Pain Solutions para registrar reclamos y quejas conforme a la normativa de protección al consumidor.",
  alternates: { canonical: "/libro-de-reclamaciones" },
  robots: { index: false },
};

const notes = [
  {
    code: "01",
    title: "Qué puedes registrar",
    text: "Un reclamo expresa disconformidad con el producto o servicio recibido. Una queja expresa malestar con la atención al público.",
  },
  {
    code: "02",
    title: "Quién puede registrar",
    text: "El consumidor o usuario, de forma personal, o un representante debidamente acreditado.",
  },
  {
    code: "03",
    title: "Qué ocurre después",
    text: "Recibirás un acuse de recibo con el código de tu hoja de reclamación y una respuesta dentro del plazo establecido por la normativa vigente.",
  },
];

export default function LibroDeReclamacionesPage() {
  return (
    <>
      <PageHero
        number="L.04"
        eyebrow="Legal"
        title="Libro de Reclamaciones"
        lead="Registra aquí tu reclamo o queja. Este libro de reclamaciones virtual está disponible las 24 horas y reemplaza el registro presencial en nuestras oficinas."
        aside={
          <div className="border-2 border-ink bg-ice/50 p-6">
            <Eyebrow number="L.04">Registro</Eyebrow>
            <dl className="mt-6 grid grid-cols-1 gap-y-6">
              <Stat value="24h" label="Disponibilidad" hint="Libro virtual" />
              <Stat value="30" label="Días" hint="Plazo máximo de respuesta" />
              <Stat value="PE" label="Normativa" hint="Protección al consumidor" />
            </dl>
          </div>
        }
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Antes de empezar"
                  number="L.04"
                  title="Cómo funciona el registro"
                  description="Ten a mano los datos de tu documento y la información del bien o servicio para completar la hoja de reclamación."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-10 divide-y divide-ink/10 border-y-2 border-ink">
                  {notes.map((note) => (
                    <li key={note.code} className="py-5">
                      <div className="flex items-baseline gap-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                        <span className="text-teal-deep">{note.code}</span>
                        <span aria-hidden="true" className="inline-block h-px w-6 bg-ink/30" />
                        <span>{note.title}</span>
                      </div>
                      <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                        {note.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border-2 border-ink bg-paper p-6 sm:p-10">
                  <Eyebrow number="L.04">Hoja de reclamación</Eyebrow>
                  <h2 className="mt-4 heading-section text-[1.5rem] text-navy">
                    Registrar un reclamo o queja
                  </h2>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft">
                    Los campos marcados con <span className="text-teal-deep">*</span> son
                    obligatorios.
                  </p>
                  <div className="mt-8">
                    <ReclamoForm
                      endpoint={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT}
                    />
                  </div>
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
              <Eyebrow number="L.05">Atención presencial</Eyebrow>
              <h2 className="mt-6 heading-section text-[1.75rem] text-navy sm:text-[2.25rem]">
                ¿Prefieres registrar tu reclamo por otro canal?
              </h2>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                El libro de reclamaciones físico también está disponible en{" "}
                {site.location}, y puedes escribirnos a {site.contactEmail} o al{" "}
                {whatsappDisplay()} para orientarte en el registro.
              </p>
            </div>
            <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <ButtonLink
                href={whatsappLink(
                  "Hola, necesito orientación para registrar un reclamo en el Libro de Reclamaciones de Pain Solutions."
                )}
                external
                variant="primary"
              >
                Escribir por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
