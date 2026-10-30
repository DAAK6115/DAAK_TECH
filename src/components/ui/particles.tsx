"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

const FRAME_MS = 40; // 25 FPS suffisent pour un décor.

export function Particles({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let frame = 0;
    let last = 0;
    let visible = false;
    let running = false;
    let points: Particle[] = [];
    const palette = ["37,244,238", "0,180,255", "255,195,0"];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(32, Math.max(16, Math.floor(w / 45)));
      points = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.4 + 0.7,
        color: i % 9 === 0 ? palette[2] : palette[i % 2],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        ctx.fillStyle = `rgba(${a.color},.8)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared >= 14400) continue;
          const distance = Math.sqrt(distanceSquared);
          ctx.strokeStyle = `rgba(${a.color},${(1 - distance / 120) * 0.26})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      if (now - last >= FRAME_MS) {
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const stop = () => { running = false; cancelAnimationFrame(frame); };
    const start = () => {
      if (running || !visible || document.hidden) return;
      running = true;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const onVisibility = () => { if (document.hidden) stop(); else start(); };

    resize();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else stop();
    });
    observer.observe(canvas);
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={cn("absolute inset-0 size-full", className)} />;
}
