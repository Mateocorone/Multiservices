// components/providers/AppProviders.js
"use client"; // ESTE COMPONENTE SÍ DEBE SER UN COMPONENTE DE CLIENTE

import { ThemeProvider } from "next-themes";
// Asegúrate de que esta ruta sea correcta desde 'components/providers'
// Si tu estructura de carpetas es diferente, ajusta el número de '../'
import ToasterContext from "@/app/context/ToastContext"; // Asegúrate de que la ruta sea correcta. Si ToastContext está directamente en 'app', usa esto.

export function AppProviders({ children }) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      {children}
      <ToasterContext />
    </ThemeProvider>
  );
}