"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function SiteFx() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-daak-cyan via-daak-blue to-daak-yellow"
    />
  );
}
