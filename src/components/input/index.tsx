import  React, { ComponentType, forwardRef }  from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { style } from "./style";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

type IconComponent =  React.ComponentType<React.ComponentProps<typeof Octicons>> |
                        React.ComponentType<React.ComponentProps<typeof MaterialIcons>> ;

type Props = TextInputProps & {
    title?: string,
    height?:number,
    labelStyle?:StyleProp<TextStyle>
    IconRigth?: IconComponent,
    iconRightName?: string,
    onIconRigthPress?: () => void , 
}
export const Input = forwardRef((propriedades:Props)=>{

    const {title, height, labelStyle, ...rest} = propriedades
    return(
        <> {/*significa 'fragment' (pode ser usado a tag <Fragment> também. O return no react-native não aceita algo que não esta englobado por uma tag, algo que esteja solto, como o <Text> está fora da <View>, por isso usa o <>*/}
        
            {/* caso o title exista, é mostardo, caso não, não mostra. {title &&} equivale à if(title) (ou seja, caso title exista.....) */}
            {title && <Text style={style.titleInput}>{title}</Text>} 
            <View style={style.boxInput}>
                <TextInput
                    style={style.input} 
                    {...rest}
                />
            </View>
        </>
    )
})