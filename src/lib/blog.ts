import { getCollection, type CollectionEntry } from 'astro:content';

export async function getAllBlogPosts() {
  const blogs = await getCollection('blog');
  return blogs.sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => 
    b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

export async function getBlogPostBySlug(slug: string) {
  const blogs = await getCollection('blog');
  return blogs.find((blog: CollectionEntry<'blog'>) => blog.slug === slug);
}
