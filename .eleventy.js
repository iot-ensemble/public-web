module.exports = (config) => {
    //  Passthrough the uploads folder used by forestry
    config.addPassthroughCopy('uploads');
  
    config.addPassthroughCopy('static');

    config.addPassthroughCopy('packages');      
  
    //  Change the default folder used by 11ty from root to src
    return {
      dir: {
        eleventyExcludeFromCollections: "true",
        input: 'src',
        markdownTemplateEngine: false,
      },
    };
  };