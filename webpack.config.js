const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    popup: './src/popup.tsx',
    options: './src/options.tsx',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react',
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
};
