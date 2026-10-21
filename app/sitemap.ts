import type { MetadataRoute } from 'next';
import { SITE_URL, projects } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1, freq: 'weekly' as const },
    { path: '/services', priority: 0.9, freq: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, freq: 'monthly' as const },
    { path: '/pricing', priority: 0.8, freq: 'monthly' as const },
    { path: '/about', priority: 0.7, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/portfolio#${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}