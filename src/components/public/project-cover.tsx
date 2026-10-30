import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  image: string | null;
  alt: string;
  title: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fit?: "contain" | "cover";
};

function initialsOf(title: string) {
  const words = title.replace(/[^A-Za-z0-9 _&]/g, "").split(/[\s_&]+/).filter(Boolean);
  const letters = words.length > 1 ? words.slice(0, 2).map((w) => w[0]).join("") : title.slice(0, 2);
  return letters.toUpperCase();
}

/** Les visuels en mode contain ne sont jamais rognés dans la vitrine. */
export function ProjectCover({
  image, alt, title,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority,
  className,
  fit = "cover",
}: ProjectCoverProps) {
  if (image) {
    return (
      <div className={cn("relative size-full overflow-hidden", className)}>
        {fit === "contain" && (
          <Image
            src={image}
            alt=""
            fill
            sizes={sizes}
            aria-hidden="true"
            className="pointer-events-none scale-110 object-cover opacity-20 blur-2xl"
          />
        )}
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "transition-transform duration-500",
            fit === "contain" ? "object-contain p-2 group-hover:scale-[1.015]" : "object-cover object-top group-hover:object-bottom",
          )}
        />
      </div>
    );
  }

  return (
    <div role="img" aria-label={`Aperçu de ${title} en préparation`} className={cn("relative size-full overflow-hidden bg-[#071426]", className)}>
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="absolute inset-x-5 top-5 flex gap-2">
        <span className="shimmer-line h-2.5 w-1/4 rounded-full" />
        <span className="shimmer-line h-2.5 w-1/6 rounded-full" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="gradient-text font-heading text-6xl font-black tracking-[-0.06em]">{initialsOf(title)}</span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/60">
          Aperçu en préparation
        </span>
      </div>
    </div>
  );
}
