import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay updated with the latest news from the Cho Lab at Texas State University about our research experiences, and lab achievements.",
  openGraph: {
    title: "News | The Cho Lab",
    description:
      "Stay updated with the latest news from the Cho Lab at Texas State University about our research experiences, and lab achievements.",
    type: "website",
    url: "https://cholab.science/news",
    images: [
      {
        url: "/StaticImages/group_photo.jpg",
        alt: "News from the Cho Lab Team at Texas State University",
      },
    ],
  },
  twitter: {
    title: "News | The Cho Lab",
    description:
      "Stay updated with the latest news from the Cho Lab at Texas State University about our research experiences, and lab achievements.",
    card: "summary_large_image",
    images: ["/StaticImages/group_photo.jpg"],
  },
  keywords: [
    "Cho Lab",
    "The Cho Lab",
    "Cho Lab members",
    "Cho Lab team",
    "research team Texas State University",
    "Dr. Eunsang Cho",
    "Eunsang Cho hydrology",
    "Texas State University research lab",
    "hydrology research team",
    "climate science researchers",
    "water resources researchers",
    "environmental science lab",
    "undergraduate research Texas",
    "graduate research lab USA",
    "postdoctoral opportunities Texas",
    "faculty researchers Texas",
    "STEM research team",
    "San Marcos research labs",
    "academic research team Texas",
    "university research lab",
  ],
  alternates: {
    canonical: "https://cholab.science/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
