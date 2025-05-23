const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");



module.exports = function(eleventyConfig)  {

  //eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addShortcode("roundit", function (measurement) {
    return Math.round(measurement);
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  return {
    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
