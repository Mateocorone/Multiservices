"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
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
                Expertos en reformas, pintura, climatización y mantenimiento general.
              </p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                contacto
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
                  Navegación
                </h4>
                <ul>
                  <li><a href="/inicio" className="mb-3 inline-block hover:text-primary">Inicio</a></li>
                  <li><a href="/servicios" className="mb-3 inline-block hover:text-primary">Servicios</a></li>
                  <li><a href="/contacto" className="mb-3 inline-block hover:text-primary">Contacto</a></li>
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
                  Información
                </h4>
                <ul>
                  <li><a href="/quienes-somos" className="mb-3 inline-block hover:text-primary">Quiénes somos</a></li>
                  <li><a href="/blog" className="mb-3 inline-block hover:text-primary">Blog</a></li>
                  <li><a href="/politica-privacidad" className="mb-3 inline-block hover:text-primary">Privacidad</a></li>
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Newsletter
                </h4>
                <p className="mb-4 w-[90%] text-black dark:text-white">
                  Suscríbete para recibir novedades y promociones.
                </p>
                <form action="#">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="absolute right-0 p-4"
                    >
                      <svg
                        className="fill-[#757693] hover:fill-primary dark:fill-white"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.12 1.17L18.5 9.63l.16.16c.12.17.12.4 0 .57l-.16.16L3.12 18.83a.58.58 0 01-.71-.58V1.54c0-.32.3-.6.71-.58zM4.17 10.83v5.51L15.71 10 4.17 3.65v5.51H8.33v1.67H4.17z" />
                      </svg>
                    </button>
                  </div>
                </form>
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
            <ul className="flex items-center gap-8 text-black dark:text-white">
              <li><a href="#">Español</a></li>
              <li><a href="/politica-privacidad">Política de privacidad</a></li>
              <li><a href="/contacto">Soporte</a></li>
            </ul>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top text-black dark:text-white"
          >
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          </motion.div>

          {/* Socials sin cambios, los mantienes igual o puedes pedirme una actualización */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
