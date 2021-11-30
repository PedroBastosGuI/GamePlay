import React,{useState} from 'react';

import { View, Text, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styled } from './styles';

import IllustrationImg from '../../assets/ilustration.png'
import { StatusBar } from 'expo-status-bar';
import { ButtonIcon } from '../../Components/ButtonIcon';

export function Signin(){

    return(
        <View style={styled.container}>
          
           <Image 
           source={IllustrationImg}
           style={styled.image}
           resizeMode="stretch"
           />

           <View
            style={styled.content}
           >
               
            <Text style={styled.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
            </Text>

            <Text style={styled.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
            </Text>

            <ButtonIcon 
                title="Entrar com Discord"
            />
               </View>

           </View>
       
        
        
    )



}