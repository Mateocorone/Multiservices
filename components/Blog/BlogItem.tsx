"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;
  

  const blogRoutes: Record<number, string> = {
    1: "/blog/blog-details",
    2: "/blog/blog-details-2",
    3: "/blog/blog-details-3",
    4: "/blog/blog-details-4",
    5: "/blog/blog-details-5",
    6: "/blog/blog-details-6",
  };

  const detailLink = blogRoutes[_id] || "#";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
    >
      <Link href={detailLink}>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={mainImage} alt={title} width={36} height={36} />
        </div>

        <h3 className="mb-3 mt-7.5 text-lg font-semibold text-black dark:text-white xl:text-itemtitle2">
          {title.slice(0, 50)}...
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {metadata}
        </p>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
