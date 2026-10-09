import { Tilt } from "@/components/ui/tilt";
import { Reveal } from "@/components/ui/reveal";
import { ServiceVisual } from "@/components/public/service-visual";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SplitText } from "@/components/ui/split-text";
import { Aurora } from "@/components/ui/aurora";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  MonitorCog,
  Palette,
  Camera,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import {
  getServicesByPole,
  type ServicePole,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services numériques & informatiques",
  description:
    "Découvrez les services DAAK_TECH : développement numérique, maintenance, réseaux, récupération de données, communication, audiovisuel et vidéosurveillance.",
};

const poles: {
  id: ServicePole;
  number: string;
  title: string;
  description: string;
  icon: typeof Code2;
}[] = [
  {
    id: "developpement",
    number: "01",
    title: "Développement numérique",
    description:
      "Concevoir les outils numériques qui font avancer votre activité.",
    icon: Code2,
  },
  {
    id: "informatique",
    number: "02",
    title: "Informatique & Infrastructure",
    description:
      "Maintenir, connecter et équiper votre environnement informatique.",
    icon: MonitorCog,
  },
  {
    id: "communication",
    number: "03",
    title: "Création & Communication",
    description:
      "Construire une image professionnelle et des contenus qui attirent l’attention.",
    icon: Palette,
  },
  {
    id: "securite",
    number: "04",
    title: "Sécurité électronique",
    description:
      "Surveiller vos espaces grâce à des équipements adaptés.",
    icon: Camera,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden isolate bg-daak-navy pb-24 pt-[150px] text-white lg:pb-32 lg:pt-[175px]">
      <Aurora calm className="-z-10" />
      <div aria-hidden="true" className="hero-edge" />
        <div className="pointer-events-none absolute right-[-180px] top-[80px] size-[560px] rounded-full bg-daak-blue/[0.07] blur-[150px]" />

        <Container>
          <SectionLabel>Services</SectionLabel>

          <h1 className="mt-7 max-w-4xl font-heading text-[44px] font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[64px]"><SplitText text="Des solutions technologiques adaptées à vos besoins." immediate /></h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Du développement numérique aux infrastructures informatiques,
            DAAK_TECH réunit plusieurs expertises complémentaires pour
            répondre à des problématiques concrètes.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {poles.map((pole) => (
              <a
                key={pole.id}
                href={`#${pole.id}`}
                className="
                  rounded-xl border border-white/10
                  bg-white/[0.03] px-4 py-3
                  text-sm font-medium text-white/70
                  transition
                  hover:border-daak-cyan/30
                  hover:text-daak-cyan
                "
              >
                {pole.number} · {pole.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* PÔLES */}
      {poles.map((pole, poleIndex) => {
        const Icon = pole.icon;
        const poleServices = getServicesByPole(pole.id);

        return (
          <section
            key={pole.id}
            id={pole.id}
            className={
              poleIndex % 2 === 0
                ? "scroll-mt-24 bg-white py-24 lg:py-32"
                : "scroll-mt-24 bg-daak-light py-24 lg:py-32"
            }
          >
            <Container>
<SectionReveal>
              <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-daak-navy text-daak-cyan shadow-[0_12px_30px_rgba(0,180,255,.3)]">
                    <Icon size={24} />
                  </div>

                  <p className="mt-8 font-heading text-sm font-bold text-daak-blue">
                    {pole.number}
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-4xl">
                    {pole.title}
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-slate-600">
                    {pole.description}
                  </p>
                </div>

                <div
                  className={
                    poleServices.length === 1
                      ? "grid"
                      : "grid gap-6 md:grid-cols-2"
                  }
                >
                  {poleServices.map((service, i) => (
                    <Reveal key={service.slug} delay={(i % 2) * 0.1}>
                      <Tilt className="h-full rounded-[26px]" max={5}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group block h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white transition-colors hover:border-daak-cyan/60 hover:shadow-[0_24px_70px_rgba(0,180,255,.16)]"
                        >
                          <div className="p-3">
                            <ServiceVisual image={service.image} title={service.poleLabel} visualClass={service.visualClass} />
                          </div>
                          <div className="p-7 pt-5">
                            <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-daak-text transition-colors group-hover:text-daak-blue">
                              {service.shortTitle}
                            </h3>
                            <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-daak-navy">
                              Découvrir le service
                              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1.5" />
                            </span>
                          </div>
                        </Link>
                      </Tilt>
                    </Reveal>
                  ))}
                </div>
              </div>
            </SectionReveal>
</Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-daak-navy px-7 py-14 text-white md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
<Aurora calm className="-z-10" />
            <div>
              <SectionLabel>Votre besoin</SectionLabel>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Vous ne savez pas encore quelle solution correspond à votre
                besoin ?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Présentez-nous votre situation. Nous vous aiderons à identifier
                l’approche la plus adaptée.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group mt-9 inline-flex h-14
                shrink-0 items-center justify-center gap-2
                rounded-xl bg-daak-blue px-7
                font-semibold text-daak-navy
                transition hover:bg-daak-cyan
                lg:mt-0
              "
            >
              Démarrer un projet

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </SectionReveal>
</Container>
      </section>
    </>
  );
}