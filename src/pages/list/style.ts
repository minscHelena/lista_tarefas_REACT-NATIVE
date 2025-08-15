import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/6,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:temas.Colors.primary,
    },
    textHeader:{
        fontSize:20,
        color:'#fff',
        marginTop:20,
    },
    boxInput:{
        width:'80%'
    },
    boxList:{
        flex:1,
        width:'100%',
    },
    card:{
        width:'100%',
        height:60,
        backgroundColor:'#fff',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:temas.Colors.lightGray
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descCard:{
        color:temas.Colors.gray
    }
})