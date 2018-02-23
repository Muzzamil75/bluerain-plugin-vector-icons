import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import { FontAwesome } from '@expo/vector-icons';
/**
 * @property {string} pluginName "VectorFontAwesome"
 * @property {string} slug "vector-fontawesome"
 */
class VectorFontAwesome extends Plugin {
	static pluginName = 'VectorFontAwesome';
	static slug = 'vector-fontawesome';

	static components = {
		Icon: FontAwesome
	};
}
export default VectorFontAwesome;
