const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Update with the path to your main JavaScript file.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Update with your output directory.
  },
  module: {
    rules: [
      // Add loaders for JavaScript/JSX files here if needed.
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
        // Make a global `process` variable that points to the `process` package,
        // because the `util` package expects there to be a global variable named `process`.
           // Thanks to https://stackoverflow.com/a/65018686/14239942
        process: 'process/browser'
       }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      'util': require.resolve('util/'),
    },
  },  
};
