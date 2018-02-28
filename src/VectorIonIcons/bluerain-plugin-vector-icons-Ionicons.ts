import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import Ionicons from '@expo/vector-icons';
// tslint:disable-next-line:no-submodule-imports
import Icon from 'react-native-vector-icons/Ionicons';

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
