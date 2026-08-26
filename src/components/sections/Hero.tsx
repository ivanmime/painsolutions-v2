"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappLink, site } from "@/data/site";

const ease = [0.2, 0.7, 0.1, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 16) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="relative grid grid-cols-12">
        {/* ── Left · editorial copy ───────────────────────── */}
        <div className="relative col-span-12 flex flex-col justify-center px-6 py-20 sm:px-8 sm:py-24 lg:col-span-7 lg:px-12 lg:py-32 xl:px-16">
          <div className="mx-auto w-full max-w-[80rem]">
            <motion.div
              {...fade(0.05)}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-teal-deep">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-teal" />
                Tecnología médica especializada
              </span>
            </motion.div>

            <motion.h1
              {...fade(0.12)}
              className="mt-8 font-sans text-[2.75rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-navy text-balance sm:text-[3.75rem] lg:text-[4.5rem]"
            >
              Tecnología y asesoría
              <br />
              especializada para el{" "}
              <span className="text-teal-deep">manejo del dolor</span>
            </motion.h1>

            <motion.p
              {...fade(0.22)}
              className="mt-8 max-w-xl text-[1.0625rem] leading-[1.6] text-ink-soft"
            >
              Distribuimos en Perú la línea completa de {site.brand} para
              procedimientos de ablación por radiofrecuencia. Cánulas,
              sondas, generadores y accesorios del mismo sistema, asesorados
              por un equipo que conoce las compatibilidades técnicas del set.
            </motion.p>

            <motion.div
              {...fade(0.32)}
              className="mt-10 flex flex-wrap items-center gap-4"
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
              className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t-2 border-navy pt-8"
            >
            {[
              ["01", "Solución RFA"],
              ["04", "Familias de producto"],
              ["14+", "Productos y variantes"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-navy">{value}</dd>
                <dd className="mt-0.5 text-xs font-medium text-muted">{label}</dd>
              </div>
            ))}
            </motion.dl>
          </div>
        </div>

        {/* ── Right · teal block with product image ────────── */}
        <div className="relative col-span-12 bg-teal lg:col-span-5">
          {/* Subtle grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255 255 255 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

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
