import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
// tslint:disable-next-line:no-var-requires
const Ionicons = require('@expo/vector-icons');

/**
 * @property {string} pluginName "VectorIonicons"
 * @property {string} slug "vector-ionicons"
 */
class VectorIonicons extends Plugin {
	static pluginName = 'VectorIonicons';
	static slug = 'vector-ionicons';

	static components = {
		Icon: Ionicons
	};
}
export default VectorIonicons;
