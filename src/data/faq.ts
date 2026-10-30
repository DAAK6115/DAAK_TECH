import { services } from "@/data/services";

export type FaqItem = { question: string; answer: string };

export const contactFaq: FaqItem[] = [
  {
    question: "Comment demander un devis ?",
    answer:
      "Remplissez le formulaire de cette page en décrivant votre besoin, ou appelez-nous directement. Nous revenons vers vous pour préciser le projet et proposer la solution la plus adaptée.",
  },
  {
    question: "Pour quels types de clients travaillez-vous ?",
    answer:
      "DAAK_TECH accompagne les entreprises, les organisations et les particuliers, avec des solutions numériques et informatiques adaptées à chaque contexte.",
  },
  {
    question: "Quels services proposez-vous ?",
    answer: `Nous proposons ${services.length} services répartis en 4 pôles : développement numérique, informatique et infrastructure, création et communication, sécurité électronique. Vous les retrouvez tous sur la page Services.`,
  },
  {
    question: "Puis-je joindre un fichier à ma demande ?",
    answer:
      "Oui. Le formulaire accepte les images (JPG, PNG, WebP), les PDF, les documents Word et Excel et les fichiers texte, jusqu’à 4 Mo : par exemple un cahier des charges ou une capture d’écran du problème.",
  },
  {
    question: "Où se trouve DAAK_TECH ?",
    answer:
      "Nos bureaux sont à Cocody, CHU d’Angré, en face de la Librairie de France. La carte ci-dessous vous permet de calculer votre itinéraire.",
  },
  {
    question: "Que deviennent mes données personnelles ?",
    answer:
      "Elles servent uniquement à répondre à votre demande. Tous les détails figurent dans notre politique de confidentialité.",
  },
];
