import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loader from "@/components/Loader";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <div className="prose  prose-h1:text-2xl prose-h2:text-4xl prose-h3:text-3xl md:prose-h1:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h2:cursor-pointer prose-h6:text-lg leading-relaxed font-light tracking-wide text-base sm:text-lg lg:text-xl ">
          {children}
        </div>
        <div className="dm:mt-[-180px]">
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
