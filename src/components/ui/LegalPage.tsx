import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Layout";

export function LegalPage({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-paper">
      <Container narrow className="py-16 sm:py-24">
        <Eyebrow number={number}>Legal</Eyebrow>
        <h1 className="mt-6 heading-page text-[2.5rem] text-navy sm:text-[3.25rem] lg:text-[clamp(2.5rem,3.8vw,3.75rem)]">
          {title}
        </h1>
        <div className="mt-10 space-y-5 text-[0.9375rem] leading-[1.7] text-ink-soft [&_h2]:mt-12 [&_h2]:heading-section [&_h2]:text-[1.375rem] [&_h2]:text-navy [&_li]:leading-[1.7] sm:[&_h2]:text-[1.5rem]">
          {children}
        </div>
      </Container>
    </section>
  );
}
