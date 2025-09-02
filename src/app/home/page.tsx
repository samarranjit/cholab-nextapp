import Navbar from "../../components/Navbar";
import Intro from "./Intro";
import Research from "./Research";
import Publications from "./Publications";
import News from "./News";
import Footer from "../../components/Footer";
import EachSectionConnection from "./EachSectionConnection";
import LinkedinPosts from "./LinkedinPosts";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Research />
      <Publications />
      <News />
      <EachSectionConnection />
      <LinkedinPosts />
      <Footer />
    </>
  );
}
