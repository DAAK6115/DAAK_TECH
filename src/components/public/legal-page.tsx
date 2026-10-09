import type { ReactNode } from "react";

import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitText } from "@/components/ui/split-text";

export function ToFill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-daak-yellow/25 px-1.5 py-0.5 font-medium text-[#7a5a00]">
      [À compléter : {children}]
    </span>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-200 py-9 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-daak-text">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-slate-600">{children}</div>
    </section>
  );
}

type LegalPageProps = { label: string; title: string; updated: string; children: ReactNode };

export function LegalPage({ label, title, updated, children }: LegalPageProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-daak-navy pb-20 pt-[150px] text-white lg:pb-24 lg:pt-[175px]">
        <Aurora calm className="-z-10" />
        <Container>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-7 max-w-3xl font-heading text-[40px] font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">
            <SplitText text={title} immediate />
          </h1>
          <p className="mt-6 text-sm text-white/50">Dernière mise à jour : {updated}</p>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">{children}</div>
        </Container>
      </section>
    </>
  );
}
