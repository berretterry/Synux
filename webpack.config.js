module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};