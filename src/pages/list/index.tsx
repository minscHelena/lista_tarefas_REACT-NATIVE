import React from "react";
import {Text, TouchableOpacity, View  } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { temas } from "../../global/themes";


export default function List(){

    const __renderCard = (item: PropCard) =>{
        return(
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color="red"/>
                    <View>
                        <Text style={style.titleCard}>{item.title}</Text>
                        <Text style={style.descCard}>{item.description}</Text>
                    </View>
                    <Flag caption="Urgente" color={temas.Colors.red}/>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
    }
    return(
       <View style={style.container}>
            <View style={style.header}>
                <Text style={style.textHeader}>Olá</Text>
                <View style={style.boxInput}>
                    <Input 
                        IconRigth={MaterialIcons}
                        iconRightName="search"
                    />
                </View>
            </View>

            <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{marginTop:40, paddingHorizontal:30}}
                    keyExtractor={(item, index)=>item.item}
                    renderItem={({item, index})=>{return(__renderCard(item))}}
                />

            </View>
       </View>
    )
}