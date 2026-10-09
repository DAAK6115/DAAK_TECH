"use client";

import Image from "next/image";
import { Cpu, Globe, Network, ShieldCheck, Wrench, Camera } from "lucide-react";

import { Tilt } from "@/components/ui/tilt";

const nodes = [
  [35, 170], [15, 280], [50, 400], [525, 170], [545, 280], [515, 400],
  [280, 20], [280, 540], [180, 215], [185, 350], [430, 170], [435, 400],
];

const traces = [
  { id: "t1", d: "M35 170 H135 L180 215 H230", delay: "0s", color: "#25F4EE" },
  { id: "t2", d: "M15 280 H105 L150 280 H220", delay: "0.2s", color: "#25F4EE" },
  { id: "t3", d: "M50 400 H135 L185 350 H230", delay: "0.4s", color: "#25F4EE" },
  { id: "t4", d: "M325 215 H385 L430 170 H525", delay: "0.2s", color: "#00B4FF" },
  { id: "t5", d: "M340 280 H455 L545 280", delay: "0.4s", color: "#00B4FF" },
  { id: "t6", d: "M325 350 H385 L435 400 H515", delay: "0.6s", color: "#00B4FF" },
  { id: "t7", d: "M280 20 V105 L240 145 V210", delay: "0.4s", color: "#25F4EE" },
  { id: "t8", d: "M280 540 V455 L325 410 V350", delay: "0.6s", color: "#00B4FF" },
];

const badges = [
  { Icon: Globe, angle: 0, label: "Web" },
  { Icon: ShieldCheck, angle: 60, label: "Sécurité" },
  { Icon: Network, angle: 120, label: "Réseaux" },
  { Icon: Wrench, angle: 180, label: "Maintenance" },
  { Icon: Camera, angle: 240, label: "Vidéo" },
  { Icon: Cpu, angle: 300, label: "Matériel" },
];

export function DigitalCircuitVisual() {
  return (
    <Tilt max={5} className="mx-auto aspect-square w-full max-w-[540px]">
      <div className="relative size-full">
        <div aria-hidden="true" className="absolute inset-[10%] rounded-full bg-daak-blue/20 blur-[90px]" />
        <div
          aria-hidden="true"
          className="grid-bg absolute inset-0 opacity-70"
        />

        {/* Badges en orbite */}
        <div aria-hidden="true" className="spin-slow absolute inset-0" style={{ animationDuration: "40s" }}>
          {badges.map(({ Icon, angle, label }) => (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 size-0"
              style={{ transform: `rotate(${angle}deg) translateY(-228px)` }}
            >
              <div className="spin-rev -ml-6 -mt-6 flex size-12 items-center justify-center rounded-2xl border border-daak-cyan/30 bg-daak-navy/80 text-daak-cyan shadow-[0_0_24px_rgba(37,244,238,.25)] backdrop-blur-md"
                style={{ animationDuration: "40s", animationDirection: "reverse" }}>
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <Icon size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 560 560" fill="none" className="absolute inset-0 size-full" aria-hidden="true">
          <defs>
            <linearGradient id="cg" x1="60" y1="60" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25F4EE" />
              <stop offset="1" stopColor="#00B4FF" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <circle cx="280" cy="280" r="190" stroke="url(#cg)" strokeOpacity=".15" />
          <circle cx="280" cy="280" r="140" stroke="#25F4EE" strokeOpacity=".22" className="circuit-orbit" />

          {traces.map((t) => (
            <g key={t.id}>
              <path id={t.id} pathLength={1} d={t.d} stroke="url(#cg)" strokeWidth="2" className="circuit-path" style={{ animationDelay: t.delay }} />
              {/* Impulsion de données qui voyage sur la piste */}
              <path pathLength={100} d={t.d} stroke={t.color} strokeWidth="3.5" strokeLinecap="round" filter="url(#glow)" className="pulse-line pulse-dot" style={{ animationDelay: t.delay }} />
            </g>
          ))}

          {/* Paquets jaunes */}
          {["t1", "t4", "t7", "t3", "t6"].map((id, i) => (
            <circle key={id} r="4" fill="#FFC300" filter="url(#glow)" className="pulse-dot">
              <animateMotion dur={`${3.2 + i * 0.4}s`} begin={`${1.6 + i * 0.5}s`} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
          ))}

          {nodes.map(([cx, cy], i) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={i < 8 ? 5 : 3} fill={i % 5 === 0 ? "#FFC300" : "#25F4EE"} filter="url(#glow)" className="circuit-node" style={{ animationDelay: `${i * 0.14}s` }} />
          ))}
        </svg>

        {/* Panneau central */}
        <div className="circuit-core neon-border absolute left-1/2 top-1/2 flex size-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[38px] border border-daak-cyan/25 bg-[#0D213A]/90 shadow-[0_0_90px_rgba(0,180,255,.18)] backdrop-blur-xl">
          <div aria-hidden="true" className="scan-bar absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-daak-cyan/15 to-transparent" />
          <div className="logo-float relative h-[145px] w-[210px]">
            <Image src="/branding/daak-tech-logo.png" alt="Logo DAAK_TECH" fill priority sizes="210px" className="object-contain drop-shadow-[0_0_18px_rgba(37,244,238,.25)]" />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
