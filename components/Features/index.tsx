"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const Feature = () => {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="py-28 bg-[#0B0F14]"
    >
      <div className="mx-auto max-w-6xl px-6">
  <SectionHeader />

  <motion.div
    className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {featuresData.map((feature) => (
      <SingleFeature
        key={feature.id}
        feature={feature}
      />
    ))}
  </motion.div>
</div>

    </section>
  );
};

export default Feature;
