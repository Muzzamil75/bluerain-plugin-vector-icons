// load the default config generator.
//const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path =require('path');
const appDirectory = path.resolve(__dirname, '../');

module.exports = (config, env) => {
	
 config.module.rules.push({
	
	test: /\.(js)$/,
	 // Add every directory that needs to be compiled by Babel during the build.
	 include: [
		path.resolve(appDirectory, 'node_modules/react-native-vecto-icons/lib/create-icon-set'),
		 path.resolve(appDirectory, 'node_modules/react-native-vecto-icons'),
		path.resolve(appDirectory, 'node_modules/react-native-vecto-icons'),
	//	path.resolve(appDirectory, 'src'),
  ],
	  use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			// Babel configuration (or use .babelrc)
			// This aliases 'react-native' to 'react-native-web' and includes only
			// the modules needed by the app.
			plugins: ['react-native-web'],
			//How to add loader in module of webpack The 'react-native' preset is recommended to match React Native's packager
			presets: ['react-native']
		}
	}
  });
	
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
	console.log("Config",config.module.rules);
	
	config.resolve.alias={  'react-native': 'react-native-web'}
	config.resolve.extensions.push('.web.js', '.ts', '.tsx','.js','.ttf','.jsx');

	return config;
};
