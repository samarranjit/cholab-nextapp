// app/research/page.tsx
import ResearchContent from "./ResearchContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Discover the Cho Lab's research projects in hydrology, water resources, climate change, and environmental sustainability.",
  keywords: [
    "researches",
    "Cho Lab",
    "Texas State University",
    "San Marcos",
    "hydrology",
    "climate science",
    "water sustainability",
    "environmental research",
    "study",
    "new findings",
    "hydrology research",
    "climate change study",
    "water resources research",
    "environmental science research",
    "hydrology and climate science",
    "water resources study",
    "environmental research study",
    "hydrology projects",
    "climate change projects",
    "water sustainability projects",
    "environmental science projects",
    "hydrology and climate projects",
    "water resources projects",
    "environmental research projects",
  ],
  openGraph: {
    title: "Research | The Cho Lab at Texas State",
    description:
      "Discover the Cho Lab's research projects in hydrology, water resources, climate change, and environmental sustainability.",
    type: "website",
    url: "https://cholab.science/research",
    images: [
      {
        url: "/StaticImages/MapOfWorld2.png", // Ensure this image exists in
        width: 1200,
        height: 630,
        alt: "Cho Lab Research Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | The Cho Lab at Texas State",
    description:
      "Discover the Cho Lab's research projects in hydrology, water resources, climate change, and environmental sustainability.",
    images: ["/StaticImages/MapOfWorld2.png"],
  },
};

export default function ResearchPage() {
  return <ResearchContent />;
}
