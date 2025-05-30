"use client";
// import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // <-- Asegúrate de que esta importación esté presente

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.section
      id="hero-section"
      className="overflow-hidden pb-0 pt-35 md:pt-40 xl:pb-0 xl:pt-46"
      initial={{ opacity: 0, y: 50 }} // Empieza un poco más abajo y transparente
      whileInView={{ opacity: 1, y: 0 }} // Se anima a su posición y visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración de la animación
      // CAMBIO AQUÍ: Elimina 'once: true' o cámbialo a 'once: false'
      // Si quieres que se repita cada vez que entra en vista:
      viewport={{ amount: 0.2 }} // Sin 'once: true', se repite por defecto
      // O explícitamente:
      // viewport={{ once: false, amount: 0.2 }}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="w-full text-center">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 Tu Hogar Soñado, Hecho Realidad. Expertos en Reformas Integrales.
            </h4>
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Transforma tu espacio ideal {" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                con Nosotros
              </span>
            </h1>
            <p className="max-w-3xl mx-auto">
              Transformamos espacios. Desde pequeñas renovaciones hasta proyectos de construcción completos,
              ofrecemos soluciones personalizadas para tu vivienda o negocio.
              Calidad, confianza y acabados impecables.
            </p>

            {/* <div className="mt-10 flex justify-center">
              <button
                aria-label="get started button"
                className="rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho
                relative 2xl:-mr-7.5
                "
              >
                Agenda una Consulta Gratuita
              </button>
            </div> */}

            <p className="mt-7 mb-0 text-black dark:text-white">
              Presupuesto sin compromiso. ¡Empecemos hoy!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;