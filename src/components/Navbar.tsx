"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile, shown on larger screens */}
      <div className="bg-[#007C92] hidden lg:flex items-center justify-between py-4 h-[70px] shadow-md px-7 z-3">
        {/* Logo Section */}
        <div className="flex items-center h-full space-x-5">
          <Link
            href="https://www.txst.edu/"
            target="_blank"
            className="h-[250%] cursor-pointer"
          >
            <Image
              src="/StaticImages/TexasStateUniBlackLogoNoBg.png"
              className="invert h-[100%] w-auto"
              alt="TXST Logo"
              width={100}
              height={70}
              priority
            />
          </Link>
          <Link href="/" className="ml-4">
            <h2 className="text-primary text-2xl cursor-pointer">
              The Cho Lab
            </h2>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-link text-xl text-primary flex font-open space-x-8">
          <Link
            href="/research"
            className="hover:text-tertiary transition duration-200"
          >
            Research
          </Link>
          <Link
            href="/people"
            className="hover:text-tertiary transition duration-200"
          >
            People
          </Link>
          <Link
            href="/news"
            className="hover:text-tertiary transition duration-200"
          >
            News
          </Link>
          <Link
            href="/publication"
            className="hover:text-tertiary transition duration-200"
          >
            Publication
          </Link>
          <Link
            href="/mentorship"
            className="hover:text-tertiary transition duration-200"
          >
            Teaching & Mentorship
          </Link>
          <Link
            href="/opportunities"
            className="hover:text-tertiary transition duration-200"
          >
            Opportunities
          </Link>
        </div>
      </div>

      {/* Mobile Navbar - Shown on mobile, hidden on larger screens */}
      <div className="flex flex-col absolute w-[100vw] transition duration-300 top-0 h-[70px] z-10 lg:hidden">
        <div className="navbar-phone p-5 bg-[#007C92] flex justify-between h-[70px] align-middle w-screen relative">
          <Link href="/">
            <h2 className="text-primary text-xl ml-4 align-middle cursor-pointer">
              The Cho Lab
            </h2>
          </Link>
          {isOpen ? (
            <RxCross1
              onClick={toggleMenu}
              className="text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <div>
          {isOpen && (
            <div className="bg-[#007C92] flex w-[100vw] border-y-[3px] border-tertiary gap-5 text-center justify-center items-center p-5 nav-link text-xl text-primary flex-col font-open transition duration-300">
              <Link
                href="/research"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>Research</section>
              </Link>
              <Link
                href="/people"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>People</section>
              </Link>
              <Link
                href="/news"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>News</section>
              </Link>
              <Link
                href="/publication"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>Publication</section>
              </Link>
              <Link
                href="/mentorship"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>Teaching and Mentorship</section>
              </Link>
              <Link
                href="/opportunities"
                className="px-4 hover:text-tertiary duration-300"
              >
                <section>Opportunities</section>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
