import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12.5">
            {/* Contenido principal del blog */}
            <div className="w-full lg:w-2/3 mx-auto">
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
                Instalación Profesional de Cartongesso para Interiores Elegantes
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                  Mejoramos la estética y funcionalidad de techos y paredes con soluciones de cartongesso adaptadas a tus espacios.

                  </p>

                  <p>

                  El cartongesso es una técnica versátil para crear formas, techos falsos, y divisiones internas. En nuestros trabajos cuidamos cada detalle, ofreciendo acabados precisos y elegantes. Desde molduras clásicas hasta diseños minimalistas, adaptamos el cartongesso a cada estilo de hogar o comercio.
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
            </div>

            {/* Related Posts en el costado derecho */}
            <div className="w-full lg:w-1/3">
              <RelatedPost />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
