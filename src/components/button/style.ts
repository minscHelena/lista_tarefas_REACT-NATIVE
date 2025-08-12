import { StyleSheet } from "react-native";
import { temas } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        width:200,
        height:40,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:temas.Colors.primary,
        borderRadius:40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },
    textButton:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
})