const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },

    // TODO: Add the correct plugins
    plugins: [
     
    ],

    // TODO: Add the correct modules
    module: {

    }
  };
};
