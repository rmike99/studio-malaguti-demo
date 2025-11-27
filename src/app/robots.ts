import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/', // Non indicizzare l'area privata
    },
    sitemap: 'https://studiomalaguti-demo.vercel.app/sitemap.xml',
  };
}