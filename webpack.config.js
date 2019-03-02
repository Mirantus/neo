module.exports = {
  entry: './src/index.tsx',
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
