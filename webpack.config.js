const path = require('path');

module.exports = {
  entry: './src/app.js', // Specify the entry point
  output: {
    path: path.resolve(__dirname, 'build'), // Specify the output directory
    filename: 'bundle.js' // Specify the output filename
  },
  mode: 'production'
};
