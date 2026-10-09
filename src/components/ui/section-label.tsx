import { cn } from "@/lib/utils";

type SectionLabelProps = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-daak-blue", className)}>
      <span className="label-line h-px w-8 bg-daak-cyan" aria-hidden="true" />
      <span className="ping-dot size-1.5 rounded-full bg-daak-yellow" aria-hidden="true" />
      {children}
    </div>
  );
}
