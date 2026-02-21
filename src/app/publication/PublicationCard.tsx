"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface PublicationCardProps {
  title: string;
  details: string;
  link?: string;
  imgUrl: string;
  sequence?: number;
  doi?: string; // Add DOI as optional prop
}

interface WindowWithAltmetric extends Window {
  _altmetric_embed_init?: () => void;
}

export default function PublicationCard({
  title,
  details,
  link,
  imgUrl,
  doi,
}: PublicationCardProps) {
  const altmetricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Altmetric badges after component mounts
    const initAltmetric = () => {
      if (
        typeof window !== "undefined" &&
        (window as WindowWithAltmetric)._altmetric_embed_init
      ) {
        (window as WindowWithAltmetric)._altmetric_embed_init?.();
      }
    };

    // If script is already loaded, initialize immediately
    if (
      typeof window !== "undefined" &&
      (window as WindowWithAltmetric)._altmetric_embed_init
    ) {
      initAltmetric();
    } else {
      // Wait for script to load
      const checkAltmetric = setInterval(() => {
        if (
          typeof window !== "undefined" &&
          (window as WindowWithAltmetric)._altmetric_embed_init
        ) {
          initAltmetric();
          clearInterval(checkAltmetric);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkAltmetric), 10000);
    }
  }, [doi]);

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*.*?\*)/); // Split text into segments with and without *
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        // Remove * and wrap in <strong> for bold text
        return (
          <strong key={index} className="font-semibold text-gray-900">
            {part.slice(1, -1)} {/* Slice to remove the asterisks */}
          </strong>
        );
      }
      return part; // Return normal text
    });
  };

  // console.log(doi);

  return (
    <div className="group h-full">
      {/* Altmetric badges positioned over image */}

      <Link
        href={link ? link : "#"}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-tertiary/50 flex flex-col">
          {/* Image container */}
          <div className="relative overflow-hidden bg-gray-100">
            {doi && (
              <div className="absolute top-2 right-2 flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity duration-300 z-2">
                <div
                  ref={altmetricRef}
                  className="altmetric-embed scale-75 bg-white/90 backdrop-blur-sm rounded-full p-1"
                  data-badge-type="donut"
                  data-hide-no-mentions="true"
                  data-badge-popover="right"
                  data-doi={doi}
                ></div>
                <span
                  className="__dimensions_badge_embed__ scale-75 bg-white/90 backdrop-blur-sm rounded-full p-1"
                  data-doi={doi}
                  data-style="small_circle"
                  data-hide-zero-citations="true"
                ></span>
                <script
                  async
                  src="https://badge.dimensions.ai/badge.js"
                  charSet="utf-8"
                ></script>
              </div>
            )}
            <div className="aspect-[16/10] relative">
              <Image
                src={imgUrl}
                alt={title}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content container */}
          <div className="flex-1 flex flex-col p-5">
            <div className="flex-1 space-y-3">
              <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                {title}
              </h3>

              <div className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                {renderFormattedText(details)}
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-4  pt-4 border-t border-gray-100 space-y-5">
              {/* Read button */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-5 bg-tertiary text-white text-sm font-medium rounded-lg transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Read Paper</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </div>
      </Link>
    </div>
  );
}
