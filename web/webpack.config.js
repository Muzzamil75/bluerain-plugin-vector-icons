module.exports = function (config, mode) {
  config.module.loaders.push(
		{
			test: /\.ttf$/,
			loader: "url-loader", // or directly file-loader
			include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
		});
  return config;
}
