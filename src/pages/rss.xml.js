import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Alumno de Astro | Blog",
    description: "Aprende Astro, el nuevo framework de JavaScript",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-use</language>`,
  });
}
