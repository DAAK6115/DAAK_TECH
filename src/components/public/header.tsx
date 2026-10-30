"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";

import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { MegaMenu } from "@/components/public/mega-menu";
import { MobileMenu } from "@/components/public/mobile-menu";

export function Header() {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-daak-navy/98 shadow-md shadow-black/10"
            : "bg-daak-navy"
        )}
      >
        <Container>
          <div className="flex h-[100px] items-center justify-between lg:h-[112px]">
            <Link
                href="/"
                className="relative z-10 flex items-center"
                aria-label="DAAK_TECH - Accueil"
                >
                <div className="relative h-[88px] w-[224px] sm:h-[96px] sm:w-[280px] lg:h-[106px] lg:w-[340px]">
                    <Image
                    src="/branding/daak-tech-logo.png"
                    alt="Logo DAAK_TECH"
                    fill
                    priority
                    sizes="(max-width: 639px) 224px, (max-width: 1023px) 280px, 340px"
                    className="object-contain object-left"
                    />
                </div>
                </Link>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navigation principale"
            >
              <Link
                href="/"
                className={
                    pathname === "/"
                        ? "rounded-lg px-4 py-3 text-sm font-medium text-[#25F4EE] transition"
                        : "rounded-lg px-4 py-3 text-sm font-medium text-white/75 transition hover:text-white"
                    }
              >
                Accueil
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={
                    pathname.startsWith("/services")
                        ? "flex items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium text-[#25F4EE] transition"
                        : "flex items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium text-white/75 transition hover:text-white"
                    }
                >
                  Services

                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <MegaMenu
                    onNavigate={() => setServicesOpen(false)}
                  />
                )}
              </div>

              {mainNavigation
                .filter((item) => item.href !== "/")
                .map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/contact" &&
                      pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        active
                            ? "rounded-lg px-4 py-3 text-sm font-medium text-[#25F4EE] transition"
                            : "rounded-lg px-4 py-3 text-sm font-medium text-white/75 transition hover:text-white"
                        }
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="
                  inline-flex h-11 items-center justify-center
                  rounded-xl bg-daak-blue px-5
                  text-sm font-bold text-daak-navy
                  transition hover:bg-daak-cyan
                "
              >
                Démarrer un projet
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="
                relative z-[60] flex size-11 items-center
                justify-center rounded-xl border border-white/10
                text-white transition hover:bg-white/5 lg:hidden
              "
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}