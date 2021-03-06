// This file contain all the apps, plugins and configuration which are required
// for booting bluerain-os. see https://blueeast.gitbooks.io/bluerain-os/
module.exports = {
	platform: [
		require('@blueeast/bluerain-platform-reactxp')
	],
	apps:[
		// All bluerain apps will also be added in this array
	],
	plugins:[
		require('@blueeast/bluerain-plugin-react-router'),
		require('@blueeast/bluerain-plugin-redux'),
		require('@blueeast/bluerain-plugin-responsive-components'),
		require('@blueeast/bluerain-plugin-material-ui'),
		
		// All bluerain plugins will be added here
	],
	config: {
		// Configurations for bluerain-os will be added here
		title: 'Bluerain OSindex',

		// wallpaper: {
		// 	backgroundColor: 'red',
		// 	source: `https://s3-us-west-2.amazonaws.com/bluerainimages/bg.jpg`,
		// 	resizeMode: 'cover',
		// },

		plugins: {
			// Plugins related configurations will be added here
			apollo: {
				httpLinkOptions: {
					uri: 'https://mqtt.mevris.io/graphql'
				}
			},
			router:{
				androidBackButton: true,
				deepLinking: true,
				forceMemoryHistory:false,
				historyConfigs: {}
			}
		},
		theme: {
			colors:{
				primary:'#3949ab'
			}
		}
	}
};
