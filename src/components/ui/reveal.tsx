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
    direction === "left" ? { opacity: 0, x: -24 }
    : direction === "right" ? { opacity: 0, x: 24 }
    : { opacity: 0, y: 24 };
  const visible = direction === "up" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
