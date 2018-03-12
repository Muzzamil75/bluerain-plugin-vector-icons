import { Plugin } from '@blueeast/bluerain-os';
import Icon from './component';
import './setup';

/**
 * @property {string} pluginName "VectorIconsFontAwesome"
 * @property {string} slug "vector-icons-font-awesome"
 */
class VectorIconsEntypo extends Plugin {
	static pluginName = 'VectorIconsEntypo';
	static slug = 'vector-icons-Entypo';

	static components = {
		Icon: Icon
	};
}
export default VectorIconsEntypo;
