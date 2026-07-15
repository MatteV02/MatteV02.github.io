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

const pages = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/pages" }),
  schema: ({ image }) =>
    z.object({
      intro: z.object({
        text: z.string(),
      }),
      work: z
        .object({
          label: z.string().optional(),
          title: z.string().optional(),
          projects: z.array(
            z.object({
              year: z.string(),
              title: z.string(),
              description: z.string(),
              category: z.string(),
              logo: image().optional(),
              image: image(),
              imageAlt: z.string(),
            })
          ),
        })
        .optional(),
      projects: z
        .object({
          label: z.string().optional(),
          title: z.string().optional(),
          items: z.array(
            z.object({
              year: z.string(),
              title: z.string(),
              description: z.string(),
              category: z.string(),
              logo: image().optional(),
              image: image(),
              imageAlt: z.string(),
            })
          ),
        })
        .optional(),
      education: z
        .object({
          label: z.string().optional(),
          title: z.string().optional(),
          items: z.array(
            z.object({
              period: z.string(),
              title: z.string(),
              description: z.string(),
              category: z.string(),
            })
          ),
        })
        .optional(),
      skills: z
        .object({
          label: z.string().optional(),
          title: z.string().optional(),
          items: z.array(
            z.object({
              period: z.string(),
              title: z.string(),
              description: z.string(),
              category: z.object({
                label: z.string(),
                href: z.string(),
              }),
            })
          ),
        })
        .optional(),
    }),
});

export const collections = { globals, pages };
