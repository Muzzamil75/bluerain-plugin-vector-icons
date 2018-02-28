import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
 import Icon from 'react-native-vector-icons/Ionicons';
// import glyphMap from './glyphmaps/Ionicons.json';

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = { 'icon-name': 1234, test: '∆' };
const iconSet = createIconSet(glyphMap, 'Ionicons', 'Ionicons.ttf');

/**
 * @property {string} pluginName "VectorIonicons"
 * @property {string} slug "vector-ionicons"
 */
class VectorIonicons extends Plugin {
	static pluginName = 'VectorIonicons';
	static slug = 'vector-ionicons';

	static components = {
		Icon: iconSet
	};
}
export default VectorIonicons;
