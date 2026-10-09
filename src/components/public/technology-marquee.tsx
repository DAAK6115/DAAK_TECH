"use client";

import { motion } from "motion/react";

type TechnologyMarqueeProps = {
  technologies: string[];
};

export function TechnologyMarquee({
  technologies,
}: TechnologyMarqueeProps) {
  const repeated = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div
      className="
        relative overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
      "
    >
      <motion.div
        className="flex w-max items-center gap-4"
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          duration: Math.max(18, technologies.length * 4),
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="
              flex h-16 shrink-0
              items-center justify-center
              rounded-full
              group gap-3 border border-slate-200
              bg-white px-8 transition duration-300
              hover:-translate-y-1 hover:border-daak-cyan hover:shadow-[0_12px_30px_rgba(0,180,255,.2)]
              font-heading text-sm
              font-semibold
              text-daak-text
              shadow-[0_8px_25px_rgba(10,26,47,.04)]
            "
          >
            <span className="size-1.5 rounded-full bg-daak-cyan transition group-hover:bg-daak-yellow" />
            {technology}
          </div>
        ))}
      </motion.div>
    </div>
  );
}