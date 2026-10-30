import { SectionReveal } from "@/components/ui/section-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";
import { Aurora } from "@/components/ui/aurora";
import type { Metadata } from "next";

import { ProjectShowcase } from "@/components/public/project-showcase";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/data/projects";
import { resolveProjectImage } from "@/lib/project-media";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez des applications, solutions métier et sites web réalisés autour de problématiques concrètes.",
};

export default function ProjectsPage() {
  const items = projects.map((p) => ({ ...p, cover: resolveProjectImage(p.image) }));

  return (
    <>
      {/* HERO */}
      <section
        className="
          relative overflow-hidden
          isolate bg-daak-navy
          pb-24 pt-[150px]
          text-white
          lg:pb-32 lg:pt-[175px]
        "
      >
      <Aurora calm className="-z-10" />
      <div aria-hidden="true" className="hero-edge" />
        {/* Halo décoratif */}
        <div
          className="
            pointer-events-none
            absolute right-[-180px] top-[70px]
            size-[560px]
            rounded-full
            bg-daak-blue/[0.07]
            blur-[150px]
          "
          aria-hidden="true"
        />

        <Container>
          <SectionLabel>
            Réalisations
          </SectionLabel>

          <h1
            className="
              mt-7
              max-w-4xl
              font-heading
              text-[44px]
              font-bold
              leading-[1.06]
              tracking-[-0.045em]
              sm:text-5xl
              lg:text-[64px]
            "
          ><SplitText text="Des projets conçus autour de besoins concrets." immediate /></h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/60
              md:text-lg
            "
          >
            Applications, solutions métier et sites web : découvrez
            différents projets et les problématiques auxquelles ils répondent.
          </p>

          {/* Compteur */}
          <div className="mt-12 flex items-center gap-4">
            <span
              className="
                font-heading
                text-4xl font-bold
                text-daak-cyan
              "
            >
              {String(projects.length).padStart(2, "0")}
            </span>

            <div className="h-10 w-px bg-white/15" />

            <span
              className="
                max-w-[150px]
                text-sm leading-5
                text-white/40
              "
            >
              projets présentés
            </span>
          </div>
        </Container>
      </section>

      {/* VITRINE */}
      <section className="bg-daak-light py-20 md:py-24 lg:py-32">
        <Container>
          <SectionReveal>
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionLabel>Nos projets</SectionLabel>
                <h2 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-4xl lg:text-5xl">
                  Des solutions numériques pensées pour des usages réels.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-slate-600">
                Choisissez une catégorie, puis ouvrez une réalisation pour découvrir son contexte et ses fonctionnalités.
              </p>
            </div>

            <ProjectShowcase projects={items} />
          </SectionReveal>
        </Container>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="bg-white py-24 lg:py-28">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-daak-navy px-7 py-14 text-white md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            <Aurora calm className="-z-10" />
            <div>
              <SectionLabel>Votre projet</SectionLabel>
              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-[-0.035em] md:text-4xl">
                Un projet similaire en tête ?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Parlez-nous de votre besoin : nous construirons la solution la plus adaptée à votre contexte.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-shine group mt-9 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-daak-yellow px-7 font-semibold text-daak-navy transition hover:brightness-110 lg:mt-0"
            >
              Démarrer un projet
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
