import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        paddingHorizontal:37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
        
    },
    logo:{
        width:80,
        height:80,
        marginTop:40
    },
    text:{
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
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
    textBottom:{
        justifyContent:'center',
        fontSize:16,
        color:temas.Colors.gray,
        paddingBottom:25,
    },
    textBottomCreate:{
        justifyContent:'center',
        fontSize:16,
        color:temas.Colors.primary,
        paddingBottom:25,
    }
})