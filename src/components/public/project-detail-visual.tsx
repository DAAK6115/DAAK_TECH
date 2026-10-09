"use client";

import { motion } from "motion/react";

import { OrbitRings } from "@/components/ui/orbit-rings";
import { ProjectCover } from "@/components/public/project-cover";

type ProjectDetailVisualProps = {
  image: string | null;
  imageAlt: string;
  title: string;
  visualClass: string;
};

export function ProjectDetailVisual({
  image,
  imageAlt,
  title,
  visualClass,
}: ProjectDetailVisualProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        rotate: -0.6,
      }}
      className={`
        relative mx-auto
        min-h-[350px]
        w-full max-w-[560px]
        overflow-hidden
        rounded-[30px]
        bg-gradient-to-br
        ${visualClass}
        shadow-[0_35px_100px_rgba(0,0,0,.25)]
        md:min-h-[430px]
      `}
    >
      {/* Grille */}
      <div
        className="
          absolute inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
          [background-size:38px_38px]
        "
        aria-hidden="true"
      />

      <OrbitRings className="-right-24 -top-24 size-[420px] opacity-80" />

      {/* Halo */}
      <div
        className="
          absolute -right-20 -top-20
          size-[300px]
          rounded-full
          bg-white/10
          blur-[90px]
        "
        aria-hidden="true"
      />

      {/* Badge */}
      <div
        className="
          absolute left-6 top-6 z-10
          rounded-full
          border border-white/10
          bg-daak-navy/60
          px-4 py-2
          text-[10px] font-bold uppercase
          tracking-[0.14em]
          text-white/75
          backdrop-blur-md
        "
      >
        {title}
      </div>

      {/* Screenshot */}
      <motion.div
        className="
          absolute
          bottom-[-4%]
          left-[7%]
          right-[7%]
          top-[18%]
        "
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ProjectCover
          image={image}
          alt={imageAlt}
          title={title}
          priority
          sizes="(max-width: 1024px) 90vw, 560px"
          className="rounded-t-[22px] shadow-[0_30px_80px_rgba(0,0,0,.35)]"
        />
      </motion.div>
    </motion.div>
  );
}