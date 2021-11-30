import React, {ReactNode} from 'react';
import {styles} from './style';

// metodo de fazer gradiente de cor

import {LinearGradient} from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type Props = {
    children:ReactNode;
}


const{secondary80,secondary100} = theme.colors

export function Background({children} : Props) {
    return(
        <LinearGradient style={styles.container}
        colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>


    );
}