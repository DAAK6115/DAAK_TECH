import { services } from "@/data/services";

export function ServiceTicker() {
  const items = [...services, ...services];

  return (
    <div className="marquee relative overflow-hidden border-y border-daak-cyan/15 bg-[#071426] py-5" aria-hidden="true">
      <div className="marquee-track items-center gap-10">
        {items.map((s, i) => (
          <span key={`${s.slug}-${i}`} className="flex shrink-0 items-center gap-10 font-heading text-xl font-bold tracking-tight text-white/70 md:text-2xl">
            {s.shortTitle}
            <span className={i % 2 ? "text-daak-yellow" : "text-daak-cyan"}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
