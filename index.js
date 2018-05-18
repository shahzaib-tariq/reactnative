import {AppRegistry,View } from 'react-native';
import React from 'react';
import Header from './src/component/header';
import AlbumList from  './src/component/AlbumList';

const App=()=>{

  <View>
    <Header headertext={'albumsnew123'} />;
<AlbumList/>
  </View>
};

AppRegistry.registerComponent('albums', () => App);
