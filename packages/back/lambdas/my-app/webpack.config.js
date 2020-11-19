const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'production',
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
             loader: 'ts-loader',
             options: {
               configFile: 'tsconfig.build.json'
             }
            }
          ],
        }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}