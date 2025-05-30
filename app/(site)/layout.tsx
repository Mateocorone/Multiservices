// app/layout.js

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen dark:bg-black ${inter.className}`}>
        <AppProviders>
          <Lines />
          <Header />
          {/* WRAP del contenido principal */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}
