// src/app/opportunities/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import OpportunitiesContent from "./OpportunitiesContent";
import Loader from "@/components/Loader";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research.",
  keywords: [
    "research opportunities",
    "Cho Lab",
    "Texas State University",
    "San Marcos",
    "graduate assistantship",
    "undergraduate internship",
    "postdoctoral fellowship",
    "hydrology jobs",
    "climate science jobs",
    "water sustainability",
    "environmental research positions",
    "engineering internships",
    "fluid mechanics research",
    "environmental research positions",
  ],
  openGraph: {
    title: "Opportunities | The Cho Lab",
    description:
      "Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research.",
    type: "website",
    url: "https://cholab.science/opportunities",
    images: [
      {
        url: "/StaticImages/Opportunities.jpg",
        width: 1200,
        height: 630,
        alt: "Research Opportunities at The Cho Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opportunities | The Cho Lab",
    description:
      "Explore current research, internship, and fellowship opportunities at the Cho Lab, Texas State University. Join our team and contribute to water sustainability research.",
    images: ["/StaticImages/Opportunities.jpg"],
  },
  alternates: {
    canonical: "https://cholab.science/opportunities",
  },
};

function LoadingFallback() {
  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <div className="text-center">
    //     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
    //     <p>Loading opportunities...</p>
    //   </div>
    // </div>
    <Loader />
  );
}

export default function OpportunitiesPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OpportunitiesContent />
    </Suspense>
  );
}
