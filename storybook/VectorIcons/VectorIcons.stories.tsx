import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { BlueRain } from '@blueeast/bluerain-os';
import storiesOf from  '../storiesOf/index';
import {bluerainStory} from   '../../storybook/bluerain';
storiesOf('VectorIcons', module)

.add('MapComponent', bluerainStory(({ bluerain: BR }: { bluerain: BlueRain }) => {
	return (
    	<BR.Components.Icon   name="md-checkmark-circle" size={32} color="green"  />
	);
}));