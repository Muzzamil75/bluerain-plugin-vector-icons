import * as React from 'react';
import { BlueRain } from '@blueeast/bluerain-os';
import storiesOf, { bluerainStory, BlueRainDecorator } from '@blueeast/bluerain-storybook-addon';
// import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react';

// Add BlueRain
const BRConfigs = require('../../bluerain');
BRConfigs.plugins.push(require('./index'));


storiesOf('Font Awesome ', module)

	.addDecorator(BlueRainDecorator(BRConfigs))
	.add('full VectorIcon story', bluerainStory(({ bluerain: BR }: { bluerain: BlueRain }) => {

		return (
			<BR.Components.Card style={{height:100,width:200,justifyContent:'space-between',alignItems:'center'}}>
				<BR.Components.Icon  name="rocket" size={30} color="#900" />
			</BR.Components.Card>
		);
	}));
