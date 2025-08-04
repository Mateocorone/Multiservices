"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from '@/components/providers/LanguageProvider';
import Link from 'next/link';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Footer Top */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            {/* Logo + descripción */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-1/2 lg:w-1/4"
            >
              <a href="/" className="relative">
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-light.svg"
                  alt="Logo"
                  className="dark:hidden"
                />
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-dark.svg"
                  alt="Logo"
                  className="hidden dark:block"
                />
              </a>

              <p className="mb-10 mt-5 text-black dark:text-white">
                {t('footer.description')}
              </p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                {t('footer.contact_title')}
              </p>
              <a
                href="mailto:contacto@tusitio.com"
                className="text-itemtitle font-medium text-black dark:text-white"
              >
                contacto@tusitio.com
              </a>
            </motion.div>

            {/* Enlaces */}
            <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
              {/* Navegación principal */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  {t('footer.navigation_title')}
                </h4>
                <ul>
                  <li><Link href="/inicio" className="mb-3 inline-block hover:text-primary">{t('footer.navigation_home')}</Link></li>
                  <li><Link href="/servicios" className="mb-3 inline-block hover:text-primary">{t('footer.navigation_services')}</Link></li>
                  <li><Link href="/contacto" className="mb-3 inline-block hover:text-primary">{t('footer.navigation_contact')}</Link></li>
                </ul>
              </motion.div>

              {/* Soporte / enlaces institucionales */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  {t('footer.info_title')}
                </h4>
                <ul>
                  <li><Link href="/quienes-somos" className="mb-3 inline-block hover:text-primary">{t('footer.info_about')}</Link></li>
                  <li><Link href="/blog" className="mb-3 inline-block hover:text-primary">{t('footer.info_blog')}</Link></li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            {/* Aquí puedes añadir el texto de copyright si lo tienes */}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top text-black dark:text-white"
          >
            {/* Aquí van los iconos sociales, si los tienes */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;