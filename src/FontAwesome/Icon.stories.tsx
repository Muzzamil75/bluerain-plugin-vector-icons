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
 		<BR.Components.FontAwesomeIcon name="rocket" size={30} color="#900" />
	);
}));
