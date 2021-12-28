import React from 'react';
import {Home} from '../Home'
import { View, Text, Image} from 'react-native';
import { styled } from './styles';

import IllustrationImg from '../../assets/ilustration.png'
import { ButtonIcon } from '../../Components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TouchableOpacityProps} from 'react-native';


interface PropsButtons extends TouchableOpacityProps{}
   
export function Signin({
    ...rest
} : TouchableOpacityProps){
// para realizar as navegações 
   
const navigation = useNavigation();
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
                title="Entre com Discord"
                onPress={ () => navigation.navigate('Home')}
                />
               </View>

           </View>
       
        // resolver b.o de versão com navegation
        
    )



}