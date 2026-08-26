import Link from "next/link";
import type { Family } from "@/data/families";
import { StaggerItem } from "@/components/motion/Reveal";

export function FamilyCard({ family }: { family: Family }) {
  return (
    <StaggerItem className="h-full">
      <Link
        href={`/soluciones/rfa/${family.slug}`}
        className="group relative flex h-full flex-col border-2 border-ink bg-paper p-6 transition-colors duration-200 hover:bg-navy hover:text-paper"
      >
        {/* Top row */}
        <div className="flex items-start justify-between border-b border-line pb-4 group-hover:border-paper/20">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-teal-deep group-hover:text-teal">
            {family.code}
          </span>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted group-hover:text-paper/55">
            {family.heroKicker}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-sans text-[1.375rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy text-balance group-hover:text-paper">
          {family.cardTitle}
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.6] text-ink-soft group-hover:text-paper/80">
          {family.cardDescription}
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-between border-t border-line pt-4 group-hover:border-paper/20">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink group-hover:text-paper">
            Ver familia
          </span>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center bg-navy text-paper transition-all duration-300 group-hover:bg-teal group-hover:text-navy"
          >
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 5h12M9 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default FamilyCard;
