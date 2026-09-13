// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createMetaSchema,
  createDocSchema,
  transformMDX
} from "@fumadocs/content-collections/configuration";
function omitUndefinedHeadings(document) {
  const contents = document.structuredData?.contents;
  if (!contents) {
    return document;
  }
  return {
    ...document,
    structuredData: {
      ...document.structuredData,
      contents: contents.map((item) => {
        if (item.heading == null) {
          const { heading: _heading, ...rest } = item;
          return rest;
        }
        return item;
      })
    }
  };
}
var projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      website: z.string().optional(),
      github: z.string().optional(),
      tags: z.array(
        z.object({
          label: z.string()
        })
      ).optional(),
      date: z.string().date().or(z.date()).optional(),
      startDate: z.string().date().or(z.date()).optional(),
      endDate: z.string().date().or(z.date()).optional(),
      category: z.string().optional()
    };
  },
  transform: async (document, context) => omitUndefinedHeadings(await transformMDX(document, context))
});
var projectMetas = defineCollection({
  name: "projectMeta",
  directory: "content/projects",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema
});
var content_collections_default = defineConfig({
  collections: [projects, projectMetas]
});
export {
  content_collections_default as default
};
