const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //loader가 처리할 패턴
        use: [path.resolve("./webpack-loader.js")],
      },
    ],
  },
};
