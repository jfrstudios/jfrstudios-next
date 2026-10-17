import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  useCdn: true,
  perspective: 'published',
});

const builder = imageUrlBuilder(client);

export function urlForImage(image: Image | undefined) {
  if (!image) return undefined;
  return builder.image(image);
}