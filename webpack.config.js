const path = require('path');

module.exports = {
  entry: [
    './src/storage.js',
    './src/project.js', 
    './src/eventHandler.js',
    './src/project.css',
    './src/DOM.js'],
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