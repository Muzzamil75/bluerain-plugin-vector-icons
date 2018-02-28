// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path =require('path');
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

	config.module.rules.push(
		{
			test: /\.ttf$/,
			loader: "url-loader", // or directly file-loader
			include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
		});
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('awesome-typescript-loader')
	});

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
