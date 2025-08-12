import  React, { forwardRef }  from "react";
import { ActivityIndicator, StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { style } from "./style";

type Props = TouchableHighlightProps & {
    text?:string,
    loading?:boolean,

}
export const Button = (({...rest}:Props)=>{

    //const {} = propriedades
    return(
        <TouchableOpacity style={style.button} {...rest} activeOpacity={0.6}>
            {rest.loading?<ActivityIndicator/>:<Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
})