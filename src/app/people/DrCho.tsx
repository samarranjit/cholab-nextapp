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
            Dr. Eunsang Cho joined Texas State University (TXST) in the Fall
            2023 as an Assistant Professor. Dr. Cho’s research background is
            primarily in hydrology and remote sensing, emphasizing quantifying
            climate and anthropogenic impacts on water resources, extreme events
            (e.g., floods, drought, & wildfire), and water-related
            infrastructure in natural and human systems. As a research tool, he
            uses field observations, remote sensing techniques (from UAV,
            aircraft, and satellite platforms), land surface and climate
            modeling, big-data analytics, and machine learning techniques. He
            obtained his B.S. (2010) and M.S. degrees (2014) from Hanyang
            University, Seoul, South Korea, and Ph.D. (2020) from the University
            of New Hampshire, USA. Prior to joining TXST, he worked as a
            Postdoctoral and Assistant Research Scientist in the Hydrological
            Sciences Laboratory at NASA Goddard Space Flight Center (GSFC), also
            affiliated with the Earth System Science Interdisciplinary Center
            (ESSIC), University of Maryland College Park from 2020 to 2023. He
            has published more than 25 peer-reviewed articles in renowned
            journals in hydrology, water resources, and geosciences including
            Water Resources Research, Remote Sensing of Environment, and
            Geophysical Research Letters. Several of his recent articles have
            been highlighted in AGU’s EOS Science Magazine, ScienceDaily, and
            other outlets. As PI and Co-PI, Dr. Cho has secured $5.7M in U.S.
            federal grants from NASA, USDA, the Department of Energy (DOE), the
            Department of the Interior (DOI), and the Department of
            Transportation (DOT) to address pressing challenges related to
            water, climate, and society. He also serves as an Executive Member
            of the American Geophysical Union (AGU) Remote Sensing Technical
            Committee, the American Meteorological Society (AMS) Hydrology
            Committee, and the Eastern Snow Conference (ESC), as well as an
            Editorial Board Member of Scientific Reports (Nature Portfolio) and
            Frontiers in Big Data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrCho;
