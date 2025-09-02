// next.config.mjs
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
    ],
  },
  experimental: {
    // if you were using Turbopack/mdxRs, turn this OFF first to stabilize plugins:
    mdxRs: false,
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,        // parses YAML/TOML frontmatter
      remarkMdxFrontmatter,     // exports it into the MDX as ESM
    ],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
