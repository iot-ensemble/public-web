module.exports = (config) => {
    //  Passthrough the uploads folder used by forestry
    config.addPassthroughCopy('uploads');
  
    config.addPassthroughCopy('static');

    config.addPassthroughCopy('packages');   
  
    config.addPassthroughCopy('package.json');   
  
    //  Change the default folder used by 11ty from root to src
    return {
  pathPrefix: '/iot/',
      dir: {
        input: 'src',
      },
    };
  };
