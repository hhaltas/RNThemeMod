/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Route from './src/navigation/Router';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => Route);
