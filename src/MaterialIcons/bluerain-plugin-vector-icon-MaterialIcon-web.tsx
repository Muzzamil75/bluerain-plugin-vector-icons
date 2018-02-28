
import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
//  import  Icon from  '../../node_modules/react-native-vector-icons/dist/MaterialIcons';
// tslint:disable-next-line:no-submodule-imports
import Icon from 'react-native-vector-icons/MaterialIcons';
// import iconSet from '../../node_modules/react-native-vector-icons/FontAwesome';

/**
 * @property {string} pluginName "VectorMaterialIcons"
 * @property {string} slug "vector-materialicons"
 */
class VectorMaterialIcons extends Plugin {
	static pluginName = 'VectorMaterialIcons';
	static slug = 'vector-materialicons';

	static components = {
 		Icon: Icon
	};
}
export default VectorMaterialIcons;
