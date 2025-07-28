import { getCollection } from "astro:content";

export async function getAllCategories() {
  const posts = await getCollection("projects");
  return Array.from(
    new Set(
      posts
        .map((project) => project.data.categories)
        .flat()
        .sort()
    )
  );
}
