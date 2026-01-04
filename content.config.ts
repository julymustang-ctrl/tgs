import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        // Turkish blog content
        blog_tr: defineCollection({
            type: 'page',
            source: 'tr/blog/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                category: z.string().optional(),
                summary: z.union([z.string(), z.array(z.string())]).optional(),
                createdAt: z.string().optional(),
                updatedAt: z.string().optional(),
                readingTime: z.number().optional()
            })
        }),
        // English blog content
        blog_en: defineCollection({
            type: 'page',
            source: 'en/blog/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                category: z.string().optional(),
                summary: z.union([z.string(), z.array(z.string())]).optional(),
                createdAt: z.string().optional(),
                updatedAt: z.string().optional(),
                readingTime: z.number().optional()
            })
        }),
        // Russian blog content
        blog_ru: defineCollection({
            type: 'page',
            source: 'ru/blog/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                category: z.string().optional(),
                summary: z.union([z.string(), z.array(z.string())]).optional(),
                createdAt: z.string().optional(),
                updatedAt: z.string().optional(),
                readingTime: z.number().optional()
            })
        })
    }
})
