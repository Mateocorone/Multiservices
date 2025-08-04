import RelatedPost from "@/components/Blog/RelatedPost";
import { Metadata } from "next";
import BlogContent from "./BlogContent"; // Importa el nuevo componente

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
            {/* Contenido principal del blog, ahora en su propio componente */}
            <div className="w-full lg:w-2/3 mx-auto">
              <BlogContent />
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