import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Heading from "./heading";
import CoreValues from "./coreValues";
import Footer from "@/components/Footer";
import CurrentCourses from "./CurrentCourses";

// Course data
const courses = [
  {
    name: "ENGR 3380: Fluid Mechanics",
    description:
      "This course introduces the principles of fluid mechanics with applications in civil engineering. Topics include fluid properties, hydrostatics, fluid dynamics, pipe flow, open channel flow, and hydraulic systems. Students will develop a strong foundation in analyzing and solving problems related to fluid behavior in natural and engineered systems. The field of fluid mechanics is broad and has numerous science and engineering applications.",
    url: "/Files/CoursesSyllabus/ENGR3380.pdf",
    syllabus: "https://cholab.science/Files/CoursesSyllabus/ENGR3380.pdf",
  },
  {
    name: "CE 4371: Hydrology",
    description:
      "This course delves into the fundamental principles of hydrology, focusing on the movement, distribution, and management of water across natural and built environments. Key topics include precipitation, evapotranspiration, soil infiltration, groundwater flow, surface runoff, and hydrologic modeling, with an emphasis on state-of-the-art remote sensing techniques. Students will develop practical skills in water system analysis, conceptual modeling using HEC-HMS, and applying hydrologic concepts to tackle real-world challenges in water resources management and environmental sustainability.",
    url: "/Files/CoursesSyllabus/CE4371.pdf",
    syllabus: "https://cholab.science/Files/CoursesSyllabus/CE4371.pdf",
  },
  {
    name: "CE 7372: Water, Climate, and Disasters",
    description:
      "This course is designed for MS and PhD level, introducing the interactions between water and climate systems and their relationship with occurrences, magnitude, and frequencies of natural disasters with a focus on climate impacts on hydrology, water resources, and extreme events (e.g., floods, drought, heat waves, landslides, and wildfires). This course covers disaster risk management and adaptation strategies for a sustainable and resilient natural environment and human society against weather and climate extreme disasters.",
    url: "",
    syllabus: null, // No syllabus link provided
  },
];

// Metadata for SEO
export const metadata: Metadata = {
  title: "Mentorship",
  description:
    "Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi.",
  keywords: [
    "research courses",
    "Cho Lab",
    "Texas State University",
    "San Marcos",
    "Dr. Eunsang Cho",
    "graduate assistantship",
    "undergraduate internship",
    "postdoctoral fellowship",
    "hydrology",
    "climate science",
    "water sustainability",
    "environmental research",
    "engineering",
    "fluid mechanics",
    "hydrology course",
    "water climate disasters",
    "syllabus",
    "mentorship program",
    "academic courses",
  ],
  openGraph: {
    title: "Mentorship | The Cho Lab",
    description:
      "Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi.",
    type: "website",
    url: "https://cholab.science/mentorship",
    images: [
      {
        url: "/StaticImages/AlkekLib.jpg", // Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Mentorship Courses at The Cho Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorship | The Cho Lab at Texas State",
    description:
      "Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi.",
    images: ["/StaticImages/AlkekLib.jpg"],
  },
  alternates: {
    canonical: "https://cholab.science/mentorship",
  },
};

export default function MentorshipPage() {
  // JSON-LD structured data for courses
  const coursesJsonLd = courses.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Texas State University",
      sameAs: "https://www.txst.edu/",
    },
    url: course.url,
    ...(course.syllabus && {
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "InPerson",
        url: course.syllabus,
      },
    }),
  }));

  return (
    <div className="">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />

      <Navbar />
      <div className="bg-primary h-full w-full bg-opacity-[0.05]">
        <Heading />
        <CoreValues />
        <CurrentCourses />

        <Footer />
      </div>
    </div>
  );
}
