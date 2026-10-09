export function CircuitDivider() {
  return (
    <div className="relative flex w-full items-center overflow-hidden" aria-hidden="true">
      <span className="size-2 rounded-full bg-daak-cyan shadow-[0_0_12px_#25f4ee]" />
      <span className="relative h-px flex-1 bg-gradient-to-r from-daak-cyan/70 to-daak-blue/10">
        <span className="divider-dot" />
      </span>
      <span className="size-1.5 rounded-full border border-daak-blue" />
      <span className="h-px w-16 bg-daak-blue/30" />
      <span className="ml-1 size-2 rounded-full bg-daak-yellow shadow-[0_0_12px_#ffc300]" />
    </div>
  );
}
