export default function Head() {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Eunsang Cho",
    jobTitle: "Principal Investigator, Assistant Professor",
    image: "https://www.cholab.science/ChoLabLogo.png",
    email: "eunsang.cho@txstate.edu",
    sameAs: [
      "https://www.linkedin.com/in/eunsang-cho-b455a8126/",
      "https://www.researchgate.net/profile/Eunsang-Cho",
      "https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en",
    ],
    description:
      "Dr. Eunsang Cho is an Assistant Professor at Texas State University, specializing in hydrology, water resources, and climate research. His work focuses on understanding the impacts of climate change on water systems.",
    affiliation: "Texas State University",
    url: "https://cholab.science/people",
  };

  return (
    <>
      <link rel="canonical" href="https://cholab.science/people" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
    </>
  );
}
