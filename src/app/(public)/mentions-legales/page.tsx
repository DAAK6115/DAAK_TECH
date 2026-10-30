import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection, ToFill } from "@/components/public/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site DAAK_TECH : éditeur, hébergement, propriété intellectuelle et responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage label="Informations légales" title="Mentions légales" updated="octobre 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Le site est édité par <strong>DAAK_TECH</strong>, entreprise de solutions numériques et informatiques.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Forme juridique : <ToFill>forme juridique</ToFill></li>
          <li>Numéro d’immatriculation (RCCM) : CI-ABJ-03-2026-B13-02475</li>
          <li>Site web : daaktech.com</li>
          <li>Siège : Cocody, CHU d’Angré, en face de la Librairie de France, Abidjan, Côte d’Ivoire</li>
          <li>Téléphone : <a className="text-daak-blue underline" href="tel:+2250705091338">07 05 09 13 38</a> · <a className="text-daak-blue underline" href="tel:+2250555010176">05 55 01 01 76</a></li>
          <li>E-mail : <a className="text-daak-blue underline" href="mailto:contact@daaktech.com">contact@daaktech.com</a></li>
          <li>Directeur de la publication : DIOMANDE AZZIZ ANGE KEVIN</li>
        </ul>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site daaktech.com est hébergé par <strong>TPECLOUD</strong>, prestataire d’hébergement web établi à Abidjan
          (Côte d’Ivoire), immatriculé au RCCM sous le numéro CI-ABJ-03-2024-B13-07306.
        </p>
        <p>
          Contact : <a className="text-daak-blue underline" href="mailto:hello@tpecloud.com">hello@tpecloud.com</a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L’ensemble des contenus du site (textes, logos, visuels, animations, code) est la propriété de DAAK_TECH ou
          utilisé avec l’autorisation de leurs titulaires. Toute reproduction, représentation ou adaptation, totale ou
          partielle, sans autorisation écrite préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          DAAK_TECH s’efforce de fournir des informations exactes et à jour, sans pouvoir garantir l’absence d’erreur
          ou d’omission. Le site peut contenir des liens vers des sites tiers (par exemple Google Maps ou WhatsApp) dont
          DAAK_TECH ne contrôle pas le contenu.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Les informations transmises via le formulaire de contact sont traitées conformément à notre{" "}
          <Link href="/politique-confidentialite" className="font-semibold text-daak-blue underline underline-offset-4">
            politique de confidentialité
          </Link>.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Les présentes mentions sont soumises au droit ivoirien. En cas de litige, et à défaut de solution amiable,
          les tribunaux d’Abidjan sont seuls compétents.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
