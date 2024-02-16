// ES6 문법
import _ from 'lodash';
// ES5 문법
// let path = require('lodash');

function component() {
    const element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); // https://lodash.com/docs/4.17.15#join

    return element;
}

document.body.appendChild(component());
