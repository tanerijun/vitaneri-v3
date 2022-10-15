import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkGemoji from "remark-gemoji";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";

// Custom options for Rehype Pretty Code
const rehypePrettyCodeOptions = {
  theme: "rose-pine",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

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
    mdx({
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    }),
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
    // NOTE: Uncomment this line, and delete `syntaxHighlight: false` below to go back to Astro's default
    // shikiConfig: {
    //   theme: "rose-pine",
    //   wrap: false,
    // },
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    syntaxHighlight: false,
    extendDefaultPlugins: true,
  },
});
