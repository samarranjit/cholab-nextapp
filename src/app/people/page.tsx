import { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import DrCho from "./DrCho";
import OtherMember from "./OtherMember";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Link from "next/link";
import Image from "next/image";
import Alumni from "./Alumni";
export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the Cho Lab team at Texas State University. Learn about our members, mission, and research focus on hydrology, water resources, climate and much more.",
  openGraph: {
    title: "People | The Cho Lab",
    description:
      "Meet the members of the Cho Lab team at Texas State University. Learn about our members, mission, and research focus on hydrology, water resources, and climate.",
    type: "website",
    url: "https://cholab.science/people",
    images: [
      {
        url: "/StaticImages/group_photo.jpg",
        alt: "The Cho Lab Team at Texas State University",
      },
    ],
  },
  twitter: {
    title: "People | The Cho Lab",
    description:
      "Meet the Cho Lab team at Texas State University. Learn about our members, mission, and research focus on hydrology, water resources, and climate.",
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
    canonical: "https://cholab.science/people",
  },
};

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <DrCho />
        <OtherMember />
        <Alumni />
      </Suspense>

      <div className="">
        <div className="relative h-[80vh] md:h-[90vh] overflow-hidden -mb-[5.5rem]">
          <Image
            src="/StaticImages/Opportunities.jpg"
            alt="Opportunities background"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
            loading="lazy"
            style={{ zIndex: -1 }}
            width={1920}
            height={1080}
          />
          <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center ml-0 p-2 md:ml-0 md:p-2">
            <div className="collaboration-call w-[90%] md:w-[70%] lg:w-[40%] p-4 gap-2 md:gap-7 md:p-10 flex flex-col items-center justify-center bg-secondary/65 bg-opacity-65">
              <p className="text-lg md:text-2xl text-tertiary text-center w-full font-semibold align-center justify-center">
                Do you want to join the team?
              </p>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                Join the Cho Lab
              </h1>
              <p className="text-primary">
                We are building a dynamic team of undergraduate and graduate
                students and postdocs who share our passion to better understand
                hydrology and water resources in a changing climate for a
                sustainable environment. To achieve this, we use field
                observations from station data and field campaign, multiple
                remote sensing techniques, land surface hydrologic models, and
                climate models along with big-data and machine learning (ML)
                techniques.
              </p>
              <Link href="/opportunities">
                <button className="border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500">
                  Lab Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
