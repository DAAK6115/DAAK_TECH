#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Correctifs DAAK_TECH : logos, favicon, adresse et fluidité.
Copier ce fichier dans la RACINE du dépôt et exécuter : python corriger_daaktech.py
Les fichiers d'origine sont sauvegardés dans un dossier voisin du dépôt.
"""
from pathlib import Path
from datetime import datetime
import shutil
import re

ROOT = Path(__file__).resolve().parent
BACKUP = ROOT.parent / f"DAAK_TECH_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
pending = {}

def source(rel):
    file = ROOT / rel
    if not file.is_file():
        raise RuntimeError(f"Fichier absent : {rel}. Place le script à la racine du projet.")
    return pending.get(rel, file.read_text(encoding="utf-8"))

def change(rel, before, after):
    code = source(rel)
    n = code.count(before)
    if n != 1:
        raise RuntimeError(f"Changement impossible : {rel}, correspondances={n}, repère={before[:90]!r}. Aucun fichier modifié.")
    pending[rel] = code.replace(before, after, 1)

def change_regex(rel, expression, after):
    code = source(rel)
    new, n = re.subn(expression, after, code, count=2)
    if n != 1:
        raise RuntimeError(f"Expression d'adresse non unique dans {rel}: {n}. Aucun fichier modifié.")
    pending[rel] = new

def overwrite(rel, code):
    source(rel)
    pending[rel] = code

H = "src/components/public/header.tsx"
F = "src/components/public/footer.tsx"
A = "src/app/(public)/contact/page.tsx"
C = "src/app/globals.css"

# LOGOS : redimensionnement des conteneurs sans modifier les images de marque.
change(H, 'className="flex h-[88px] items-center justify-between"', 'className="flex h-[100px] items-center justify-between lg:h-[112px]"')
change(H, '<div className="relative h-[64px] w-[260px]">', '<div className="relative h-[88px] w-[224px] sm:h-[96px] sm:w-[280px] lg:h-[106px] lg:w-[340px]">')
change(H, 'sizes="260px"', 'sizes="(max-width: 639px) 224px, (max-width: 1023px) 280px, 340px"')
change(H, 'border-b border-white/10 bg-daak-navy/95 shadow-lg shadow-black/5 backdrop-blur-xl', 'border-b border-white/10 bg-daak-navy/98 shadow-md shadow-black/10')
change(F, 'className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4"', 'className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.35fr_.9fr_.9fr_1.1fr]"')
change(F, '<div className="relative h-[82px] w-[290px]">', '<div className="relative h-[112px] w-full max-w-[360px]">')
change(F, 'sizes="290px"', 'sizes="(max-width: 1023px) 320px, 360px"')

# ADRESSE : supprimer le doublon en conservant exactement la formulation voulue.
address = "Cocody, CHU d’Angré, en face de la Librairie de France"
duplicated = r"Cocody, CHU d’Angré, en face de la Librairie de France, Cocody\s*<br\s*/>\s*Cocody, CHU d’Angré, en face de la Librairie de France"
change_regex(F, duplicated, address)
change_regex(A, duplicated, address)
change("src/components/public/contact-map.tsx", "CHU d&apos;Angré\n            <br />\n            En face de la Librairie de France\n            <br />\n            Cocody, Abidjan, Côte d&apos;Ivoire", address)

# FAVICON : référence directe au symbole officiel du dossier public/branding.
layout = "src/app/layout.tsx"
change(layout,
       '    "DAAK_TECH accompagne entreprises, organisations et particuliers avec des solutions numériques et informatiques adaptées à leurs besoins.",\n',
       '    "DAAK_TECH accompagne entreprises, organisations et particuliers avec des solutions numériques et informatiques adaptées à leurs besoins.",\n'
       '  icons: {\n'
       '    icon: [{ url: "/branding/daak-tech-symbol.png", type: "image/png" }],\n'
       '    shortcut: "/branding/daak-tech-symbol.png",\n'
       '    apple: "/branding/daak-tech-symbol.png",\n'
       '  },\n')

# SUIVI DE SCROLL : conserver la barre, éliminer le halo qui suit la souris.
overwrite("src/components/ui/site-fx.tsx", '''"use client";

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
''')

# CANVAS : FPS plafonnés, moins de particules, pause hors écran et onglet masqué.
overwrite("src/components/ui/particles.tsx", '''"use client";

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
''')

# REVEAL : éviter les filtres blur animés sur des cartes entières.
overwrite("src/components/ui/reveal.tsx", '''"use client";

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
''')
sec = "src/components/ui/section-reveal.tsx"
change(sec, 'initial={{ opacity: 0, y: 36 }}', 'initial={{ opacity: 0, y: 20 }}')
change(sec, 'transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}', 'transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}')

# CSS : dégradés radiaux transformés sur GPU à la place de grands filtres blur.
change(C, '.aurora-blob { position: absolute; border-radius: 9999px; filter: blur(110px); mix-blend-mode: screen; will-change: transform; }', '.aurora-blob { position: absolute; border-radius: 9999px; mix-blend-mode: screen; }')
change(C, 'background: rgba(0,180,255,.28); animation: aurora-a', 'background: radial-gradient(circle, rgba(0,180,255,.26), rgba(0,180,255,.12) 38%, transparent 72%); animation: aurora-a')
change(C, 'background: rgba(37,244,238,.18); animation: aurora-b', 'background: radial-gradient(circle, rgba(37,244,238,.20), rgba(37,244,238,.08) 38%, transparent 72%); animation: aurora-b')
change(C, 'background: rgba(255,195,0,.13); animation: aurora-a', 'background: radial-gradient(circle, rgba(255,195,0,.14), rgba(255,195,0,.05) 38%, transparent 72%); animation: aurora-a')
change(C, 'animation: grid-drift 12s linear infinite;', 'animation: none;')
change(C, '''.logo-float {
  transform-origin: center;

  animation:
    logo-float 4.5s ease-in-out infinite,
    logo-glow 3s ease-in-out infinite;

  will-change: transform, filter;
}''', '''.logo-float {
  transform-origin: center;
  animation: logo-float 5s ease-in-out infinite;
  will-change: transform;
}''')
change(C, 'animation: service-image-float 5.5s ease-in-out infinite;', 'animation: none;')
change(C, '''  will-change: transform;
}

.service-visual-shell''', '''  will-change: auto;
}

.service-visual-shell''')
change(C, 'animation: rotate-a 5s linear infinite;', 'animation: none;')
change(C, '.btn-pulse { animation: btn-pulse 2.8s infinite; }', '.btn-pulse { animation: none; }')

logo = ROOT / "public/branding/daak-tech-symbol.png"
if not logo.is_file():
    raise RuntimeError("Logo officiel introuvable : public/branding/daak-tech-symbol.png")
favicon = ROOT / "src/app/favicon.ico"

# Toutes les recherches ont réussi : écriture transactionnelle et sauvegarde.
BACKUP.mkdir(parents=True, exist_ok=False)
for rel, content in pending.items():
    original = ROOT / rel
    save = BACKUP / rel
    save.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(original, save)
    original.write_text(content, encoding="utf-8")
    print("MODIFIÉ", rel)

if favicon.is_file():
    save = BACKUP / "src/app/favicon.ico"
    save.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(favicon, save)
    favicon.unlink()
    print("SUPPRIMÉ src/app/favicon.ico (remplacé par le symbole officiel)")

print("\nSauvegarde créée :", BACKUP)
print("Prêt : exécute npm run build, puis vérifie le rendu.")
