"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };

export function Particles({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const cols = ["37,244,238", "0,180,255", "255,195,0"];
    let w = 0, h = 0, raf = 0;
    let ps: P[] = [];
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.offsetWidth; h = cv.offsetHeight;
      cv.width = w * d; cv.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.min(72, Math.floor(w / 18));
      ps = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.8,
        c: i % 9 === 0 ? cols[2] : i % 2 ? cols[1] : cols[0],
      }));
    };
    const move = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ps.forEach((a, i) => {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        const dx = a.x - mouse.x, dy = a.y - mouse.y, d = Math.hypot(dx, dy);
        if (d > 0 && d < 130) { a.x += (dx / d) * 1.4; a.y += (dy / d) * 1.4; }
        ctx.fillStyle = `rgba(${a.c},.85)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j], l = Math.hypot(a.x - b.x, a.y - b.y);
          if (l < 120) {
            ctx.strokeStyle = `rgba(${a.c},${(1 - l / 120) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={cn("absolute inset-0 size-full", className)} />;
}
