const devConfig = require('./config.dev');
const testConfig = require("./config.test");
const prodConfig = require("./config.prod");

const env = process.env.NODE_ENV;
let config = {};
switch (env) {
    case 'development': {
        config = devConfig;
        break;
    }
    case 'test': {
        config = testConfig;
        break;
    }
    case 'production': {
        config = prodConfig;
        break;
    }
    default: {
        break;
    }
}

module.exports = [{
    "single-spa": "/js/single-spa.min.js",
    "vue": "/js/vue.min.js",
    "vue-router": "/js/vue-router.min.js",
    "element-ui": '/js/element-ui.js'
}, config]
