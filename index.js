import {AppRegistry,View ,Text,Dimensions} from 'react-native';
import React from 'react';
import Header from './src/component/Header';
import AlbumList from  './src/component/AlbumList';
import AlbumDetail from "./src/component/AlbumDetail";

const App=()=>{
    return(
        <View >

            <Header headtextvariable={"nice data  "}/>
            <AlbumList/>


        </View>
    )

};

AppRegistry.registerComponent('albums', () => App);
