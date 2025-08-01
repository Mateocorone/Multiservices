"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function SidebarLink() {
  const { t } = useLanguage();
  const [activeContentKey, setActiveContentKey] = useState('whoWeAre');

  const sidebarLinksData = [
    { href: 'whoWeAre', label: t('aboutUs.sidebarLinks.whoWeAre') },
    { href: 'services', label: t('aboutUs.sidebarLinks.services') },
    { href: 'howWeWork', label: t('aboutUs.sidebarLinks.howWeWork') },
    { href: 'contact', label: t('aboutUs.sidebarLinks.contact') },
  ];

  const renderContent = () => {
    switch (activeContentKey) {
      case 'whoWeAre':
        return (
          <>
            <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t('aboutUs.whoWeAre.text1') }} />
            <p className="text-gray-700 dark:text-gray-300 mt-4" dangerouslySetInnerHTML={{ __html: t('aboutUs.whoWeAre.text2') }} />
          </>
        );
      case 'services':
        return (
          <>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list5') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list6') }} />
              <li dangerouslySetInnerHTML={{ __html: t('aboutUs.services.list7') }} />
            </ul>
          </>
        );
      case 'howWeWork':
        return (
          <>
            <ol className="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>{t('aboutUs.howWeWork.list1')}</li>
              <li>{t('aboutUs.howWeWork.list2')}</li>
              <li>{t('aboutUs.howWeWork.list3')}</li>
              <li>{t('aboutUs.howWeWork.list4')}</li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              {t('aboutUs.howWeWork.text1')}
            </p>
          </>
        );
      case 'contact':
        return (
          <>
            <p className="text-gray-700 dark:text-gray-300">
              {t('aboutUs.contact.text1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: t('aboutUs.contact.text2') }} />
            <ul className="mt-4 text-gray-700 dark:text-gray-300 space-y-1">
              <li>📍 {t('aboutUs.contact.text3')}</li>
              <li>📞 {t('aboutUs.contact.text4')}</li>
              <li>📧 {t('aboutUs.contact.text5')}</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white dark:bg-[#111827] text-black dark:text-white pt-16 pb-10 lg:pt-20 lg:pb-12 xl:pt-24 xl:pb-14">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Barra lateral */}
          <div className="lg:w-1/4 xl:w-1/5 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-2">
              {sidebarLinksData.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => setActiveContentKey(link.href)}
                    className={`flex w-full rounded-md px-3 py-2 text-base text-left transition-colors duration-200
                      ${activeContentKey === link.href
                        ? 'bg-[#E5E7EB] dark:bg-[#1F2937] text-black dark:text-white font-semibold'
                        : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#374151]'}
                    `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido principal */}
          <motion.div
            key={activeContentKey}
            className="lg:w-3/4 xl:w-4/5 bg-white dark:bg-[#111827] p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black dark:text-white">
              {t(`aboutUs.${activeContentKey}.title`)}
            </h1>
            <div className="prose text-black dark:text-gray-200 max-w-none">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}