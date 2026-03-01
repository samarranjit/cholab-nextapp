"use client";
import React from "react";
import Image from "next/image";
import { useLinkedinPosts } from "@/hooks/useLinkedinposts";
import Loader from "@/components/Loader";

const LinkedinPosts = () => {
  const { LinkedinPosts, isLoading } = useLinkedinPosts();
  const posts = LinkedinPosts ?? [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[100vw] px-4  py-10 flex justify-center">
          <div className="w-full max-w-[80%] flex flex-col items-center gap-4 md:gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-tertiary self-start md:self-center">
              Follow Dr. Cho on LinkedIn
            </h2>

            {/* Dr. Cho follow card */}
            <div className="w-full flex justify-left md:justify-left">
              <div className="flex items-center gap-4 md:gap-5  border border-secondary/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 max-w-md w-full">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/team/DrCho.png"
                    alt="Dr. Eunsang Cho"
                    width={56}
                    height={56}
                    className="rounded-full object-cover w-14 h-14 md:w-16 md:h-16 border border-primary/60"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-md md:text-xl font-semibold text-secondary leading-tight">
                    Dr. Eunsang Cho
                  </p>
                  <p className="text-sm md:text-md text-gray-500 leading-snug line-clamp-2">
                    Assistant Professor at Texas State University
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/eunsang-cho-b455a8126/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 px-3 py-1.5 md:px-7 md:py-4 rounded-full bg-secondary text-primary text-xs md:text-sm font-semibold hover:bg-primary border-primary hover:border-secondary border-1 hover:text-secondary transition-colors duration-200 whitespace-nowrap"
                >
                  Follow
                </a>
              </div>
            </div>

            {posts.length > 0 && (
              <div className="w-full">
                <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-webkit-overflow-scrolling:touch]">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-2/4"
                    >
                      <div className="h-full border border-secondary/20 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                        <div className="relative aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/3] w-full bg-primary/90">
                          <Image
                            src={post.url}
                            alt={post.alt}
                            fill
                            // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LinkedinPosts;
