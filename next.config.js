const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    MONGO_SRV:
      'mongodb+srv://jmechristian:cowboy45@jmechristiandigital-sbfit.mongodb.net/test?retryWrites=true&w=majority'
  }
});
