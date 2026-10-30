
import { MapPin, Navigation } from "lucide-react";

const businessName = "DAAK_TECH";

const address =
  "CHU d'Angré, en face de la Librairie de France, Cocody, Abidjan, Côte d'Ivoire";

const latitude = 5.3989078259582195;
const longitude = -3.9568641569007417;

const placeId = "ChIJReLqXHY_76cRV5vqABsPrXE";

// Rechercher l'entreprise par son nom sur la carte intégrée
const mapQuery = encodeURIComponent(
  `${businessName}, CHU d'Angré, Cocody, Abidjan`
);

const mapEmbedUrl =
  `https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`;

// Ouvrir la fiche de l'établissement sur Google Maps
const googleMapsUrl =
  `https://www.google.com/maps/search/?api=1` +
  `&query=${encodeURIComponent(businessName)}` +
  `&query_place_id=${placeId}`;

// Calculer un itinéraire vers l'emplacement GPS précis
const directionsUrl =
  `https://www.google.com/maps/dir/?api=1` +
  `&destination=${latitude}%2C${longitude}`;

export function ContactMap() {
  return (
    <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-daak-navy text-white lg:grid-cols-[.8fr_1.2fr]">
      <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
        <div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-daak-cyan/10 text-daak-cyan">
            <MapPin size={22} />
          </span>

          <h3 className="mt-6 font-heading text-2xl font-bold tracking-[-0.03em]">
            Nous rendre visite
          </h3>

          <p className="mt-4 text-xl font-bold text-white">
            {businessName}
          </p>

          <p className="mt-3 leading-7 text-white/65">
            Cocody, CHU d’Angré, en face de la Librairie de France
          </p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-daak-cyan transition hover:text-white"
            aria-label={`Voir ${businessName} sur Google Maps`}
          >
            Voir notre établissement sur Google Maps
          </a>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine group inline-flex h-12 w-fit items-center gap-2 rounded-xl bg-daak-blue px-5 font-semibold text-daak-navy transition hover:bg-daak-cyan"
        >
          <Navigation size={17} />
          Obtenir l&apos;itinéraire
        </a>
      </div>

      <iframe
        title={`Carte Google Maps — ${businessName}`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-[320px] w-full border-0 grayscale-[.35] contrast-[1.05] lg:h-full lg:min-h-[380px]"
      />
    </div>
  );
}
