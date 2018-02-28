import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
// tslint:disable-next-line:no-submodule-imports
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * @property {string} pluginName "VectorFontAwesome"
 * @property {string} slug "vector-fontawesome"
 */
class VectorFontAwesome extends Plugin {
	static pluginName = 'VectorFontAwesome';
	static slug = 'vector-fontawesome';

	static components = {
	 	Icon: Icon
	};
}
export default VectorFontAwesome;
