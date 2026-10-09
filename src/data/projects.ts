export type ProjectCategory =
  | "applications"
  | "solutions-metier"
  | "sites-web";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  image: string;
  imageAlt: string;
  visualClass: string;
  tagline: string;
  summary: string;
  context: string;
  problem: string[];
  solution: string;
  features: string[];
  stack: string[];
  result: string;
  gallery: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  /** Lien YouTube, Vimeo ou fichier .mp4/.webm de la vidéo de présentation (optionnel). */
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "artisan-ci",
    title: "ARTISAN_CI",
    shortTitle: "ARTISAN_CI",
    category: "applications",
    categoryLabel: "Plateforme de services",
    status: "Projet réalisé par notre développeur",
    image: "/images/projects/artisan_ci.jpg",
    imageAlt: "Interface de la plateforme ARTISAN_CI",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    tagline:
      "Connecter les artisans ivoiriens à leurs futurs clients grâce au numérique.",
    summary:
      "Une plateforme web mettant en relation clients et artisans autour de services, rendez-vous, échanges et évaluations.",
    context:
      "Le projet répond au besoin de faciliter la découverte et la mise en relation entre particuliers et professionnels de l’artisanat.",
    problem: [
      "Manque de visibilité des artisans",
      "Recherche de prestataires dispersée",
      "Gestion des rendez-vous",
      "Communication entre client et artisan",
    ],
    solution:
      "Deux environnements distincts ont été conçus : un espace Client et un espace Artisan, connectés autour des services, rendez-vous et échanges.",
    features: [
      "Profils artisans",
      "Catalogue de services",
      "Recherche d’artisans",
      "Favoris",
      "Rendez-vous",
      "Messagerie",
      "Paiements",
      "Avis et évaluations",
      "Dashboards client et artisan",
    ],
    stack: [
      "React",
      "Django",
      "Django REST Framework",
      "JWT",
      "Tailwind CSS",
    ],
    result:
      "ARTISAN_CI matérialise une marketplace de services complète structurée autour de deux parcours utilisateurs distincts.",
    gallery: [],
    demoUrl: "https://artisan-ci-mauve.vercel.app",
    repositoryUrl: "https://github.com/DAAK6115/ARTISAN_CI",
  },

  {
    slug: "queueflow-ci",
    title: "QueueFlow CI",
    shortTitle: "QueueFlow CI",
    category: "solutions-metier",
    categoryLabel: "Application métier",
    status: "Projet réalisé par notre développeur",
    image: "/images/projects/queueflow-ci.jpg",
    imageAlt: "Interface de l’application QueueFlow CI",
    visualClass: "from-[#0a1a2f] via-[#0a3d63] to-[#25f4ee]",
    tagline:
      "Digitaliser la gestion des files d’attente et fluidifier le parcours des usagers.",
    summary:
      "Une PWA de gestion de files d’attente permettant aux clients de prendre un ticket numérique et aux équipes de gérer les appels en temps réel.",
    context:
      "QueueFlow CI a été conçu pour remplacer ou compléter les files physiques par un parcours numérique plus structuré.",
    problem: [
      "Attente physique difficile à suivre",
      "Manque de visibilité sur sa position",
      "Gestion manuelle des appels",
      "Absence d’indicateurs pour les responsables",
    ],
    solution:
      "La solution connecte le parcours client, la console agent, l’écran public et l’espace responsable autour d’une même file synchronisée en temps réel.",
    features: [
      "Ticket numérique sans compte client",
      "Position dans la file",
      "Estimation du temps d’attente",
      "Appel et rappel des tickets",
      "Gestion des états du ticket",
      "Console agent",
      "Affichage public",
      "Dashboard responsable",
      "Synchronisation WebSocket",
      "PWA installable",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "Channels",
      "WebSocket",
      "Redis",
      "PostgreSQL",
    ],
    result:
      "Le projet matérialise un MVP fonctionnel de gestion numérique de files d’attente, avec plusieurs interfaces métier et synchronisation temps réel.",
    gallery: [],
    demoUrl: "https://queue-flow-ci.vercel.app/",
    repositoryUrl: "https://github.com/DAAK6115/QueueFlow-CI",
  },

  {
    slug: "peche-sensibilisation",
    title: "Pêche & Sensibilisation",
    shortTitle: "Pêche & Sensibilisation",
    category: "applications",
    categoryLabel: "Application mobile",
    image: "/images/projects/peche_sensibilisation.jpg",
    imageAlt: "Application mobile Pêche & Sensibilisation",
    visualClass: "from-[#0a1a2f] via-[#103a66] to-[#2a8cff]",
    status: "Projet réalisé par notre développeur",
    tagline:
      "Utiliser le numérique pour promouvoir une pratique plus responsable de la pêche.",
    summary:
      "Une application Flutter réunissant cartographie, carnet de pêche, guide des espèces et contenus de sensibilisation.",
    context:
      "Le projet centralise plusieurs informations utiles autour de la pêche responsable dans une interface mobile.",
    problem: [
      "Informations dispersées",
      "Consultation difficile sur le terrain",
      "Manque de centralisation des captures",
      "Besoin de sensibilisation",
    ],
    solution:
      "L’application regroupe quatre modules principaux : carte, carnet de pêche, identification des espèces et sensibilisation.",
    features: [
      "Carte interactive",
      "Zones de pêche indicatives",
      "Carnet de pêche",
      "Ajout de captures",
      "Guide des espèces",
      "Recherche",
      "Bonnes pratiques",
      "Informations de sensibilisation",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Flutter Map",
      "OpenStreetMap",
      "Image Picker",
    ],
    result:
      "Le prototype regroupe information, cartographie, suivi des captures et sensibilisation dans une interface mobile unique.",
    gallery: [],
    demoUrl: "https://daak6115.github.io/peche_sensibilisation/",
    repositoryUrl: "https://github.com/DAAK6115/peche_sensibilisation",
  },

  {
    slug: "gestion-suivi-livres",
    title: "Gestion & suivi de livres",
    shortTitle: "Gestion de livres",
    category: "solutions-metier",
    categoryLabel: "Application métier",
    image: "/images/projects/gestion-suivi-livres.jpg",
    imageAlt: "Image de l'application Gestion & suivi de livres",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#ffc300]",
    status: "Projet réalisé par notre développeur",
    tagline:
      "Centraliser les ventes, les stocks et les rapports de plusieurs centres.",
    summary:
      "Une application métier Django permettant de suivre les livres, centres, ventes, stocks, dépenses et rapports périodiques.",
    context:
      "La consolidation manuelle des ventes et stocks de plusieurs centres rendait le suivi métier plus complexe.",
    problem: [
      "Informations réparties par centre",
      "Stocks difficiles à consolider",
      "Calculs manuels",
      "Rapports périodiques chronophages",
    ],
    solution:
      "Une plateforme centralisée organise centres, livres et relevés avec calculs automatiques et génération de rapports.",
    features: [
      "Gestion des centres",
      "Gestion des livres",
      "Relevés de vente",
      "Stocks restants",
      "Dépenses",
      "Calculs Mobile Money",
      "Rapports périodiques",
      "Exports Excel",
      "Exports PDF",
      "Gestion des rôles",
    ],
    stack: [
      "Django",
      "Django Templates",
      "PostgreSQL",
      "OpenPyXL",
      "XHTML2PDF",
      "Gunicorn",
    ],
    result:
      "L’application transforme un suivi dispersé en système centralisé avec calculs métier et rapports périodiques.",
    gallery: [],
    demoUrl: "https://gestion-livre.onrender.com",
    repositoryUrl: "https://github.com/DAAK6115/gestion_livre",
  },

  {
    slug: "nexafinance",
    title: "NexaFinance",
    shortTitle: "NexaFinance",
    category: "sites-web",
    categoryLabel: "Site web professionnel",
    image: "/images/projects/nexafinance.jpg",
    imageAlt: "Image du site web NexaFinance",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    status: "Réalisation",
    tagline:
      "Construire une présence digitale professionnelle pour une société de conseil financier.",
    summary:
      "Un site WordPress destiné à présenter le positionnement et les services d’une société de conseil et de gestion.",
    context:
      "Le besoin consistait à disposer d’une présence en ligne professionnelle adaptée à une activité de conseil financier.",
    problem: [
      "Présenter clairement l’activité",
      "Valoriser l’expertise",
      "Structurer les services",
      "Créer un point de contact digital",
    ],
    solution:
      "Un site vitrine WordPress structuré autour de la présentation de l’entreprise et de ses services.",
    features: [
      "Site vitrine",
      "Pages institutionnelles",
      "Présentation des services",
      "Responsive design",
      "Contact",
    ],
    stack: ["WordPress"],
    result:
      "Le site fournit une présence numérique structurée et professionnelle adaptée à l’activité.",
    gallery: [],
    demoUrl: "https://nexafinance.net/",
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}