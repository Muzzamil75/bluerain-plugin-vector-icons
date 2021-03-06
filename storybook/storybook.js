/* eslint-disable global-require */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import CenterView from './CenterView';
import { BlueRainDecorator } from '../storybook/bluerain';

// Add BlueRain
const BRConfigs = require('../bluerain');
addDecorator(BlueRainDecorator(BRConfigs));

// CenterView
const CenterViewDecorator = (storyFn) => (<CenterView>{storyFn()}</CenterView>);
addDecorator(CenterViewDecorator);

// import stories
configure(() => {
  loadStories();
}, module);


// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('BlueRainDemo', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
