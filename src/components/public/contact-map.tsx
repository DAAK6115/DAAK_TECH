import { MapPin, Navigation } from "lucide-react";

const address = "Immeuble Pelican, Feux du Nouveau Camp, Cocody, Abidjan, Côte d'Ivoire";
const q = encodeURIComponent(address);

export function ContactMap() {
  return (
    <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-daak-navy text-white lg:grid-cols-[.8fr_1.2fr]">
      <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
        <div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-daak-cyan/10 text-daak-cyan">
            <MapPin size={22} />
          </span>
          <h3 className="mt-6 font-heading text-2xl font-bold tracking-[-0.03em]">Nous rendre visite</h3>
          <p className="mt-4 leading-7 text-white/65">
            Immeuble Pelican, Cocody
            <br />
            Feux du Nouveau Camp
            <br />
            Abidjan, Côte d’Ivoire
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine group inline-flex h-12 w-fit items-center gap-2 rounded-xl bg-daak-blue px-5 font-semibold text-daak-navy transition hover:bg-daak-cyan"
        >
          <Navigation size={17} />
          Obtenir l’itinéraire
        </a>
      </div>

      <iframe
        title="Carte : bureaux de DAAK_TECH à Cocody, Abidjan"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full border-0 grayscale-[.35] contrast-[1.05] lg:h-full lg:min-h-[380px]"
      />
    </div>
  );
}
