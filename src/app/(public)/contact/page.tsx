import { SectionReveal } from "@/components/ui/section-reveal";
import { SplitText } from "@/components/ui/split-text";
import { Aurora } from "@/components/ui/aurora";
import type { Metadata } from "next";
import { Suspense } from "react";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { ContactMap } from "@/components/public/contact-map";
import { Faq } from "@/components/public/faq";
import { contactFaq } from "@/data/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez DAAK_TECH pour votre projet numérique, informatique, audiovisuel, réseau, récupération de données ou vidéosurveillance.",
};

export default function ContactPage() {
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
        <div
          className="
            pointer-events-none
            absolute right-[-180px]
            top-[50px]
            size-[560px]
            rounded-full
            bg-daak-blue/[0.07]
            blur-[150px]
          "
        />

        <Container>
          <SectionLabel>
            Contact
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
          ><SplitText text="Parlons de votre projet." immediate /></h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-white/60
            "
          >
            Un projet numérique, un besoin informatique
            ou une question ? Présentez-nous votre besoin
            et notre équipe reviendra vers vous.
          </p>
        </Container>
      </section>

      {/* CONTACT */}
      <section
        className="
          bg-daak-light
          py-20
          lg:py-28
        "
      >
        <Container>
<SectionReveal>
          <div
            className="
              grid gap-12
              lg:grid-cols-[.72fr_1.28fr]
              lg:gap-16
            "
          >
            {/* COORDONNÉES */}
            <div>
              <SectionLabel>
                Nous joindre
              </SectionLabel>

              <h2
                className="
                  mt-6
                  max-w-lg
                  font-heading
                  text-3xl font-bold
                  tracking-[-0.04em]
                  text-daak-text
                  md:text-4xl
                "
              >
                Une demande commence par une bonne compréhension du besoin.
              </h2>

              <p
                className="
                  mt-6 max-w-md
                  leading-7
                  text-slate-600
                "
              >
                Utilisez le formulaire ou contactez
                directement DAAK_TECH.
              </p>

              <div className="mt-10 space-y-4">
                <ContactItem
                  icon={Phone}
                  label="Téléphone"
                >
                  <a
                    href="tel:+2250705091338"
                    className="hover:text-daak-blue"
                  >
                    07 05 09 13 38
                  </a>

                  <span className="mx-2 text-slate-300">
                    /
                  </span>

                  <a
                    href="tel:+2250555010176"
                    className="hover:text-daak-blue"
                  >
                    05 55 01 01 76
                  </a>
                </ContactItem>

                <ContactItem
                  icon={Mail}
                  label="E-mail"
                >
                  <a
                    href="mailto:contact@daaktech.com"
                    className="hover:text-daak-blue"
                  >
                    contact@daaktech.com
                  </a>
                </ContactItem>

                <ContactItem
                  icon={MapPin}
                  label="Adresse"
                >
                  Cocody, CHU d’Angré, en face de la Librairie de France
                </ContactItem>
              </div>

              <div
                className="
                  mt-10
                  rounded-[24px]
                  bg-daak-navy
                  p-7
                  text-white
                "
              >
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.14em]
                    text-daak-cyan
                  "
                >
                  Notre approche
                </p>

                <p
                  className="
                    mt-4
                    leading-7
                    text-white/60
                  "
                >
                  Décrivez votre situation avec le plus
                  de précision possible. Cela nous permet
                  de comprendre plus rapidement votre
                  besoin avant le premier échange.
                </p>
              </div>
            </div>

            {/* FORMULAIRE */}
            <Suspense
              fallback={
                <div
                  className="
                    min-h-[700px]
                    animate-pulse
                    rounded-[28px]
                    border border-slate-200
                    bg-white
                  "
                />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </SectionReveal>
</Container>
      </section>

      {/* FAQ + CARTE */}
      <section className="bg-daak-light py-24 lg:py-32">
        <Container>
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <SectionLabel>Questions fréquentes</SectionLabel>
                <div className="mt-6">
                  <SectionHeading title="Avant de nous écrire" description="Les réponses aux questions les plus courantes." />
                </div>
              </div>
              <Faq items={contactFaq} />
            </div>

            <div className="mt-16">
              <ContactMap />
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}

type ContactItemProps = {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
};

function ContactItem({
  icon: Icon,
  label,
  children,
}: ContactItemProps) {
  return (
    <div
      className="
        flex gap-4
        rounded-[18px]
        border border-slate-200
        bg-white
        p-5
      "
    >
      <div
        className="
          flex size-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-daak-navy
          text-daak-cyan
        "
      >
        <Icon size={18} />
      </div>

      <div>
        <p
          className="
            text-xs font-bold
            uppercase tracking-[0.1em]
            text-slate-400
          "
        >
          {label}
        </p>

        <div
          className="
            mt-2
            text-sm
            leading-6
            text-daak-text
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}