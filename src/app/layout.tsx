import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
export const dynamic = "force-dynamic";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "The Cho Lab | Texas State University",
    template: "%s - The Cho Lab",
  },
  description:
    "The Cho Lab at Texas State uses advanced sensing, modeling, and big-data analytics to contribute to water sustainability, drought, and flooding.",
  keywords: [
    "The Cho Lab",
    "Eunsang Cho",
    "Texas State University",
    "water sustainability",
    "hydrology",
    "climate change",
    "drought",
    "flooding",
    "environmental research",
    "big data analytics",
    "remote sensing",
    "civil engineering",
    "STEM research",
    "graduate research",
    "undergraduate research",
    "San Marcos",
  ],
  authors: [{ name: "Eunsang Cho" }],
  creator: "Cho Lab",
  metadataBase: new URL("https://cholab.science"),
  openGraph: {
    title: "The Cho Lab | Texas State University",
    description:
      "The Cho Lab at Texas State uses advanced sensing, modeling, and big-data analytics to contribute to water sustainability, drought, and flooding.",
    url: "https://cholab.science",
    siteName: "The Cho Lab",
    type: "website",
    images: [
      {
        url: "/StaticImages/OpenGraphHomeImg.png",
        width: 1200,
        height: 630,
        alt: "The Cho Lab at Texas State",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cho Lab | Texas State University",
    description:
      "The Cho Lab at Texas State uses advanced sensing, modeling, and big-data analytics to contribute to water sustainability, drought, and flooding.",
    images: ["/StaticImages/OpenGraphHomeImg.png"],
  },
  icons: {
    icon: "/cholabbgincluded.png",
    apple: "/cholabbgincluded.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Custom tags not supported by `metadata` */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005B96" />
        <link rel="canonical" href="https://cholab.science/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              name: "The Cho Lab",
              url: "https://cholab.science",
              description:
                "The Cho Lab at Texas State University is a hydrology research group advancing water resources science in a changing climate. We use remote sensing, UAVs, and data-driven modeling to study snowpack, flooding, drought, and water sustainability.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Bruce and Ingram Hall, Room 5311, 601 University Drive",
                addressLocality: "San Marcos",
                addressRegion: "TX",
                postalCode: "78666",
                addressCountry: "USA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Research Inquiries",
                email: "eunsang.cho@txstate.edu",
              },
              logo: "https://www.cholab.science/ChoLabLogo.png",
              sameAs: [
                "https://www.linkedin.com/in/eunsang-cho-b455a8126/",
                "https://www.researchgate.net/profile/Eunsang-Cho",
                "https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en",
              ],
              department: {
                "@type": "CollegeOrUniversity",
                name: "Texas State University",
              },
            }),
          }}
        />
      </head>
      <body className={`${lora.variable} antialiased`}>
        {children}

        {/* Move script to bottom if not required in head */}
        <script
          type="text/javascript"
          src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
          async
        ></script>
      </body>
    </html>
  );
}
