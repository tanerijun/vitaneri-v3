const fs = require("fs");
const slugger = require("github-slugger").slug;

const BASE_URL = "src/contents/posts";
const postTitle = process.argv[2];
const postSlug = slugger(postTitle);

const frontmatter = {
  author: "Vincent Taneri",
  datetime: new Date().toISOString(),
  title: `"${postTitle}"`,
  slug: postSlug,
  featured: "false",
  draft: "false",
  tags: "\n\t-",
  ogImage: "",
  description: `"Post description ..."`,
};

console.log("Generating a new post template ...");

fs.mkdirSync(`${BASE_URL}/${postSlug}/`);

const writeStream = fs.createWriteStream(`${BASE_URL}/${postSlug}/index.mdx`);

writeStream.write("---\n");
for (const [key, value] of Object.entries(frontmatter)) {
  writeStream.write(`${key}: ${value}\n`);
}
writeStream.write("---\n");
writeStream.write("\n");
writeStream.write("{/* Replace with introductions */}\n");
writeStream.write("\n");
writeStream.write("## Table Of Contents");
writeStream.end();
