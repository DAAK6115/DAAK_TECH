import { cn } from "@/lib/utils";

export function OrbitRings({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <div className="spin-slow absolute inset-0 rounded-full border border-daak-cyan/25">
        <i className="absolute -top-1 left-1/2 size-2 rounded-full bg-daak-cyan shadow-[0_0_14px_#25f4ee]" />
      </div>
      <div className="spin-rev absolute inset-[16%] rounded-full border border-dashed border-white/20">
        <i className="absolute -bottom-1 left-1/2 size-2 rounded-full bg-daak-yellow shadow-[0_0_14px_#ffc300]" />
      </div>
      <div className="spin-slow absolute inset-[34%] rounded-full border border-daak-blue/30">
        <i className="absolute -left-1 top-1/2 size-1.5 rounded-full bg-daak-blue shadow-[0_0_12px_#00b4ff]" />
      </div>
    </div>
  );
}
