// setando as routas de navegação para poder navegar entre as screens

import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';



import {Home} from '../screens/Home';
import {Signin} from '../screens/Signin';

// desestruturação 

const{Navigator,Screen} = createStackNavigator();


export function AuthRoutes() {
    return(
        <Navigator>
            <Screen 
            name="Signin"
            component={Signin}
            />
            <Screen 
            name="Home"
            component={Home}
            />

            
        </Navigator>
    )
}

