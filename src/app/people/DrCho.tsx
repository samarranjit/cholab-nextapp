"use client";

import React, { useEffect } from "react";
import Image from "next/image";

function DrCho() {
  useEffect(() => {
    // Handle hash scrolling in Next.js
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div
      id="DrChoInfo"
      className="p-7 md:px-8 md:pt-[80px] lg:pt-5 lg:px-[5rem] py-5 flex flex-col md:flex-row gap-0 md:gap-[2rem] lg:gap-[7rem] items-center justify-center"
    >
      <div className="flex gap-0 md:gap-[2rem] mx-auto flex-col md:flex-row items-center">
        <div className="left flex justify-center h-full md:w-[55%] lg:w-[30%] items-center my-10 md:my-0 items-right">
          <div className="image flex items-center justify-left md:w-[100%] items-right">
            <Image
              className="rounded-[50%] w-[100%] flex items-center justify-center mt-5 mb-0 md:my-[50px]"
              src="/images/team/DrCho.png"
              alt="Dr. Eunsang Cho"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>

        <div className="right w-full md:w-[60%] flex flex-col justify-center mr-0 ml-auto">
          <p className="text-xl md:text-2xl text-tertiary">Meet the PI</p>

          <div className="flex flex-col md:flex-row items-baseline gap-3 border-b-[2.5px] border-b-[50%] mb-5 border-b-tertiary p-1 pl-0 md:p-2 md:pl-0 text-xl md:text-auto">
            <h1 className="text-2xl">Dr. Eunsang Cho</h1>
            <h2 className="text-xl">(Assistant Professor)</h2>
          </div>

          <p className="leading-relaxed md:leading-loose">
            Hi! I am a hydrologist who focuses on accurate and timely
            estimations and predictions of critical hydrologic fluxes, storages,
            and processes to advance water resources management, hydroclimate
            extreme prediction, and sustainable infrastructure design in a
            changing climate. For this, I use field observations, multiple
            remote sensing techniques (active and passive microwave, infrared,
            thermal, and gamma radiation) via UAV, aircraft, and satellite
            platforms, and climate and hydrological model simulations along with
            big-data analytics. I am currently an Assistant Professor at Texas
            State University, San Marcos, TX, starting in Fall 2023. Prior to
            this, I was a Postdoctoral/Assistant Research Scientist at
            Hydrological Sciences Laboratory, NASA Goddard Space Flight Center &
            Earth System Science Interdisciplinary Center, University of
            Maryland at College Park. I also worked with Dr. Jennifer Jacobs at
            University of New Hampshire, where I obtained a Ph.D. in Civil and
            Environmental Engineering in May 2020.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrCho;
