// app/layout.js (¡YA NO TIENE "use client"; EN LA PARTE SUPERIOR!)

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";

// Importa el nuevo componente que acabas de crear
import { AppProviders } from "@/components/providers/AppProviders"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        {/* Envuelve TODO el contenido que necesita interactividad o contextos de cliente */}
        <AppProviders>
          <Lines />
          <Header />
          {children} {/* Aquí se carga el contenido de tus páginas (Inicio, Blog, Docs, etc.) */}
          <Footer />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}