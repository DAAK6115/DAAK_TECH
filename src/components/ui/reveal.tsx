"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
};

export function Reveal({ children, delay = 0, className, direction = "up" }: RevealProps) {
  const initial =
    direction === "left" ? { opacity: 0, x: -48, filter: "blur(8px)" }
    : direction === "right" ? { opacity: 0, x: 48, filter: "blur(8px)" }
    : { opacity: 0, y: 40, filter: "blur(8px)" };
  const visible =
    direction === "up" ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, x: 0, filter: "blur(0px)" };

  return (
    <motion.div
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
