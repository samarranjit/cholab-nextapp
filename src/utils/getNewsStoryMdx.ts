import fs from "fs";
import path from "path";

// Resolve the NewsStories directory relative to the project root.
// IMPORTANT: do not start the second argument with "/" or path.join
// will treat it as an absolute path like "/src/..." and fail in prod.
const blogDir = path.join(process.cwd(), "src", "data", "NewsStories");
const files = fs.readdirSync(blogDir);
// console.log("files", files);

export interface NewsPostMeta {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  mainImage?: string;
}


export interface NewsPost{
    default : React.ComponentType;
    frontmatter: NewsPostMeta;
    slug : string;
}

export function getNewsPostMeta() {
  const blogs = files.filter(file => file.endsWith('.mdx')).map(
    async (file: string) => {
      const slug = file.replace(/\.mdx$/, "");
      const { default: Post, frontmatter: meta }: NewsPost = await import(
        `@/data/NewsStories/${slug}.mdx`
      );
      return {
        Post,
        meta,
        slug
      };
    }
  );

  
  return Promise.all(blogs);
}