// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("nav-bar", function() {
    return `<nav>
    <ul>
      <li><a href="/" title="Go home">Home</a></li>
      <li><a href="/about/" title="About the interstellar explorers">About</a></li>
    </ul>
  </nav>`
  });
};