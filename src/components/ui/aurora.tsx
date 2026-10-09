import { cn } from "@/lib/utils";

type AuroraProps = { className?: string; calm?: boolean };

export function Aurora({ className, calm = false }: AuroraProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className={cn("aurora-blob aurora-1", calm && "opacity-60")} />
      <span className={cn("aurora-blob aurora-2", calm && "opacity-50")} />
      {!calm && <span className="aurora-blob aurora-3" />}
      {!calm && <span className="grid-bg absolute inset-0" />}
    </div>
  );
}
