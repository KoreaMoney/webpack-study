const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/", // 경로
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // css파일 인식
        use: ["style-loader", "css-loader"], // css파일 로드, style먼저쓰고 css를 써야 한다. 순서가 중요하다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // image 속성 인식
        loader: "url-loader", // image파일 로드
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]", // image파일 상태(이름.확장자, hash)
          limit: 20000, // 20kb
        },
      },
    ],
  },
};

//  module: {
//   rules: [
//     {
//       test: /\.js$/, //loader가 처리할 패턴
//       use: [path.resolve("./webpack-loader.js")],
//     },
//   ],
// },

// IMAGE처리하는 파일 로더 방식
// {
//   test: /\.(png|jpg|gif|svg)$/, // image 속성 인식
//   loader: "file-loader", // image파일 로드
//   options: {
//     publicPath: "./dist/",
//     name: "[name].[ext]?[hash]", // image파일 상태(이름.확장자, hash)
//   },
// },
