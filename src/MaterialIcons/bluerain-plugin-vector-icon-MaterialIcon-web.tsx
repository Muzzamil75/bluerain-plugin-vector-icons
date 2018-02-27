
import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

/**
 * @property {string} pluginName "VectorMaterialIcons"
 * @property {string} slug "vector-materialicons"
 */
class VectorMaterialIcons extends Plugin {
	static pluginName = 'VectorMaterialIcons';
	static slug = 'vector-materialicons';

	static components = {
		Icon: MaterialIcons
	};
}
export default VectorMaterialIcons;
