import { Plugin } from '@blueeast/bluerain-os';
import Icon from './component';
import './setup';

/**
 * @property {string} pluginName "VectorIconsIonicons"
 * @property {string} slug "vector-icons-Ionicons"
 */
class VectorIconsIonicons extends Plugin {
	static pluginName = 'VectorIconsIonicons';
	static slug = 'vector-icons-Ionicons';

	static components = {
		Icon: Icon
	};
}
export default VectorIconsIonicons;
