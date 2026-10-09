import Link from "next/link";

import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Aurora } from "@/components/ui/aurora";
import { CircuitDivider } from "@/components/ui/circuit-divider";
import { Container } from "@/components/ui/container";
import { OrbitRings } from "@/components/ui/orbit-rings";
import { Particles } from "@/components/ui/particles";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";

const solutionLinks = [
  {
    label: "Développement numérique",
    href: "/services#developpement",
  },
  {
    label: "Informatique & Infrastructure",
    href: "/services#informatique",
  },
  {
    label: "Création & Communication",
    href: "/services#communication",
  },
  {
    label: "Sécurité électronique",
    href: "/services#securite",
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-daak-navy text-white">
      <Aurora className="-z-10" />
      <Particles className="-z-10 opacity-40" />

      <Container>
        {/* Bandeau animé */}
        <div className="grid items-center gap-12 pb-4 pt-24 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              <SplitText text="Innover pour transformer." />
              <br />
              <SplitText text="Personnaliser pour exceller." delay={0.3} wordClassName="gradient-text" />
            </h2>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg leading-8 text-white/60">
                Un besoin, un projet, une panne ? Parlons-en : nous vous proposons la solution la plus adaptée.
              </p>
              <Link
                href="/contact"
                className="btn-shine btn-pulse group mt-9 inline-flex h-14 items-center gap-2 rounded-xl bg-daak-yellow px-7 font-semibold text-daak-navy transition hover:brightness-110"
              >
                Démarrer un projet
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Image animée : symbole DAAK_TECH en orbite */}
          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-daak-blue/25 blur-[70px]" />
            <OrbitRings className="inset-0" />
            <div aria-hidden="true" className="spin-slow absolute inset-[6%] rounded-full border border-daak-yellow/20" style={{ animationDuration: "50s" }}>
              <i className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-daak-yellow shadow-[0_0_16px_#ffc300]" />
            </div>
            <div className="logo-float absolute inset-[24%]">
              <Image
                src="/branding/daak-tech-symbol.png"
                alt="Symbole DAAK_TECH"
                fill
                sizes="240px"
                className="object-contain drop-shadow-[0_0_24px_rgba(37,244,238,.35)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <CircuitDivider />
        </div>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="block">
              <div className="relative h-[82px] w-[290px]">
                <Image
                  src="/branding/daak-tech-logo.png"
                  alt="Logo DAAK_TECH"
                  fill
                  sizes="290px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-xs leading-7 text-white/60">
              Innover pour transformer,
              personnaliser pour exceller.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold">
              Entreprise
            </h2>

            <div className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-white/60 hover:text-daak-cyan"
              >
                Accueil
              </Link>

              <Link
                href="/a-propos"
                className="block text-sm text-white/60 hover:text-daak-cyan"
              >
                À propos
              </Link>

              <Link
                href="/realisations"
                className="block text-sm text-white/60 hover:text-daak-cyan"
              >
                Réalisations
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-white/60 hover:text-daak-cyan"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold">
              Solutions
            </h2>

            <div className="mt-5 space-y-3">
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm leading-6 text-white/60 hover:text-daak-cyan"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold">
              Contact
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
              <p>
                <a
                  href="tel:+2250703156943"
                  className="hover:text-daak-cyan"
                >
                  07 03 15 69 43
                </a>
              </p>

              <p>
                <a
                  href="tel:+2250555010176"
                  className="hover:text-daak-cyan"
                >
                  05 55 01 01 76
                </a>
              </p>

              <p>
                <a
                  href="mailto:contact@daaktech.com"
                  className="hover:text-daak-cyan"
                >
                  contact@daaktech.com
                </a>
              </p>

              <p>
                Immeuble Pelican, Cocody
                <br />
                Feux du Nouveau Camp
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col gap-5 border-t border-white/10
            py-7 text-sm text-white/40
            md:flex-row md:items-center md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} DAAK_TECH.
            Tous droits réservés.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="hover:text-white"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none mx-auto h-[8.5vw] max-w-[1360px] select-none overflow-hidden text-center font-heading text-[15vw] font-black leading-[0.9] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_rgba(37,244,238,.22)] xl:h-[8rem] xl:text-[14rem]"
      >
        DAAK_TECH
      </p>
    </footer>
  );
}