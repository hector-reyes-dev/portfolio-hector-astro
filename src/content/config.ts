import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      cover: image(),
      title: z.string(),
      description: z.string(),
      href: z.string(),
      icons: z.array(z.string()),
      status: z.enum(["new", "building", "featured"]),
      size: z.enum(["big", "small"]).optional(),
    }),
});

const resourcesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      cover: image(),
      status: z.string(),
      title: z.string(),
      href: z.string(),
      anchorLabel: z.string(),
      chipLabel: z.string(),
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

export const collections = {
  projects: projectsCollection,
  resources: resourcesCollection,
  services: servicesCollection,
};
