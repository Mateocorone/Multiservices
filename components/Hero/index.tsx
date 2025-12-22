"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero-section"
      className="
        relative flex items-center justify-center
        py-32 px-6
        bg-[#F1F3F5]
      "
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-sm font-medium tracking-wide uppercase text-[#6B7280]">
          Automatización de servicios
        </p>

        {/* Title */}
        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827]">
          Automatiza tus procesos <br />
          <span className="text-[#111827]">con flujos confiables</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#4B5563]">
          Diseñamos flujos de automatización que conectan tus herramientas,
          eliminan tareas manuales y aportan orden, control y escalabilidad
          a tu negocio.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-[#E5E7EB]
              px-8 py-3
              font-semibold
              text-[#111827]
              transition hover:bg-[#D1D5DB]
            "
          >
            Solicitar asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
