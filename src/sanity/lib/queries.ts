import { groq } from 'next-sanity';

export const routeQuery = `*[_type == "post"]{
  "slug": slug.current,
  _updatedAt
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {image { ..., asset -> {..., metadata}}, name, role, "slug": slug.current},
    categories[]->{
      title,
      "slug": slug.current,
    },
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage { ..., asset -> {..., metadata}},
  author -> {image { ..., asset -> {..., metadata}}, name, role},
  publishedAt,
  categories[]->{
      title
    },
    body,
}`;

export const SEARCH_POSTS_QUERY = groq`*[_type == "post" && title match $title] | order(publishedAt desc) {
  featured,
  _id,
  description,
  title,
  publishedAt,
  "slug": slug.current,
  mainImage { ..., asset -> {..., metadata}},
  author -> {image { ..., asset -> {..., metadata}}, name, role},
  categories[]->{
    title
  },
}`;
export const CATEGORIES_SLUG_QUERY = groq`*[_type == "category"] {
  "slug": slug.current,
}`;

export const CATEGORIES_FEATURED_QUERY = groq`*[_type == "category" && featuredCategory == true] {
  title,
  "slug": slug.current,
  featuredCategory,
}`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "post" && defined(slug.current) && $category in categories[]->slug.current] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {image { ..., asset -> {..., metadata}}, name, role},
    categories[]->{
      title,
      "slug": slug.current,
    },
  }
`;
export const SLUGS_QUERY = groq`*[_type == "post"].slug.current`;

export const AUTHOR_SLUG_QUERY = groq`*[_type == "category"] {
  "slug": slug.current,
}`;

export const POSTS_BY_AUTHOR_QUERY = groq`
  *[_type == "post" && defined(slug.current) && $author == author->slug.current] | order(publishedAt desc) {
    featured,
    _id,
    description,
    title,
    publishedAt,
    "slug": slug.current,
    mainImage { ..., asset -> {..., metadata}},
    author -> {
      image { ..., asset -> {..., metadata}},
      name,
      role,
      "slug": slug.current
    },
    categories[]->{
      title,
      "slug": slug.current,
    },
  }
`;
