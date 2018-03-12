// load the default config generator.
//const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path =require('path');
const appDirectory = path.resolve(__dirname, '../');

module.exports = (config, env) => {

	// Set up react-native alias
	// This should be done by default in webpack of bluerain-cli
	if (!config.resolve.alias) {
		config.resolve.alias = {};
	}

	config.resolve.alias['react-native'] = 'react-native-web';

	// Recognize font files
	config.module.rules.push({
		test: /\.ttf$/,
		loader: "url-loader", // or directly file-loader
		include: path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
	});


	// Typescript support
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('awesome-typescript-loader')
	});

	// config.resolve.extensions.push('.web.js', '.ts', '.tsx', '.js', '.ttf', '.jsx');
	config.resolve.extensions.push('.ts', '.tsx');


	// Following in not needed, leaving it here just for reference

	// const babelLoader = config.module.rules[0];
	// babelLoader.include.push(path.resolve(appDirectory, 'node_modules/react-native-vector-icons/lib'));
	// babelLoader.query.plugins.push('react-native-web');
	// babelLoader.query.presets.push('react-native');

	return config;
};
