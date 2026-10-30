import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectDetailVisualProps = {
  image: string | null;
  imageAlt: string;
  title: string;
  visualClass: string;
  logo?: string;
};

/**
 * Présentation éditoriale du projet.
 * L'image originale est entièrement visible (object-contain), même si son ratio varie.
 * Le flou décoratif reste derrière l'image et ne masque aucun détail.
 */
export function ProjectDetailVisual({
  image,
  imageAlt,
  title,
  visualClass,
  logo,
}: ProjectDetailVisualProps) {
  const darkLogo = logo?.includes("aumoinschere") ?? false;

  return (
    <div
      className={cn(
        "relative isolate mx-auto w-full max-w-[720px] overflow-hidden rounded-[30px] border border-white/15",
        "bg-gradient-to-br shadow-[0_35px_100px_rgba(0,0,0,.26)]",
        visualClass,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-daak-cyan/20 blur-[90px]"
      />

      <div className="relative z-10 flex min-h-[94px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        {logo ? (
          <div
            className={cn(
              "relative h-[62px] w-[185px] max-w-[52%] overflow-hidden rounded-2xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,.15)]",
              darkLogo ? "bg-black" : "bg-white",
            )}
          >
            <Image
              src={logo}
              alt={`Logo ${title}`}
              fill
              sizes="185px"
              className="object-contain p-2"
            />
          </div>
        ) : (
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-daak-cyan">
              DAAK_TECH / Réalisations
            </span>
            <p className="mt-1 truncate font-heading text-lg font-bold text-white">{title}</p>
          </div>
        )}
        <span className="shrink-0 rounded-full border border-white/20 bg-daak-navy/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm sm:text-xs">
          Projet
        </span>
      </div>

      <div className="relative z-10 mx-4 mb-4 overflow-hidden rounded-[20px] border border-white/15 bg-[#061223] shadow-[0_28px_75px_rgba(0,0,0,.35)] sm:mx-8 sm:mb-8">
        <div className="flex h-10 items-center justify-between gap-3 border-b border-white/10 bg-white/[.055] px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-daak-yellow/90" />
            <span className="size-2.5 rounded-full bg-daak-blue/90" />
            <span className="size-2.5 rounded-full bg-daak-cyan/90" />
          </div>
          <span className="truncate text-[11px] font-medium text-white/60">
            Aperçu de {title}
          </span>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#071526] sm:aspect-[16/10]">
          {image ? (
            <>
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                aria-hidden="true"
                className="pointer-events-none scale-110 object-cover opacity-25 blur-3xl"
              />
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-contain p-2 transition-transform duration-500 motion-safe:hover:scale-[1.015] sm:p-4"
              />
            </>
          ) : logo ? (
            <Image
              src={logo}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-contain p-8 sm:p-14"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-heading text-4xl font-black tracking-[-.04em] text-daak-cyan sm:text-5xl">
                {title}
              </span>
              <span className="text-sm text-white/60">Présentation du projet</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
