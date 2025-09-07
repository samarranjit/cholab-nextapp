"use client";
import { useRouter } from "next/navigation";
import { Card } from "antd";
import { FaCalendarAlt, FaUsers, FaMedal, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import type { ResearchCardData } from "@/types";

interface ResearchCardProps {
  research: ResearchCardData;
}

function ResearchCard({ research }: ResearchCardProps) {
  const router = useRouter();

  const handleReadMore = (_id: string) => {
    router.push(`/research/${_id}`);
    // window.scrollTo({ top: 0 });
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="group relative">
      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden h-full justify-between">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <div className="relative h-48 md:h-56 overflow-hidden">
            <Image
              src={research.mainImage || "/placeholder.svg"}
              alt={research.title}
              fill
              className="object-fill h-full transition-transform duration-700 "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg">
              {research.badge || "Research"}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 pb-6 h-[100%] my-auto flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight min-h-[3rem]  transition-colors duration-300">
            {truncateText(research.title, 12)}
          </h2>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 justify-evenly">
            {research.period && (
              <div className="flex items-center gap-2 p-3 bg-secondary/5 rounded-lg border border-secondary/8">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaCalendarAlt className="h-3 w-3 text-secondary/90" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-blue-800 mb-1">
                    Period
                  </p>
                  <p className="text-xs text-blue-600 truncate">
                    {research.period}
                  </p>
                </div>
              </div>
            )}

            {research.sponsors && (
              <div className="flex items-center gap-2 p-3 bg-tertiary/3 rounded-lg border border-purple-100 md:col-span-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FaMedal className="h-3 w-3 text-tertiary/90" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-orange-500 mb-1">
                    Sponsors
                  </p>
                  <p className="text-xs text-orange-500 truncate">
                    {research.sponsors}
                  </p>
                </div>
              </div>
            )}

            {research.collaborators && (
              <div className="flex items-center gap-2 p-3 bg-secondary/5 rounded-lg border border-blue-100 md:col-span-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaUsers className="h-3 w-3 text-secondary/90" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-blue-800 mb-1">
                    Collaborators
                  </p>
                  <p className="text-xs text-blue-600 truncate">
                    {research.collaborators}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              {truncateText(research.body[0], 25)}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-end items-end">
            <button
              onClick={() => handleReadMore(research._id)}
              className="group/btn flex items-center gap-2 bg-gradient-to-r from-tertiary to-tertiary hover:bg-white text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-center active:scale-95 cursor-pointer w-[75%] mx-auto"
            >
              <span className="mx-auto">Read More</span>
              <FaArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>

            {/* <div className="flex items-center gap-1 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
              <BsArrowUpRight className="h-4 w-4" />
            </div> */}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-secondary"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full"></div>
      </Card>
    </div>
  );
}

export default ResearchCard;
