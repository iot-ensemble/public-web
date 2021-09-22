module.exports = (config) => {
    config.addPassthroughCopy('uploads');

    config.addPassthroughCopy('assets');

    return {
        dir: {
            input: 'src',
        },
    };
};