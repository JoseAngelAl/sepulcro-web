import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Directiva'),
    resumen: z.string().optional(),
  }),
});

const poesias = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    image: z.enum(['cautivo', 'photo', 'lunes7', 'tn_lpg_1000', 'costaleros']).optional(),
  }),
});

const revista = defineCollection({
  schema: z.object({
    year: z.number(),
    title: z.string(),
    cover: z.enum(['200', '600', '630']).default('200'),
  }),
});

export const collections = { noticias, poesias, revista };
