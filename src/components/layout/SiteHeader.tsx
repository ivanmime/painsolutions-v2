"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site, whatsappLink } from "@/data/site";
import { families } from "@/data/families";
import { ButtonLink } from "@/components/ui/Button";

function BrandMark() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Pain Solutions — Inicio"
    >
      <span
        aria-hidden="true"
        className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-line"
      >
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
        <span className="font-sans text-[1.0625rem] font-extrabold uppercase tracking-tight text-ink">
          Pain <span className="text-teal-deep">Solutions</span>
        </span>
        <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
          Tecnología médica especializada
        </span>
      </span>
    </Link>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowOut({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9L9 3M5 3h4v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropdownOpen(false), 140);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const solucionesItem = nav.find((item) => "children" in item && item.children);
  const mainItems = nav.filter((item) => !("children" in item && item.children));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/95 backdrop-blur"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[80rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <BrandMark />

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {mainItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className={`group relative inline-flex items-center py-2 text-[0.9375rem] font-bold tracking-tight transition-colors ${
                  active ? "text-navy" : "text-ink-soft hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-[3px] bg-teal transition-all duration-300 ${
                    active
                      ? "right-0"
                      : "right-full group-hover:right-0"
                  }`}
                />
              </Link>
            );
          })}

          {solucionesItem && "children" in solucionesItem && solucionesItem.children ? (
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((v) => !v)}
                onFocus={openDropdown}
                onBlur={scheduleClose}
                className={`flex items-center gap-1.5 py-2 text-[0.9375rem] font-bold tracking-tight transition-colors ${
                  pathname.startsWith("/soluciones")
                    ? "text-navy"
                    : "text-ink-soft hover:text-navy"
                }`}
              >
                {solucionesItem.label}
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-[860px] -translate-x-1/2 border-2 border-navy bg-paper shadow-lift"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Top band · manufacturer strip */}
                    <div className="flex items-center justify-between border-b-2 border-navy bg-navy px-6 py-4 text-paper">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-[1rem] font-extrabold uppercase tracking-tight">
                          {site.manufacturer.line}
                        </span>
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper/60">
                          Avanos · {site.manufacturer.frequency} kHz
                        </span>
                      </div>
                      <Link
                        href={whatsappLink(
                          "Hola, quisiera información sobre la línea RFA Solutions de Pain Solutions."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-teal transition-colors hover:text-paper"
                      >
                        Hablar por WhatsApp
                        <ArrowOut />
                      </Link>
                    </div>

                    {/* Family grid */}
                    <ul className="grid grid-cols-2 gap-px bg-line">
                      {families.map((family) => (
                        <li key={family.slug}>
                          <Link
                            href={`/soluciones/rfa/${family.slug}`}
                            onClick={closeAll}
                            className="group block bg-paper px-6 py-5 transition-colors hover:bg-ice"
                          >
                            <div className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
                              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-teal-deep">
                                {family.code}
                              </span>
                              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                                {family.heroKicker}
                              </span>
                            </div>
                            <h3 className="mt-3 font-sans text-[1rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy">
                              {family.cardTitle}
                            </h3>
                            <p className="mt-1.5 text-[0.8125rem] leading-[1.5] text-ink-soft">
                              {family.cardDescription}
                            </p>
                            <div className="mt-3 flex items-center justify-between font-mono text-[0.625rem] uppercase tracking-[0.2em]">
                              <span className="text-ink-muted">Ver familia</span>
                              <span className="text-teal-deep transition-transform duration-200 group-hover:translate-x-0.5">
                                  →
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom strip · CTAs */}
                    <div className="flex flex-col gap-3 border-t-2 border-navy bg-ice px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[0.8125rem] text-ink-soft">
                        ¿Necesita orientación para configurar el sistema?
                      </p>
                      <div className="flex items-center gap-2">
                        <Link
                          href="/soluciones/rfa"
                          onClick={closeAll}
                          className="border-2 border-navy bg-paper px-4 py-2 font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-paper"
                        >
                          Ver portafolio
                        </Link>
                        <Link
                          href="/asesoria"
                          onClick={closeAll}
                          className="bg-navy px-4 py-2 font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink"
                        >
                          Solicitar asesoría
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : null}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/asesoria"
            variant="primary"
            className="hidden lg:inline-flex"
          >
            Hablar con un asesor
          </ButtonLink>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden h-[52px] w-[52px] items-center justify-center bg-[#25D366] text-paper transition-colors hover:bg-[#1ebe5a] sm:inline-flex"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {nav.map((item) =>
                "children" in item && item.children ? (
                  <div key={item.href} className="border-b border-line pb-3">
                    <div className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
                      {item.label}
                    </div>
                    <div className="mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeAll}
                          className="flex items-center justify-between py-1.5 text-[0.95rem] font-bold text-ink"
                        >
                          <span>{child.label}</span>
                          <span className="text-teal-deep">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className={`block border-b border-line py-3 font-sans text-[1.125rem] font-bold ${
                      pathname.startsWith(item.href) ? "text-navy" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <ButtonLink href="/asesoria" variant="primary" className="mt-3 w-full">
                Hablar con un asesor
              </ButtonLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
