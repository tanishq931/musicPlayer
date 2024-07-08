/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src';
import TrackPlayer from 'react-native-track-player';
import service from './service';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => service);
