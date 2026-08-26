import Link from "next/link";
import { Container } from "@/components/ui/Layout";
import { site, whatsappLink } from "@/data/site";
import { families } from "@/data/families";

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <Container className="pt-20 pb-10">
        {/* Top — colophon */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pb-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-teal text-paper ring-1 ring-paper/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.jpg?v=2"
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-[1]">
                <span className="font-sans text-[1.125rem] font-extrabold uppercase text-paper">
                  Pain <span className="text-teal">Solutions</span>
                </span>
                <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/55">
                  Tecnología médica especializada
                </span>
              </span>
            </div>
            <p className="mt-8 max-w-md font-sans text-[1.625rem] font-extrabold uppercase leading-[1.05] tracking-[-0.015em] text-paper text-balance">
              {site.promise}
            </p>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.65] text-paper/65">
              {site.tagline}.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <FooterCol title="Soluciones" code="01">
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/soluciones/rfa"
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    Radiofrecuencia (RFA)
                  </Link>
                </li>
                {families.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/soluciones/rfa/${f.slug}`}
                      className="text-paper/80 transition-colors hover:text-teal"
                    >
                      {f.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterCol>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <FooterCol title="Pain Solutions" code="02">
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/nosotros"
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/asesoria"
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    Asesoría
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </FooterCol>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <FooterCol title="Contacto" code="03">
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    {site.contactEmail}
                  </a>
                </li>
                <li className="text-paper/65">{site.location}</li>
              </ul>
            </FooterCol>
          </div>
        </div>

        {/* Wide colophon statement */}
        <div className="border-t border-paper/15 py-12">
          <p className="font-sans text-[1.5rem] font-extrabold uppercase leading-[1.1] tracking-[-0.015em] text-paper text-balance sm:text-[2rem] lg:text-[2.5rem]">
            Cada procedimiento intervencionista del dolor merece un sistema
            validado por el fabricante, no una aproximación.
          </p>
        </div>

        {/* Bottom legal */}
        <div className="flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/55">
            <span>© {year} Pain Solutions. Todos los derechos reservados.</span>
          </div>
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-5 font-mono text-[0.625rem] uppercase tracking-[0.2em]"
          >
            <Link
              href="/privacidad"
              className="text-paper/55 transition-colors hover:text-paper"
            >
              Privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-paper/55 transition-colors hover:text-paper"
            >
              Cookies
            </Link>
            <Link
              href="/terminos"
              className="text-paper/55 transition-colors hover:text-paper"
            >
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  code,
  children,
}: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/55">
        <span className="text-paper/40">{code}</span>
        <span aria-hidden="true" className="inline-block h-px w-6 bg-paper/30" />
        <span>{title}</span>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}
