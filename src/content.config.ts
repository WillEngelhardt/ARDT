import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { file } from 'astro/loaders';


// const artists = defineCollection({
////   loader: glob({ pattern: '**/*.md', base: "./src/data/artists" }),
//   loader: glob({ pattern: '**/*.md', base: "./src/images/data" }),
//   schema: z.object({
//     name: z.string(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }),
//   }),
// });
const artists = defineCollection({
  loader: file("./src/images/data2/test.json")
});
console.log(artists)
const mediums = defineCollection({

})

const albums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/albums" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    tracks: z.array(z.string()),
    artist: z.string(),
  }),
});

// Export all collections
export const collections = {artists, albums};