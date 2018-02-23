// const Proxy = require("proxy-polyfill");
const Reflect = require("harmony-reflect");

// @see: https://github.com/facebook/react-native/issues/9599
if (typeof global.self === 'undefined') {
	global.self = global;
}

export default from './storybook';
// import BR from '@blueeast/bluerain-os';
// import bootConfig from './bluerain.js';
// bootConfig.renderApp = false;
// export default BR.boot(bootConfig);

