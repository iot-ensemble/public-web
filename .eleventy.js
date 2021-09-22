module.exports = (config) => {
    //  Passthrough the uploads folder used by forestry
    config.addPassthroughCopy('uploads');
  
    //  Passthrough the assets folder used for our css, favicon and other assets
    config.addPassthroughCopy('static');
  
  
    //  Change the default folder used by 11ty from root to src
    return {
      dir: {
        input: 'src',
      },
    };
  };