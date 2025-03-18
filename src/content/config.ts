import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

const filterDrafts = (entries: any[]) => {
  return entries.filter((entry) => {
    // If draft is true or if we're not in production, filter it out
    const isDraft = entry.data.draft === true;
    const isProduction = import.meta.env.PROD;
    return !isDraft || !isProduction;
  });
};

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(200),
    description: z.string().min(50).max(360),
    draft: z.boolean().optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    ogImage: z.string().optional(),
    isPaper: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().min(50).max(900),
      draft: z.boolean().optional(),
      cover: image(),
      coverAlt: z.string().optional(),
      projectLink: z.string().url(),
      datePublished: z.string().transform((str) => new Date(str)),
    }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
