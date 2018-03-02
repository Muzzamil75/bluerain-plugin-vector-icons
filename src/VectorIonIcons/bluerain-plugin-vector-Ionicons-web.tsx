import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
 import Icon from 'react-native-vector-icons/dist/Ionicons';

/**
 * @property {string} pluginName "VectorIonicons"
 * @property {string} slug "vector-ionicons"
 */
class VectorIonicons extends Plugin {
	static pluginName = 'VectorIonicons';
	static slug = 'vector-ionicons';

	static components = {
		Icon: Icon
	};
}
export default VectorIonicons;
