import Image from "next/image";

import { OrbitRings } from "@/components/ui/orbit-rings";

type ServiceHeroVisualProps = { image: string; title: string; visualClass: string };

export function ServiceHeroVisual({ image, title, visualClass }: ServiceHeroVisualProps) {
  return (
    <div className={`shine-hover relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[34px] bg-gradient-to-br ${visualClass} p-6 shadow-[0_30px_80px_rgba(0,180,255,.18)]`}>
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <OrbitRings className="-right-16 -top-16 size-[360px] opacity-90" />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 size-48 rounded-full bg-daak-yellow/15 blur-3xl" />

      <div className="absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-daak-navy/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
        {title}
      </div>

      <div className="relative mt-12 flex min-h-[320px] items-center justify-center rounded-[28px] border border-white/10 bg-[#0D213A]/25 px-6 py-10 backdrop-blur-sm">
        <div className="float-y relative h-[260px] w-full max-w-[340px]">
          <Image src={image} alt={title} fill priority sizes="(max-width: 1024px) 90vw, 340px" className="object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,.4)]" />
        </div>
      </div>

      <svg aria-hidden="true" viewBox="0 0 100 4" className="absolute bottom-6 left-7 h-1 w-24" fill="none" preserveAspectRatio="none">
        <path pathLength={100} d="M0 2 H100" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
        <path pathLength={100} d="M0 2 H100" stroke="#FFC300" strokeWidth="3" strokeLinecap="round" className="pulse-line" />
      </svg>
    </div>
  );
}
