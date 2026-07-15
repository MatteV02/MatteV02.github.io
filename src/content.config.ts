import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const globals = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./content/globals" }),
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
  loader: glob({ pattern: "**/*.yaml", base: "./content/pages" }),
  schema: ({ image }) =>
    z.object({
      intro: z.object({
        text: z.string(),
        action: z.object({
          label: z.string(),
          link: z.string(),
        }).optional(),
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
              image: image().optional(),
              imageAlt: z.string().optional(),
              containImage: z.boolean().optional(),
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
              image: image().optional(),
              imageAlt: z.string().optional(),
              containImage: z.boolean().optional(),
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
              logo: image().optional(),
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
