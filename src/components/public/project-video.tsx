import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import type { Project } from "@/data/projects";
import { parseVideo } from "@/lib/video";

export function ProjectVideo({ project }: { project: Project }) {
  const video = parseVideo(project.videoUrl);

  if (video?.kind === "embed") {
    return (
      <div className="aspect-video overflow-hidden rounded-[28px] border border-slate-200 bg-daak-navy shadow-[0_30px_80px_rgba(10,26,47,.2)]">
        <iframe
          src={video.src}
          title={`Vidéo de présentation : ${project.title}`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="size-full border-0"
        />
      </div>
    );
  }

  if (video?.kind === "file") {
    return (
      <div className="aspect-video overflow-hidden rounded-[28px] border border-slate-200 bg-daak-navy shadow-[0_30px_80px_rgba(10,26,47,.2)]">
        <video controls preload="metadata" playsInline className="size-full" aria-label={`Vidéo de présentation : ${project.title}`}>
          <source src={video.src} />
          Votre navigateur ne peut pas lire cette vidéo.
        </video>
      </div>
    );
  }

  // État vide : pas de vidéo pour l'instant
  return (
    <div className={`relative isolate flex aspect-video min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${project.visualClass} shadow-[0_30px_80px_rgba(10,26,47,.25)]`}>
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-daak-navy/55" />
      <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-daak-cyan/15 blur-[90px]" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-16 -z-10 size-72 rounded-full bg-daak-yellow/15 blur-[100px]" />

      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-daak-navy/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md md:left-7 md:top-7">
        <span className="ping-dot size-2 rounded-full bg-daak-yellow" />
        Bientôt disponible
      </span>

      <div className="mx-auto max-w-xl px-6 py-16 text-center text-white">
        <div className="relative mx-auto flex items-center justify-center gap-5">
          <div aria-hidden="true" className="flex h-10 items-end gap-1">
            {[0.0, 0.3, 0.15, 0.45].map((d, i) => (
              <span key={i} className="eq-bar w-1.5 rounded-full bg-daak-cyan/70" style={{ height: `${50 + i * 12}%`, animationDelay: `${d}s` }} />
            ))}
          </div>

          <div className="relative flex size-24 items-center justify-center">
            <span aria-hidden="true" className="ring-out absolute inset-0 rounded-full border border-daak-yellow/60" />
            <span aria-hidden="true" className="ring-out absolute inset-0 rounded-full border border-daak-cyan/50" style={{ animationDelay: "1.2s" }} />
            <span className="relative flex size-20 items-center justify-center rounded-full border border-white/20 bg-daak-navy/70 text-daak-yellow shadow-[0_0_40px_rgba(255,195,0,.25)] backdrop-blur">
              <Play size={30} className="ml-1" fill="currentColor" />
            </span>
          </div>

          <div aria-hidden="true" className="flex h-10 items-end gap-1">
            {[0.2, 0.05, 0.4, 0.25].map((d, i) => (
              <span key={i} className="eq-bar w-1.5 rounded-full bg-daak-cyan/70" style={{ height: `${86 - i * 12}%`, animationDelay: `${d}s` }} />
            ))}
          </div>
        </div>

        <h3 className="mt-8 font-heading text-2xl font-bold tracking-[-0.03em] md:text-3xl">
          La vidéo de présentation arrive bientôt
        </h3>
        <p className="mt-4 leading-7 text-white/65">
          Nous préparons une démonstration de {project.title}. Elle apparaîtra ici dès sa publication.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-daak-yellow px-6 font-semibold text-daak-navy transition hover:brightness-110"
            >
              Essayer la démo en ligne
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 font-semibold transition hover:border-daak-cyan/60"
          >
            Demander une présentation
          </Link>
        </div>
      </div>
    </div>
  );
}
