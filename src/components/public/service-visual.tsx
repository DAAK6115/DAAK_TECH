import Image from "next/image";

import { OrbitRings } from "@/components/ui/orbit-rings";

type ServiceVisualProps = { image: string; title: string; visualClass?: string };

export function ServiceVisual({ image, title, visualClass = "from-[#0a1a2f] via-[#0b3558] to-[#00b4ff]" }: ServiceVisualProps) {
  return (
    <div className={`service-visual-shell shine-hover relative min-h-[230px] overflow-hidden rounded-[24px] bg-gradient-to-br ${visualClass}`}>
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute -right-12 -top-12 size-44 rounded-full bg-daak-cyan/15 blur-3xl" />
      <OrbitRings className="right-[-6%] top-[-10%] size-[70%] opacity-80" />

      {/* Mini circuit animé */}
      <svg aria-hidden="true" viewBox="0 0 160 20" className="absolute bottom-4 left-5 h-5 w-40" fill="none">
        <path pathLength={100} d="M0 10 H70 L80 4 H120" stroke="rgba(37,244,238,.3)" strokeWidth="1.5" />
        <path pathLength={100} d="M0 10 H70 L80 4 H120" stroke="#25F4EE" strokeWidth="2.5" strokeLinecap="round" className="pulse-line" />
        <circle cx="124" cy="4" r="3" fill="#FFC300" className="circuit-node" />
      </svg>

      <div className="service-visual-image absolute inset-5">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 420px" className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,.35)]" />
      </div>

      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-daak-navy/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
        {title}
      </div>
    </div>
  );
}
