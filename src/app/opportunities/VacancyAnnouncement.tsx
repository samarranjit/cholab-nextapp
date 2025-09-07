"use client";

import React from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

interface AnnouncementData {
  title: string;
  body: string;
  link?: string;
}

interface VacancyAnnouncementProps {
  Data: AnnouncementData;
  id?: string;
  className?: string;
}

const VacancyAnnouncement: React.FC<VacancyAnnouncementProps> = (props) => {
  const { Data } = props;
  // console.log(Data);

  const sanitizedBody = Data ? DOMPurify.sanitize(Data.body) : "";

  return (
    <div className="py-7 px-5 lg:px-[4rem]" id="vacancyAnnouncement">
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h2 className="text-tertiary text-xl md:text-2xl lg:text-3xl text-center pb-7">
          Join our Team :
        </h2>
        <div className="announcement text-left w-full">
          <p className="heading font-semibold py-5 text-lg">{Data.title}</p>
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: sanitizedBody }}
          ></p>
          {Data && Data.link !== "" ? (
            <div className="flex text-primary my-5">
              <Link href={Data.link || "#"}>
                <button className="bg-tertiary px-5 py-2 hover:bg-tertiary/80 transition duration-200">
                  More info
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VacancyAnnouncement;
