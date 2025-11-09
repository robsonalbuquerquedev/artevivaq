import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="bg-gradient-to-b from-pink-50 to-rose-100 text-gray-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
