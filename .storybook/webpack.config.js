const webpackConfigs = require('../webpack');

module.exports = (config, env) => {

	// Make changes required by the plugin
	config = webpackConfigs(config);

	// Typescript support
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('awesome-typescript-loader')
	});

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
