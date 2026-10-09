import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/public/footer";
import { Header } from "@/components/public/header";
import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-daak-navy pb-24 pt-[150px] text-white">
          <Aurora className="-z-10" />
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="gradient-text font-heading text-[120px] font-black leading-none tracking-[-0.06em] sm:text-[180px]">404</p>
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] md:text-4xl">Cette page n’existe pas.</h1>
              <p className="mt-5 leading-8 text-white/65">
                Le lien est peut-être incorrect ou la page a été déplacée. Revenez à l’accueil ou parlez-nous de votre besoin.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/" className="btn-shine group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-daak-blue px-7 font-semibold text-daak-navy transition hover:bg-daak-cyan">
                  Retour à l’accueil
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/15 px-7 font-semibold transition hover:border-daak-cyan/50">
                  Nous contacter
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
