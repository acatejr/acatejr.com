export default async function(eleventyConfig) {
	// Configure Eleventy
    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data'
        },
  }
};
