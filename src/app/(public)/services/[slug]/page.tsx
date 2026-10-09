import { SectionReveal } from "@/components/ui/section-reveal";
import { Aurora } from "@/components/ui/aurora";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import {
  getServiceBySlug,
  services,
} from "@/data/services";

import { ServiceHeroVisual } from "@/components/public/service-hero-visual";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.seoDescription,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden isolate bg-daak-navy pb-24 pt-[150px] text-white lg:pb-32 lg:pt-[175px]">
      <Aurora calm className="-z-10" />
      <div aria-hidden="true" className="hero-edge" />
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-daak-cyan"
          >
            <ArrowLeft size={16} />
            Tous les services
          </Link>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_520px] lg:items-center">
            {/* Texte */}
            <div>
              <SectionLabel>{service.poleLabel}</SectionLabel>

              <h1
                className="
                  mt-7 max-w-4xl
                  font-heading text-[42px] font-bold
                  leading-[1.06] tracking-[-0.045em]
                  sm:text-5xl lg:text-[62px]
                "
              >
                {service.title}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                {service.hero}
              </p>
            </div>

            {/* Visuel */}
            <ServiceHeroVisual
              image={service.image}
              title={service.shortTitle}
              visualClass={service.visualClass}
            />
          </div>
        </Container>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Ce que nous réalisons</SectionLabel>

              <h2 className="mt-6 font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-4xl">
                Une prestation adaptée à votre contexte.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex items-start gap-4
                    rounded-[18px]
                    border border-slate-200
                    bg-daak-light
                    p-5
                  "
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-daak-navy text-daak-cyan">
                    <Check size={15} />
                  </span>

                  <span className="font-medium leading-6 text-daak-text">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* MÉTHODE */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
<SectionReveal>
          <SectionLabel>Notre méthode</SectionLabel>

          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-5xl">
            Du besoin à la mise en œuvre.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[22px] border border-slate-200 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,180,255,.15)] bg-white p-7"
              >
                <span className="font-heading text-xs font-bold tracking-[0.14em] text-daak-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 font-heading text-lg font-bold text-daak-text">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* SERVICES ASSOCIÉS */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
<SectionReveal>
          <SectionLabel>Solutions complémentaires</SectionLabel>

          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-[-0.04em] text-daak-text md:text-4xl">
            Complétez votre projet avec des expertises associées.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedServices.map((related) =>
              related ? (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="
                    group rounded-[22px]
                    border border-slate-200
                    bg-daak-light p-7
                    transition
                    hover:-translate-y-1
                    hover:border-daak-blue/30
                  "
                >
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-daak-blue">
                    {related.poleLabel}
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-bold text-daak-text">
                    {related.shortTitle}
                  </h3>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-daak-navy">
                    Découvrir
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* CTA */}
      <section className="bg-daak-navy py-20 text-white lg:py-24">
        <Container>
<SectionReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionLabel>Votre projet</SectionLabel>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Parlons de votre besoin.
              </h2>
            </div>

            <Link
              href={`/contact?service=${service.slug}`}
              className="
                group inline-flex h-14
                items-center justify-center gap-2
                rounded-xl bg-daak-blue px-7
                font-semibold text-daak-navy
                transition hover:bg-daak-cyan
              "
            >
              {service.ctaLabel}

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