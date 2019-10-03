module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/site/assets/static");

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('src/site/posts/*.md');
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "templates"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid"
  };
}
