import Navbar from "@/components/Navbar";
import { getNewsPostMeta } from "@/utils/getNewsStoryMdx";
import Link from "next/link";
import { BookOpen, ExternalLink } from "lucide-react";
import FooterSection from "@/components/Footer";
export default async function Blogs() {
  const Posts = getNewsPostMeta();
  const resolvedPosts = await Promise.resolve(Posts);

  //Order resolved Posts by the order of their date property
  resolvedPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return (
    <>
      <Navbar />
      <div id="blog" className="bg-primary">
        <div className="container  z-10 relative top-10 md:top-[10px] lg:top-[0] max-w-[1600px] mx-auto pt-[60px] min-h-[80vh] mb-[150px] md:mb-[0px]">
          <div>
            <h1 className="text-3xl text-center p-2 font-semibold">
              <section className="border-b-tertiary border-b-[2px] inline p-2">
                Latest News
              </section>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
            {resolvedPosts &&
              resolvedPosts?.map((post) => {
                // console.log(post?.meta);
                return (
                  <div
                    key={post?.meta?.title}
                    className="bg-white/70 backdrop-blur-sm border border-yellow-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl pixar-card"
                  >
                    <div className="w-full h-48 md:h-56 lg:h-64 rounded-t-2xl overflow-hidden flex items-center justify-center bg-gray-100">
                      <img
                        src={post?.meta?.mainImage || "/default-news.jpg"}
                        alt={post?.meta?.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <BookOpen size={16} />
                        <span>{post?.meta?.date}</span>
                        <span>•</span>
                        <span>{post?.meta?.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors duration-300">
                        {post?.meta?.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post?.meta?.excerpt}
                      </p>
                      <Link
                        href={`/news/${post?.slug}` || "#"}
                        className="text-tertiary/80 hover:text-tertiary/90 transition-colors duration-300 font-medium flex items-center space-x-1"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
}
