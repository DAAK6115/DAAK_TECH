"use client";

import "./partner-network.css";

import Image from "next/image";
import { partners, type Partner } from "@/data/partners";
import { Container } from "@/components/ui/container";

/**
 * Bandeau simple et continu : seuls les logos défilent.
 * Pour ajouter un partenaire, éditez uniquement src/data/partners.ts.
 * Aucun package d'animation supplémentaire n'est nécessaire.
 */
export function PartnerNetwork() {
  if (partners.length === 0) return null;

  // Chaque moitié du bandeau doit être plus large que l'écran, même avec
  // seulement 1 à 3 partenaires. Deux moitiés identiques = boucle sans saut.
  const repetitions = Math.max(1, Math.ceil(8 / partners.length));
  const displayed = Array.from({ length: repetitions }, () => partners).flat();

  return (
    <section className="partners-section bg-daak-navy py-14 text-white sm:py-16" aria-labelledby="partners-heading">
      <Container>
        <div className="mb-9 text-center">
          <h2 id="partners-heading" className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
            Nos partenaires
          </h2>
          <div aria-hidden="true" className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-daak-cyan" />
        </div>
      </Container>

      <div className="partners-marquee" aria-label="Logos de nos partenaires">
        <div className="partners-track">
          <PartnerSet items={displayed} originalCount={partners.length} duplicateSet={false} />
          <PartnerSet items={displayed} originalCount={partners.length} duplicateSet />
        </div>
      </div>
    </section>
  );
}

type PartnerSetProps = {
  items: Partner[];
  originalCount: number;
  duplicateSet: boolean;
};

function PartnerSet({ items, originalCount, duplicateSet }: PartnerSetProps) {
  return (
    <div className="partners-set" aria-hidden={duplicateSet ? true : undefined}>
      {items.map((partner, index) => {
        // Les répétitions visuelles ne sont pas ajoutées à la navigation clavier.
        const duplicate = duplicateSet || index >= originalCount;

        return (
          <a
            key={`${partner.id}-${index}`}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : 0}
            aria-hidden={duplicate ? true : undefined}
            aria-label={duplicate ? undefined : `Visiter le site de ${partner.name} (nouvel onglet)`}
            title={partner.name}
            className="partners-logo-card"
            data-duplicate={duplicate ? "true" : undefined}
          >
            <Image
              src={partner.logo}
              alt={duplicate ? "" : partner.alt}
              width={200}
              height={76}
              sizes="200px"
              className="h-[64px] w-[190px] object-contain sm:h-[76px] sm:w-[200px]"
            />
          </a>
        );
      })}
    </div>
  );
}
