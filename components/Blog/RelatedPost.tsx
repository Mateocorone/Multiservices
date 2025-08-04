"use client"; // Se agrega esta directiva para usar hooks de cliente

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";
import { useLanguage } from '@/components/providers/LanguageProvider'; // Se importa el hook de idioma

const RelatedPost = () => {
  const { t } = useLanguage(); // Se inicializa el hook de traducción

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {t('relatedPosts.title')} {/* Se reemplaza el texto con la clave de traducción */}
        </h4>

        <div>
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded bg-primary">
                <Image src={post.mainImage} alt="Blog" width={30} height={30} />
              </div>

              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link
                  href={
                    post._id === 1
                      ? "/blog/blog-details"
                      : `/blog/blog-details-${post._id}`
                  }
                >
                  {" "}
                  {/* AQUÍ ESTÁ EL CAMBIO: Usa la función t() para el título */}
                  {t(`blogData.${post._id}.title`).slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;