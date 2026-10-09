"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { OrbitRings } from "@/components/ui/orbit-rings";

type ProjectMotionCardProps = {
  project: Project;
  index: number;
};

export function ProjectMotionCard({
  project,
  index,
}: ProjectMotionCardProps) {
  const imageFirst = index % 2 === 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className="will-change-transform"
    >
      <Link
        href={`/realisations/${project.slug}`}
        className="
          group grid overflow-hidden
          shine-hover rounded-[30px]
          border border-slate-200
          bg-white
          shadow-[0_15px_50px_rgba(10,26,47,.04)]
          transition-colors
          hover:border-daak-cyan/60
          hover:shadow-[0_30px_80px_rgba(0,180,255,.18)]
          lg:grid-cols-[.95fr_1.05fr]
        "
      >
        {/* TEXTE */}
        <div
          className={`
            flex min-h-[430px]
            flex-col justify-between
            p-8 md:p-10 lg:p-12
            ${imageFirst ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <div>
            <div className="flex items-center justify-between gap-5">
              <span
                className="
                  text-xs font-bold uppercase
                  tracking-[0.14em]
                  text-daak-blue
                "
              >
                {project.categoryLabel}
              </span>

              <span
                className="
                  font-heading text-xs
                  font-bold text-slate-300
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h2
              className="
                mt-9 font-heading
                text-3xl font-bold
                tracking-[-0.04em]
                text-daak-text
                md:text-4xl
              "
            >
              {project.title}
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full bg-daak-light
                    px-3 py-1.5 text-xs
                    font-semibold text-slate-500
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <span
              className="
                inline-flex items-center gap-2
                font-semibold text-daak-navy
              "
            >
              Voir l’étude de cas

              <ArrowRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1.5
                "
              />
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className={`
            relative min-h-[340px]
            overflow-hidden
            bg-gradient-to-br
            ${project.visualClass}
            md:min-h-[420px]
            lg:min-h-[460px]
            ${imageFirst ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <div
            className="
              absolute inset-0 opacity-[0.08]
              [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          <OrbitRings className="-right-20 -top-20 size-[380px] opacity-80" />

          <div
            className="
              absolute -bottom-20 -left-16
              size-64 rounded-full
              bg-daak-yellow/15 blur-[80px]
            "
          />

          <motion.div
            className="
              absolute bottom-[-5%]
              left-[7%] right-[7%]
              top-[11%]
            "
            whileHover={{
              y: -10,
              scale: 1.035,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="
                rounded-t-[22px]
                object-cover object-top
                shadow-[0_30px_80px_rgba(0,0,0,.32)]
              "
            />
          </motion.div>

          <span
            className="
              absolute right-7 top-6
              font-heading text-6xl
              font-black text-white/[0.08]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}