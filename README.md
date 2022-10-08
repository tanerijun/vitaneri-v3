# Vitaneri-V3

The third version of my personal website.

This time, it's created with Astro, and some of the components are written in React.

My blog posts are located in `src/contents/posts`. The posts are in `.mdx` format.

## Installation

To install locally, you can:

1. Fork and clone the repo
2. Install dependencies
   ```
   npm install
   ```
3. Run locally
   ```
   npm run dev
   ```

## Create Blog Post

1. To create a blog post with the necessary frontmatters
   ```
   npm run post [POST TITLE]
   ```
   Make sure to wrap the post title with `""` (double quotes).
2. An `index.mdx` file in the sluggified folder with your post title will be created at `src/contents/posts`.
3. Set `draft=true` in frontmatter when you're not yet ready to publish your post.
4. Set `featured=true` in frontmatter to show your article in featured section.
5. Tags should be provided in YAML list format and in lowercase. For example:
   ```
   tags:
    - html
    - css
   ```
6. Delete the generated `## Table Of Contents` if you don't need TOC.
7. The highest headers in your article should be `##`. Single `#` is reserved for the post title.
