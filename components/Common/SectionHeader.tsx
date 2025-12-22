"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const SectionHeader = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mx-auto mb-12 text-center"
    >
      {/* Badge */}
      <div className="mb-4 inline-block rounded-full bg-[#1F2937] px-4 py-1.5">
        <span className="text-sm font-medium tracking-wide text-[#E5E7EB]">
          {t("header.title")}
        </span>
      </div>

      {/* Title */}
      <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold text-[#F9FAFB] md:text-4xl">
        {t("header.subtitle")}
      </h2>

      {/* Description */}
      <p className="mx-auto max-w-2xl text-base text-[#94A3B8]">
        {t("header.description")}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
