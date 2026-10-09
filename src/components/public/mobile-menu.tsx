"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  mainNavigation,
  serviceGroups,
} from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-40 overflow-y-auto
        bg-daak-navy px-5 pb-12 pt-28 lg:hidden
      "
    >
      <nav aria-label="Navigation mobile">
        <div className="space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="
              block rounded-xl px-4 py-4
              font-heading text-xl font-semibold text-white
              hover:bg-white/5
            "
          >
            Accueil
          </Link>

          <button
            type="button"
            onClick={() => setServicesOpen((value) => !value)}
            className="
              flex w-full items-center justify-between
              rounded-xl px-4 py-4
              font-heading text-xl font-semibold
              text-white hover:bg-white/5
            "
            aria-expanded={servicesOpen}
          >
            Services

            <ChevronDown
              className={
                servicesOpen
                  ? "rotate-180 transition"
                  : "transition"
              }
            />
          </button>

          {servicesOpen && (
            <div className="ml-4 border-l border-daak-cyan/20 pl-4">
              <Link
                href="/services"
                onClick={onClose}
                className="
                  block py-3 text-sm font-semibold
                  text-daak-cyan
                "
              >
                Tous les services
              </Link>

              {serviceGroups.map((group) => (
                <div
                  key={group.title}
                  className="py-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                    {group.title}
                  </p>

                  <div className="mt-2">
                    {group.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={onClose}
                        className="
                          block rounded-lg py-2
                          text-sm leading-6 text-white/70
                          hover:text-daak-cyan
                        "
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {mainNavigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="
                  block rounded-xl px-4 py-4
                  font-heading text-xl font-semibold
                  text-white hover:bg-white/5
                "
              >
                {item.label}
              </Link>
            ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="
              flex h-14 w-full items-center
              justify-center rounded-xl
              bg-daak-blue px-5
              font-bold text-daak-navy
              transition hover:bg-daak-cyan
            "
          >
            Démarrer un projet
          </Link>
        </div>
      </nav>
    </div>
  );
}