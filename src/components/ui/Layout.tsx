import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${
        narrow ? "max-w-4xl" : "max-w-[80rem]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light,
  number,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  number?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] ${
        light ? "text-paper/75" : "text-teal-deep"
      } ${className}`}
    >
      {number ? (
        <span
          className={`inline-flex h-5 items-center justify-center border px-1.5 text-[0.625rem] tracking-[0.2em] ${
            light ? "border-paper/30" : "border-teal-deep/40"
          }`}
        >
          {number}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`inline-block h-px w-10 ${
            light ? "bg-paper/40" : "bg-teal"
          }`}
        />
      )}
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "left",
  number,
  accent,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  number?: string;
  accent?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow light={light} number={number}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-6 font-sans text-[2rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-balance sm:text-[2.5rem] lg:text-[3.25rem] ${
          light ? "text-paper" : "text-navy"
        }`}
      >
        {title}
        {accent ? <span className="text-teal">{accent}</span> : null}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-[1.65] text-pretty ${
            light ? "text-paper/75" : "text-ink-soft"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Navegación de ruta" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-ink-muted">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-ink/30">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Stat({
  value,
  label,
  hint,
  light,
}: {
  value: string;
  label: string;
  hint?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={`font-sans text-[2.5rem] font-extrabold leading-none tracking-[-0.02em] sm:text-[3rem] ${
          light ? "text-paper" : "text-navy"
        }`}
      >
        {value}
      </span>
      <span
        className={`mt-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] ${
          light ? "text-paper/55" : "text-ink-muted"
        }`}
      >
        {label}
      </span>
      {hint ? (
        <span
          className={`mt-1.5 text-[0.8125rem] ${
            light ? "text-paper/65" : "text-ink-soft"
          }`}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
