import React from "react";
import { style } from "./style";
import{TouchableOpacity, Text}from 'react-native';

type Props = {
    caption:string
    color:string
}
export  function Flag({...rest}:Props){
    return(
       <TouchableOpacity style={[style.flag,{backgroundColor:rest?.color}]}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>{rest.caption}</Text>
       </TouchableOpacity>
    )
}