import { NewsPost } from "@/utils/getNewsStoryMdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { default: Project }: NewsPost = await import(
    `@/data/NewsStories/${slug}.mdx`
  );
  const Content = await Promise.resolve(Project);
  //   console.log("content", Content);

  return (
    <div className="min-w-[100vw] bg-primary">
      <main className="min-h-screen w-[100vw] bg-gradient-to-br from-gray-50 to-white  pt-10 md:pt-2">
        <div className="container max-w-[1775px] mx-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-5 shadow-secondary/10 shadow-md">
            <Content />

            {/* Decorative Element */}
            <div className="mt-6 sm:mt-14  lg:mt-16 text-center">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
