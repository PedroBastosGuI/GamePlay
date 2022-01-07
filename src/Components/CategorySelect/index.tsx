import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import {styles} from './style';

interface Props{
    categorySelected:string;
}


export function CategorySelect({categorySelected}:Props){
    return (
        <ScrollView 
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        //para manter os espaçamentos na horizontal
        contentContainerStyle={{padding:20}}
        >
            {
                categories.map((category => (
                    <Category
                        key={category.id}
                        title={category.name}
                        icon={category.icon}
                        checked = {category.id === categorySelected}
                    />
                )))
            }
        </ScrollView>        
        

    );
}