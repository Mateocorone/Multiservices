"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/providers/LanguageProvider';

const gridBase =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5";

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



const Feature = () => {
  const { t } = useLanguage();

  // Gradas
  const row1 = featuresData.slice(0, 1);
  const row2 = featuresData.slice(1, 3);
  const row3 = featuresData.slice(3, 6);

  return (
    <motion.section
      id="features"
      className="py-20 lg:py-25 xl:py-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.2 }}
    >
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: t('features.title'),
            subtitle: t('features.subtitle'),
            description: t('features.description'),
          }}
        />

        {/* FILA 1 - 1 CARD */}
        <motion.div
          className={`mt-12 ${gridBase}`}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={cardVariants}>
            <SingleFeature feature={row1[0]} />
          </motion.div>
        </motion.div>

        {/* FILA 2 - 2 CARDS */}
        <motion.div
          className={`mt-10 ${gridBase}`}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {row2.map((feature) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <SingleFeature feature={feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* FILA 3 - 3 CARDS */}
        <motion.div
          className={`mt-10 ${gridBase}`}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {row3.map((feature) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <SingleFeature feature={feature} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Feature;
