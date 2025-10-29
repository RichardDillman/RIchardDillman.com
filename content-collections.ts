import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
  }),
  transform: async (document) => {
    return {
      ...document,
      content: document.content,
      slug: document._meta.path.replace('posts/', '').replace(/\.mdx$/, ''),
    };
  },
});

export default defineConfig({
  collections: [posts],
});
