import React from 'react';

import {
    View,
    Text

} from 'react-native';
import { Avatar } from '../Avatar';
import { styles} from './styles';

export function Profile(){

    return(



        <View style={styles.container}>

            <Avatar urlImage='https://avatars.githubusercontent.com/u/91087463?v=4'/>
            <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    Pedro
                </Text>
            </View>

            <Text style={styles.massage}>
                Hoje é dia de vitória
            </Text>
            </View>
        </View>
    )


}