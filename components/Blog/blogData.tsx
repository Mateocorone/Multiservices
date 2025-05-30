// components/Blog/blogData.js (o .ts)

import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1, // Asegúrate de que cada _id sea único
    mainImage: "/images/blog/blog-01.png", // Sugerencia: Crea una carpeta 'portfolio' dentro de 'public/images/'
    title: "Desarrollo Web para E-commerce",
    metadata: "Diseño y desarrollo de una plataforma de comercio electrónico escalable y optimizada para la conversión, con integración de pasarelas de pago y logística.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "Campaña de Branding Integral para Marca Joven",
    metadata: "Creación de una identidad de marca cohesiva, desde el logotipo y paleta de colores hasta la estrategia de comunicación y materiales de marketing digital.",
  },
  {
    _id: 3,
    mainImage: "/images/blog/blog-03.png",
    title: "Diseño UI/UX para Aplicación Móvil Innovadora",
    metadata: "Proceso completo de diseño de experiencia de usuario (UX) e interfaz de usuario (UI) para una aplicación móvil, enfocada en la facilidad de uso y estética moderna.",
  },
  {
    _id: 4,
    mainImage: "/images/blog/blog-03.png",
    title: "Estrategia SEO y Marketing",
    metadata: "Implementación de tácticas SEO avanzadas y creación de contenido de alto valor para mejorar el posicionamiento orgánico y atraer tráfico cualificado al sitio web.",
  },
  {
    _id: 5,
    mainImage: "/images/blog/blog-04.png",
    title: "Software a Medida para Clínica Médica",
    metadata: "Desarrollo de una solución de software personalizada para la gestión de citas, expedientes de pacientes y optimización de procesos administrativos en clínicas.",
  },
  {
    _id: 6,
    mainImage: "/images/blog/blog-01.png",
    title: "Gestión y Estrategia de Redes Sociales",
    metadata: "Desarrollo de un plan de redes sociales, creación de contenido atractivo y gestión diaria para aumentar la interacción y el alcance de la marca en plataformas digitales.",
  },
];

export default BlogData;