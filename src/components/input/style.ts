import { StyleSheet } from "react-native";
import { temas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
        width: 300,
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:temas.Colors.lightGray,
        backgroundColor:temas.Colors.bgScreen,
        marginTop:10,
        alignItems:'center',

    },
    input:{
        height:'100%',
        width:'100%',
        borderRadius:40,
        paddingLeft:15
    },
    titleInput:{
        marginLeft:5,
        color:temas.Colors.gray,
        marginTop:20
    },
})