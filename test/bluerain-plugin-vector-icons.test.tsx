import React from 'react';
import { VectorFontAwesome, VectorIonicons, VectorMaterialIcons } from '../src/index';
import BR, {BlueRain, Plugin } from '@blueeast/bluerain-os';
import ReactXPPlugin from './Platform';
beforeAll(() => {
	document.body.innerHTML = '<div class="app-container"></div>';
});
describe('VectorIcons Plugin test', () => {
	it('It should register Plugin', () => {
    	BR.boot({ platform:[ReactXPPlugin],plugins:[VectorFontAwesome,VectorIonicons,VectorMaterialIcons] });

	});
});
