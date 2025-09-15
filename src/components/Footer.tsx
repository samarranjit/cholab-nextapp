"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useFooterDetails } from "@/hooks/useFooterDetails";
import { Loader } from "lucide-react";

function Footer() {
  const { FooterDetails, isLoading, error } = useFooterDetails();

  // console.log("FooterDetails:", FooterDetails);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading footer details</div>;
  }

  return (
    <div className="relative mt-16">
      {/* Simple Divider */}
      <div className="absolute top-[-55px] left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#005b96"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-secondary text-primary pt-16 pb-8 flex justify-center align-center items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-center items-center align-center content-center">
            {/* Lab Identity Section */}
            <div className="text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-25 h-25 md:w-30 md:h-30 bg-white rounded-full p-3 shadow-lg">
                  <Image
                    className="w-full h-full object-contain"
                    src="/ChoLabLogo.png"
                    alt="Cho Lab Logo"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-tertiary">
                  Cho Lab
                </h3>
                <p className="text-base text-primary/80 font-light">
                  " <em>{FooterDetails?.FooterTagLine}</em>"
                </p>
                <div className="w-16 h-0.5 bg-tertiary mx-auto md:mx-0"></div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 pt-4">
                <a
                  href={FooterDetails?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                >
                  <FaGithub className="text-2xl text-primary hover:text-tertiary transition-colors duration-200" />
                </a>
                <a
                  href={FooterDetails?.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                >
                  <FaTwitter className="text-2xl text-primary hover:text-tertiary transition-colors duration-200" />
                </a>
                <a
                  href={`mailto:${FooterDetails?.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                >
                  <IoMail className="text-2xl text-primary hover:text-tertiary transition-colors duration-200" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left space-y-6">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-tertiary mb-4">
                  Contact
                </h4>
                <div className="w-12 h-0.5 bg-tertiary mx-auto md:mx-0 mb-6"></div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-tertiary font-medium mb-3 text-sm uppercase tracking-wider">
                    Mailing Address
                  </p>
                  <div className="space-y-1 text-primary/90 leading-relaxed">
                    {FooterDetails?.MailingAddress}
                  </div>
                </div>

                <div>
                  <p className="text-tertiary font-medium mb-3 text-sm uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${FooterDetails?.email}`}
                    className="text-primary/90 hover:text-tertiary transition-colors duration-200 break-all"
                  >
                    {FooterDetails?.email || "email"}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left space-y-6 md:col-span-2 lg:col-span-1">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-tertiary mb-4">
                  Quick Links
                </h4>
                <div className="w-12 h-0.5 bg-tertiary mx-auto md:mx-0 mb-6"></div>
              </div>

              <div className="grid grid-cols-2 gap-2 max-w-md mx-auto md:mx-0">
                <Link
                  href="/people"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  PEOPLE
                </Link>

                <Link
                  href="/news"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  LATEST NEWS
                </Link>

                <Link
                  href="/publication"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  PUBLICATIONS
                </Link>

                <Link
                  href="/research"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  RESEARCH
                </Link>

                <Link
                  href="/opportunities"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  OPPORTUNITIES
                </Link>

                <Link
                  href="/mentorship"
                  className="text-primary/90 hover:text-tertiary transition-colors duration-200 text-sm font-medium py-1 md:py-2"
                >
                  MENTORSHIP
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-5 md:mt-16 pt-5 border-t border-primary/20 text-center ">
            <p className="text-primary/80 text-sm md:text-base">
              Copyright © {new Date().getFullYear()} Cho Lab. All rights
              Reserved.
            </p>

            <Link
              href="https://samarranjit.com.np"
              target="_blank"
              className="inline-block text-primary/60 hover:text-tertiary transition-colors duration-200 text-xs md:text-sm"
            >
              Designed by Samar Ranjit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
