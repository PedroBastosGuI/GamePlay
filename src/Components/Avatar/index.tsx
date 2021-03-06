import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';


type Props ={
    urlImage:string;
}

import {
    View,
    Image

} from 'react-native';
import { styles} from './styles';
import { theme } from '../../global/styles/theme';

export function Avatar({urlImage}: Props){
    const{secondary50,secondary70} = theme.colors

    return(
        <View>
            <LinearGradient style={styles.container}
        colors={[secondary50, secondary70]}
        >
            <Image source={{uri: urlImage }}
            style={styles.avatar}
            />
        </LinearGradient>
        </View>
    )


}