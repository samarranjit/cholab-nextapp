// import { NewsItem } from "@/types";
// import { useNewsPosts } from "@/hooks/useNewsPosts";
import { getNewsPostMeta } from "@/utils/getNewsStoryMdx";
import { BookOpen } from "lucide-react";
import Link from "next/link";

async function News() {
  const NewsPosts = await Promise.resolve(getNewsPostMeta());
  // Sort news in descending order by published date
  const sortedNews =
    NewsPosts && NewsPosts?.length > 0
      ? [...NewsPosts].sort((a, b) => {
          // Handle multiple possible date field names
          const dateA = new Date(a.meta.date);
          const dateB = new Date(b.meta.date);
          return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
        })
      : [];
  return (
    <div className="p-7 my-2 md:p-[65px] md:my-0 flex flex-col max-w-[1904px] mx-auto">
      <p className="text-tertiary text-xl md:text-2xl ">Latest from the Lab:</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 width-[100%] justify-evenly py-5 px-1">
        {sortedNews?.slice(0, 3).map((post) => {
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
  );
}

export default News;
