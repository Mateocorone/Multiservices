import SidebarLink from "@/components/Docs/SidebarLink"; // Asegúrate de que la ruta sea correcta
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quienes Somos | ReparaYa",
  description: "Guía completa sobre nuestros servicios, procesos, preguntas frecuentes y recomendaciones de mantenimiento en ReparaYa.",
};


export default function DocsPage() {
  return <SidebarLink />;
}