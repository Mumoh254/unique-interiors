// postcss.config.js
module.exports = {
    plugins: [
      require('cssnano')({
        preset: 'default', // Use the default preset for cssnano
      }),
    ],
  };