import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    isFeatured: z.boolean().default(false),
  })
});

export const collections = {
  projects
};
