// tslint:disable-next-line:no-submodule-imports
import * as R from 'reactxp/dist/common/Interfaces';
// tslint:disable-next-line:max-line-length
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



		//  default Plugin Registered
// 		ctx.Plugins.registerMany([ReactRouterPlugin, ReduxPlugin, ResponsiveComponentsPlugin]);
		// setMainView in Bluerain
		ctx.Utils.setMainView = App => {
		// 	RX.UserInterface.setMainView(<App />);
		};
	}
}

export default ReactXPPlugin;