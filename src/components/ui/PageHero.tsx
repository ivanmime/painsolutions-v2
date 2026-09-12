import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  number,
  eyebrow,
  title,
  lead,
  actions,
  aside,
  texture = false,
}: {
  number?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  texture?: boolean;
}) {
  return (
    <section className="relative border-b border-line bg-paper">
      {texture ? <GridOverlay tone="dark" className="opacity-15" /> : null}
      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <Eyebrow number={number}>{eyebrow}</Eyebrow>
              <h1 className="mt-6 heading-page text-[2.5rem] text-navy sm:text-[3.25rem] lg:text-[clamp(2.5rem,3.8vw,3.75rem)]">
                {title}
              </h1>
            </Reveal>
            {lead ? (
              <Reveal delay={0.1}>
                <div className="mt-7 max-w-2xl space-y-4 lead">{lead}</div>
              </Reveal>
            ) : null}
            {actions ? (
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {actions}
                </div>
              </Reveal>
            ) : null}
          </div>
          {aside ? (
            <div className="col-span-12 lg:col-span-4">
              <Reveal delay={0.15}>{aside}</Reveal>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
