import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceGroups } from "@/data/navigation";

type MegaMenuProps = {
  onNavigate?: () => void;
};

export function MegaMenu({ onNavigate }: MegaMenuProps) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(1180px,calc(100vw-48px))] -translate-x-1/2 pt-4">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-daak-navy shadow-2xl shadow-black/20">
        <div className="grid gap-8 p-8 lg:grid-cols-4">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <p className="font-heading text-sm font-bold text-daak-cyan">
                {group.title}
              </p>

              <div className="mt-5 space-y-1">
                {group.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={onNavigate}
                    className="
                      group flex items-start justify-between gap-3
                      rounded-xl px-3 py-3 text-sm leading-5
                      text-white/70 transition
                      hover:bg-white/5 hover:text-white
                    "
                  >
                    <span>{service.label}</span>

                    <ArrowRight
                      size={15}
                      className="
                        mt-0.5 shrink-0 opacity-0
                        transition-all
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 bg-white/[0.025] px-8 py-5">
          <Link
            href="/services"
            onClick={onNavigate}
            className="
              inline-flex items-center gap-2
              font-semibold text-daak-cyan
              transition hover:text-white
            "
          >
            Découvrir tous nos services
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}