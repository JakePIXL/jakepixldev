// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jakepixl.dev",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind(), icon()],
});
