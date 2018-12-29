/** @format */

import {AppRegistry} from 'react-native';
//默认创建的类
import App from './App';
//json
import {name as appName} from './app.json';
//FlatList类
import DWBFlatList from './DWBHomeFlatList'

import DWBTestVC from './DWBTestVC'

import DWBTButton from './DWBTButton'

import LearningNavigation from './LearningNavigation'

// import DWBSwipeout from './DWBSwipeout'

import DWBNavVC from './DWBNavVC'
import DWBTouchableOpacity from './DWBTouchableOpacity'

import DWBSectionList from './DWBSectionList'

import DWBActionButton from './DWBActionButton'



//修改这里可以切换不同的类显示： => App
AppRegistry.registerComponent(appName, () => DWBSectionList);

// react-native关闭所有黄色警告，将这两句话加在index.js文件中，放在AppRegistry.registerComponent('App', () => App)之前。
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告

