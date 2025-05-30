"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion"; // <-- Añade esta importación

const Feature = () => {
  return (
    // CAMBIO: Envuelve la sección con motion.section y añade las propiedades de animación
    <motion.section
      id="features"
      className="py-20 lg:py-25 xl:py-30"
      initial={{ opacity: 0, x: -100 }} // Empieza desde la izquierda y transparente
      whileInView={{ opacity: 1, x: 0 }} // Se anima a su posición y visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de animación
      viewport={{ amount: 0.2 }} // Animar cada vez que el 20% del elemento esté visible (sin 'once: true')
    >
      {/* */}
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* */}
        <SectionHeader
          headerInfo={{
            title: "Nuestros Servicios",
            subtitle: "Soluciones completas para cada rincón de tu hogar",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
          }}
        />
        {/* */}

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {/* */}

          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
          {/* */}
        </div>
      </div>
      {/* */}
    </motion.section>
  );
};

export default Feature;