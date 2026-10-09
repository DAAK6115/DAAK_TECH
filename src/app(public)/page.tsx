import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CircuitDivider } from "@/components/ui/circuit-divider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";

export default function Home() {
  return (
    <main>
      <section className="bg-daak-navy pb-28 pt-[180px] text-white">
        <Container>
          <SectionLabel>
            DAAK_TECH
          </SectionLabel>

          <h1
            className="
              mt-8
              max-w-4xl
              font-heading
              text-5xl
              font-bold
              leading-[1.05]
              tracking-[-0.045em]
              md:text-6xl
              lg:text-7xl
            "
          >
            La technologie adaptée à vos besoins.
          </h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-white/70
            "
          >
            DAAK_TECH conçoit et met en œuvre des
            solutions numériques et informatiques
            adaptées aux besoins des entreprises,
            organisations et particuliers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              Démarrer un projet
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Découvrir DAAK_TECH
            </Button>
          </div>

          <div className="mt-20">
            <CircuitDivider />
          </div>
        </Container>
      </section>

      <section className="bg-daak-light py-28">
        <Container>
          <SectionLabel>
            Notre approche
          </SectionLabel>

          <div className="mt-6">
            <SectionHeading
              title="Des besoins réels. Des solutions adaptées."
              description="Chaque projet est différent. DAAK_TECH privilégie une approche basée sur l’écoute, la compréhension du besoin et la conception d’une solution adaptée à votre contexte."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}