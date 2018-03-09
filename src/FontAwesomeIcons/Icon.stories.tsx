import * as React from 'react';
import { BlueRain } from '@blueeast/bluerain-os';

// import { action } from '@storybook/addon-actions';
// import SiteGeneralSettings from './SiteGeneralSettings.Component';
// import storiesOf, { bluerainStory } from '@blueeast/bluerain-storybook-addon';
import { bluerainStory } from '../../storybook/bluerain';


// import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react';
// import SiteCard from '../SiteCard/SiteCard.component';
import storiesOf from '../../storybook/storiesOf';

storiesOf('VectorIcon ', module)

.add('full VectorIcon story', bluerainStory(({ bluerain: BR }: { bluerain: BlueRain }) => {

	return (
		<BR.Components.Icon name="rocket" size={30} color="#900" />
	);
}));
