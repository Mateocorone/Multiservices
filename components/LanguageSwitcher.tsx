"use client";

import { useLanguage } from '@/components/providers/LanguageProvider';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={lang}
        onChange={handleLanguageChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline dark:bg-box-dark dark:border-strokedark"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;