import { Metadata } from "next";
import { Suspense } from "react";
import ResearchArticle from "../ResearchArticle";
import Loader from "@/components/Loader";
import { getResearchById } from "@/utils/getResearchById";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const research = getResearchById(id);

  return {
    title: `${research?.title} | The Cho Lab`,
    description: research?.metadescription.slice(0, 160),
    openGraph: {
      title: `${research?.title} | The Cho Lab`,
      description: research?.metadescription.slice(0, 200),
      type: "article",
      url: `https://cholab.science/research/${id}`,
      images: [
        {
          url: research?.mainImage || "/StaticImages/BGRESEARCH.jpg",
          width: 1200,
          height: 630,
          alt: research?.title || "Research Article",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${research?.title} | The Cho Lab`,
      description: research?.metadescription.slice(0, 160),
      images: [research?.mainImage || "/StaticImages/BGRESEARCH.jpg"],
    },
    alternates: {
      canonical: `https://cholab.science/research/${id}`,
    },
  };
}

export default async function ResearchArticlePage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <ResearchArticle id={id} />
    </Suspense>
  );
}
