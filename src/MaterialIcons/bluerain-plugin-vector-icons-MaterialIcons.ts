import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import { MaterialIcons } from '@expo/vector-icons';
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
