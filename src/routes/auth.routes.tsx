import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';
import { theme } from '../global/styles/theme';

const Stack = createNativeStackNavigator();


export function AppRoutes() {
    return(
        
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            contentStyle:{
                backgroundColor:theme.colors.secondary100,
            }
        }}
         
        >
             <Stack.Screen
                name="Signin"
                component={Signin}
            />
             <Stack.Screen
                name="Home"
                component={Home}
            />
           
        </Stack.Navigator>
    );
}