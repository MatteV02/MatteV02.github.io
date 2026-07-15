import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const globals = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/globals" }),
  schema: z.object({
    name: z.string().optional(),
    location: z.string().optional(),
    role: z.string().optional(),
    links: z.array(
      z.object({
        href: z.string(),
        text: z.string(),
      })
    ).optional(),
    action: z
      .object({
        text: z.string(),
        href: z.string(),
      })
      .optional(),
  }),
});

export const collections = { globals };
