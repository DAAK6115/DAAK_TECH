import type { Metadata } from "next";
import type { ReactNode } from "react";

import { MaintenancePage } from "@/components/public/maintenance-page";
import { maintenance } from "@/config/maintenance";

export function generateMetadata(): Metadata {
  return maintenance.realisations ? { robots: { index: false, follow: false } } : {};
}

export default function RealisationsLayout({ children }: { children: ReactNode }) {
  if (maintenance.realisations) {
    return (
      <MaintenancePage
        label="Réalisations"
        title="Cette page revient très bientôt."
        message="Nous mettons à jour la présentation de nos réalisations. Revenez dans quelques jours, ou contactez-nous pour découvrir nos projets."
      />
    );
  }
  return children;
}
