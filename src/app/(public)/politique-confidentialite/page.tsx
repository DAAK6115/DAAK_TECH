import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/public/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment DAAK_TECH collecte, utilise et protège les données transmises via son formulaire de contact.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage label="Vos données" title="Politique de confidentialité" updated="octobre 2026">
      <LegalSection title="Responsable du traitement">
        <p>
          DAAK_TECH, Immeuble Pelican, Cocody, Feux du Nouveau Camp, Abidjan (Côte d’Ivoire) ·{" "}
          <a className="text-daak-blue underline" href="mailto:contact@daaktech.com">contact@daaktech.com</a>
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>Lorsque vous utilisez le formulaire de contact, nous recueillons :</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>votre nom et prénom, votre adresse e-mail et votre numéro de téléphone ;</li>
          <li>le nom de votre entreprise (facultatif) ;</li>
          <li>le service concerné, votre budget et votre délai souhaités (facultatifs) ;</li>
          <li>votre message et, si vous en joignez un, votre fichier (image, PDF, document Word ou Excel, ou fichier texte).</li>
        </ul>
      </LegalSection>

      <LegalSection title="Pourquoi nous les utilisons">
        <p>
          Ces données servent uniquement à répondre à votre demande, à préparer un devis et à assurer le suivi de
          votre projet. Elles ne sont ni vendues ni utilisées à des fins publicitaires.
        </p>
      </LegalSection>

      <LegalSection title="Qui y a accès">
        <p>
          Votre demande est transmise par e-mail à l’équipe DAAK_TECH via un prestataire d’envoi d’e-mails
          (Resend). Si vous joignez un fichier, il est transmis à l’équipe avec le message par e-mail ; le site ne le conserve pas sur son propre serveur.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les informations transmises via le formulaire de contact sont conservées pendant une durée maximale de
          12 mois à compter du dernier échange, sauf lorsqu’une durée plus longue est nécessaire dans le cadre d’une
          relation contractuelle, d’une prestation ou d’une obligation légale. Les pièces jointes suivent la même durée
          de conservation que la demande à laquelle elles sont associées.
        </p>
        <p>
          Les données nécessaires à la gestion contractuelle, comptable et administrative sont conservées pendant les
          durées imposées par la réglementation applicable.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez demander l’accès à vos données, leur rectification, leur suppression ou vous opposer à leur
          traitement en écrivant à{" "}
          <a className="text-daak-blue underline" href="mailto:contact@daaktech.com">contact@daaktech.com</a>.
          Vous pouvez également saisir l’autorité de protection des données personnelles de Côte d’Ivoire (ARTCI).
        </p>
      </LegalSection>

      <LegalSection title="Cookies et services tiers">
        <p>
          Le site n’intègre aucun outil de mesure d’audience ni de publicité. La page Contact affiche une carte Google
          Maps, et le bouton WhatsApp ouvre l’application du même nom : ces services tiers peuvent déposer leurs
          propres cookies selon leurs conditions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
