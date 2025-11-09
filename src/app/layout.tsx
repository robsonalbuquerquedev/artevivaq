import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApoieCard from "@/components/ApoieCard";

export const metadata: Metadata = {
  title: "ArteVivaQ | Galeria de Desenhos",
  description:
    "Onde a arte ganha vida pelas mãos de Sra. Albuquerque. Galeria de arte digital com desenhos realistas, animados e religiosos, desenvolvida por Robson Albuquerque.",
  keywords: [
    "ArteVivaQ",
    "Sra. Albuquerque",
    "galeria de arte",
    "desenhos realistas",
    "desenhos animados",
    "arte digital",
    "artista brasileira",
    "Robson Albuquerque",
    "pintura e ilustração",
  ],
  authors: [
    { name: "Sra. Albuquerque", url: "https://www.instagram.com/karla_albuquerqueoficial17/" },
    { name: "Robson Albuquerque", url: "https://robsonverse.vercel.app/" },
  ],
  openGraph: {
    title: "ArteVivaQ 🎨 | Onde a Arte Ganha Vida",
    description:
      "Galeria de arte criada por Sra. Albuquerque. Explore desenhos realistas, animados e religiosos com o toque da inspiração viva da ArteVivaQ.",
    url: "https://artevivaq.vercel.app",
    siteName: "ArteVivaQ",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logoartevivaq.png",
        width: 1200,
        height: 630,
        alt: "Logo ArteVivaQ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-rose-100 text-gray-800 selection:bg-pink-200/60 selection:text-pink-900 overflow-x-hidden">

        {/* 🔹 Header fixo (sidebar no desktop / topbar no mobile) */}
        <Header />

        {/* 🔹 Área principal */}
        <div className="flex flex-col md:ml-72 flex-grow transition-all duration-300">
          <main
            className="
              flex-grow 
              pt-16 md:pt-8  /* reduzimos o espaço superior */
              px-4 md:px-6   /* margens laterais mais suaves */
              pb-16 md:pb-10 /* reduzimos o espaço inferior */
              transition-all duration-300
            "
          >
            {children}
          </main>

          {/* 🔹 Footer fixo no final */}
          <Footer />
        </div>

        {/* 🔹 Card flutuante (apoio) */}
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <ApoieCard />
        </div>
      </body>
    </html>
  );
}
