"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useScroll, useSpring } from "motion/react";

export function SiteFx() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 110, damping: 20 });
  const sy = useSpring(y, { stiffness: 110, damping: 20 });

  useEffect(() => {
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-daak-cyan via-daak-blue to-daak-yellow"
      />
      {pathname === "/" && (
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-[5] -ml-[260px] -mt-[260px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,.10),transparent_65%)]"
      />
      )}
    </>
  );
}
