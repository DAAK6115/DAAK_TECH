export type ServicePole =
  | "developpement"
  | "informatique"
  | "communication"
  | "securite";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  visualClass: string;
  pole: ServicePole;
  poleLabel: string;
  summary: string;
  hero: string;
  features: string[];
  process: string[];
  relatedSlugs: string[];
  ctaLabel: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "developpement-applications-web-mobiles",
    title: "Développement d’applications web & mobiles",
    shortTitle: "Applications web & mobiles",
    image: "/images/services/applications-web-mobile.png",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    pole: "developpement",
    poleLabel: "Développement numérique",
    summary:
      "Applications métier, plateformes, espaces clients et solutions numériques conçues autour de vos besoins.",
    hero:
      "Transformez votre idée en application web, mobile ou solution métier réellement adaptée à votre activité.",
    features: [
      "Applications web sur mesure",
      "Applications mobiles",
      "Solutions métier",
      "Dashboards et espaces clients",
      "Plateformes et portails",
      "API et intégrations",
    ],
    process: [
      "Analyse du besoin",
      "Définition fonctionnelle",
      "Conception de l’interface",
      "Développement",
      "Tests",
      "Déploiement et accompagnement",
    ],
    relatedSlugs: [
      "conception-sites-web-professionnels",
      "maintenance-informatique",
      "reseaux-informatiques-infrastructure",
    ],
    ctaLabel: "Parler de mon application",
    seoDescription:
      "DAAK_TECH conçoit des applications web, mobiles et solutions métier sur mesure adaptées aux besoins des entreprises et organisations.",
  },

  {
    slug: "conception-sites-web-professionnels",
    title: "Conception de sites web professionnels",
    shortTitle: "Sites web professionnels",
    image: "/images/services/sites-web.png",
    visualClass: "from-[#0a1a2f] via-[#0a3d63] to-[#25f4ee]",
    pole: "developpement",
    poleLabel: "Développement numérique",
    summary:
      "Sites vitrines, institutionnels, e-commerce, portfolios et refontes professionnelles.",
    hero:
      "Un site professionnel conçu pour représenter votre activité, renforcer votre crédibilité et faciliter le contact avec vos clients.",
    features: [
      "Sites vitrines",
      "Sites institutionnels",
      "Sites e-commerce",
      "Landing pages",
      "Portfolios",
      "Refonte de sites existants",
    ],
    process: [
      "Analyse de votre activité",
      "Architecture du contenu",
      "Design responsive",
      "Développement",
      "Optimisation",
      "Mise en ligne",
    ],
    relatedSlugs: [
      "communication-digitale-design",
      "production-audiovisuelle",
      "developpement-applications-web-mobiles",
    ],
    ctaLabel: "Créer mon site web",
    seoDescription:
      "Création et refonte de sites web professionnels pour entreprises, entrepreneurs et organisations avec DAAK_TECH.",
  },

  {
    slug: "maintenance-informatique",
    title: "Maintenance informatique",
    shortTitle: "Maintenance informatique",
    image: "/images/services/maintenance.png",
    visualClass: "from-[#0a1a2f] via-[#103a66] to-[#2a8cff]",
    pole: "informatique",
    poleLabel: "Informatique & Infrastructure",
    summary:
      "Diagnostic, dépannage, optimisation et maintenance des équipements informatiques.",
    hero:
      "Gardez vos équipements informatiques fiables, performants et disponibles.",
    features: [
      "Diagnostic de pannes",
      "Dépannage matériel",
      "Dépannage logiciel",
      "Optimisation des postes",
      "Maintenance préventive",
      "Accompagnement entreprises",
    ],
    process: [
      "Diagnostic",
      "Identification de la panne",
      "Proposition de solution",
      "Intervention",
      "Tests",
      "Conseils de prévention",
    ],
    relatedSlugs: [
      "vente-ordinateurs-accessoires",
      "reseaux-informatiques-infrastructure",
      "recuperation-donnees",
    ],
    ctaLabel: "Demander un diagnostic",
    seoDescription:
      "DAAK_TECH intervient pour le dépannage, la maintenance et l’optimisation des équipements informatiques.",
  },

  {
    slug: "reseaux-informatiques-infrastructure",
    title: "Réseaux informatiques & Infrastructure",
    shortTitle: "Réseaux & Infrastructure",
    image: "/images/services/reseaux.png",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#ffc300]",
    pole: "informatique",
    poleLabel: "Informatique & Infrastructure",
    summary:
      "Installation, configuration et amélioration de réseaux LAN, Wi-Fi et équipements réseau.",
    hero:
      "Une infrastructure réseau fiable pour connecter efficacement vos utilisateurs et vos équipements.",
    features: [
      "Réseaux LAN",
      "Wi-Fi professionnel",
      "Câblage réseau",
      "Routeurs et switches",
      "Points d’accès",
      "Diagnostic réseau",
    ],
    process: [
      "Étude du besoin",
      "Analyse du site",
      "Choix des équipements",
      "Installation",
      "Configuration",
      "Tests et maintenance",
    ],
    relatedSlugs: [
      "maintenance-informatique",
      "videosurveillance-securite-electronique",
      "vente-ordinateurs-accessoires",
    ],
    ctaLabel: "Étudier mon réseau",
    seoDescription:
      "Installation, configuration et diagnostic de réseaux informatiques, Wi-Fi et infrastructures avec DAAK_TECH.",
  },

  {
    slug: "recuperation-donnees",
    title: "Récupération de données",
    shortTitle: "Récupération de données",
    image: "/images/services/recuperation-donnees.png",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    pole: "informatique",
    poleLabel: "Informatique & Infrastructure",
    summary:
      "Diagnostic et tentative de récupération après suppression, formatage ou problème d’accès au support.",
    hero:
      "Vos fichiers ont disparu ? Nous évaluons l’état du support et les possibilités de récupération.",
    features: [
      "Disques durs",
      "SSD",
      "Clés USB",
      "Cartes mémoire",
      "Fichiers supprimés",
      "Partitions perdues ou inaccessibles",
    ],
    process: [
      "Réception du support",
      "Diagnostic",
      "Évaluation des possibilités",
      "Tentative de récupération",
      "Vérification",
      "Restitution",
    ],
    relatedSlugs: [
      "maintenance-informatique",
      "vente-ordinateurs-accessoires",
      "reseaux-informatiques-infrastructure",
    ],
    ctaLabel: "Faire analyser mon support",
    seoDescription:
      "Diagnostic et récupération de données perdues après suppression, formatage ou problème d’accès à un support.",
  },

  {
    slug: "vente-ordinateurs-accessoires",
    title: "Vente d’ordinateurs & accessoires",
    shortTitle: "Ordinateurs & accessoires",
    image: "/images/services/ordinateurs.png",
    visualClass: "from-[#0a1a2f] via-[#0a3d63] to-[#25f4ee]",
    pole: "informatique",
    poleLabel: "Informatique & Infrastructure",
    summary:
      "Conseil, sélection, préparation et configuration d’équipements adaptés à votre usage.",
    hero:
      "Choisissez une machine adaptée à votre utilisation et à votre budget.",
    features: [
      "Ordinateurs neufs ou d’occasion selon disponibilité",
      "SSD et mémoire RAM",
      "Accessoires informatiques",
      "Installation système",
      "Configuration logicielle",
      "Conseil avant achat",
    ],
    process: [
      "Analyse de l’usage",
      "Définition du budget",
      "Sélection du matériel",
      "Préparation",
      "Configuration",
      "Remise au client",
    ],
    relatedSlugs: [
      "maintenance-informatique",
      "personnalisation-ordinateurs",
      "reseaux-informatiques-infrastructure",
    ],
    ctaLabel: "Trouver l’ordinateur adapté",
    seoDescription:
      "DAAK_TECH vous conseille dans le choix et la configuration d’ordinateurs et accessoires adaptés à votre usage.",
  },

  {
    slug: "communication-digitale-design",
    title: "Communication digitale & Design graphique",
    shortTitle: "Communication & Design",
    image: "/images/services/communication.png",
    visualClass: "from-[#0a1a2f] via-[#103a66] to-[#2a8cff]",
    pole: "communication",
    poleLabel: "Création & Communication",
    summary:
      "Stratégie digitale, réseaux sociaux, création graphique, branding et campagnes Meta.",
    hero:
      "Construisez une présence digitale cohérente, professionnelle et visible.",
    features: [
      "Gestion des réseaux sociaux",
      "Création graphique",
      "Branding",
      "Community management",
      "Stratégie digitale",
      "Publicité Meta",
    ],
    process: [
      "Analyse de la marque",
      "Définition des objectifs",
      "Stratégie éditoriale",
      "Création des contenus",
      "Publication ou campagne",
      "Analyse des résultats",
    ],
    relatedSlugs: [
      "production-audiovisuelle",
      "conception-sites-web-professionnels",
      "personnalisation-ordinateurs",
    ],
    ctaLabel: "Parler de ma communication",
    seoDescription:
      "Stratégie digitale, gestion des réseaux sociaux, design graphique, branding et publicité Meta avec DAAK_TECH.",
  },

  {
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle & Création vidéo",
    shortTitle: "Production audiovisuelle",
    image: "/images/services/audiovisuel.png",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#ffc300]",
    pole: "communication",
    poleLabel: "Création & Communication",
    summary:
      "Vidéos promotionnelles, interviews, contenus sociaux, montage et couverture audiovisuelle.",
    hero:
      "Transformez vos idées en contenus vidéo professionnels conçus pour capter l’attention.",
    features: [
      "Vidéos promotionnelles",
      "Présentation d’entreprise",
      "Interviews",
      "Reels et TikTok",
      "Montage vidéo",
      "Couverture audiovisuelle d’événements",
    ],
    process: [
      "Définition du besoin",
      "Préparation",
      "Tournage ou collecte des médias",
      "Montage",
      "Habillage graphique",
      "Export final",
    ],
    relatedSlugs: [
      "communication-digitale-design",
      "conception-sites-web-professionnels",
      "personnalisation-ordinateurs",
    ],
    ctaLabel: "Préparer ma production vidéo",
    seoDescription:
      "Création de vidéos promotionnelles, interviews, contenus sociaux et couverture audiovisuelle avec DAAK_TECH.",
  },

  {
    slug: "personnalisation-ordinateurs",
    title: "Personnalisation d’ordinateurs",
    shortTitle: "Personnalisation d’ordinateurs",
    image: "/images/services/personnalisation-pc.png",
    visualClass: "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]",
    pole: "communication",
    poleLabel: "Création & Communication",
    summary:
      "Design sur mesure, motifs, logos et personnalisation visuelle d’ordinateurs compatibles.",
    hero:
      "Donnez une identité unique à votre ordinateur grâce à une personnalisation conçue pour votre appareil.",
    features: [
      "Logos",
      "Photos",
      "Motifs personnalisés",
      "Identité d’entreprise",
      "Création graphique",
      "Pose sur zones compatibles",
    ],
    process: [
      "Identification du modèle",
      "Choix du style",
      "Création du visuel",
      "Validation",
      "Production",
      "Pose et finition",
    ],
    relatedSlugs: [
      "communication-digitale-design",
      "vente-ordinateurs-accessoires",
      "production-audiovisuelle",
    ],
    ctaLabel: "Créer ma personnalisation",
    seoDescription:
      "Personnalisation visuelle d’ordinateurs avec logos, photos, motifs et créations sur mesure par DAAK_TECH.",
  },

  {
    slug: "videosurveillance-securite-electronique",
    title: "Vidéosurveillance & Sécurité électronique",
    shortTitle: "Vidéosurveillance",
    image: "/images/services/videosurveillance.png",
    visualClass: "from-[#0a1a2f] via-[#0a3d63] to-[#25f4ee]",
    pole: "securite",
    poleLabel: "Sécurité électronique",
    summary:
      "Étude, installation, configuration et maintenance de systèmes de vidéosurveillance.",
    hero:
      "Surveillez vos espaces avec une solution adaptée à votre environnement.",
    features: [
      "Caméras IP et systèmes compatibles",
      "DVR / NVR",
      "Stockage vidéo",
      "Étude des zones",
      "Consultation à distance",
      "Maintenance et diagnostic",
    ],
    process: [
      "Étude du lieu",
      "Identification des zones",
      "Choix des équipements",
      "Installation et câblage",
      "Configuration",
      "Tests et prise en main",
    ],
    relatedSlugs: [
      "reseaux-informatiques-infrastructure",
      "maintenance-informatique",
      "vente-ordinateurs-accessoires",
    ],
    ctaLabel: "Demander une étude",
    seoDescription:
      "Étude, installation, configuration et maintenance de solutions de vidéosurveillance avec DAAK_TECH.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByPole(pole: ServicePole) {
  return services.filter((service) => service.pole === pole);
}