"use client";
import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

type SingleFeatureProps = {
  feature: Feature;
};

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const { t } = useLanguage();
  const { icon, id } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl bg-white border border-[#E5E7EB] p-8 shadow-sm"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary">
        <Image src={icon} width={36} height={36} alt={`icon-${id}`} />
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-[#111827]">
        {t(`features.feature${id}.title`)}
      </h3>

      <p className="text-sm text-[#4B5563]">
        {t(`features.feature${id}.text`)}
      </p>
    </motion.div>
  );
};

export default SingleFeature;
