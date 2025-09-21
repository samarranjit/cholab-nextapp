import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
        url : 'https://cholab.science/',
        changeFrequency: 'daily',
        lastModified: new Date(),
        priority: 1,
    },
    {
        url : 'https://cholab.science/research',
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url : 'https://cholab.science/news',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url : 'https://cholab.science/publication',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url : 'https://cholab.science/mentorship',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.8,
    },
        
    {
        url : 'https://cholab.science/opportunities',
        changeFrequency: 'weekly',
        priority: 0.8,

    },
    {
        url : 'https://cholab.science/people',
        changeFrequency: 'weekly',
        lastModified: new Date(),
        priority: 0.8,
    }
  ]
}