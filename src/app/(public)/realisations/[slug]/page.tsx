import { SectionReveal } from "@/components/ui/section-reveal";
import { Aurora } from "@/components/ui/aurora";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
} from "lucide-react";

import { ProjectVideo } from "@/components/public/project-video";
import { resolveProjectImage } from "@/lib/project-media";
import { ProjectDetailVisual } from "@/components/public/project-detail-visual";
import { TechnologyMarquee } from "@/components/public/technology-marquee";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
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
        {/* Halo */}
        <div
          className="
            pointer-events-none
            absolute right-[-220px] top-[40px]
            size-[650px]
            rounded-full
            bg-daak-blue/[0.07]
            blur-[150px]
          "
          aria-hidden="true"
        />

        <Container>
          <Reveal>
            <Link
              href="/realisations"
              className="
                inline-flex items-center gap-2
                text-sm text-white/50
                transition
                hover:text-daak-cyan
              "
            >
              <ArrowLeft size={16} />

              Toutes les réalisations
            </Link>
          </Reveal>

          <div
            className="
              mt-12 grid gap-16
              lg:grid-cols-[.95fr_1.05fr]
              lg:items-center
            "
          >
            {/* TEXTE */}
            <Reveal direction="left">
              <div>
                <SectionLabel>
                  {project.categoryLabel}
                </SectionLabel>

                <h1
                  className="
                    mt-7
                    font-heading
                    text-[46px]
                    font-bold
                    leading-[1.05]
                    tracking-[-0.05em]
                    sm:text-6xl
                    lg:text-[68px]
                  "
                >
                  {project.title}
                </h1>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-lg
                    leading-8
                    text-white/60
                  "
                >
                  {project.tagline}
                </p>

                <div className="mt-8">
                  <p
                    className="
                      text-xs font-bold
                      uppercase tracking-[0.14em]
                      text-daak-cyan
                    "
                  >
                    Statut
                  </p>

                  <p className="mt-3 text-base text-white/65">
                    {project.status}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="mt-9 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex h-12
                        items-center gap-2
                        rounded-xl
                        bg-daak-blue px-5
                        font-semibold
                        text-daak-navy
                        transition
                        hover:bg-daak-cyan
                      "
                    >
                      Voir le projet

                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex h-12
                        items-center gap-2
                        rounded-xl
                        border border-white/15
                        px-5
                        font-semibold
                        text-white
                        transition
                        hover:border-daak-cyan/30
                        hover:bg-white/5
                      "
                    >
                      Voir le code

                      <Code2 size={16} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>

            {/* IMAGE DU PROJET */}
            <ProjectDetailVisual
              image={resolveProjectImage(project.image)}
              imageAlt={project.imageAlt}
              title={project.shortTitle}
              visualClass={project.visualClass}
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          VIDÉO DE PRÉSENTATION
      ===================================================== */}
      {project.videoUrl && (
      <section className="bg-daak-light py-20 lg:py-28">
        <Container>
          <SectionReveal>
            <div className="mb-10 max-w-2xl">
              <SectionLabel>Présentation vidéo</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-4xl">
                Découvrez {project.title} en action
              </h2>
            </div>
            <ProjectVideo project={project} />
          </SectionReveal>
        </Container>
      </section>
      )}

      {/* =====================================================
          CONTEXTE
      ====================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div
            className="
              grid gap-16
              lg:grid-cols-2
              lg:items-start
            "
          >
            <Reveal direction="left">
              <SectionLabel>
                Contexte
              </SectionLabel>

              <h2
                className="
                  mt-6
                  font-heading
                  text-3xl font-bold
                  tracking-[-0.04em]
                  text-daak-text
                  md:text-5xl
                "
              >
                Le besoin derrière le projet.
              </h2>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.08}
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {project.context}
              </p>
            </Reveal>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* =====================================================
          PROBLÉMATIQUE
      ====================================================== */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
<SectionReveal>
          <Reveal>
            <SectionLabel>
              Problématique
            </SectionLabel>

            <h2
              className="
                mt-6 max-w-3xl
                font-heading
                text-3xl font-bold
                tracking-[-0.04em]
                text-daak-text
                md:text-5xl
              "
            >
              Les difficultés auxquelles le projet devait répondre.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {project.problem.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.07}
              >
                <div
                  className="
                    h-full rounded-[22px]
                    border border-slate-200 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,180,255,.15)]
                    bg-white p-7
                    transition
                    hover:-translate-y-1
                    hover:border-daak-blue/30
                    hover:shadow-[0_20px_55px_rgba(10,26,47,.06)]
                  "
                >
                  <span
                    className="
                      font-heading
                      text-xs font-bold
                      text-daak-blue
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="
                      mt-5
                      font-heading
                      text-lg font-semibold
                      text-daak-text
                    "
                  >
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* =====================================================
          SOLUTION
      ====================================================== */}
      <section
        className="
          relative overflow-hidden
          bg-daak-navy
          py-24 text-white
          lg:py-32
        "
      >
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            size-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-daak-blue/[0.05]
            blur-[150px]
          "
        />

        <Container>
