import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";

const Page = () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12.5">
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden">
                <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                  <Image
                    src={"/images/blog/FOTO13.jpg"}
                    alt="Muratura"
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Obras de Muratura y Reformas Generales
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span>
                  Marco López
                </li>
              </ul>

              <div className="blog-details space-y-4 text-black dark:text-white">
                <p>
                  Trabajos de albañilería para construcción, remodelación y refuerzo de estructuras.
                </p>
                <p>
                  Reformas personalizadas con materiales duraderos y atención al detalle.
                </p>

                <div className="flex flex-wrap gap-5 mt-6">
                  <Image src={"/images/blog/FOTO14.jpg"} width={350} height={200} alt="Muratura 1" />
                  <Image src={"/images/blog/FOTO15.jpg"} width={350} height={200} alt="Muratura 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <RelatedPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
