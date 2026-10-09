import type { ReactNode } from "react";

import { Footer } from "@/components/public/footer";
import { FloatingActions } from "@/components/public/floating-actions";
import { SiteFx } from "@/components/ui/site-fx";
import { Header } from "@/components/public/header";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SiteFx />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}