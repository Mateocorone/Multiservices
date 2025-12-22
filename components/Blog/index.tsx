"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="use-cases" className="py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
      
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {BlogData.slice(0, 3).map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
