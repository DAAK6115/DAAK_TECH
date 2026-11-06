/**
 * AJOUTER UN PARTENAIRE SANS MODIFIER LE COMPOSANT :
 * 1. Obtenez l'autorisation d'afficher son logo.
 * 2. Placez son image (PNG, WebP ou SVG) dans public/partners/.
 * 3. Copiez l'exemple commenté à la fin du tableau, puis adaptez ses champs.
 * Le bandeau s'adapte automatiquement au nombre de partenaires.
 */
export type Partner = {
  id: string;       // Identifiant unique, sans espaces.
  name: string;     // Nom officiel de l'entreprise.
  website: string;  // URL complète avec https://.
  logo: string;     // Fichier local : public/partners/mon-logo.png -> /partners/mon-logo.png.
  alt: string;      // Texte alternatif accessible.
};

export const partners: Partner[] = [
  {
    id: "nexafinance",
    name: "NexaFinance",
    website: "https://nexafinance.net/",
    logo: "/partners/nexafinance.png",
    alt: "Logo NexaFinance",
  },
  {
    id: "gensoftci",
    name: "GensoftCI",
    website: "https://gensoftci.com/",
    logo: "/partners/gensoftci.png",
    alt: "Logo GensoftCI",
  },
  {
    id: "faith-solutions",
    name: "Faith Solutions",
    website: "https://faithsolutionsci.com/",
    logo: "/partners/faith-solutions.png",
    alt: "Logo Faith Solutions",
  },

  // EXEMPLE — à copier après accord du prochain partenaire :
  // {
  //   id: "partenaire-exemple",
  //   name: "Partenaire Exemple",
  //   website: "https://www.exemple.ci/",
  //   logo: "/partners/partenaire-exemple.png",
  //   alt: "Logo Partenaire Exemple",
  // },
];
