"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/providers/LanguageProvider'; // Importa el hook de idioma

const Hero = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage(); // Obtiene la función de traducción

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.section
      id="hero-section"
      className="relative flex items-center justify-center text-center py-32 px-4
      bg-white dark:bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/images/mdf.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // className="relative flex items-center justify-center text-center py-32 px-4
      // bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 
      // dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900"
      
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Overlay/filtro para contraste */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70  "></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
          {t('hero.subtitle')}
        </h4>
        <h1 className="mb-6 text-4xl sm:text-5xl font-extrabold text-black dark:text-white">
          {t('hero.title_part1')}{" "}
          <span className="relative inline-block">
            {t('hero.title_part2')}{" "}
            <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-4 before:w-full before:rounded-md before:bg-blue-200 dark:before:bg-blue-500">
              {t('hero.title_part3')}
            </span>
          </span>
        </h1>

        <p className="mb-5 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          {t('hero.description')}
        </p>

        <a
          href="https://wa.me/593999999999?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          {t('hero.button')}
        </a>

        <p className="mt-6 text-black dark:text-white">
          {t('hero.cta')}
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;