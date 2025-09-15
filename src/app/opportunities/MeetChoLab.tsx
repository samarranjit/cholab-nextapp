"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MeetChoLab = () => {
  return (
    <div className="h-full pt-5 md:pt-9">
      <h2 className="text-center text-xl md:text-2xl text-tertiary">
        Meet The Cho Lab!
      </h2>
      <div className="flex align-center justify-center items-center px-2 md:p-9">
        <Link
          href={"/people#DrChoInfo"}
          className="flex align-center items-center justify-center"
        >
          <Image
            src="/StaticImages/group_photo.jpg"
            className="w-full md:w-[90%] lg:w-[70%]"
            alt="The Cho Lab team group photo"
            width={1000}
            height={800}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="bg-tertiary h-[1.5px] w-[50%] m-auto"></div>
    </div>
  );
};

export default MeetChoLab;
