![Vector Icons for React Native](https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png)

[![Travis](https://img.shields.io/travis/oblador/react-native-vector-icons.svg)](https://travis-ci.org/oblador/react-native-vector-icons) [![npm](https://img.shields.io/npm/v/react-native-vector-icons.svg)](https://npmjs.com/package/react-native-vector-icons) [![npm](https://img.shields.io/npm/dm/react-native-vector-icons.svg)](https://npmjs.com/package/react-native-vector-icons) [![Issue Stats](https://img.shields.io/issuestats/i/github/oblador/react-native-vector-icons.svg)](http://github.com/oblador/react-native-vector-icons/issues)

# bluerain-plugin-vector-icons
Customizable Icons for BlueRain Apps with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.

## Installation:

```
npm i --save @blueeast/bluerain-plugin-vector-icons
```

Then in your boot function, pass the plugin like this:


```
import BR from '@blueeast/bluerain-os';
const Icon =require('@blueeast/bluerain-plugin-vector-icons').FontAwesome;

BR.boot({
	plugin: [Icon]
})
```

## Webpack

	
	// It is used to alias react-native with react-native-web
		config.resolve.alias['react-native'] = 'react-native-web';
		
		// Recognize font files
		config.module.rules.push({
			test: /\.ttf$/,
			loader: "url-loader", // or directly file-loader
			include: path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
		});
	


## Usage Of Icon

```
 <BR.Components.Icon name="airplane" size={30} color="blue" />
```
