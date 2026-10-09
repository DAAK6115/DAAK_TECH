import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HomeHero } from "@/components/public/home-hero";
import { ProcessTimeline } from "@/components/public/process-timeline";
import { ServiceTicker } from "@/components/public/service-ticker";
import { ServiceVisual } from "@/components/public/service-visual";
import { Aurora } from "@/components/ui/aurora";
import { CircuitDivider } from "@/components/ui/circuit-divider";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { OrbitRings } from "@/components/ui/orbit-rings";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitText } from "@/components/ui/split-text";
import { Tilt } from "@/components/ui/tilt";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const stats = [
  { value: services.length, label: "services informatiques et numériques" },
  { value: 4, label: "pôles d’expertise" },
  { value: projects.length, label: "réalisations présentées" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceTicker />

      {/* Approche */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Notre approche</SectionLabel>
              <div className="mt-6">
                <SectionHeading
                  title="Des besoins réels. Des solutions adaptées."
                  description="Chaque projet est différent. DAAK_TECH privilégie une approche basée sur l’écoute, la compréhension du besoin et la conception d’une solution adaptée à votre contexte."
                />
              </div>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                  <span>Développement numérique</span><span className="text-daak-blue">•</span>
                  <span>Services informatiques</span><span className="text-daak-blue">•</span>
                  <span>Communication digitale</span><span className="text-daak-blue">•</span>
                  <span>Infrastructure</span>
                </div>
              </Reveal>
            </div>

            <ProcessTimeline />
          </div>
        </Container>
      </section>

      {/* Chiffres */}
      <section className="relative isolate overflow-hidden bg-daak-navy py-20 text-white lg:py-24">
        <Aurora className="-z-10 opacity-80" />
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.12}>
                <Tilt className="neon-border rounded-[28px]">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-9 text-center backdrop-blur-md">
                    <p className="gradient-text font-heading text-6xl font-bold tracking-tight lg:text-7xl">
                      <Counter to={s.value} />
                    </p>
                    <p className="mt-3 text-white/60">{s.label}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Nos services</SectionLabel>
              <div className="mt-6">
                <SectionHeading title="Tout ce qu’il faut pour avancer, au même endroit." />
              </div>
            </div>
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold text-daak-navy">
              Voir tous les services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                <Tilt className="rounded-[26px]" max={6}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <ServiceVisual image={service.image} title={service.poleLabel} visualClass={service.visualClass} />
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-daak-text transition-colors group-hover:text-daak-blue">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{service.summary}</p>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifeste */}
      <section className="relative isolate overflow-hidden bg-daak-navy py-28 text-white lg:py-36">
        <Aurora className="-z-10" />
        <OrbitRings className="left-1/2 top-1/2 -z-10 size-[760px] -translate-x-1/2 -translate-y-1/2 opacity-40" />

        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <SectionLabel className="justify-center">Notre signature</SectionLabel>

            <h2 className="mt-8 font-heading text-4xl font-bold leading-[1.08] tracking-[-0.04em] md:text-6xl">
              <SplitText text="Innover pour transformer." />
              <br />
              <SplitText text="Personnaliser pour exceller." delay={0.35} wordClassName="gradient-text" />
            </h2>

            <Reveal delay={0.3}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
                Nous concevons la technologie comme un outil au service d’un besoin concret, jamais comme une fin en soi.
              </p>
              <div className="mx-auto mt-14 max-w-2xl"><CircuitDivider /></div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="neon-border relative isolate overflow-hidden rounded-[28px] bg-daak-navy px-7 py-14 text-white md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
              <Aurora className="-z-10" />
              <div className="relative">
                <SectionLabel>Votre projet</SectionLabel>
                <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-[-0.035em] md:text-4xl">
                  Vous avez un projet ou un besoin informatique ?
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-white/65">
                  Présentez-nous votre besoin et identifions ensemble la solution la plus adaptée.
                </p>
              </div>

              <Link href="/contact" className="btn-shine btn-pulse group relative mt-9 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-daak-yellow px-7 font-semibold text-daak-navy transition hover:brightness-110 lg:mt-0">
                Parlons de votre projet
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
