const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder on each build
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html' // Use your custom HTML template
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: './public', to: './public' }, // Adjust the source and destination as needed
          { from: './output.css', to: './output.css' }
        ],
      }),
  ],
  
  mode: 'production',
};
