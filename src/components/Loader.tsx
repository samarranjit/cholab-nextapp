"use client";

import React from "react";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-[#a9a9a9] flex flex-col items-center justify-center fixed inset-0 z-[10000] loaderBody">
      <div style={{ width: "200px", height: "200px" }}>
        <Image
          src="/animations/LoadingPageAnimation.gif"
          alt="Loading..."
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="text flex">
        <h1 className="flex text-4xl loader-text-1">Cho </h1>
        <h1 className="flex text-4xl loader-text-2 pl-1"> Lab </h1>
      </div>
    </div>
  );
}

export default Loader;
