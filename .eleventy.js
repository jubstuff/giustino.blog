module.exports = function (eleventyConfig) {
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
      layouts: "_layouts"
    },
  };
};