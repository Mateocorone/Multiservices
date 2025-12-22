"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { t } = useLanguage();
  const { _id, mainImage } = blog;

  const blogRoutes: Record<number, string> = {
    1: "/use-cases/whatsapp-automation",
    2: "/use-cases/appointment-reminders",
    3: "/use-cases/lead-followup",
  };

  const detailLink = blogRoutes[_id] || "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className="
        rounded-xl
        bg-white
        border border-[#D1D5DB]
        p-8
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <Link href={detailLink}>
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#3F5D4A]">
          <Image
            src={mainImage}
            alt="automation icon"
            width={26}
            height={26}
            className="invert brightness-0"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 mb-3 text-lg font-semibold text-[#0F172A]">
          {t(`blogData.${_id}.title`)}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#4B5563]">
          {t(`blogData.${_id}.metadata`)}
        </p>

        {/* CTA */}
        <p className="mt-4 text-sm font-medium text-[#3F5D4A]">
          Ver cómo funciona →
        </p>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
