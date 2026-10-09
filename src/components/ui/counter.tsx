"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
    });
    return () => c.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
