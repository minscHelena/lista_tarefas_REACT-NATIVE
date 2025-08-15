import { StyleSheet } from "react-native";
import { temas } from "../../global/themes";

export const style = StyleSheet.create({
    flag:{
        width:70,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:temas.Colors.red,
        borderRadius:4,
    }
})