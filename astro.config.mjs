import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkGemoji from "remark-gemoji";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vitaneri.com/",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkGemoji,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table Of Contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "rose-pine",
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
});
