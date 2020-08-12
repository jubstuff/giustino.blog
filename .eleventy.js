const dayjs = require("dayjs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://giustino.blog",
    },
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dayjs(dateObj).format("YYYY-MM-DD");
  });

  const now = new Date();

  const livePosts = (p) => p.date <= now && !p.data.draft;

  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/posts/*.md").filter(livePosts);
  });

  // source folder as key, destination folder as value
  // I've also optimized the methods call, putting all in one object
  eleventyConfig.addPassthroughCopy({
    "wp-content": "wp-content",
    "public/css": "css",
    "public/js": "js",
    "public/img": "img",
  });
  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
    },
  };
};
