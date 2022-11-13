const dayjs = require("dayjs");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");


module.exports = function(eleventyConfig) {
  // eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://giustino.blog",
    },
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dayjs(dateObj).format("YYYY-MM-DD");
  });

  eleventyConfig.addFilter("readableDateTime", (dateObj) => {
    return dayjs(dateObj).format("YYYY-MM-DD HH:mm");
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  const now = new Date();

  const livePosts = (p) => p.date <= now && !p.data.draft;

  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/posts/20*/*.md").filter(livePosts);
  });

  eleventyConfig.addCollection('featured', (collection) => {
    return collection.getFilteredByGlob("./src/posts/20*/*.md")
      .filter(livePosts)
      .filter(item => !!item.data.featured);
  });

  // source folder as key, destination folder as value
  // I've also optimized the methods call, putting all in one object
  eleventyConfig.addPassthroughCopy({
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
