"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const steps = [
  ["01", "Besoin", "Nous écoutons votre contexte et vos contraintes."],
  ["02", "Compréhension", "Nous traduisons votre besoin en objectifs clairs."],
  ["03", "Conception", "Nous concevons la solution la plus adaptée."],
  ["04", "Solution adaptée", "Nous livrons, installons et vous accompagnons."],
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <div ref={ref} className="relative space-y-5">
      <div aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-[3px] rounded-full bg-daak-blue/15">
        <motion.div style={{ scaleY }} className="h-full origin-top rounded-full bg-gradient-to-b from-daak-cyan via-daak-blue to-daak-yellow" />
      </div>

      {steps.map(([n, title, text], i) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 8 }}
          className="relative flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(10,26,47,.05)] transition-colors hover:border-daak-cyan/60"
        >
          <motion.span
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.2 + i * 0.1 }}
            className={`relative z-10 flex size-[54px] shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold ${i === 3 ? "bg-daak-yellow text-daak-navy" : "bg-daak-navy text-daak-cyan"}`}
          >
            {n}
          </motion.span>
          <div>
            <p className="font-heading text-lg font-semibold text-daak-text">{title}</p>
            <p className="text-sm leading-6 text-slate-500">{text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
