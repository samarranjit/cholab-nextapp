// app/about/page.tsx
import NewsStory from "@/app/news/stories/DOE2025.mdx";
export default function AboutPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold">About Us</h1>
      <p>This is the about page.</p>
      <NewsStory />
    </div>
  );
}
