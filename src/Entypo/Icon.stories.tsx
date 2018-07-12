import * as React from 'react';
import { BlueRain } from '@blueeast/bluerain-os';
import storiesOf, { bluerainStory, BlueRainDecorator } from '@blueeast/bluerain-storybook-addon';
// import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react';

// Add BlueRain
const BRConfigs = require('../../bluerain');
BRConfigs.plugins.push(require('./index'));


storiesOf('Entypo ', module)

.addDecorator(BlueRainDecorator(BRConfigs))
.add('full EntypoIcon story', bluerainStory(({ bluerain: BR }: { bluerain: BlueRain }) => {

	return (
		<BR.Components.Card style={{ alignItems:'center',display:'flex',justifyContent:'center',height:100,width:200}}>
		<BR.Components.Icon name="facebook" size={30} color="blue" />
	</BR.Components.Card>
	);
}));
