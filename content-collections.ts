import { defineCollection, defineConfig } from '@content-collections/core';
import {
    createMetaSchema,
    createDocSchema,
    transformMDX
} from '@fumadocs/content-collections/configuration';

const projects = defineCollection({
    name: 'projects',
    directory: 'content/projects',
    include: '**/*.mdx',
    schema: (z) => {
        const docSchema = createDocSchema(z);
        return {
            ...docSchema,
            website: z.string().optional(),
            github: z.string().optional(),
            tags: z
                .array(
                    z.object({
                        label: z.string()
                    })
                )
                .optional(),
            date: z.string().date().or(z.date()).optional()
        };
    },
    transform: transformMDX
});

const projectMetas = defineCollection({
    name: 'projectMeta',
    directory: 'content/projects',
    include: '**/meta.json',
    parser: 'json',
    schema: createMetaSchema
});

export default defineConfig({
    collections: [projects, projectMetas]
});
