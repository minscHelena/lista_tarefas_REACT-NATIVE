import React from "react";
import { style } from "./style";
import{TouchableOpacity,TouchableOpacityProps,ActivityIndicator,Text, View}from 'react-native';

type Props = {
    color:string
}
export  function Ball({...rest}:Props){
    return(
        <View style={[style.ball, {borderColor:rest.color||'gray'}]}></View>
    )
}