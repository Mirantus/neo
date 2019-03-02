const path = require('path');

const sourcePath = path.join(__dirname, './src');

module.exports = {
  context: sourcePath,
  entry: './index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
    }
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      },
    ]
  }
};
