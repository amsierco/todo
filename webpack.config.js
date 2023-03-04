const path = require('path');

module.exports = {
  entry: [
    './src/storage.js',
    './src/home.js', 
    './src/project.js', 
    './src/DOM.js',
    './src/eventHandler.js',
    './src/project.css'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
};