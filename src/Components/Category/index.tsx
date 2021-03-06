import React from 'react';
import { View,Text } from 'react-native';
import {SvgProps} from 'react-native-svg';
import {styles} from './style';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';



//uma tipagem para cada cartao navigation


type Props = RectButtonProps &{
    title: string;
    //Para pegar o icon de maneira dinamica 
    icon:React.FC<SvgProps>;
    //Se vai estar selecionado ou nao 
    checked?: boolean;
}

export function Category({
    title,
    icon:Icon,
    checked = true, //pra ser como padrão false 
    ...rest
}:Props){

    const {secondary50, secondary70}  = theme.colors
    return (
        <RectButton
        {...rest}
        >
           <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
           >
            <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}> 
            <View style={checked ? styles.checked : styles.check}/>
            <Icon
                    width={48}
                    height={48}
                />
            <Text
            style={styles.title}
            >{title}</Text>

            </View>



           </LinearGradient>
        </RectButton>        
        

    );
}