//const pluginRss = require("@11ty/eleventy-plugin-rss");
//const pluginWebc = require("@11ty/eleventy-plugin-webc");
//const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");


module.exports = function(eleventyConfig)  {
  // Aliases are in relation to the _includes folder
  // eleventyConfig.addLayoutAlias('newproject', 'layouts/newproject.html');

  //eleventyConfig.addPassthroughCopy("./public/": "/");
  //eleventyConfig.addPassthroughCopy('images');
  //eleventyConfig.addPassthroughCopy('favicon.ico');
  //eleventyConfig.addPlugin(pluginRss);
  //eleventyConfig.addPlugin(pluginWebc);

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
