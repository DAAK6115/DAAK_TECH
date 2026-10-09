"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { FileText, MessageCircle } from "lucide-react";

const whatsapp =
  "https://wa.me/2250703156943?text=" +
  encodeURIComponent("Bonjour DAAK_TECH, j’aimerais en savoir plus sur vos services.");

export function FloatingActions() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showQuote = scrolled && pathname !== "/contact";

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-daak-yellow px-5 text-sm font-semibold text-daak-navy shadow-[0_12px_30px_rgba(255,195,0,.35)] transition hover:brightness-110"
            >
              <FileText size={17} />
              Demander un devis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire à DAAK_TECH sur WhatsApp"
        className="btn-pulse flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,.4)] transition hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
