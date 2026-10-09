import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitText } from "@/components/ui/split-text";

type MaintenancePageProps = { label: string; title: string; message: string };

export function MaintenancePage({ label, title, message }: MaintenancePageProps) {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-daak-navy pb-24 pt-[150px] text-white">
      <Aurora className="-z-10" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Engrenages */}
          <div aria-hidden="true" className="relative mx-auto mb-10 size-32">
            <div className="absolute inset-0 rounded-full bg-daak-blue/20 blur-[50px]" />
            <span className="spin-slow absolute left-0 top-3 flex size-20 items-center justify-center rounded-3xl border border-daak-cyan/30 bg-daak-navy/70 text-daak-cyan shadow-[0_0_40px_rgba(37,244,238,.25)] backdrop-blur" style={{ animationDuration: "12s" }}>
              <Settings size={44} />
            </span>
            <span className="spin-rev absolute bottom-0 right-0 flex size-16 items-center justify-center rounded-2xl border border-daak-yellow/40 bg-daak-navy/70 text-daak-yellow shadow-[0_0_40px_rgba(255,195,0,.25)] backdrop-blur" style={{ animationDuration: "9s" }}>
              <Settings size={34} />
            </span>
          </div>

          <SectionLabel className="justify-center">{label}</SectionLabel>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            <SplitText text={title} immediate />
          </h1>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/65">{message}</p>

          {/* Barre de progression animée */}
          <div role="img" aria-label="Mise à jour en cours" className="mx-auto mt-10 h-2.5 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
            <span className="btn-shine block h-full w-2/3 rounded-full bg-gradient-to-r from-daak-cyan via-daak-blue to-daak-yellow" />
          </div>
          <p className="mt-3 text-sm text-white/45">Mise à jour en cours</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn-shine group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-daak-blue px-7 font-semibold text-daak-navy transition hover:bg-daak-cyan">
              Retour à l’accueil
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/15 px-7 font-semibold transition hover:border-daak-cyan/50">
              Nous contacter
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
