import * as React from 'react';
import { BlueRain } from '@blueeast/bluerain-os';
import storiesOf, { bluerainStory, BlueRainDecorator } from '@blueeast/bluerain-storybook-addon';
// import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react';

// Add BlueRain
const BRConfigs = require('../../bluerain');
BRConfigs.plugins.push(require('./index'));


storiesOf('MaterialCommunityicons', module)

.addDecorator(BlueRainDecorator(BRConfigs))
.add('full vector-materialCommunity-icons story', bluerainStory(({ bluerain: BR }: { bluerain: BlueRain }) => {

	return (
		<BR.Components.Card style={{height:100,width:200,justifyContent:'space-between',alignItems:'center'}}>
		<BR.Components.Icon name="airplane" size={30} color="blue" />
	</BR.Components.Card>
	);
}));
