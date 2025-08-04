"use client";

import { useLanguage } from '@/components/providers/LanguageProvider';
import Image from "next/image";

const BlogContent3 = () => {
  const { t } = useLanguage();

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
      <div className="mb-10 w-full overflow-hidden">
        <div className="relative aspect-97/60 w-full sm:aspect-97/44">
          <Image
            src={"/images/blog/FOTO9.jpg"}
            alt="Resina y Microcemento"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </div>

      <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
        {t('blogDetails_3.title')}
      </h2>

      

      <div className="blog-details space-y-4 text-black dark:text-white">
        <p>
          {t('blogDetails_3.body_p1')}
        </p>
        <p>
          {t('blogDetails_3.body_p2')}
        </p>

        <div className="flex flex-wrap gap-5 mt-6">
          <Image src={"/images/blog/FOTO7.jpg"} width={350} height={200} alt="Resina 1" />
          <Image src={"/images/blog/FOTO9.jpg"} width={350} height={200} alt="Resina 2" />
        </div>
      </div>
    </div>
  );
};

export default BlogContent3;