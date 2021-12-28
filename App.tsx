import React from 'react';

import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import Apploading from 'expo-app-loading'
import { StatusBar } from 'react-native';
import { Background } from './src/Components/Background';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/auth.routes';

  

export default function App() {

  const[fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if(!fontsLoaded){
    return <Apploading />
  }

  return(
    <Background>
      <NavigationContainer>
      <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
          />
          <AppRoutes/>

    </NavigationContainer>
    </Background>
  ) 
  

  //rotas setadas atrevas do reactNavigation 
  
}