<SectionReveal>
          <div
            className="
              relative grid gap-16
              lg:grid-cols-[.8fr_1.2fr]
            "
          >
            <Reveal direction="left">
              <SectionLabel>
                Solution
              </SectionLabel>

              <h2
                className="
                  mt-6
                  font-heading
                  text-3xl font-bold
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                Une réponse conçue autour du besoin.
              </h2>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.08}
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-white/60
                "
              >
                {project.solution}
              </p>
            </Reveal>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* =====================================================
          FONCTIONNALITÉS
      ====================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <Reveal>
            <SectionLabel>
              Fonctionnalités
            </SectionLabel>

            <h2
              className="
                mt-6 max-w-3xl
                font-heading
                text-3xl font-bold
                tracking-[-0.04em]
                text-daak-text
                md:text-5xl
              "
            >
              Les principales fonctionnalités du projet.
            </h2>
          </Reveal>

          <div
            className="
              mt-12 grid gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {project.features.map((feature, index) => (
              <Reveal
                key={feature}
                delay={index * 0.045}
              >
                <div
                  className="
                    flex h-full
                    items-start gap-4
                    rounded-[18px]
                    border border-slate-200 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,180,255,.15)]
                    bg-daak-light
                    p-5
                    transition
                    hover:-translate-y-1
                    hover:border-daak-blue/30
                    hover:bg-white
                    hover:shadow-[0_18px_45px_rgba(10,26,47,.06)]
                  "
                >
                  <span
                    className="
                      flex size-8 shrink-0
                      items-center justify-center
                      rounded-lg
                      bg-daak-navy
                      text-daak-cyan
                    "
                  >
                    <Check size={15} />
                  </span>

                  <span
                    className="
                      font-medium
                      leading-6
                      text-daak-text
                    "
                  >
                    {feature}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* =====================================================
          TECHNOLOGIES — SLIDER AUTOMATIQUE
      ====================================================== */}
      {project.stack.length > 0 && (
      <section
        className="
          overflow-hidden
          bg-daak-light
          py-24
          lg:py-32
        "
      >
        <Container>
<SectionReveal>
          <Reveal>
            <SectionLabel>
              Technologies
            </SectionLabel>

            <h2
              className="
                mt-6 max-w-3xl
                font-heading
                text-3xl font-bold
                tracking-[-0.04em]
                text-daak-text
                md:text-4xl
              "
            >
              Les technologies utilisées pour construire ce projet.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <TechnologyMarquee
                technologies={project.stack}
              />
            </div>
          </Reveal>
        </SectionReveal>
</Container>
      </section>
      )}

      {/* =====================================================
          RÉSULTAT
      ====================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel className="justify-center">
                Résultat
              </SectionLabel>

              <p
                className="
                  mt-8
                  font-heading
                  text-2xl font-semibold
                  leading-relaxed
                  tracking-[-0.025em]
                  text-daak-text
                  md:text-4xl
                "
              >
                {project.result}
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-daak-navy px-6 py-3 font-semibold text-white transition hover:bg-[#123b5a]"
              >
                Discuter d’un projet similaire
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </SectionReveal>
</Container>
      </section>

      {/* =====================================================
          PROJET SUIVANT
      ====================================================== */}
      <section
        className="
          overflow-hidden
          bg-daak-navy
          py-20 text-white
          lg:py-24
        "
      >
        <Container>
<SectionReveal>
          <Reveal>
            <p className="text-sm text-white/40">
              Projet suivant
            </p>

            <Link
              href={`/realisations/${nextProject.slug}`}
              className="
                group mt-5
                flex items-center
                justify-between gap-8
              "
            >
              <div>
                <p
                  className="
                    mb-3
                    text-xs font-bold
                    uppercase tracking-[0.14em]
                    text-daak-cyan
                  "
                >
                  {nextProject.categoryLabel}
                </p>

                <h2
                  className="
                    font-heading
                    text-3xl font-bold
                    tracking-[-0.04em]
                    md:text-5xl
                  "
                >
                  {nextProject.title}
                </h2>
              </div>

              <ArrowRight
                size={32}
                className="
                  shrink-0 text-daak-cyan
                  transition-transform
                  duration-300
                  group-hover:translate-x-3
                "
              />
            </Link>
          </Reveal>
        </SectionReveal>
</Container>
      </section>
    </>
  );
}