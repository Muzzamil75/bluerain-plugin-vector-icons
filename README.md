![Vector Icons for React Native](https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png)

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

## Bundled Icon Sets

[Browse all](https://oblador.github.io/react-native-vector-icons/).

* [`Entypo`](http://entypo.com) by Daniel Bruce (**411** icons) 
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0, **675** icons) 
* [`Ionicons`](http://ionicframework.com/docs/v2/ionicons/) by Ben Sperry (v3.0.0, **859** icons)
* [`MaterialIcons`](https://www.google.com/design/icons/) by Google, Inc. (v3.0.1, **932** icons)
* [`MaterialCommunityIcons`](https://materialdesignicons.com/) by MaterialDesignIcons.com (v2.1.19, **2120** icons)

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
