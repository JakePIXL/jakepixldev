import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: "JakePIXL's Dev Blog",
    description: "A personal blog for Jake 'PIXL' Evans.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      pubDate: post.data.publishDate,
      link: `posts/${post.slug}`,
    })),
  });
}
