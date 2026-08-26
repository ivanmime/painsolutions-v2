import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Stat,
} from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para solicitar información sobre productos, disponibilidad, cotizaciones o asesoría.",
  alternates: { canonical: "/contacto" },
};

const channels = [
  {
    label: "WhatsApp",
    code: "C.01",
    value: "Escríbenos y te respondemos en horario comercial",
    note: "Respuesta en horario hábil",
    href: whatsappLink(),
    external: true,
  },
  {
    label: "Email",
    code: "C.02",
    value: site.contactEmail,
    note: "Para cotizaciones formales",
    href: `mailto:${site.contactEmail}`,
    external: false,
  },
  {
    label: "Ubicación",
    code: "C.03",
    value: site.location,
    note: "Atención bajo coordinación",
    href: undefined,
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <Eyebrow number="C.00">Contacto</Eyebrow>
                <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
                  Hablemos
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Contáctanos para solicitar información sobre productos,
                  disponibilidad, cotizaciones o asesoría.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Reveal delay={0.15}>
                <div className="border border-ink/12 bg-ice/40 p-6">
                  <Eyebrow number="C.0T">Tiempos</Eyebrow>
                  <dl className="mt-6 grid grid-cols-1 gap-y-6">
                    <Stat value="24h" label="Respuesta" hint="Hábiles" />
                    <Stat value="L–V" label="Horario" hint="9:00 – 18:00 GMT-5" />
                    <Stat value="PE" label="Cobertura" hint="Nacional" />
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Canales"
                  number="C.01"
                  title="Canales de contacto"
                />
                <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                  {channels.map((channel) => {
                    const inner = (
                      <>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                            {channel.code} · {channel.label}
                          </span>
                          <span aria-hidden="true" className="text-ink-muted">
                            →
                          </span>
                        </div>
                        <span className="mt-3 block font-display text-[1.375rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                          {channel.value}
                        </span>
                        <span className="mt-2 block text-[0.8125rem] text-ink-soft">
                          {channel.note}
                        </span>
                      </>
                    );
                    const cls =
                      "block py-5 transition-colors duration-200 hover:bg-ice/40";
                    return (
                      <li key={channel.label}>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            {...(channel.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className={cls}
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className={cls}>{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border border-ink/12 bg-paper p-6 sm:p-10">
                  <Eyebrow number="C.02">Formulario</Eyebrow>
                  <h2 className="mt-4 font-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                    ¿Cómo podemos ayudarte?
                  </h2>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft">
                    Déjanos tu consulta y nuestro equipo se pondrá en
                    contacto contigo.
                  </p>
                  <div className="mt-6">
                    <ContactForm endpoint={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
