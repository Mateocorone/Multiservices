"use client";

import { useState } from 'react';
import { motion } from 'framer-motion'; // Importa Framer Motion

const allInfoContent = {
  '/docs/introduction': {
    label: 'Quiénes Somos',
    title: 'Acerca de Multiservicios TotalFix',
    content: (
      <>
        <p className="mb-4">
          En <strong>TotalFix</strong>, somos expertos en dar mantenimiento, arreglos y soluciones para todo tipo de problemas técnicos, mecánicos y del hogar. Desde el enchufe que no sirve hasta el sistema de aire industrial más complejo, lo reparamos, lo dejamos nuevo... o al menos lo intentamos con estilo.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Fundada en una tarde de inspiración (y necesidad) en el año 2020, TotalFix nació como una empresa familiar y ha crecido hasta convertirse en una red de técnicos calificados que cubren desde mantenimiento residencial hasta soluciones industriales.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-black dark:text-white">Nuestra Filosofía</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Si se puede arreglar, lo arreglamos. Si no se puede, te explicamos por qué... y te damos opciones. Siempre con honestidad, eficiencia y un toque de buen humor.
        </p>
      </>
    )
  },
  '/docs/maintenance-services': {
    label: 'Servicios',
    title: 'Servicios de Mantenimiento y Reparación',
    content: (
      <>
        <p className="mb-4">
          Ofrecemos un amplio abanico de servicios para clientes residenciales, comerciales e industriales. Nuestra meta es ser tu primera y última llamada cuando algo deja de funcionar.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300">
          <li>Instalación y mantenimiento eléctrico</li>
          <li>Plomería residencial y de oficina</li>
          <li>Reparación de electrodomésticos</li>
          <li>Mantenimiento de aire acondicionado y calefacción</li>
          <li>Montaje de muebles y estructuras</li>
          <li>Soluciones personalizadas para empresas</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          No hay tarea pequeña ni problema grande. ¡Nos encanta lo que hacemos!
        </p>
      </>
    )
  },
  '/docs/how-we-work': {
    label: 'Cómo Trabajamos',
    title: 'Nuestro Proceso de Trabajo',
    content: (
      <>
        <p className="mb-4">
          Creemos en la transparencia, la puntualidad y la buena comunicación. Nuestro proceso es claro y directo para que siempre sepas qué esperar.
        </p>
        <ol className="list-decimal list-inside mt-4 text-gray-700 dark:text-gray-300">
          <li>Te contactas con nosotros por WhatsApp, llamada o formulario web.</li>
          <li>Agendamos una visita (gratis en la ciudad).</li>
          <li>Diagnosticamos y cotizamos el trabajo.</li>
          <li>¡Manos a la obra! Cumplimos tiempos y dejamos todo limpio.</li>
          <li>Te damos recomendaciones para evitar futuros problemas.</li>
        </ol>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Nuestra misión es que te olvides de los problemas técnicos y te concentres en lo que realmente importa.
        </p>
      </>
    )
  },
  '/docs/contact': {
    label: 'Contacto',
    title: 'Contáctanos',
    content: (
      <>
        <p className="mb-4">
          ¿Tienes una urgencia o simplemente quieres saber más? Puedes encontrarnos en múltiples canales:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Teléfono:</strong> +593 99 123 4567</li>
          <li><strong>Email:</strong> contacto@totalfix.ec</li>
          <li><strong>WhatsApp:</strong> +593 99 123 4567</li>
          <li><strong>Dirección:</strong> Av. Siempre Viva 123, Quito, Ecuador</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          También puedes dejarnos un mensaje en nuestra web y te responderemos lo más pronto posible.
        </p>
      </>
    )
  },
};

const SidebarLink = () => {
  const [activeContentKey, setActiveContentKey] = useState(Object.keys(allInfoContent)[0]);
  const currentContent = allInfoContent[activeContentKey];

  const sidebarLinksData = Object.keys(allInfoContent).map(key => ({
    href: key,
    label: allInfoContent[key].label
  }));

  return (
    <section className="bg-white dark:bg-boxdark-2 text-black dark:text-white py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Barra lateral */}
          <div className="lg:w-1/4 xl:w-1/5 bg-gray-50 dark:bg-meta-4 p-6 rounded-lg shadow-md">
            <ul className="block">
              {sidebarLinksData.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => setActiveContentKey(link.href)}
                    className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white text-left
                      ${activeContentKey === link.href ? 'bg-stroke dark:bg-blackho' : ''}
                      hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido principal con animación */}
          <motion.div
              key={activeContentKey}
              className="lg:w-3/4 xl:w-4/5 bg-white dark:bg-boxdark p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black dark:text-white">
                {currentContent.title}
              </h1>
              <div className="prose text-black dark:text-gray-200">
                {currentContent.content}
              </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default SidebarLink;
