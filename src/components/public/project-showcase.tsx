"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { OrbitRings } from "@/components/ui/orbit-rings";
import { Tilt } from "@/components/ui/tilt";
import { ProjectCover } from "@/components/public/project-cover";
import type { Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export type ShowcaseProject = Project & { cover: string | null };

const categoryNames: Record<ProjectCategory, string> = {
  applications: "Applications",
  "solutions-metier": "Solutions métier",
  "sites-web": "Sites web",
};

function layoutFor(i: number, n: number) {
  if (n === 1) return { span: "lg:col-span-12", wide: true };
  if (n === 2) return { span: "lg:col-span-6", wide: false };
  const k = i % 5;
  const last = i === n - 1;
  if (last && (k === 0 || k === 2 || k === 4)) return { span: "lg:col-span-12", wide: true };
  return { span: ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-12"][k], wide: k === 4 };
}

function hostOf(url?: string, fallback = "") {
  try { return url ? new URL(url).hostname.replace(/^www\./, "") : fallback; } catch { return fallback; }
}

function Frame({ project, mobile }: { project: ShowcaseProject; mobile: boolean }) {
  if (mobile) {
    return (
      <div className="mx-auto aspect-[9/17] w-[46%] max-w-[230px] overflow-hidden rounded-[32px] border-[6px] border-[#06101f] bg-[#06101f] shadow-[0_30px_70px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:-translate-y-2">
        <ProjectCover image={project.cover} alt={project.imageAlt} title={project.title} sizes="230px" className="rounded-[24px]" />
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1a30] shadow-[0_30px_70px_rgba(0,0,0,.4)] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-daak-yellow" />
        <span className="size-2.5 rounded-full bg-daak-cyan" />
        <span className="size-2.5 rounded-full bg-daak-blue" />
        <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-[11px] text-white/55">
          {hostOf(project.demoUrl, project.slug)}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <ProjectCover image={project.cover} alt={project.imageAlt} title={project.title} sizes="(max-width: 1024px) 100vw, 58vw" />
        {project.cover && (
          <span className="absolute bottom-3 left-3 rounded-full bg-daak-navy/80 px-3 py-1 text-[11px] font-semibold text-daak-cyan opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            Aperçu défilant
          </span>
        )}
      </div>
    </div>
  );
}

function Tile({ project, index, total }: { project: ShowcaseProject; index: number; total: number }) {
  const { span, wide } = layoutFor(index, total);
  const mobile = project.categoryLabel.toLowerCase().includes("mobile");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn("col-span-12", span)}
    >
      <Tilt max={3} className="h-full rounded-[32px]">
        <Link
          href={`/realisations/${project.slug}`}
          className={cn(
            "group relative isolate flex h-full min-h-[520px] flex-col gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br p-6 shadow-[0_25px_70px_rgba(10,26,47,.25)] transition-shadow duration-500 hover:shadow-[0_35px_90px_rgba(0,180,255,.3)] md:p-8",
            project.visualClass,
            wide && "lg:flex-row lg:items-center lg:gap-12 lg:p-10"
          )}
        >
          <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-50" />
          <OrbitRings className="-right-24 -top-24 -z-10 size-[420px] opacity-60" />

          <div className={cn("flex flex-1 flex-col justify-center", wide && "lg:order-1 lg:basis-[58%]")}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/15 bg-daak-navy/60 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                {project.categoryLabel}
              </span>
              <span className="font-heading text-sm font-bold text-white/35">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <Frame project={project} mobile={mobile} />
          </div>

          <div className={cn("text-white", wide && "lg:order-2 lg:basis-[42%]")}>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.04em] md:text-4xl">{project.title}</h2>
            <p className="mt-3 line-clamp-3 max-w-md leading-7 text-white/70">{project.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/75">{t}</span>
              ))}
            </div>
            <span className="mt-7 inline-flex items-center gap-3 font-semibold text-daak-yellow">
              Voir l’étude de cas
              <span className="flex size-10 items-center justify-center rounded-full bg-daak-yellow text-daak-navy transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </span>
          </div>
        </Link>
      </Tilt>
    </motion.article>
  );
}

export function ProjectShowcase({ projects }: { projects: ShowcaseProject[] }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filters = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return [
      { id: "all" as const, label: "Tous", count: projects.length },
      ...cats.map((c) => ({ id: c, label: categoryNames[c], count: projects.filter((p) => p.category === c).length })),
    ];
  }, [projects]);

  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="tablist" aria-label="Filtrer les réalisations" className="mb-12 flex flex-wrap gap-3">
        {filters.map((f) => {
          const on = active === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(f.id)}
              className={cn(
                "relative rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                on ? "border-transparent text-daak-navy" : "border-slate-300 bg-white text-slate-600 hover:border-daak-cyan hover:text-daak-navy"
              )}
            >
              {on && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-daak-cyan" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              <span className="relative">{f.label} <span className="opacity-60">· {f.count}</span></span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-12 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <Tile key={p.slug} project={p} index={i} total={visible.length} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
