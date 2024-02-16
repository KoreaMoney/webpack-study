let path = require('path'); // node(https://nodejs.org/api/path.html)

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // node path.resolve (https://nodejs.org/api/path.html#pathresolvepaths)
        // dirname : 현재 폴더 기준으로 진행
    },
};
