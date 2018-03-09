import { Plugin } from '@blueeast/bluerain-os';
import Icon from './component';
import './setup';

/**
 * @property {string} pluginName "VectorIconsFontAwesome"
 * @property {string} slug "vector-icons-font-awesome"
 */
class VectorFontAwesome extends Plugin {
	static pluginName = 'VectorIconsFontAwesome';
	static slug = 'vector-icons-font-awesome';

	static components = {
		Icon: Icon
	};
}
export default VectorFontAwesome;
