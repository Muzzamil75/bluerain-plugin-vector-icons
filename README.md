# bluerain-plugin-vector-icons



## Usage



Run the following command in the plugin directoy:

### Installation:

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



## Webpack :

	
	// It is used to alias react-native with react-native-web
		config.resolve.alias['react-native'] = 'react-native-web';
		
		// Recognize font files
		config.module.rules.push({
			test: /\.ttf$/,
			loader: "url-loader", // or directly file-loader
			include: path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
		});
	


## Useage

```
 <BR.Components.Icon name="airplane" size={30} color="blue" />
```