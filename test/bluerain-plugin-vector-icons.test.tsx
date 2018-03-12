import React from 'react';
import VectorIconsFontAwesome from '../src/FontAwesome';
import BR, {BlueRain, Plugin } from '@blueeast/bluerain-os';
import ReactXPPlugin from './Platform';
beforeAll(() => {
	document.body.innerHTML = '<div class="app-container"></div>';
});
describe('VectorIcons Plugin test', () => {
	it('It should register Plugin', () => {
    	BR.boot({ platform:[ReactXPPlugin],plugins:[VectorIconsFontAwesome] });

	});
});
