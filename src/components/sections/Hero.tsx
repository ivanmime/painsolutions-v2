"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Layout";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { whatsappLink } from "@/data/site";

const ease = [0.2, 0.7, 0.1, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 16) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="relative grid grid-cols-12">
        {/* ── Left · editorial copy ───────────────────────── */}
        <div className="relative col-span-12 flex flex-col justify-center px-6 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-12 lg:col-span-7 lg:px-12 lg:pb-28 lg:pt-12 xl:px-16">
          <div className="mx-auto w-full max-w-[80rem]">
            <motion.div {...fade(0.05)}>
              <Eyebrow>Tecnología médica especializada</Eyebrow>
            </motion.div>

            <motion.h1
              {...fade(0.12)}
              className="mt-6 heading-page text-[2.5rem] text-navy sm:text-[3.25rem] lg:text-[clamp(2.5rem,3.8vw,3.75rem)]"
            >
              La más alta tecnología
              <br />
              para el{" "}
              <span className="text-teal-deep">manejo del dolor</span>,
              <br />
              al servicio de todos
            </motion.h1>

            <motion.p
              {...fade(0.22)}
              className="mt-6 max-w-xl lead"
            >
              Distribuimos en Perú soluciones médicas especializadas y
              acompañamos a profesionales e instituciones en su elección y uso
              adecuado.
            </motion.p>

            <motion.div
              {...fade(0.32)}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="/soluciones" variant="primary">
                Explorar soluciones
              </ButtonLink>
              <ButtonLink
                href={whatsappLink()}
                external
                variant="outline-dark"
              >
                Hablar con un asesor
              </ButtonLink>
            </motion.div>

            {/* Stats strip */}
            <motion.dl
              {...fade(0.42)}
              className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t-2 border-navy pt-6"
            >
            {[
              ["01", "Solución RFA"],
              ["04", "Familias de producto"],
              ["14+", "Productos y variantes"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-sans text-2xl font-extrabold text-navy">{value}</dd>
                <dd className="mt-0.5 text-xs font-medium text-ink-muted">{label}</dd>
              </div>
            ))}
            </motion.dl>
          </div>
        </div>

        {/* ── Right · teal block with product image ────────── */}
        <div className="relative col-span-12 bg-teal lg:col-span-5">
          {/* Subtle grid overlay */}
          <GridOverlay className="opacity-15" />

          <div className="relative flex h-full min-h-[480px] flex-col px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
            <div className="flex items-center justify-between text-paper">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                AVANOS · RFA Solutions
              </span>
              <span className="font-mono text-[0.625rem] tracking-[0.2em]">
                480 kHz
              </span>
            </div>

            <div className="relative my-10 flex-1">
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/products/cooled-kit.png"
                  alt="Equipo Avanos Cooled RF para ablación por radiofrecuencia"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain"
                />
              </motion.div>
            </div>

            <div className="border-t border-paper/30 pt-5">
              <p className="font-sans text-[1.25rem] font-extrabold leading-tight text-paper">
                Cooled RF Kit
              </p>
              <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/75">
                Sistema completo de radiofrecuencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
