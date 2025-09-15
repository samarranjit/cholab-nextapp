import { Metadata } from "next";
import { Suspense } from "react";
import PublicationContent from "@/app/publication/PublicationContent";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
  keywords: [
    "research publications",
    "Cho Lab",
    "Texas State University",
    "San Marcos",
    "hydrology",
    "climate science",
    "water resources",
    "environmental research",
    "lab achievements",
    "Cho Lab news",
    "Eunsang Cho",
    "hydrology research",
    "climate change updates",
    "scientific articles",
    "peer-reviewed papers",
    "water sustainability research",
    "academic publications",
    "scientific research",
  ],
  openGraph: {
    title: "Publications | The Cho Lab",
    description:
      "Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
    type: "website",
    url: "https://cholab.science/publication",
    images: [
      {
        url: "/StaticImages/PublicationsBgImage.png",
        width: 1200,
        height: 630,
        alt: "Cho Lab research publications banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications | The Cho Lab",
    description:
      "Browse publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
    images: ["/StaticImages/PublicationsBgImage.png"],
  },
  alternates: {
    canonical: "https://cholab.science/publication",
  },
};

export default function PublicationPage() {
  return (
    <Suspense fallback={<Loader />}>
      <PublicationContent />
    </Suspense>
  );
}
