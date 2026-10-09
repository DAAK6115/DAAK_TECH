import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { Particles } from "@/components/ui/particles";
import { RotatingWords } from "@/components/ui/rotating-words";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitText } from "@/components/ui/split-text";
import { DigitalCircuitVisual } from "@/components/public/digital-circuit-visual";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-daak-navy pb-28 pt-[150px] text-white lg:min-h-[860px] lg:pb-32 lg:pt-[170px]">
      <Aurora />
      <Particles className="opacity-60" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] xl:gap-20">
          <div className="relative z-10">
            <SectionLabel>Solutions numériques & informatiques</SectionLabel>

            <h1 className="mt-7 max-w-[760px] font-heading text-[46px] font-bold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-[64px] xl:text-[68px] 2xl:text-[72px]">
              <SplitText text="La technologie adaptée" immediate delay={0.2} />{" "}
              <SplitText text="à vos besoins." immediate delay={0.55} wordClassName="gradient-text" />
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-8 text-white/65 md:text-lg">
              DAAK_TECH conçoit et met en œuvre des solutions numériques et informatiques adaptées aux besoins des entreprises, organisations et particuliers.
            </p>

            <p className="mt-5 font-heading text-lg text-white/80">
              Nous nous occupons de vos{" "}
              <RotatingWords words={["sites web", "applications", "réseaux", "ordinateurs", "caméras de sécurité", "visuels et vidéos"]} />
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-shine btn-pulse group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-daak-blue px-7 font-semibold text-daak-navy transition hover:bg-daak-cyan">
                Démarrer un projet
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/a-propos" className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 font-semibold text-white backdrop-blur transition hover:border-daak-cyan/50 hover:bg-white/[0.07]">
                Découvrir DAAK_TECH
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-4 text-sm text-white/45">
              <span className="ping-dot size-2 rounded-full bg-daak-yellow" />
              <span>Innover pour transformer, personnaliser pour exceller.</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <DigitalCircuitVisual />
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="absolute bottom-7 left-1/2 hidden h-11 w-[26px] -translate-x-1/2 rounded-full border-2 border-white/25 lg:block">
        <span className="wheel-dot absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-daak-cyan" />
      </div>
    </section>
  );
}
