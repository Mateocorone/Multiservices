"use client";

import { useLanguage } from '@/components/providers/LanguageProvider';
import Image from "next/image";

const BlogContent = () => {
  const { t } = useLanguage();

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
      <div className="mb-10 w-full overflow-hidden">
        <div className="relative aspect-97/60 w-full sm:aspect-97/44">
          <Image
            src={"/images/blog/FOTO2.jpg"}
            alt="Kobe Steel plant that supplied"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </div>

      <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
        {t('blogDetails_1.title')}
      </h2>

      

      {/* Aquí se aplica el estilo original `space-y-4` */}
      <div className="blog-details space-y-4 text-black dark:text-white">
        <p>
          {t('blogDetails_1.body_p1')}
        </p>

        <p>
          {t('blogDetails_1.body_p2')}
        </p>

        <div className="flex flex-wrap gap-5">
          <Image
            src={"/images/blog/FOTO3.jpg"}
            width={350}
            height={200}
            alt="image"
          />
          <Image
            src={"/images/blog/FOTO6.jpg"}
            width={350}
            height={200}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;