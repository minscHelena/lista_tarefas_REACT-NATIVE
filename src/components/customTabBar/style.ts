import { StyleSheet } from "react-native";
import { temas } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea:{
        height:80,
        flexDirection: 'row',
        justifyContent:'space-around',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabItemButtom:{
        width:70,
        height:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        zIndex:9999,
        top:30,
        backgroundColor:temas.Colors.primary
    }
})