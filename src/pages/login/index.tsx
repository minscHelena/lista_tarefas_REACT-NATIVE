import React,{ useState } from "react";
import { style } from "./style";
import Logo from '../../assets/logo.png'
//import { Button } from "../../components/Button";
import {
    Text, 
    View,
    Image, 
    Alert,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native'
//import { useNavigation,NavigationProp  } from '@react-navigation/native';
import { Input } from "../../components/input";

export default function Login (){
    //const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]               = useState('');
    const [password,setPassword]         = useState('');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading]           = useState(false);


    async function getLogin() {
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Anteção','Informe os campos obrigatórios!')
            }

            /*if(email === 'caio@gmail.com' && password === '12345'){
                return navigation.reset({routes:[{name :'BottomRoutes'}]});
            }*/

            Alert.alert('Atenção','E-mail ou senha invalida!')
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo} 
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem-vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="E-mail"
                />
                <Input
                    value={password}
                    onChangeText={setPassword} 
                    title="Senha"
                />
            </View>
            <View style={style.boxBottom} >
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    <Text style={style.textButton}>Entrar</Text>
               </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text  style={style.textBottomCreate}>Crie agora</Text></Text>
        </View>
    )
}