const path = require("path")

module.exports = {
  entry: {
    'menu': "./menu/index.js",
    "gallery":"./gallery/index.js"

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../assets")
  }
}
