import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { Url } from "url";

type Variant =
  | "primary"
  | "primary-light"
  | "secondary"
  | "secondary-light"
  | "ghost"
  | "outline-dark"
  | "outline-light"
  | "light";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.875rem] font-bold tracking-[0.04em] uppercase transition-colors duration-200 min-h-[52px]";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-paper hover:bg-ink",
  "primary-light": "bg-teal text-paper hover:bg-teal-deep",
  secondary: "bg-paper text-navy hover:bg-ice",
  "secondary-light": "bg-paper text-navy hover:bg-ice",
  ghost: "text-navy hover:text-teal-deep",
  "outline-dark":
    "border-2 border-navy text-navy hover:bg-navy hover:text-paper",
  "outline-light":
    "border-2 border-paper text-paper hover:bg-paper hover:text-navy",
  light: "bg-paper text-navy hover:bg-ice",
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  children,
  className = "",
  showArrow = true,
}: {
  href: string | Url;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href as string}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
        {showArrow ? <Arrow /> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {showArrow ? <Arrow /> : null}
    </Link>
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  showArrow = true,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  showArrow?: boolean;
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow ? <Arrow /> : null}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover/btn:translate-x-1"
    >
      <path
        d="M1 5h12M9 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
