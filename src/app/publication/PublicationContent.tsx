"use client";

import Navbar from "../../components/Navbar";
import PublicationCard from "./PublicationCard";
import Footer from "../../components/Footer";
import { PublicationItem } from "../../types/index";
import { usePublicationsPosts } from "@/hooks/usePublicationsPosts";
import { Spin, Button } from "antd";

function Publication() {
  const {
    // Review publications
    reviewPublications,
    hasMoreReview,
    loadMoreReview,
    isLoadingMoreReview,
    reviewTotalCount,
    reviewDisplayedCount,

    // Published publications
    publishedPublications,
    hasMorePublished,
    loadMorePublished,
    isLoadingMorePublished,
    publishedTotalCount,
    publishedDisplayedCount,

    // General loading state
    isLoading,
  } = usePublicationsPosts();

  // Group published publications by year
  const groupedPublications: Record<string, PublicationItem[]> | null =
    publishedPublications &&
    publishedPublications?.reduce(
      (acc: Record<string, PublicationItem[]>, item: PublicationItem) => {
        if (item.date) {
          const year = new Date(item.date).getFullYear().toString();
          if (!acc[year]) acc[year] = [];
          acc[year].push(item);
        }
        return acc;
      },
      {}
    );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications ?? {}).sort(
    (a, b) => Number(b) - Number(a)
  );

  // JSON-LD for all publications (review + published)
  const allPublications = [...reviewPublications, ...publishedPublications];
  const publicationsJsonLd = allPublications?.map((pub: PublicationItem) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: {
      "@type": "Person",
      name: "Eunsang Cho",
    },
    datePublished: new Date(pub.date).getFullYear(),
    isPartOf: {
      "@type": "Periodical",
      name: pub.journal,
    },
    url: pub.link,
    image: pub.imgUrl,
    description: pub.details,
    doi: pub.doi,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
      />

      <Navbar />

      <div className="relative pt-20 md:pt-15 pb-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h1 className="text-2xl md:text-4xl font-bold text-secondary tracking-tight">
                Publications
              </h1>
              <div className="h-1 bg-tertiary mt-2 rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Research papers and academic contributions by Dr. Eunsang Cho
            </p>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <span className="text-gray-600 font-semibold text-xl md:text-2xl">
                Follow Dr. Cho:
              </span>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en"
                  className="px-6 py-2 bg-white border-2 border-secondary text-secondary font-semibold rounded-lg transition-all duration-300 hover:bg-secondary hover:text-white shadow-sm hover:shadow-md"
                >
                  Google Scholar
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.researchgate.net/profile/Eunsang-Cho"
                  className="px-6 py-2 bg-white border-2 border-tertiary text-tertiary font-semibold rounded-lg transition-all duration-300 hover:bg-tertiary hover:text-white shadow-sm hover:shadow-md"
                >
                  ResearchGate
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* In Revision Section */}
        <div className="w-[95vw] md:w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 w-[100%] md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 ">
                  Under Review/ In Revision
                </h2>
                {/* <p className="text-gray-500 text-sm">
                  Papers currently under review
                </p> */}
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Spin size="large" />
              </div>
            ) : (
              <>
                {reviewPublications.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {reviewPublications.map((item: PublicationItem) => (
                      <PublicationCard
                        key={item._id}
                        sequence={item.publication_sequence}
                        title={item.title}
                        details={item.details}
                        link={item?.link}
                        imgUrl={item.imgUrl}
                        doi={item.doi}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      No papers currently under review
                    </p>
                  </div>
                )}

                {/* Load More Review Button */}
                {hasMoreReview && reviewPublications.length > 0 && (
                  <div className="flex justify-center mt-8 pt-6 border-t border-gray-100">
                    <Button
                      onClick={loadMoreReview}
                      loading={isLoadingMoreReview}
                      size="large"
                      className="px-8 py-2 bg-secondary text-white border-secondary hover:bg-secondary/90 rounded-lg"
                    >
                      {isLoadingMoreReview
                        ? "Loading..."
                        : "Load More Review Papers"}
                    </Button>
                  </div>
                )}

                {/* No more review papers message */}
                {!hasMoreReview &&
                  reviewDisplayedCount > 5 &&
                  reviewTotalCount > 5 && (
                    <div className="text-center text-gray-500 mt-6 p-3 bg-gray-50 rounded-lg text-sm">
                      All review papers loaded ({reviewTotalCount} total)
                    </div>
                  )}
              </>
            )}
          </div>
        </div>

        {/* Published Section */}
        <div className="w-[95vw] md:w-[85vw] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold text-gray-900">
                  Peer-reviewed Papers
                </h2>
                {/* <p className="text-gray-500 text-sm">
                  Peer-reviewed research publications
                </p> */}
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Spin size="large" />
              </div>
            ) : (
              <>
                {publishedPublications.length > 0 ? (
                  <div className="space-y-12">
                    {sortedYears.map((year, yearIndex) => (
                      <div
                        key={year}
                        className={
                          yearIndex > 0 ? "border-t border-gray-100 pt-20 " : ""
                        }
                      >
                        <div className="flex items-center gap-4 mb-6 mt-5">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-tertiary/80 to-tertiary rounded-xl  items-center justify-center hidden md:flex">
                            <span className="text-white font-bold">{year}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {year} Publications
                          </h3>
                          <div className="flex-1 h-px bg-gray-200"></div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {groupedPublications?.[year]?.length || 0} papers
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {groupedPublications
                            ? groupedPublications[year]?.map(
                                (item: PublicationItem) => (
                                  <PublicationCard
                                    key={item._id}
                                    sequence={item.publication_sequence}
                                    title={item.title}
                                    details={item.details}
                                    link={item.link}
                                    imgUrl={item.imgUrl}
                                    doi={item.doi}
                                  />
                                )
                              )
                            : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      No published papers available
                    </p>
                  </div>
                )}

                {/* Load More Published Button */}
                {hasMorePublished && publishedPublications.length > 0 && (
                  <div className="flex justify-center mt-12 pt-8 border-t border-gray-100">
                    <button
                      onClick={loadMorePublished}
                      disabled={isLoadingMorePublished}
                      type="button"
                      role="button"
                      className={`px-8 py-3 bg-gradient-to-r from-tertiary/90  to-tertiary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer touch-manipulation ${
                        isLoadingMorePublished
                          ? "opacity-60"
                          : "hover:scale-105"
                      }`}
                    >
                      {isLoadingMorePublished
                        ? "Loading..."
                        : "Load More Published Papers"}
                    </button>
                  </div>
                )}

                {/* No more published papers message */}
                {!hasMorePublished &&
                  publishedDisplayedCount > 5 &&
                  publishedTotalCount > 5 && (
                    <div className="text-center text-gray-500 mt-8 p-3 bg-gray-50 rounded-lg text-sm">
                      All published papers loaded ({publishedTotalCount} total)
                    </div>
                  )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Publication;
