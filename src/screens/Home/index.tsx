import React from 'react';

import {
    View

} from 'react-native';
import { ButtonAdd } from '../../Components/ButtonAdd';
import { CategorySelect } from '../../Components/CategorySelect';
import { Profile } from '../../Components/Profile';
import { styles } from './styles';



export function Home(){

    return(
        <View>

                <View style={styles.header}>
                    <Profile/>
                    <ButtonAdd/>
                </View>

                <View>
                    <CategorySelect/>
                </View>

        </View>
    );
}