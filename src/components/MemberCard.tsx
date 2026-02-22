"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";

interface MemberCardProps {
  name: string;
  img: string;
  position: string;
  email?: string;
  linkedin?: string;
  desc: string;
  setIsModalOpen: (open: boolean) => void;
}

export default function MemberCard({
  name,
  img,
  position,
  email,
  linkedin,
  desc,
  setIsModalOpen,
}: MemberCardProps) {
  return (
    <div id={name.split(" ").join("-").toLowerCase()} className="group bg-[#005B96] relative overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mx-auto max-w-sm w-full h-[400px] md:h-[480px]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

      <div className="relative p-4 md:px-5 flex flex-col items-center text-center h-full justify-between">
        {/* Profile Image with improved styling */}
        <div className="relative mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40  rounded-full overflow-hidden border-4 border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <Image
              src={img}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover"
              width={160}
              height={160}
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-tertiary/30 animate-pulse"></div>
        </div>

        {/* Content section with controlled spacing */}
        <div className="flex-1 flex flex-col items-center w-full min-h-0">
          {/* Name with improved typography */}
          <h3 className="text-xl md:text-2xl font-bold text-tertiary leading-tight mb-3">
            {name}
          </h3>

          {/* Position with consistent height */}
          <div className="px-4 py-2 bg-white/10 rounded-full border border-none mb-4 min-h-[2.5rem] flex items-center">
            <h4 className="text-primary text-sm md:text-base font-medium text-center line-clamp-2">
              {position}
            </h4>
          </div>

          {/* Description with fixed height and scrolling */}
          <div className="flex-1 overflow-y-hidden scrollbar-none scrollbar-track-transparent scrollbar-thumb-white/20 px-2 mb-2 max-h-[140px]">
            <p className="text-primary/90 text-sm md:text-base leading-relaxed">
              {desc}
            </p>
          </div>
        </div>

        {/* Fixed bottom section */}
        <div className="flex-shrink-0">
          {/* Action buttons in horizontal layout: Mail, View Details, LinkedIn */}
          <div className="flex items-center justify-center gap-3 w-full">
            {/* Mail Button */}
            {email && (
              <Link
                href={`mailto:${email}`}
                className="flex-shrink-0 p-3 bg-white/10 rounded-full border border-white/20 text-primary hover:bg-white/20 hover:scale-110 transition-all duration-200 group/icon"
              >
                <IoMail className="w-5 h-5 group-hover/icon:animate-bounce" />
              </Link>
            )}

            {/* View Details Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-white/15 border-white/25 text-white hover:bg-white/25 hover:border-white/40 hover:shadow-lg transition-all duration-300 font-semibold px-4 py-2 h-auto rounded-lg backdrop-blur-sm group-hover:bg-tertiary/20 group-hover:border-tertiary/40"
            >
              <span className="flex items-center justify-center gap-2 text-sm">
                View Details
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            {/* LinkedIn Button */}
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-3 bg-white/10 rounded-full border border-white/20 text-primary hover:bg-white/20 hover:scale-110 transition-all duration-200 group/icon"
              >
                <FaLinkedin className="w-5 h-5 group-hover/icon:animate-bounce" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
