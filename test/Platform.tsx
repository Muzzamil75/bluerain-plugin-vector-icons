// tslint:disable-next-line:no-submodule-imports
import * as R from 'reactxp/dist/common/Interfaces';
// tslint:disable-next-line:max-line-length
import { AppState, Accessibility ,AsyncStorage, Clipboard,Dimensions,GeoLocation,Linking,NetInfo,UserPresence } from './apis';
import BR, { BlueRainType,Plugin } from '@blueeast/bluerain-os';
import React from 'react';

/**
 * Main Reactxp Plugin class.
 * @property {string} pluginName 'ReactXPPlugin'
 * @property {string} slug 'reactxp'
 */

class ReactXPPlugin extends Plugin {
	static pluginName = 'ReactXPPlugin';
	static slug = 'reactxp';


	static initialize(config: {}, ctx:BlueRainType ) {
		// Registering API's
		ctx.API.Accessibility = new Accessibility();
		ctx.API.AsyncStorage =  new AsyncStorage();
		ctx.API.Clipboard= new Clipboard();
		ctx.API.Dimensions = new Dimensions();
		ctx.API.GeoLocation = new GeoLocation();
		ctx.API.Linking = new Linking();
		ctx.API.NetInfo = new NetInfo();
		ctx.API.UserPresence = new UserPresence();
		// ctx.API.Platform = new Platform();
		ctx.API.AppState = new AppState();


		//  default Plugin Registered
// 		ctx.Plugins.registerMany([ReactRouterPlugin, ReduxPlugin, ResponsiveComponentsPlugin]);
		// setMainView in Bluerain
		ctx.Utils.setMainView = App => {
		// 	RX.UserInterface.setMainView(<App />);
		};
	}
}

export default ReactXPPlugin;