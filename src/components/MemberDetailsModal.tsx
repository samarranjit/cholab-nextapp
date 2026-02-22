"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import { TeamMember } from "@/types";

const AntdModal = dynamic(() => import("antd").then((m) => m.Modal), {
  ssr: false,
});

interface MemberDetailsModalProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

const MemberDetailsModal: React.FC<MemberDetailsModalProps> = ({
  member,
  open,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (open) {
      setActiveSection("about");
    }
  }, [open, member]);

  if (!member) return null;

  return (
    <AntdModal
      title={null}
      open={open}
      onOk={onClose}
      onCancel={onClose}
      maskClosable
      width="90vw"
      style={{ maxWidth: "900px" }}
      footer={null}
      className="member-modal"
    >
      <div className="p-0 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-50 to-white p-6 md:p-8 border-b border-slate-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 relative">
                <Image
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                {member.name}
              </h2>
              <p className="text-lg md:text-xl text-secondary font-medium">
                {member.position}
              </p>
              <p className="text-slate-600 leading-relaxed max-w-2xl text-sm md:text-base">
                {member.desc}
              </p>

              {member.linkedin && (
                <div className="pt-2">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex  items-center gap-2 text-primary"
                  >
                    <button className="bg-secondary text-primary hover:bg-white/90 hover:text-secondary/80 transition-colors px-5 py-3 gap-3 h-auto font-semibold rounded-lg shadow-sm cursor-pointer flex">
                      <FaLinkedin className="w-5 h-5 group-hover/icon:animate-bounce" />
                      LinkedIn
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-slate-100 px-6 md:px-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max md:min-w-0 md:justify-center py-4 mx-auto justify-center">
            {[
              {
                key: "about",
                label: `About ${member.name.split(" ")[0]}`,
                icon: "👤",
              },
              {
                key: "publications",
                label: "Publications and Conferences",
                icon: "📄",
              },
              {
                key: "awards",
                label: "Awards and Honors",
                icon: "🏆",
              },
            ].map((tab) => {
              if (
                (tab.key === "about" && !member.about) ||
                (tab.key === "publications" &&
                  (!member.publications || member.publications.length === 0) &&
                  (!member.ConferencePapers ||
                    member.ConferencePapers.length === 0)) ||
                (tab.key === "awards" &&
                  (!member.awards || member.awards.length === 0))
              ) {
                return null;
              }

              return (
                <button
                  key={tab.key}
                  className={`
              px-6 py-3 font-semibold text-sm md:text-base whitespace-nowrap
              border-b-2 transition-all duration-200 hover:bg-slate-50 cursor-pointer
              
              ${
                activeSection === tab.key
                  ? "border-tertiary text-slate-800 bg-slate-50"
                  : "border-transparent text-slate-600 hover:text-slate-800"
              }
              `}
                  onClick={() => setActiveSection(tab.key)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:p-6 md:p-8">
          {/* About Section */}
          {activeSection === "about" && (
            <div className="max-h-[50vh] md:h-[40vh]  overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-lg py-2  md:text-lg mb-0 font-semibold text-center md:hidden">
                  {" "}
                  About {member.name.split(" ")[0]} :
                </p>
                {member?.about || (member?.activities?.length ?? 0) > 0 ? (
                  <>
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-0">
                      {member.about}
                    </p>
                    {(member?.activities?.length ?? 0) > 0 && (
                      <div className="activities space-y-6">
                        <p className="font-semibold text-lg mb-4">Activities:</p>
                        <div className="grid gap-4 sm:gap-6">
                          {member?.activities?.map((activity, index) => (
                            <div
                              key={`${member.id}-activity-${index}`}
                              className={`relative group flex items-start gap-4 p-4 ${
                                activity?.label
                                  ? "pt-[3rem] md:pt-[3.5rem]"
                                  : ""
                              } sm:p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200 hover:shadow-sm border border-slate-100/50`}
                            >
                              {activity?.label && (
                                <span
                                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-primary"
                                  style={{
                                    backgroundColor:
                                      "var(--color-tertiary, #fbbf24)",
                                    zIndex: 10,
                                  }}
                                >
                                  {activity.label}
                                </span>
                              )}
                              <div className="w-2 h-2  bg-tertiary rounded-full flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-200"></div>

                              <div className="flex-1 min-w-0 space-y-3">
                                {activity?.title && (
                                  <h3 className="text-md sm:text-md font-medium text-slate-900 leading-tight m-0 p-0">
                                    {activity?.title}
                                  </h3>
                                )}

                                <div className="text-slate-700 text-sm sm:text-base leading-relaxed m-0">
                                  {(activity?.desc || "")
                                    .split(/(\*[^*]+\*)/g)
                                    .map((part, idx) =>
                                      part.startsWith("*") && part.endsWith("*") ? (
                                        <strong
                                          key={idx}
                                          className="font-semibold text-slate-900"
                                        >
                                          {part.slice(1, -1)}
                                        </strong>
                                      ) : (
                                        <React.Fragment key={idx}>
                                          {part}
                                        </React.Fragment>
                                      )
                                    )}
                                </div>

                                {activity?.link && (
                                  <div className="pt-1">
                                    <Link
                                      href={activity.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
                                    >
                                      <span>View Details</span>
                                      <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-slate-500 italic text-center py-8">
                    No additional information available.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Publications Section */}
          {activeSection === "publications" && (
            <div className="max-h-[50vh] md:h-[40vh] overflow-y-auto">
              <p className="text-slate-700 leading-relaxed text-lg py-2  md:text-lg mb-0 font-semibold text-center md:hidden">
                Publications and Conferences:
              </p>
              {member &&
              ((member?.publications?.length ?? 0) > 0 ||
                (member?.ConferencePapers?.length ?? 0) > 0) ? (
                <div className="space-y-4">
                  {(member?.publications?.length ?? 0) > 0 && (
                    <div className="space-y-4">
                      <p className="font-semibold text-lg">Publications:</p>
                      {member?.publications?.map((publication, index) => (
                        <div
                          key={`${member.id}-publication-${index}`}
                          className={`flex items-start gap-3 p-4 ${
                            publication?.label
                              ? "pt-[3rem] md:pt-[3.5rem]"
                              : ""
                          } bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors relative`}
                        >
                          {publication?.label && (
                            <span
                              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-primary"
                              style={{
                                backgroundColor:
                                  "var(--color-tertiary, #fbbf24)",
                                zIndex: 10,
                              }}
                            >
                              {publication.label}
                            </span>
                          )}
                          <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                              {(publication?.desc || "")
                                .split(/(\*[^*]+\*)/g)
                                .map((part, idx) =>
                                  part.startsWith("*") && part.endsWith("*") ? (
                                    <strong key={idx}>
                                      {part.slice(1, -1)}
                                    </strong>
                                  ) : (
                                    <React.Fragment key={idx}>
                                      {part}
                                    </React.Fragment>
                                  )
                                )}
                            </p>
                            {publication?.link && (
                              <Link
                                href={publication.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                              >
                                View Publication{" "}
                                <FaExternalLinkAlt className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(member?.ConferencePapers?.length ?? 0) > 0 && (
                    <div className="space-y-4">
                      <p className="font-semibold text-lg">
                        Conference Presentations:
                      </p>
                      {member?.ConferencePapers?.map((paper, index) => (
                        <div
                          key={`${member.id}-ConferencePaper-${index}`}
                          className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                              <span className="italic"></span>
                              {(paper?.desc || "")
                                .split(/(\*[^*]+\*)/g)
                                .map((part, idx) =>
                                  part.startsWith("*") && part.endsWith("*") ? (
                                    <strong key={idx}>
                                      {part.slice(1, -1)}
                                    </strong>
                                  ) : (
                                    <React.Fragment key={idx}>
                                      {part}
                                    </React.Fragment>
                                  )
                                )}
                            </p>
                            {paper?.link && (
                              <Link
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                              >
                                View{" "}
                                <FaExternalLinkAlt className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-slate-500 italic text-center py-8">
                  No Publications or Conference Papers listed.
                </p>
              )}
            </div>
          )}

          {/* Awards and Honors Section */}
          {activeSection === "awards" && (
            <div className="max-h-[50vh] md:h-[40vh] overflow-y-scroll">
              <p className="text-slate-700 leading-relaxed text-lg py-2  md:text-lg mb-0 font-semibold text-center md:hidden">
                Awards and Honors:
              </p>
              {member?.awards?.length > 0 ? (
                <div className="space-y-4">
                  {member.awards.map((award, index) => (
                    <div
                      key={`${member.id}-awards-${index}`}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                          {(award?.desc || "")
                            .split(/(\*[^*]+\*)/g)
                            .map((part, idx) =>
                              part.startsWith("*") && part.endsWith("*") ? (
                                <strong key={idx}>{part.slice(1, -1)}</strong>
                              ) : (
                                <React.Fragment key={idx}>{part}</React.Fragment>
                              )
                            )}
                        </p>
                        {award?.link && (
                          <Link
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                          >
                            View Details{" "}
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic text-center py-8">
                  No Awards and Honors listed.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </AntdModal>
  );
};

export default MemberDetailsModal;
