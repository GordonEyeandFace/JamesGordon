import type { MetadataRoute } from 'next';
import {
  galleryRoutes,
  SITE_URL,
  staticRoutes,
  treatmentCategoryRoutes,
} from '@/lib/site-routes';

const toUrl = (path: string) => new URL(path, SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const treatmentDetailRoutes = treatmentCategoryRoutes.flatMap(({ category, procedures }) =>
    procedures.map((procedure) => `/treatments/${category}/${procedure}`),
  );

  const allRoutes = Array.from(new Set([...staticRoutes, ...galleryRoutes, ...treatmentDetailRoutes]));

  return allRoutes.map((route) => ({
    url: toUrl(route),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/treatments/') || route.startsWith('/gallery/') ? 0.8 : 0.6,
  }));
}
