import { groq } from 'next-sanity';
import { client } from './client';

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "work" && featured == true] | order(year desc) [0...4] {
    _id,
    title,
    slug,
    category,
    year,
    description,
    coverImage,
    tags
  }
`;

export const ALL_PROJECTS_QUERY = groq`
  *[_type == "work"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    year,
    description,
    coverImage,
    tags
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    year,
    description,
    content,
    coverImage,
    tags,
    client,
    services,
    link
  }
`;

export const ALL_INSIGHTS_QUERY = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage
  }
`;

export async function getFeaturedProjects() {
  return client.fetch(FEATURED_PROJECTS_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getAllProjects() {
  return client.fetch(ALL_PROJECTS_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(PROJECT_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } });
}

export async function getAllInsights() {
  return client.fetch(ALL_INSIGHTS_QUERY, {}, { next: { revalidate: 60 } });
}