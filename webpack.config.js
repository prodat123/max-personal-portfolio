const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Adjust this test to include .mjs files
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'], // Ensure .mjs files are resolved
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
