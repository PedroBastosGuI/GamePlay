import React from 'react';
import {styles} from './styles'
import { View } from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


type ButtonsAddProps = RectButtonProps;

export function ButtonAdd({...rest}:ButtonsAddProps){
    return (
        <RectButton style={styles.container}
        {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>

    );
}