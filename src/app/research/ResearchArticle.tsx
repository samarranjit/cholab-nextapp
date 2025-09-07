"use client";

import React, { useEffect } from "react";
import { Spin, Card } from "antd";
import { FaCalendarAlt, FaUsers, FaMedal } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getResearchById } from "@/utils/getResearchById";
import type { ResearchProject } from "@/types/index";

interface ResearchArticleProps {
  id: string;
}

export default function ResearchArticle({ id }: ResearchArticleProps) {
  const [research, setResearch] = React.useState<ResearchProject | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = getResearchById(id);
        setResearch(response || null);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <Navbar />

      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          {/* <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div> */}
        </div>

        <main className="relative px-4 py-12 mx-auto w-full max-w-6xl">
          {isLoading || !research ? (
            <div className="flex flex-col justify-center items-center h-[60vh] space-y-4">
              <Spin size="large" />
              <p className="text-gray-500 animate-pulse">
                Loading research details...
              </p>
            </div>
          ) : (
            <>
              {/* Title Section */}
              <header className="mb-16 text-center relative mt-[70px] lg:mt-0">
                <div className="inline-block">
                  <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                    {research.title}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/50 mx-auto rounded-full"></div>
                </div>
              </header>

              {/* Image Section */}
              <div className="flex justify-center mb-16">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white p-1 rounded-2xl shadow-xs">
                    {research.mainImage && (
                      <img
                        src={research.mainImage || "/placeholder.svg"}
                        alt={research.title || "Research project"}
                        className="w-full max-w-3xl object-cover rounded-xl shadow-xs"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Metadata Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {research.period && (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <FaCalendarAlt className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          Period
                          {/* <BsArrowUpRight className="h-3 w-3 text-gray-400" /> */}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {research.period}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {research.sponsors && (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/30 md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-xl">
                        <FaMedal className="h-5 w-5 text-tertiary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          Sponsors
                          <BsArrowUpRight className="h-3 w-3 text-gray-400" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {research.sponsors}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {research.collaborators && (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-green-50/30 md:col-span-3">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-tertiary/25 rounded-xl">
                        <FaUsers className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          Collaborators
                          <BsArrowUpRight className="h-3 w-3 text-gray-400" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {research.collaborators}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>

              {/* Content Section */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <Card className="ml-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Research Details
                    </h2>

                    <article className="prose prose-lg max-w-none">
                      {research.body &&
                        research.body
                          .filter((item: string) => item.trim() !== "")
                          .map((paragraph: string, index: number) => (
                            <p
                              key={index}
                              className="mb-6 leading-relaxed text-gray-700 text-base md:text-lg text-justify md:text-left first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left first-letter:leading-none"
                            >
                              {paragraph}
                            </p>
                          ))}
                    </article>
                  </div>
                </Card>
              </div>
            </>
          )}
        </main>
      </div>
      <div className="text-center -mb-7">
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
