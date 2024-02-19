# Webpack study

# webpack
## 참고 영상 : https://www.youtube.com/watch?v=WQue1AN93YU

## 시작

1. 단지 자바스크립트를 위한 것이 아니다
2. 웹페이지를 구성하는 모든 것들이 대상이 된다.
3. gulp (https://gulpjs.com/)- 웹 자동화 도구
4. 모듈 번들러
5. 병합되는 하나의 결과물
6. 모듈 : 특정 기능을 갖는 작은 코드단위
7. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
8. 초기 로딩속도를 높이기 위해 레이지 로딩 (lazy loading)

---

9. 웹팩으로 해결하려는 문제

## 기존 문제점

* 자바스크립트 변수 유효범위 : 웹팩의 모듈 번들링으로 해결.
* 브라우저별 HTTP요청 숫자의 제약 : HTTP의 요청 숫자를 끊어서 진행한다.
* 사용하지 않는 코드의 관리
* Dynamic Loading & Lazy Loading 미지원 : Code Splitting기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩한다.

10. babel : 최신 JS를 최대한 많은 브라우저들이 호환할 수 있도록 해주는 컴파일러
11. ES6 import와 export 기본 문법
12. 주요속성

- entry : 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점(변환 자바스크립트 파일 경로) & (변환 = build = complie = bundling)
- output : 웹팩을 돌리고 난 결과물의 파일 경로
- loader : 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML,CSS,IMAGES)들을 변환할 수 있도록 도와주는 속성 (module)
- plugin : 결과물에 있는(형태) 값을 바꾸는 것 (기본적인 동작에 추가적인 기능을 제공)

1.  HtmlWebpackPlugin : 웹팩으로 빌드한 결과물로 HTML파일을 생성해주는 플러그인
2.  ProgressPlugin : 웹팩의 빌드 진행율을 표시해주는 플러그인

### Entry > Loader, 변환 번들링 빌드 > Output & plugin

---

## 내용정리

- Entry 속성은 웹팩을 실행할 대상 파일. 진입점
- Output 속성은 웹팩의 결과물에 대한 정보를 입력하는 속성. 일반적으로 filename과 path를 정의
- Loader 속성은 CSS, 이미지와 같은 비 자바스크립트 파일을 웹팩이 인식할 수 있게 추가하는 속성. 로더는 오른쪽에서 왼쪽 순으로 적용
- Plugin 속성은 웹팩으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성. 웹팩 변환 과정 전반에 대한 제어권을 갖고 있음

---

## 웹팩 데브 서버가 필요한 이유

1. 웹 애플리케이션을 개발하는 과정에서 유용하게 쓰이는 도구
2. 메모리 상으로만 build의 결과물을 올려놓고 보여준다.
3. 변경된 사항이 있으면 즉각 complie을 하여 수정된 데이터를 보여줄 수 있다. 만약 devserver를 사용하지 않을 경우 수정된 값이 있다면 build를 다시 해야한다.

### 웹팩 환경설정 파일(webpack.config.js)

---

"react": "^18.2.0" 에서 ^은 무슨 의미일까?

## 유의적 버전

* 주 버전 : 기존 버전과 호환되지 않게 변경한 경우 (18)
* 부 버전 : 기존 버전과 호환되면서 기능이 추가된 경우 (2)
* 수 버전 : 기존 버전과 호환되면서 버그를 수정한 경우 (0)
* ^ : 버전의 범위(18.2.0 ~ 18 최신버전까지 호환된다.)

## IIFE 방식의 모듈 (Immediately Invoked Function Expression)

* 즉시 실행함수 표현
* (function(){
  statements
  })()

## 다양한 모듈 스펙 (자바스크립트 모듈을 구현하는 대표적인 스펙들)

* AMD : Asynchronous Module Definition 비동기 로딩환경
* CommonJS : 자바스크립트를 사용하는 모든 환경에서 모듈을 하는 것이 목표 EX. require()
* ES2015부터는 표준 모듈 시스템을 사용한다 (babel, eslint) ex. import, export

## webpack options

1. mode : development, production, none (환경에 맞는 옵션을 선택해야 한다.)
2. entry : 모듈의 시작점 -> entry를 통해서 모든 모듈들이 합쳐진다.
3. output : 합친 모듈을 저장하는 경로를 설정한다.
4. loader : 각 파일을 처리할 옵션 (자주사용하는 loader : css-loader(css모듈을 사용할 수 있다.),  )
- style-loader : js에 있는 css를 html이 인식할 수 있게 해준다.
- file-loader : image와 같은 파일을 읽어내는 로더이다.
- publicPath : loader가 처리하는 파일을 모듈로서 처리를 진행할 때 경로 제일 앞에 들어가는 경로이다.
- url-loader : file을 url를 기본으로 처리하는 loader이며 ex) <img src="url경로" />

------------------------------------------------------------------------------------------------------------------------------------------------------
## webpack plugin
1. output으로 만들어질 것을 plugin이 진행된다.
2. BannerPlugin : build한 결과물에 빌드 시간 또는 커밋 정보를 전달
### ex) 사용
```
const webpack =  require("webpack");
const childProcess = require("child_process"); // 노드 모듈에서 터미널 내용을 작성할 수 있도록 해주는 것.
plugin:[
    new webpack.BannerPlugin({
      banner:`
        Build Date: ${new Date().toLocalString()}
        Commit version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `
    })
]
```

3. DefinePlugin : 환경변수들을 웹에 제공하기 위한 플러그인
4. HtmlTemplatePlugin : html파일을 처리하기 위한 플러그인
- index.html을 source code로서 관리하고 싶을 때 사용한다.
- 사용 : npm i html-webpack-plugin
- 유동적으로 진행할 수 있다.
- 사용 예시
```
 new HtmlWebpackPlugin({
  template:"./src/index.html",
  templateParameters:{
    env: process.env.NODE_ENV === "development" ? "(개발용)":""
  },
  minify:process.env.NODE_ENV === "production" ? {
    collapseWhitespace:true,
    removeComments:true,
  } : false
 })

```
 5. CleanWebpackPlugin : 사용하지 않는 build를 제거하여 깔끔한 build를 가져가게 한다.
 - 사용예시
```
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 new CleanWebpackPlugin()
```

 6. MiniCSSExtractPlugin : bundle결과에서 스타일만 따로 구성하는 플러그인 (페이지 로딩에 좋은 장점을 가진다.)
 - 사용예시
```
  const MiniCssExtract = require("mini-css-extract-plugin");
  ...( process.env.NODE_ENV = "production" ? [new MiniCssExtract({filename: "[name].css"})] : [] )
```
