import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'

    },

    input:{
        width: 200,
        height: 50,
        borderBottomWidth:2

    },
    content:{
        marginTop:-20,
        paddingHorizontal:50,
    },
    image:{
        width:'100%',
        height:360, 
    },
    title:{
        color: theme.colors.heading,
        textAlign:"center",
        fontSize: 40,
        marginBottom:16,
        fontFamily: theme.fonts.title700,
        lineHeight:40


    },
    subtitle:{
        color: theme.colors.heading,
        fontSize:15,
        textAlign:"center",
        marginBottom:64,
        fontFamily: theme.fonts.title500,
        lineHeight:25
    },
})