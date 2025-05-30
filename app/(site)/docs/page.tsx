import SidebarLink from "@/components/Docs/SidebarLink"; // Asegúrate de que la ruta sea correcta
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro - now with dynamic fake content!",
};

export default function DocsPage() {
  return <SidebarLink />;
}