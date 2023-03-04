const path = require('path');

module.exports = {
  entry: ['./src/storage.js', './src/home.js', './src/project.js', './src/UI.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};