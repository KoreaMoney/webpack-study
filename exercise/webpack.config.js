const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production", // 배포 버전
  entry: "./src/main.js", // webpack 최초 진입점(자바스크립 파일)
  output: {
    // webpack 진행 후 결과물
    path: path.resolve(__dirname, "./dist"), // dist폴더 (node path library사용)
    publicPath: "/dist/", // 경로
    filename: "build.js", // webpack진행 후 build 파일 생성
  },
  module: {
    // webpack 모듈 규칙 (loader의 속성을 정의하는 공간)
    rules: [
      {
        test: /\.css$/, // css파일 인식
        use: ["vue-style-loader", "css-loader"], // css파일 로드
      },
      {
        test: /\.vue$/, // vue파일 인식
        loader: "vue-loader", // vue파일 로드
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/, // js파일 인식
        loader: "babel-loader", // 바벨로 로드(다양한 webpage 호환성 해결)
        exclude: /node_modules/, // 라이브러리 관련해서 babel로 전환 필요가 없기 때문에 배제한다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // image 속성 인식
        loader: "file-loader", // image파일 로드
        options: {
          name: "[name].[ext]?[hash]", // image파일 상태(이름.확장자, hash)
        },
      },
    ],
  },
  resolve: {
    // webpack으로 파일과 파일간 해석을 할때 사용
    alias: {
      vue$: "vue/dist/vue.esm.js", // vue인식 파일 (별칭)
    },
    extensions: ["*", ".js", ".vue", ".json"], // 해당 확장자는 알아서 해석하도록 연결(우리는 신경쓰지 않아도 되게 해준다)
  },
  devServer: {
    // dev server생성
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    // 성능관련
    hints: false,
  },
  devtool: "#eval-source-map", // ES6 devtool source map
};
