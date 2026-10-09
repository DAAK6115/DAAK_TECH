import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DAAK_TECH | Solutions numériques & informatiques",
    template: "%s | DAAK_TECH",
  },
  description:
    "DAAK_TECH accompagne entreprises, organisations et particuliers avec des solutions numériques et informatiques adaptées à leurs besoins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${montserrat.variable}`}
     data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}