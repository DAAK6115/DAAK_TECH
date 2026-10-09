import { SectionReveal } from "@/components/ui/section-reveal";
import { SplitText } from "@/components/ui/split-text";
import { Aurora } from "@/components/ui/aurora";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  MonitorCog,
  Palette,
  Camera,
  Check,
  Building2,
  BriefcaseBusiness,
  Users,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

import type { Metadata } from "next";

const poles = [
  {
    number: "01",
    title: "Développement numérique",
    description:
      "Applications web et mobiles, solutions métier et sites web professionnels conçus autour de besoins concrets.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Informatique & Infrastructure",
    description:
      "Maintenance informatique, réseaux, équipements et récupération de données pour des environnements fiables.",
    icon: MonitorCog,
  },
  {
    number: "03",
    title: "Création & Communication",
    description:
      "Communication digitale, design graphique, production audiovisuelle et valorisation de votre image.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Sécurité électronique",
    description:
      "Solutions de vidéosurveillance adaptées aux espaces professionnels et particuliers.",
    icon: Camera,
  },
];

const process = [
  {
    number: "01",
    title: "Écouter",
    text: "Comprendre votre besoin, votre contexte et vos objectifs.",
  },
  {
    number: "02",
    title: "Analyser",
    text: "Identifier les contraintes, les priorités et les solutions possibles.",
  },
  {
    number: "03",
    title: "Concevoir",
    text: "Définir une réponse adaptée avant de passer à la réalisation.",
  },
  {
    number: "04",
    title: "Réaliser",
    text: "Mettre en œuvre la solution avec méthode et précision.",
  },
  {
    number: "05",
    title: "Tester",
    text: "Vérifier la qualité, la cohérence et le bon fonctionnement.",
  },
  {
    number: "06",
    title: "Accompagner",
    text: "Assurer la prise en main, le suivi et les évolutions nécessaires.",
  },
];

const commitments = [
  "Des solutions adaptées",
  "Une communication claire",
  "Un travail soigné",
  "Un accompagnement durable",
];

const audiences = [
  {
    title: "Entreprises",
    icon: Building2,
  },
  {
    title: "Entrepreneurs & PME",
    icon: BriefcaseBusiness,
  },
  {
    title: "Organisations",
    icon: Users,
  },
  {
    title: "Particuliers",
    icon: UserRound,
  },
];

