import { Text,AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/component/header';
const App=()=>{

    return<Header headertext={'albumsnew12'} />;
};

AppRegistry.registerComponent('albums', () => App);
