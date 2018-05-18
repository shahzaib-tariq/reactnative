import { Text } from 'react-native';
import React from 'react';
const Header=(props)=>{
    const {textStyle,viewStyle}= styles;
    return (<view style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </view>);
};
const Style ={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        //pod in vertical
        justifyContent:'center',
        // fro left-right
        alignContent:'center',
        height:60,
        padding:15,
        //for solid border shadow
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    textStyle :
            {
            fontSize:20
            }
};
export default Header