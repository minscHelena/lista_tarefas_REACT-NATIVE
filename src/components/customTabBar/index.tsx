import  React, { forwardRef, useContext }  from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { temas } from "../../global/themes";
import {AntDesign, FontAwesome, Entypo, MaterialIcons} from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext_list";

export default({state, navigation})=>{

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (ScreenName: string)=>{
        navigation.navigate(ScreenName)
    }

    return(
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("List")}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index ===0?1:0.3, color:temas.Colors.primary, fontSize:32}}
                />
            </TouchableOpacity>

             <TouchableOpacity style={style.tabItemButtom} onPress={()=>onOpen()}>
                <View style={{width:'100%', left:10, top:4}}>
                    <Entypo
                        name="plus"
                        size={40}
                        style={{color:'#FFF'}}
                    />
                </View>
                <View style={{flexDirection:'row-reverse', width:'100%', bottom:10, right:4}}>
                    <MaterialIcons
                        name="edit"
                        style={{color:'#FFF'}}
                        size={30}
                    />
                </View>
            </TouchableOpacity>

             <TouchableOpacity style={style.tabItem} onPress={()=>go("User")}>
                <FontAwesome
                    name="user"
                    style={{opacity:state.index ===0?1:0.3, color:temas.Colors.primary, fontSize:32}}
                />
            </TouchableOpacity>
        </View>
    )
}