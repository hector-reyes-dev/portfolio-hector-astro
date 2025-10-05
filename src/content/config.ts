import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      images: z.array(z.string()),
      title: z.string(),
      description: z.string(),
      href: z.string(),
      icons: z.array(z.string()),
      categories: z.any(),
    }),
});

const resourcesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      cover: image(),
      title: z.string(),
      href: z.string(),
      anchorLabel: z.string(),
      label: z.string(),
    }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      icon: image(),
      title: z.string(),
      description: z.string(),
      subServices: z.array(z.string()),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum([
        "desarrollo-web",
        "frontend",
        "backend",
        "proyectos",
        "tutoriales",
        "reflexiones",
      ]),
      tags: z.array(z.string()),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      image: image(),
      imageAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  projects: projectsCollection,
  resources: resourcesCollection,
  services: servicesCollection,
  blog: blogCollection,
};
