// load the default config generator.
const path = require('path');
const appDirectory = path.resolve(__dirname);

module.exports = (config, env) => {
	// Set up react-native alias
	// This should be done by default in webpack of bluerain-cli
	if (!config.resolve.alias) {
		config.resolve.alias = {};
	}

	if (!config.resolve.alias['react-native']) {
		config.resolve.alias['react-native'] = path.resolve(
			appDirectory,
			'node_modules/react-native-web'
		);
	}

	// Recognize font files
	config.module.rules.push({
		test: /\.ttf$/,
		loader: path.resolve(appDirectory, 'node_modules/url-loader'), // or directly file-loader
		include: path.resolve(appDirectory, 'node_modules/react-native-vector-icons')
	});

	return config;
};
