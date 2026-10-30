export type ProjectCategory = "applications" | "solutions-metier" | "sites-web";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  image: string;
  imageAlt: string;
  logo?: string;
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
  videoUrl?: string;
};

// Sélection éditoriale demandée pour le portfolio DAAK_TECH.
// Les fonctionnalités des dépôts accessibles proviennent de leur documentation et code.
// Informations vérifiées dans les dépôts ; Au Moins Cher : activité confirmée par le propriétaire.
export const projects: Project[] = [
  {
    slug: "artisan-ci",
    title: "ARTISAN_CI",
    shortTitle: "ARTISAN_CI",
    category: "applications",
    categoryLabel: "Plateforme web et mobile",
    status: "Projet de développement",
    image: "/images/projects/artisan_ci.jpg",
    imageAlt: "Visuel de présentation de la plateforme ARTISAN_CI",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    tagline: "Rapprocher artisans ivoiriens et clients grâce à une plateforme numérique.",
    summary: "Une plateforme de mise en relation entre artisans et clients en Côte d’Ivoire, organisée autour des profils, de la recherche de services et des échanges.",
    context: "ARTISAN_CI vise à améliorer la visibilité des artisans et l'accès aux prestations dans un parcours numérique unifié.",
    problem: [
      "Visibilité limitée des artisans auprès de nouveaux clients",
      "Recherche de prestataires fragmentée",
      "Difficulté à organiser les échanges et les réservations",
      "Besoin de centraliser les informations sur les services",
    ],
    solution: "Une plateforme avec parcours clients et artisans, organisée autour de profils professionnels, de services et de demandes de prestations.",
    features: [
      "Création de profils artisans",
      "Recherche d'artisans et de services",
      "Réservation de prestations",
      "Messagerie client-artisan",
      "Avis et évaluations",
      "Parcours web responsive",
    ],
    stack: ["React", "Django", "Django REST Framework", "Flutter", "PostgreSQL"],
    result: "Un produit numérique pensé pour structurer la rencontre entre besoins clients et savoir-faire artisanal ; ses modules sont à évaluer selon le déploiement.",
    gallery: [],
    demoUrl: "https://artisan-ci-mauve.vercel.app",
    repositoryUrl: "https://github.com/DAAK6115/ARTISAN_CI",
  },
  {
    slug: "portfolio-developpeur",
    title: "Portfolio développeur",
    shortTitle: "Portfolio",
    category: "sites-web",
    categoryLabel: "Portfolio personnel",
    status: "Projet personnel du développeur",
    image: "/images/projects/portfolio-developpeur.png",
    imageAlt: "Illustration graphique du portfolio développeur, et non capture d'écran",
    visualClass: "from-[#071526] via-[#163a64] to-[#25f4ee]",
    tagline: "Un espace personnel pour présenter projets, compétences et parcours.",
    summary: "Portfolio responsive présentant le profil, les réalisations, la stack technique, le parcours, les services et les coordonnées d'un développeur.",
    context: "Le portfolio a été conçu pour rendre les compétences et projets d'un développeur accessibles dans une présentation cohérente et animée.",
    problem: [
      "Présenter un parcours technique sans disperser l'information",
      "Mettre les réalisations en avant",
      "Proposer des moyens de contact rapides",
    ],
    solution: "Une interface React à sections structurées et animations de transition, avec données de profil et projets centralisées.",
    features: [
      "Présentation du profil et des compétences",
      "Galerie de projets",
      "Parcours et expérience",
      "Présentation des services",
      "Section contact",
      "Interface responsive et animée",
    ],
    stack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"],
    result: "Un site de présentation personnel qui centralise les informations professionnelles et les projets du développeur.",
    gallery: [],
    demoUrl: "https://daak6115.github.io/portfolio/",
    repositoryUrl: "https://github.com/DAAK6115/portfolio",
  },
  {
    slug: "fixtrack-ci",
    title: "FixTrack CI",
    shortTitle: "FixTrack CI",
    category: "solutions-metier",
    categoryLabel: "Suivi d’incidents et maintenance",
    status: "Application métier en développement",
    image: "/images/projects/fixtrack-ci.png",
    imageAlt: "Visuel de présentation éditorial de FixTrack CI",
    visualClass: "from-[#0a1a2f] via-[#173d57] to-[#00b4ff]",
    tagline: "Piloter les incidents, les interventions et les équipements dans un même espace.",
    summary: "Une application de gestion d'incidents, d'interventions techniques et d'équipements avec des espaces adaptés aux rôles des utilisateurs.",
    context: "FixTrack CI regroupe les signalements et le suivi opérationnel des interventions, tout en reliant les incidents aux emplacements et équipements concernés.",
    problem: [
      "Signalements et interventions dispersés",
      "Difficulté à identifier l'équipement concerné",
      "Manque de suivi des changements d'état",
      "Besoin d'un historique des traitements",
    ],
    solution: "Une application React et Django dont le code couvre la déclaration d'incidents, l'affectation des techniciens, les interventions, l'inventaire des équipements et les notifications.",
    features: [
      "Déclaration d'incidents avec photos",
      "Suivi des priorités et statuts",
      "Affectation des techniciens",
      "Gestion des interventions",
      "Inventaire et fiches équipements",
      "Identification des équipements par QR code",
      "Notifications et tableau de bord",
      "Historique des actions sur les équipements",
    ],
    stack: ["React", "TypeScript", "Vite", "Django", "Django REST Framework", "PostgreSQL"],
    result: "Le dépôt présente une base applicative structurée, avec interfaces de suivi, modèles métier et contrôles de rôles. Il ne constitue pas une preuve de déploiement en production.",
    gallery: [],
    repositoryUrl: "https://github.com/DAAK6115/FixTrack-CI",
  },
  {
    slug: "au-moins-chere",
    title: "Au Moins Cher",
    shortTitle: "Au Moins Cher",
    category: "sites-web",
    categoryLabel: "Site e-commerce",
    status: "Réalisation e-commerce",
    image: "/images/projects/aumoinschere-logo.png",
    logo: "/images/projects/aumoinschere-logo.png",
    imageAlt: "Logo officiel Au Moins Cher — chaussures premium",
    visualClass: "from-[#05070d] via-[#081a3b] to-[#1655ed]",
    tagline: "Une boutique en ligne dédiée à la vente de chaussures.",
    summary: "Un site e-commerce de vente de chaussures en ligne, présenté sous la marque Au Moins Cher.",
    context: "Cette réalisation met en valeur une offre de chaussures au sein d'une boutique en ligne dédiée.",
    problem: [
      "Proposer un point de vente accessible sur le web",
      "Mettre les chaussures en valeur dans un parcours commercial",
      "Développer la visibilité de la marque en ligne",
    ],
    solution: "Un site e-commerce consacré à la vente de chaussures, accessible sur son domaine propre.",
    features: [
      "Site de vente de chaussures en ligne",
      "Parcours commercial structuré",
      "Présentation des produits et de la marque",
      "Création d'un espace client pour les commandes",
      "Gestion des stocks et des commandes",
      "Suivi des ventes et des paiements",
      "Support client et FAQ intégrée",
      "Suivie des commandes et notifications par email",
    ],
    stack: [],
    result: "Une vitrine commerciale en ligne dédiée aux chaussures. Les fonctionnalités de commande et les technologies exactes restent à vérifier sur le site.",
    gallery: [],
    demoUrl: "http://aumoinschere.com/",
  },
  {
    slug: "queueflow-ci",
    title: "QueueFlow CI",
    shortTitle: "QueueFlow CI",
    category: "solutions-metier",
    categoryLabel: "Gestion de files d'attente",
    status: "MVP fonctionnel documenté",
    image: "/images/projects/queueflow-ci.png",
    logo: "/images/projects/queueflow-ci-logo.png",
    imageAlt: "Illustration graphique de QueueFlow CI, et non capture d'écran",
    visualClass: "from-[#0a1a2f] via-[#0a3d63] to-[#25f4ee]",
    tagline: "Fluidifier l'accueil grâce aux tickets numériques et au temps réel.",
    summary: "Une PWA de gestion de files d'attente reliant clients, agents, écrans publics et responsables d'agence.",
    context: "Dans de nombreux établissements, les usagers attendent sans connaître leur position ni le prochain guichet disponible.",
    problem: [
      "Attente physique et manque de visibilité",
      "Appels manuels difficiles à synchroniser",
      "Peu d'indicateurs pour les responsables",
      "Coordination entre agences et agents",
    ],
    solution: "Une PWA dotée d'un parcours client, d'une console agent, d'un écran public par agence et d'un espace de supervision, synchronisés avec WebSocket.",
    features: [
      "Tickets numériques sans compte client",
      "Position et estimation de l'attente",
      "Console agent et suivi des tickets",
      "Affichage public par agence",
      "Tableau de bord responsable",
      "Synchronisation WebSocket",
      "PWA installable",
      "Gestion des rôles et des agences",
    ],
    stack: ["React 19", "TypeScript", "Django", "Django Channels", "Redis", "PostgreSQL", "PWA"],
    result: "Un MVP documenté avec des interfaces distinctes pour l'usager, l'agent et le responsable et un suivi en temps réel.",
    gallery: [],
    demoUrl: "https://queue-flow-ci.vercel.app/",
    repositoryUrl: "https://github.com/DAAK6115/QueueFlow-CI",
  },
  {
    slug: "peche-sensibilisation",
    title: "Pêche & Sensibilisation",
    shortTitle: "Pêche & Sensibilisation",
    category: "applications",
    categoryLabel: "Application Flutter",
    status: "Prototype mobile",
    image: "/images/projects/peche_sensibilisation.jpg",
    imageAlt: "Visuel de présentation de l'application Pêche & Sensibilisation",
    visualClass: "from-[#0a1a2f] via-[#103a66] to-[#2a8cff]",
    tagline: "Associer outils de pêche et sensibilisation environnementale.",
    summary: "Une application Flutter regroupant cartographie, carnet de pêche, consultation d'espèces et contenus de sensibilisation.",
    context: "Le projet expérimente une interface mobile réunissant des outils pratiques et des informations sur la pêche responsable.",
    problem: [
      "Informations dispersées sur la pêche",
      "Besoin de consulter des données sur le terrain",
      "Difficulté à centraliser les observations et captures",
    ],
    solution: "Une application Flutter avec plusieurs écrans consacrés à la carte, au carnet de pêche et à la sensibilisation.",
    features: [
      "Cartographie interactive",
      "Consultation des zones de pêche",
      "Carnet et ajout de captures",
      "Consultation des espèces",
      "Contenus de sensibilisation",
    ],
    stack: ["Flutter", "Dart", "Flutter Map", "OpenStreetMap", "Image Picker"],
    result: "Un prototype mobile qui réunit l'information, la cartographie et la sensibilisation dans un même parcours.",
    gallery: [],
    repositoryUrl: "https://github.com/DAAK6115/peche_sensibilisation",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}
