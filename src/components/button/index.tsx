import  React, { forwardRef }  from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacityProps, View } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    
}
// export const Button = forwardRef((propriedades:Props)=>{

//     const {} = propriedades
//     return(
//         <> {/*significa 'fragment' (pode ser usado a tag <Fragment> também. O return no react-native não aceita algo que não esta englobado por uma tag, algo que esteja solto, como o <Text> está fora da <View>, por isso usa o <>*/}
        
//             {/* caso o title exista, é mostardo, caso não, não mostra. {title &&} equivale à if(title) (ou seja, caso title exista.....) */}
//             {title && <Text style={style.titleInput}>{title}</Text>} 
//             <View style={style.boxInput}>
//                 <TextInput
//                     style={style.input} 
//                     {...rest}
//                 />
//             </View>
//         </>
//     )
// })