export const metadata: Metadata = {
  title: "À propos de DAAK_TECH",
  description:
    "Découvrez DAAK_TECH, son approche, sa mission et ses expertises en solutions numériques et informatiques.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden isolate bg-daak-navy pb-24 pt-[150px] text-white lg:pb-32 lg:pt-[175px]">
      <Aurora calm className="-z-10" />
      <div aria-hidden="true" className="hero-edge" />
        <div
          className="
            pointer-events-none absolute right-[-160px] top-[80px]
            size-[520px] rounded-full bg-daak-blue/[0.07]
            blur-[140px]
          "
        />

        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <SectionLabel>À propos de DAAK_TECH</SectionLabel>

              <h1
                className="
                  mt-7 max-w-[760px]
                  font-heading text-[44px] font-bold
                  leading-[1.06] tracking-[-0.045em]
                  sm:text-5xl lg:text-[64px]
                "
              ><SplitText text="La technologie au service de vos besoins réels." immediate /></h1>

              <p className="mt-7 max-w-[650px] text-base leading-8 text-white/65 md:text-lg">
                DAAK_TECH accompagne particuliers, entrepreneurs,
                organisations et entreprises dans la création,
                l’amélioration et la gestion de leurs solutions numériques
                et informatiques.
              </p>

              <p className="mt-8 font-heading text-sm font-semibold tracking-[0.08em] text-daak-cyan">
                Innover pour transformer, personnaliser pour exceller.
              </p>
            </div>

            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[520px] items-center justify-center">
              <div className="absolute size-[380px] rounded-full border border-daak-cyan/10" />

              <div className="absolute size-[280px] rounded-full border border-dashed border-daak-blue/15" />

              <div
                className="
                  relative flex h-[270px] w-[270px]
                  items-center justify-center
                  rounded-[40px]
                  border border-daak-cyan/20
                  bg-[#0D213A]
                  shadow-[0_0_80px_rgba(0,180,255,.09)]
                "
              >
                <div className="relative h-[150px] w-[210px]">
                  <Image
                    src="/branding/daak-tech-logo.png"
                    alt="Logo DAAK_TECH"
                    fill
                    priority
                    sizes="210px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Qui sommes-nous ?</SectionLabel>

              <h2
                className="
                  mt-6 max-w-2xl font-heading
                  text-3xl font-bold leading-tight
                  tracking-[-0.04em] text-daak-text
                  md:text-5xl
                "
              >
                Plus qu’un prestataire informatique, un partenaire
                technologique.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                DAAK_TECH développe des solutions pensées à partir des
                réalités de ses clients plutôt qu’à partir de modèles
                standardisés.
              </p>

              <p>
                Notre approche consiste à comprendre le besoin, étudier son
                contexte puis proposer une réponse technologique cohérente,
                utile et durable.
              </p>
            </div>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* PÔLES */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
<SectionReveal>
          <SectionLabel>Nos pôles</SectionLabel>

          <h2
            className="
              mt-6 max-w-3xl
              font-heading text-3xl font-bold
              tracking-[-0.04em] text-daak-text
              md:text-5xl
            "
          >
            Des expertises complémentaires réunies autour d’un même objectif.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {poles.map((pole) => {
              const Icon = pole.icon;

              return (
                <div
                  key={pole.number}
                  className="
                    group rounded-[24px]
                    border border-slate-200 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,180,255,.15)]
                    bg-white p-8
                    transition
                    hover:-translate-y-1
                    hover:border-daak-blue/30
                    hover:shadow-[0_24px_70px_rgba(10,26,47,.07)]
                  "
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-heading text-sm font-bold text-daak-blue">
                      {pole.number}
                    </span>

                    <div className="flex size-12 items-center justify-center rounded-2xl bg-daak-navy text-daak-cyan">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3 className="mt-10 font-heading text-2xl font-bold text-daak-text">
                    {pole.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-slate-600">
                    {pole.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative isolate overflow-hidden rounded-[28px] bg-daak-navy p-9 text-white md:p-12">
<Aurora calm className="-z-10" />
              <SectionLabel>Notre mission</SectionLabel>

              <h2 className="mt-7 font-heading text-3xl font-bold leading-tight md:text-4xl">
                Rendre la technologie utile, accessible et adaptée.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/60">
                Nous voulons transformer les besoins réels de nos clients en
                solutions claires, fiables et réellement utilisables.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-daak-light p-9 md:p-12 lg:translate-y-10">
              <SectionLabel>Notre vision</SectionLabel>

              <h2 className="mt-7 font-heading text-3xl font-bold leading-tight text-daak-text md:text-4xl">
                Construire des solutions qui évoluent avec nos clients.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Nous privilégions des solutions conçues pour durer,
                s’améliorer et accompagner l’évolution des activités.
              </p>
            </div>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* APPROCHE */}
      <section className="bg-daak-navy py-24 text-white lg:py-32">
        <Container>
<SectionReveal>
          <SectionLabel>Notre approche</SectionLabel>

          <h2
            className="
              mt-6 max-w-3xl
              font-heading text-3xl font-bold
              tracking-[-0.04em]
              md:text-5xl
            "
          >
            Une méthode structurée du besoin à l’accompagnement.
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-[22px]
                  border border-white/10
                  bg-white/[0.025]
                  p-7
                "
              >
                <span className="font-heading text-xs font-bold tracking-[0.14em] text-daak-cyan">
                  {step.number}
                </span>

                <h3 className="mt-5 font-heading text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-white/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionLabel>Nos engagements</SectionLabel>

              <h2
                className="
                  mt-6 font-heading
                  text-3xl font-bold
                  tracking-[-0.04em]
                  text-daak-text
                  md:text-5xl
                "
              >
                Une collaboration claire et orientée résultat.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commitments.map((commitment) => (
                <div
                  key={commitment}
                  className="
                    flex items-center gap-4
                    rounded-[18px]
                    border border-slate-200
                    bg-daak-light
                    p-5
                  "
                >
                  <span
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-xl bg-daak-navy
                      text-daak-cyan
                    "
                  >
                    <Check size={18} />
                  </span>

                  <span className="font-heading text-sm font-semibold text-daak-text">
                    {commitment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* AUDIENCES */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="text-center">
            <SectionLabel className="justify-center">
              Nos clients
            </SectionLabel>

            <h2
              className="
                mx-auto mt-6 max-w-3xl
                font-heading text-3xl font-bold
                tracking-[-0.04em]
                text-daak-text
                md:text-5xl
              "
            >
              Des solutions adaptées à différents profils.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div
                  key={audience.title}
                  className="
                    rounded-[22px]
                    border border-slate-200 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,180,255,.15)]
                    bg-white p-7 text-center
                  "
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-daak-navy text-daak-cyan">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-heading font-bold text-daak-text">
                    {audience.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div
            className="
              rounded-[28px]
              bg-daak-navy
              px-7 py-14
              text-white
              md:px-12
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-12
              lg:px-16
            "
          >
            <div>
              <SectionLabel>Parlons de votre besoin</SectionLabel>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Un besoin. Une idée. Un problème à résoudre ?
              </h2>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/contact"
                className="
                  group inline-flex h-14
                  items-center justify-center gap-2
                  rounded-xl bg-daak-blue px-7
                  font-semibold text-daak-navy
                  transition hover:bg-daak-cyan
                "
              >
                Démarrer un projet
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex h-14
                  items-center justify-center
                  rounded-xl
                  border border-white/15
                  px-7 font-semibold
                  transition hover:bg-white/5
                "
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </SectionReveal>
</Container>
      </section>
    </>
  );
}