import RelatedPost from "@/components/Blog/RelatedPost";
import BlogContent6 from "./BlogContent6"; // Importa el nuevo componente de cliente

const Page = () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12.5">
          {/* Contenido principal del blog, ahora en su propio componente */}
          <div className="w-full lg:w-2/3 mx-auto">
            <BlogContent6 />
          </div>

          {/* Related Posts en el costado derecho */}
          <div className="w-full lg:w-1/3">
            <RelatedPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;