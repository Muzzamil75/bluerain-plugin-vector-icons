import { Plugin } from '@blueeast/bluerain-os';
import Icon from './component';
import './setup';

/**
 * @property {string} pluginName "VectorIconsMaterialIcons"
 * @property {string} slug "vector-icons-material-icons"
 */
class VectorIconsMaterialIcons extends Plugin {
	static pluginName = 'VectorIconsMaterialIcons';
	static slug = 'vector-icons-material-icons';

	static components = {
		Icon: Icon
	};
}
export default VectorIconsMaterialIcons;
