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
          En <strong>TotalFix</strong>, somos expertos en brindar soluciones integrales para hogares y negocios.
          Con más de 10 años de experiencia, nos especializamos en reformas, mantenimiento y acabados de alta calidad.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Nuestra misión es transformar tu espacio en un lugar funcional, moderno y estéticamente agradable, siempre con puntualidad, compromiso y profesionalismo.
        </p>
      </>
    )
  },
  '/docs/maintenance-services': {
    label: 'Servicios',
    title: 'Servicios que ofrecemos',
    content: (
      <>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Instalación de <strong>paneles de yeso (cartongesso)</strong> y tabiques interiores.</li>
          <li><strong>Pintura</strong> profesional interior y exterior, incluyendo acabados decorativos.</li>
          <li>Aplicación de <strong>resina y microcemento</strong> en suelos y paredes.</li>
          <li>Trabajos de <strong>albañilería</strong> y reparaciones estructurales.</li>
          <li><strong>Estuco veneciano</strong>: acabados lujosos y brillantes en paredes.</li>
          <li><strong>Instalación y mantenimiento de aires acondicionados</strong>.</li>
        </ul>
      </>
    )
  },
  '/docs/how-we-work': {
    label: 'Cómo Trabajamos',
    title: 'Nuestro Proceso de Trabajo',
    content: (
      <>
        <ol className="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Analizamos tu necesidad con una visita o asesoría virtual.</li>
          <li>Te enviamos una propuesta clara, detallada y sin compromiso.</li>
          <li>Realizamos los trabajos de forma ordenada, limpia y puntual.</li>
          <li>Supervisamos la calidad en cada fase y te damos seguimiento post-servicio.</li>
        </ol>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Nos enorgullece construir relaciones basadas en confianza y resultados visibles.
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
          ¿Tienes una urgencia, una consulta o necesitas un presupuesto personalizado?
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Puedes escribirnos directamente por <strong>WhatsApp</strong> o llenar nuestro formulario de contacto.
        </p>
        <ul className="mt-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li>📍 Atendemos en Novara y sus alrededores.</li>
          <li>📞 WhatsApp: +39 XXX XXX XXXX</li>
          <li>📧 Email: contacto@totalfix.it</li>
        </ul>
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
