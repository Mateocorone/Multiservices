"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/providers/LanguageProvider';

const Feature = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="features"
      className="py-20 lg:py-25 xl:py-30"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feature;