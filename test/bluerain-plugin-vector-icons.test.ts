import { VectorFontAwesome, VectorIonicons, VectorMaterialIcons } from '../src/index';
import BR, { BlueRain, Plugin } from '@blueeast/bluerain-os';
import ReactXPPlugin from './Platform';

beforeAll(() => {
	document.body.innerHTML = '<div class="app-container"></div>';
});
describe('ReactRouter Plugin test', () => {
	it('It should register Plugin', () => {
		BR.boot({
			platform: [ReactXPPlugin],
			plugins: [VectorFontAwesome, VectorIonicons, VectorMaterialIcons]
		});
	});
});
