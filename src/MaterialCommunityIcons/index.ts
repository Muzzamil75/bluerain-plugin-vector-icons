import { Plugin } from '@blueeast/bluerain-os';
import Icon from './component';
import './setup';

/**
 * @property {string} pluginName "VectorMaterialCommunityIcons"
 * @property {string} slug "vector-materialCommunity-icons"
 */
class VectorMaterialCommunityIcons extends Plugin {
	static pluginName = 'VectorMaterialCommunityIcons';
	static slug = 'vector-materialCommunity-icons';

	static components = {
		Icon: Icon
	};
}
export default VectorMaterialCommunityIcons;
