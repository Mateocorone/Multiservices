"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const allInfoContent = {
  '/docs/introduction': {
    label: 'Quiénes Somos',
    title: 'Acerca de Multiservicios TotalFix',
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          En <strong>TotalFix</strong>, somos expertos en dar mantenimiento, arreglos y soluciones...
        </p>
      </>
    )
  },
  '/docs/maintenance-services': {
    label: 'Servicios',
    title: 'Servicios de Mantenimiento y Reparación',
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Ofrecemos un amplio abanico de servicios para clientes residenciales...
        </p>
      </>
    )
  },
  '/docs/how-we-work': {
    label: 'Cómo Trabajamos',
    title: 'Nuestro Proceso de Trabajo',
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          Creemos en la transparencia, la puntualidad y la buena comunicación...
        </p>
      </>
    )
  },
  '/docs/contact': {
    label: 'Contacto',
    title: 'Contáctanos',
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          ¿Tienes una urgencia o simplemente quieres saber más? Puedes encontrarnos en:
        </p>
      </>
    )
  },
};

export default function SidebarLink() {
  const [activeContentKey, setActiveContentKey] = useState('/docs/introduction');
  const currentContent = allInfoContent[activeContentKey];

  const sidebarLinksData = Object.entries(allInfoContent).map(([href, { label }]) => ({ href, label }));

  return (
    <section className="bg-white dark:bg-[#111827] text-black dark:text-white pt-16 pb-10 lg:pt-20 lg:pb-12 xl:pt-24 xl:pb-14">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Barra lateral */}
          <div className="lg:w-1/4 xl:w-1/5 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-2">
              {sidebarLinksData.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => setActiveContentKey(link.href)}
                    className={`flex w-full rounded-md px-3 py-2 text-base text-left transition-colors duration-200
                      ${activeContentKey === link.href
                        ? 'bg-[#E5E7EB] dark:bg-[#1F2937] text-black dark:text-white font-semibold'
                        : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#374151]'}
                    `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido principal */}
          <motion.div
            key={activeContentKey}
            className="lg:w-3/4 xl:w-4/5 bg-white dark:bg-[#111827] p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black dark:text-white">
              {currentContent.title}
            </h1>
            <div className="prose text-black dark:text-gray-200 max-w-none">
              {currentContent.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
