import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "ReparaYa | Soluciones para tu hogar y negocio",
  description: "ReparaYa ofrece servicios profesionales de cartongesso, pintura, resina, microcemento, aire acondicionado y más. Calidad, rapidez y confianza en cada proyecto.",
}


export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      
      <FunFact />
      
      
      <Blog />
    </main>
  );
}
